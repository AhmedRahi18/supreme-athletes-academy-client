import { useQuery } from "@tanstack/react-query";
import InstructorCard from "../InstructorCard/InstructorCard";
import { Fade } from "react-awesome-reveal";

const PopularInstructors = () => {
    const {data: topInstructors=[]} = useQuery(['topInstructors'],async()=>{
        const res = await fetch('http://localhost:5000/topClasses')
        return res.json()
    })
    return (
        <div>
            <Fade>
            <h2 className="text-5xl text-center font-bold mt-20 mb-4">
                Popular Instructors
            </h2>
            <p className="w-2/3 mx-auto text-gray-400 text-center mb-16">Our Popular Instructors bring their expertise and passion to guide you on your sports journey. With a diverse range of skills in soccer, basketball, tennis, volleyball, and more, they create engaging and inclusive classes for all levels. Learn from the best and be inspired to reach your full athletic potential.</p>
            </Fade>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
                {
                    topInstructors.map(topInstructor => <InstructorCard 
                    key={topInstructor._id}
                    topInstructor={topInstructor}
                    ></InstructorCard>)
                }
            </div>
        </div>
    );
};

export default PopularInstructors;