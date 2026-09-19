"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav>
      <Link href="/">Home</Link>
      {" | "}
      <Link href="/notes">notes</Link>
      {" | "}
      <Link href="/users">users</Link>
      {" | "}

      {session ? (
        <>
          <Link href="/notes/new">Create new</Link>
          {" | "}
          <em>{session.user?.name} Logged in</em>{" "}
          <button onClick={() => signOut()}>logout</button>
        </>
      ) : (
        <>
          <Link href="/login">login</Link>
          {"|"}
          <Link href="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
