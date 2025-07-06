import { useState } from "react";
import { useRouter } from "next/router";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push("/home"); // after login you can change this path
    } else {
      const data = await res.json();
      setError(data.message || "Login failed");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 backdrop-blur p-8 rounded-xl w-80"
    >
      <h2 className="text-2xl text-white mb-4">Login</h2>
      {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-3 p-2 rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-2 rounded"
        required
      />
      <button className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold">
        Log In
      </button>
    </form>
  );
}
