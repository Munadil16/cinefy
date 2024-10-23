import VideoCard from "./video-card";
import { useFetch } from "@/hooks/useFetch";

const Home = () => {
  const [data] = useFetch("/home");

  return (
    <main>
      <section className="p-8 sm:px-14 lg:px-20">
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

export default Home;
