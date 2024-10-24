import { TrendingUp } from "lucide-react";
import { useFetch } from "@/hooks/useFetch";
import DisplayContent from "@/components/display-content";

const Trending = () => {
  const [data] = useFetch("/trending?geo=US");

  return (
    <main className="p-8 sm:px-14 lg:px-20">
      <div className="flex items-center gap-4 pb-8">
        <TrendingUp className="h-8 w-8 text-red-500" />
        <h1 className="text-3xl font-medium">Trending</h1>
      </div>

      <DisplayContent data={data} />
    </main>
  );
};

export default Trending;
