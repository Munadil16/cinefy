import { TrendingUp } from "lucide-react";
import { useFetch } from "@/hooks/useFetch";
import VideoCard from "@/components/video-card";

const Trending = () => {
  const [data] = useFetch("/trending?geo=US");

  return (
    <main className="p-8 sm:px-14 lg:px-20">
      <div className="flex items-center gap-4 pb-8">
        <TrendingUp className="h-8 w-8 text-red-500" />
        <h1 className="text-3xl font-medium">Trending</h1>
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

export default Trending;
