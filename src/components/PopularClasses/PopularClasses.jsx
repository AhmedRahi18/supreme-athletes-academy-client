import { useQuery } from "@tanstack/react-query";
import PopularCard from "../PopularCard/PopularCard";

const PopularClasses = () => {
    const {data: topClasses=[]} = useQuery(['topClasses'],async()=>{
        const res = await fetch('http://localhost:5000/topClasses')
        return res.json()
    })

    return (
        <div>
            <h2 className="text-5xl text-center font-bold mt-10 mb-4">Popular Classes</h2>
            <p className="w-2/3 mx-auto text-gray-400 text-center mb-16">Discover the thrill of popular sports in our dynamic and inclusive classes. From soccer to basketball, tennis to volleyball, our expert coaches guide beginners and enthusiasts alike. Learn essential skills, build fitness, and embrace teamwork in a supportive environment that fuels a lifelong love for sports.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
                {
                    topClasses.map(topClass => <PopularCard 
                    key={topClass._id}
                    topClass={topClass}
                    ></PopularCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;