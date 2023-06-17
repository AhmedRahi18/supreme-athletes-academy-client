import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user } = useContext(AuthContext);

  const { isLoading, refetch, data: userRole = [] } = useQuery({
    queryKey: ["userRole", user?.email],
    queryFn: async () => {
      if (user && user.email) {
        const res = await fetch(`https://supreme-athletes-academy-server.vercel.app/useRole/${user.email}`);
        return res.json();
      }
      return null; 
    },
  });

  return [userRole, refetch, isLoading];
};

export default useRole;
