// SignupPage.tsx - simple sign up form

import React, { useState } from "react";

export default function SignupPage({ onSuccess }: { onSuccess: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    // Simulate API call, replace with your signupUser call
    try {
      // const result = await signupUser({ username, password });
      // if successful:
      onSuccess();
    } catch (error) {
      setErrorMsg("Signup failed");
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-8">
      <input
        type="text"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="w-full border rounded p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full border rounded p-2"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        {loading ? "Signing up..." : "Sign Up"}
      </button>
      {errorMsg && <p className="text-red-500">{errorMsg}</p>}
    </form>
  );
}
