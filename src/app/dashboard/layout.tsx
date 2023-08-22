import { getServerSession } from "next-auth";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const DashBoardLayout = async (props: Props) => {
  return (
    <div className=" grid grid-cols-6">
      <div className="border rounded shadow p-2 mt-2 ">
        <Link
          className="bg-slate-100 block p-2 rounded hover:bg-emerald-600 hover:text-white transition"
          href={`/dashboard/user/1`}
        >
          User Profile
        </Link>
      </div>
      <div className="col-span-4">{props.children}</div>
    </div>
  );
};

export default DashBoardLayout;
