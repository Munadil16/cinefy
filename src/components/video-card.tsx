import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { VideoMetadataType } from "@/types/video-metadata.types";

const VideoCard = ({ videoMetadata }: { videoMetadata: VideoMetadataType }) => {
  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/video?id=${videoMetadata.videoId}`);
  };

  const handleChannelClick = () => {
    navigate(`/channel?id=${videoMetadata.channelId}`);
  };

  return (
    <article className="flex flex-col gap-2">
      <motion.div
        className="relative cursor-pointer"
        role="button"
        aria-label="Play video"
        whileHover={{
          scale: 1.025,
        }}
        transition={{
          duration: 0.2,
        }}
        onClick={handleVideoClick}
      >
        <img
          className="h-60 w-full rounded-xl sm:h-56"
          src={videoMetadata.thumbnail?.[0].url}
          alt="Thumbnail"
        />
        {videoMetadata.lengthText !== "LIVE" && (
          <p className="absolute bottom-2 right-2 select-none rounded-md bg-black p-1 text-xs font-medium text-white">
            {videoMetadata.lengthText}
          </p>
        )}
      </motion.div>

      <p className="font-semibold">{videoMetadata.title}</p>

      <div className="flex items-center gap-2">
        <img
          className="h-7 w-7 rounded-full"
          src={videoMetadata.channelThumbnail?.[0]?.url}
          alt="Channel logo"
        />

        <p
          className="cursor-pointer text-sm font-semibold text-red-600 hover:underline dark:text-red-500"
          role="button"
          aria-label="Visit channel"
          onClick={handleChannelClick}
        >
          {videoMetadata.channelHandle ?? videoMetadata.channelTitle}
        </p>
      </div>

      <div className="flex items-center gap-2 text-xs font-medium text-black/90 dark:text-white/80">
        {videoMetadata.lengthText === "LIVE" ? (
          <>
            <p className="relative h-2 w-2 rounded-full bg-red-500 font-medium text-white"></p>
            <p className="absolute h-2 w-2 animate-ping rounded-full bg-red-500 font-medium text-white"></p>
            <p className="font-semibold text-red-500">
              {parseInt(videoMetadata.viewCount).toLocaleString()} watching
            </p>
          </>
        ) : (
          <>
            <p>{parseInt(videoMetadata.viewCount).toLocaleString()} views</p>
            <p className="h-1 w-1 rounded-full bg-black/90 dark:bg-white/80"></p>
            <p>{videoMetadata.publishedTimeText}</p>
          </>
        )}
      </div>
    </article>
  );
};

export default VideoCard;
