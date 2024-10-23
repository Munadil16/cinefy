import { VideoMetadataType } from "@/types/video-metadata.types";

const VideoCard = ({ videoMetadata }: { videoMetadata: VideoMetadataType }) => {
  return (
    <article className="flex flex-col gap-2">
      <div className="relative">
        <img
          className="h-60 w-full cursor-pointer rounded-xl sm:h-56"
          src={videoMetadata.thumbnail?.[0].url}
          alt="Thumbnail"
        />
        {videoMetadata.lengthText !== "LIVE" && (
          <p className="absolute bottom-2 right-2 rounded-md bg-black p-1 text-xs font-medium text-white">
            {videoMetadata.lengthText}
          </p>
        )}
      </div>

      <p className="font-semibold">{videoMetadata.title}</p>

      <div className="flex items-center gap-2">
        <img
          className="h-7 w-7 rounded-full"
          src={videoMetadata.channelThumbnail?.[0]?.url}
          alt="Channel logo"
        />

        <p className="cursor-pointer text-sm font-semibold text-red-600 hover:underline dark:text-red-500">
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
