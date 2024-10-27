import { Skeleton } from "./ui/skeleton";

const VideoCardLoader = () => {
  return (
    <article className="flex flex-col gap-4">
      <Skeleton className="h-52 w-full rounded-xl object-cover" />

      <div className="flex items-center gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-9 w-full" />
      </div>
    </article>
  );
};

export default VideoCardLoader;
