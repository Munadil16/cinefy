import VideoCard from "@/components/video-card";
import { VideoMetadataType } from "@/types/video-metadata.types";

const DisplayContent = ({ data }: { data: VideoMetadataType[] }) => {
  return (
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
  );
};

export default DisplayContent;
