"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, Lock } from "lucide-react";
import { useState } from "react";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import { register } from "@/lib/auth";

export default function RegisterCard() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  async function handleRegister() {
    try {
      const res = await register(form);
      console.log("REGISTER SUCCESS", res);
    } catch {
      alert("Registration failed");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-xl p-8"
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-2">
        Create Account
      </h2>
      <p className="text-slate-600 mb-6">
        Join us today. It only takes a minute.
      </p>

      <div className="space-y-5">
        <AuthInput
          label="Full Name"
          type="text"
          placeholder="Enter your full name"
          icon={<User size={18} />}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <AuthInput
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          icon={<Mail size={18} />}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <AuthInput
          label="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
          icon={<Phone size={18} />}
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="Create a password"
          icon={<Lock size={18} />}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </div>

      <div onClick={handleRegister} className="mt-6">
        <AuthButton text="Create Account" variant="dark" />
      </div>
    </motion.div>
  );
}
