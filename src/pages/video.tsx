import { toast } from "sonner";
import { Loader } from "lucide-react";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import ReactPlayer from "react-player/youtube";
import { Button } from "@/components/ui/button";
import VideoCard from "@/components/video-card";
import { ContentType } from "@/types/content.types";
import { useNavigate, Link, useSearchParams } from "react-router-dom";

const Video = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [data, loading] = useFetch(`/related?id=${id}`);
  const [contentData, setContentData] = useState<ContentType>();
  const [loadingDetails, setLoadingDetails] = useState<boolean>(false);

  useEffect(() => {
    setLoadingDetails(true);

    const fetchVideoDetails = async () => {
      try {
        const res = await axios.get(
          `https://yt-api.p.rapidapi.com/video/info?id=${id}`,
          {
            headers: {
              "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
              "x-rapidapi-host": import.meta.env.VITE_RAPID_API_HOST,
            },
          }
        );

        if (res.data.code != 403) {
          setContentData(res.data);
        }
      } catch (error) {
        console.error("Error while retrieveing video details: ", error);

        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
        } else {
          toast.error("Cannot retrieve video at this moment");
        }
      } finally {
        setLoadingDetails(false);
      }
    };

    fetchVideoDetails();
  }, [searchParams]);

  if (loading || loadingDetails) {
    return (
      <div className="flex min-h-[75svh] items-center justify-center">
        <Loader className="animate-spin" />
      </div>
    );
  }

  if (!contentData) {
    return (
      <div className="flex min-h-[75svh] flex-col items-center justify-center gap-7">
        <p className="text-3xl font-semibold text-red-500">
          Content not found!
        </p>

        <Button variant="outline" onClick={() => navigate("/")}>
          Go back home
        </Button>
      </div>
    );
  }

  return (
    <main className="grid grid-cols-1 gap-12 p-8 sm:px-14 lg:grid-cols-3 lg:px-20">
      <section className="lg:col-span-2">
        <article className="flex h-96 w-[100%] flex-col gap-4 sm:h-full lg:fixed lg:w-[55%]">
          <ReactPlayer
            url={`https://youtube.com/watch?v=${id}`}
            width={"100%"}
            controls
          />

          <div className="flex flex-col gap-2">
            <p className="text-base font-semibold sm:text-xl">
              {contentData.title}
            </p>

            <Link
              className="z-50 cursor-pointer font-semibold text-red-500 hover:underline dark:text-red-600"
              to={`https://youtube.com/channel/${contentData.channelId}`}
              target="_blank"
              aria-label="Visit channel"
            >
              {contentData.channelTitle}
            </Link>

            <p className="text-sm font-medium text-black/80 dark:text-white/80">
              {parseInt(contentData.viewCount).toLocaleString()} views
            </p>
          </div>
        </article>
      </section>

      <section className="lg:col-span-1">
        <h1 className="mb-7 text-3xl font-semibold">Related videos</h1>

        <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-1">
          {data.map((videoMetadata) => {
            if (
              videoMetadata.type === "video" &&
              videoMetadata.channelThumbnail &&
              videoMetadata.viewCount
            ) {
              return (
                <VideoCard
                  key={videoMetadata.videoId}
                  videoMetadata={videoMetadata}
                />
              );
            }

            return null;
          })}
        </div>
      </section>
    </main>
  );
};

export default Video;
