"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, update } = useSession();

  async function updateSession() {
    // if (session) session.user.accessToken = "dddd";

    await update({
      ...session,
      user: {
        ...session?.user,
        accessToken: "dddd",
        name: "john",
      },
    });
  }
  return (
    <div className="flex flex-wrap gap-5">
      <button
        className="border bg-violet-600 text-white rounded px-4 py-2"
        onClick={updateSession}
      >
        Update Session
      </button>
      <button
        className="border bg-violet-600 text-white rounded px-4 py-2"
        onClick={() => console.log({ session })}
      >
        Log Session
      </button>
    </div>
  );
}
