import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
    const { data: history = [] } = useQuery(["history"], async () => {
        const res = await fetch("http://localhost:5000/payments");
        return res.json();
      });
  return (
    <div>
      <h2 className="text-black text-5xl font-serif border-b-2 border-b-black pb-2 text-center mb-5 mt-5 mx-52">
        Payment History
      </h2>
      
    </div>
  );
};

export default PaymentHistory;
