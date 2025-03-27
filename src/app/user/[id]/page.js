"use client"; // ✅ This makes it a client component

import { useParams } from "next/navigation";
import Link from "next/link";

export default function UserPage() {
  const { id } = useParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">User Profile</h1>
      <p className="text-lg mt-4">User ID: {id}</p>
      <Link href="/" className="mt-4 text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
