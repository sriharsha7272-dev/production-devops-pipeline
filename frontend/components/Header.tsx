"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="border-b p-4 flex justify-between items-center">
      <Link href="/" className="font-semibold">
        Production Web App
      </Link>

      <nav className="space-x-4 text-sm">
        {isAuthenticated ? (
          <>
            <Link href="/dashboard">Dashboard</Link>
            <button onClick={logout} className="underline">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
