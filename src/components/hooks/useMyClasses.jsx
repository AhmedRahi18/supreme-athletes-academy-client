import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useMyClasses = () => {
    const {user} = useContext(AuthContext)

    const {refetch,data: myClasses=[]} = useQuery({
        queryKey: ['myClasses', user?.email],
        queryFn: async() =>{
            const res = await fetch(`http://localhost:5000/myClasses?email=${user?.email}`)
            return res.json()
        },
    })

    return [myClasses,refetch]

}

export default useMyClasses;