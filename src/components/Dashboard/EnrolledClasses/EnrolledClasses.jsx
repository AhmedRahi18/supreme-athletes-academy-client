import { useQuery } from "@tanstack/react-query";

const EnrolledClasses = () => {
  const { data: enrolled = [] } = useQuery(["enrolled"], async () => {
    const res = await fetch("http://localhost:5000/payments");
    return res.json();
  });
  return (
    <div>
      <h2 className="text-black text-5xl font-serif border-b-2 border-b-black pb-2 text-center mb-5 mt-5 mx-52">
        My Enrolled Classes
      </h2>
      <div className="grid grid-cols-2 mt-10 gap-3">
        {enrolled.map((singleEnrolled) => (
          <div>
            <div className="card card-compact w-96 bg-gradient-to-r from-green-100 to-gray-100 shadow-xl">
              <figure>
                <img src={singleEnrolled.image} />
              </figure>
              <div className="card-body">
                <h2 className="text-2xl font-serif font-semibold">{singleEnrolled.name}</h2>
                <p className="text-gray-500 text-lg font-semibold">
                  Price: ${singleEnrolled.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledClasses;
