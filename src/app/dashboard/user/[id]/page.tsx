type Props = {
  params: {
    id: string;
  };
};

const ProfilePage = async (props: Props) => {
  // console.log({ response });
  const user: any = {};

  return (
    <div className="m-2 border rounded shadow overflow-hidden">
      <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600 text-center">
        User Profile
      </div>

      <div className="grid grid-cols-2  p-2 gap-2">
        <p className="p-2 text-slate-400">Name:</p>
        <p className="p-2 text-slate-950">{user.name}</p>
        <p className="p-2 text-slate-400">Email:</p>
        <p className="p-2 text-slate-950">{user.email}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
