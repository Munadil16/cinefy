import { useFetch } from "@/hooks/useFetch";
import DisplayContent from "@/components/display-content";

const Home = () => {
  const [data, loading] = useFetch("/home");

  return (
    <main className="p-8 sm:px-14 lg:px-20">
      <DisplayContent data={data} isLoading={loading} />
    </main>
  );
};

export default Home;
