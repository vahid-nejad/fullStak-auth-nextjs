import { getServerSession } from "next-auth";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const DashBoardLayout = async (props: Props) => {
  return (
    <div className=" grid grid-cols-12">
      <div className="border-r shadow"></div>
      <div className="col-span-4">{props.children}</div>
    </div>
  );
};

export default DashBoardLayout;
