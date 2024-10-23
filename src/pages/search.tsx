import { useFetch } from "@/hooks/useFetch";
import VideoCard from "@/components/video-card";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [data] = useFetch(
    `/search?query=${searchParams.get("query") as string}`
  );

  return (
    <main className="p-8 sm:px-14 lg:px-20">
      <div className="flex items-center gap-4 pb-8">
        <h1 className="text-2xl">
          Videos related to
          <span className="text-3xl font-semibold text-red-500">
            {` ${searchParams.get("query")}`}
          </span>
        </h1>
      </div>

      <section>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

export default Search;
