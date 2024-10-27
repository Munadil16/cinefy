import { useFetch } from "@/hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import DisplayContent from "@/components/display-content";

const Search = () => {
  const [searchParams] = useSearchParams();
  const [data, loading] = useFetch(
    `/search?query=${searchParams.get("query") as string}`
  );

  return (
    <main className="p-8 sm:px-14 lg:px-20">
      <div className="flex items-center gap-4 pb-8">
        <h1 className="text-2xl">
          Videos related to
          <span className="text-3xl font-semibold text-red-500">
            {` ${searchParams.get("query")}`}
          </span>
        </h1>
      </div>

      <DisplayContent data={data} isLoading={loading} />
    </main>
  );
};

export default Search;
