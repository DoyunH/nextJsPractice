import { useRouter } from "next/router";
import { useState } from "react";
import LoginForm from "../components/Login/LoginForm";

export default function LoginPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  const handleLogin = async (email: string, password: string) => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.status === 200) {
      router.push("/");
    } else {
      setMessage(data.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onSubmit={handleLogin} />
      {message && <p>{message}</p>}
    </div>
  );
}
