import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import ClassesCard from "./ClassesCard";

const InstructorClasses = () => {
    const {user} = useContext(AuthContext)
    const {data: instructorClasses=[]} = useQuery(['instructorClasses'],async()=>{
        const res = await fetch(`http://localhost:5000/instructorClasses/${user.email}`)
        return res.json()
    })
    return (
        <div>
        <h2 className="text-black text-5xl font-serif border-b-2 border-b-black pb-2 text-center">My Classes</h2>
        <div className="grid grid-cols-2 mt-10 gap-3">
            {
                instructorClasses.map(instructorClass => <ClassesCard
                key={instructorClass._id}
                instructorClass={instructorClass}
                ></ClassesCard>)
            }
        </div>
        </div>
    );
};

export default InstructorClasses;