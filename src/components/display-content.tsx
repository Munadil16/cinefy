import { motion } from "framer-motion";
import VideoCard from "@/components/video-card";
import { VideoMetadataType } from "@/types/video-metadata.types";

const DisplayContent = ({ data }: { data: VideoMetadataType[] }) => {
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
