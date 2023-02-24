import { useGetProfileQuery } from "features/profile/profileApi";

export default function UserName() {
  const { data, isFetching, isLoading } = useGetProfileQuery();

  if (isLoading || isFetching) {
    return <div className="w-24 h-4 bg-gray-300 rounded animate-pulse" />;
  }
  const { name } = data?.data || {};
  return <>{name}</>;
}
