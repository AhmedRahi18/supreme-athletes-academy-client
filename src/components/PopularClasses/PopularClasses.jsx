import { useQuery } from "@tanstack/react-query";
import PopularCard from "../PopularCard/PopularCard";
import { Fade } from "react-awesome-reveal";

const PopularClasses = () => {
  const { data: topClasses = [] } = useQuery(["topClasses"], async () => {
    const res = await fetch("https://supreme-athletes-academy-server.vercel.app/topClasses");
    return res.json();
  });

  return (
    <div>
      <Fade>
        <h2 className="text-4xl md:text-5xl text-center font-bold mt-10 mb-4">
          Popular Classes
        </h2>
        <p className="w-80 md:w-2/3 mx-auto text-gray-400 text-center mb-10 md:mb-16">
          Discover the thrill of popular sports in our dynamic and inclusive
          classes. From soccer to basketball, tennis to volleyball, our expert
          coaches guide beginners and enthusiasts alike. Learn essential skills,
          build fitness, and embrace teamwork in a supportive environment that
          fuels a lifelong love for sports.
        </p>
      </Fade>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10">
        {topClasses.map((topClass) => (
          <PopularCard key={topClass._id} topClass={topClass}></PopularCard>
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
