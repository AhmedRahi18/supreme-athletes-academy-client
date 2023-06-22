import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const PaymentHistory = () => {
  const {user} = useContext(AuthContext)
    const { data: history = [] } = useQuery(["history"], async () => {
        const res = await fetch(`https://supreme-athletes-academy-server.vercel.app/payments?email=${user?.email}`);
        return res.json();
      });
  return (
    <div>
      <h2 className="text-black text-5xl font-serif border-b-2 border-b-black pb-2 text-center mb-5 mt-5 mx-52">
        Payment History
      </h2>
      <div>
      <table className="table w-full bg-green-900">
          {/* head */}
          <thead>
            <tr>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                #
              </th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                Class
              </th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                Email
              </th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                Price
              </th>
              <th className="border-b-2 border-white text-xl font-semibold text-white font-serif">
                Transaction Id
              </th>
            </tr>
          </thead>
          <tbody>
            {history.map((singleHistory, index) => (
              <tr key={singleHistory._id}>
                <td className="border-b-2 border-white text-white font-serif">
                  {index + 1}
                </td>
                <td className="border-b-2 border-white text-white font-serif">
                  {singleHistory.name}
                </td>
                <td className="border-b-2 border-white text-white font-serif">
                  {singleHistory.email}
                </td>
                <td className="border-b-2 text-center border-white text-white font-serif">
                  {singleHistory.price}
                </td>
                <td className="border-b-2 border-white text-white font-serif">
                  {singleHistory.transactionId}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
