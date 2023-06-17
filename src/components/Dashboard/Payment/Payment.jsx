import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useMyClasses from "../../hooks/useMyClasses";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {
  const [myClasses] = useMyClasses();
  const { id } = useParams();

  const selectedClass = myClasses.find((classItem) => classItem._id === id);

  return (
    <div>
      <h2 className="text-black text-5xl font-serif border-b-2 border-b-black pb-2 text-center mb-5 mt-5 mx-52">
        Payment
      </h2>
      <div className="my-20 border-2 border-green-600 p-10 rounded">
      <Elements stripe={stripePromise}>
        <CheckoutForm price={selectedClass?.price} id={selectedClass?._id} name={selectedClass?.name} classId={selectedClass?.classId} image={selectedClass?.image}></CheckoutForm>
      </Elements>
      </div>
    </div>
  );
};

export default Payment;
