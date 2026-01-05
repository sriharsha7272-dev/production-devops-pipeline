import LoginCard from "@/components/LoginCard";
import RegisterCard from "@/components/RegisterCard";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      {/* LEFT: LOGIN */}
      <section className="flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-8">
        <div className="max-w-md w-full">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome Back
          </h1>
          <p className="text-slate-300 mb-10">
            Sign in to access your account and continue.
          </p>

          <LoginCard />
        </div>
      </section>

      {/* RIGHT: REGISTER */}
      <section className="flex items-center justify-center bg-gray-50 px-8">
        <div className="max-w-md w-full">
          <RegisterCard />
        </div>
      </s
