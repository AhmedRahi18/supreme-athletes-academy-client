import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import WhyChoose from "../WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div className="bg-green-100">
      <Helmet>
        <title>Home | Supreme Athletes Academy</title>
      </Helmet>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <PopularInstructors></PopularInstructors>
      <WhyChoose></WhyChoose>
    </div>
  );
};

export default Home;
