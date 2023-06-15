import { useQuery } from "@tanstack/react-query";
import ManageClassesCard from "./ManageClassesCard";

const ManageClasses = () => {
    const { data: classes = [],refetch } = useQuery(["classes"], async () => {
    const res = await fetch("http://localhost:5000/classes");
    return res.json();
  });
    return (
        <div>
            <h2 className="text-black text-5xl font-serif border-b-2 border-b-black pb-2 text-center mb-5">Manage Classes</h2>
            <div className="grid grid-cols-2 gap-5 mt-10">
                {
                    classes.map(singleClass => <ManageClassesCard
                    key={singleClass._id}
                    singleClass = {singleClass}
                    refetch = {refetch}
                    ></ManageClassesCard>)
                }
            </div>
        </div>
    );
};

export default ManageClasses;