import { Loader } from "lucide-react";

const SimpleLoader = () => {
  return (
    <div className="flex min-h-[75svh] items-center justify-center">
      <Loader className="animate-spin" />
    </div>
  );
};

export default SimpleLoader;
