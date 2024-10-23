import { toast } from "sonner";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { VideoMetadataType } from "@/types/video-metadata.types";

const BASE_URL = "https://yt-api.p.rapidapi.com";

export const useFetch = (route: string) => {
  const [data, setData] = useState<Array<VideoMetadataType>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${BASE_URL}${route}`, {
          headers: {
            "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
            "x-rapidapi-host": import.meta.env.VITE_RAPID_API_HOST,
          },
        });

        setData(res.data.data);
      } catch (error) {
        console.log("Error while fetching data: ", error);

        if (error instanceof AxiosError) {
          toast.error(error.response?.data.message);
        } else {
          toast.error("Something went wrong");
        }
      }
    };

    fetchData();
  }, [route]);

  return [data] as const;
};
