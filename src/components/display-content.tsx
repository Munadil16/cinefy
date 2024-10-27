import { motion } from "framer-motion";
import VideoCard from "@/components/video-card";
import VideoCardLoader from "./video-card-loader";
import { VideoMetadataType } from "@/types/video-metadata.types";

interface DisplayContentProps {
  data: VideoMetadataType[];
  isLoading: boolean;
}

const DisplayContent = ({ data, isLoading }: DisplayContentProps) => {
  return (
    <section>
      <motion.div
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          type: "spring",
          delay: 1,
          damping: 10,
          stiffness: 120,
        }}
      >
        {isLoading &&
          Array.from({ length: 6 }, (_, index) => {
            return <VideoCardLoader key={index} />;
          })}

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
      </motion.div>
    </section>
  );
};

export default DisplayContent;
