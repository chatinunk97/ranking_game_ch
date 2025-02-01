import useSwr from "swr";
import axios from "axios";

const TimeComponent = () => {
  const fetcher = async (url: string) => {
    return await axios.get(url);
  };

  const { data, error, isLoading } = useSwr(
    "https://timeapi.io/api/time/current/zone?timeZone=Japan",
    fetcher
  );

  if (error) return <>{error}</>;
  if (isLoading) return <>Is loading ...</>;
  return <>{data?.data.time}</>;
};

export default TimeComponent;
