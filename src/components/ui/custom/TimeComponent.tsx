import useSwr from "swr";

const TimeComponent = () => {
  //Fetcher for SWR to use 
  //Todo change it to Axios would be better
  const fetcher = (url: string) => {
    return fetch(url).then((response) => response.json());
  };

  const { data, error, isLoading } = useSwr(
    "https://timeapi.io/api/time/current/zone?timeZone=Japan",
    fetcher
  );

  if (error) return <>{error}</>;
  if (isLoading) return <>Is loading ...</>;
  return <>{data.time}</>;
};

export default TimeComponent;
