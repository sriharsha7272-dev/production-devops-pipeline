"use client";

import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import { login } from "@/lib/auth";

export default function LoginCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
  try {
    const res = await login(email, password);
    console.log("LOGIN SUCCESS", res);

    // Redirect after login
    window.location.href = "/dashboard";
  } catch (err: any) {
    alert(err.message || "Login failed");
  }
}

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <h2 className="text-2xl font-semibold text-slate-900 mb-6">
        Sign In
      </h2>

      <div className="space-y-5">
        <AuthInput
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          icon={<Mail size={18} />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="Enter your password"
          icon={<Lock size={18} />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex justify-between text-sm mt-4 text-slate-600">
        <label className="flex gap-2">
          <input type="checkbox" /> Remember me
        </label>
        <span className="text-emerald-600 font-medium cursor-pointer">
          Forgot password?
        </span>
      </div>

      <div onClick={handleLogin} className="mt-6">
        <AuthButton text="Sign In" />
      </div>
    </motion.div>
  );
}
