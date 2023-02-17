import { useRouter } from "next/router";
import { useState } from "react";
import LoginForm from "../components/Login/LoginForm";

export default function LoginPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [isShaking, setIsShaking] = useState(false);

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
      setIsShaking(true);
      setTimeout(() => {
        setIsShaking(false);
      }, 3000);
    }
  };

  return (
    <div
      className={`flex flex-col h-screen justify-center transition-all ${
        isShaking ? "animate-shake-fast" : ""
      }`}
    >
      <LoginForm onSubmit={handleLogin} />
      <div className="relative">
        <p className="text-center ease-in duration-300 text-red-400 absolute top-0 left-1/2 -translate-x-1/2">
          {message}
        </p>
      </div>
    </div>
  );
}
