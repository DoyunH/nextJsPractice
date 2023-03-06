import { useRouter } from "next/router";
import Head from "next/head";
import { useEffect, useState } from "react";
import LoginForm from "../components/Login/LoginForm";
import { googleClientId } from "@/lib/constants";

export default function LoginPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const initGoogleSignIn = () => {
      window.gapi.auth2.init({
        client_id: googleClientId,
      });
    };

    window.gapi.load("auth2", initGoogleSignIn);
  }, []);

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

  const handleGoogleLogin = () => {
    window.gapi.auth2
      .getAuthInstance()
      .signIn()
      .then(() => {
        console.log("User logged in");
      });
  };

  return (
    <>
      <Head>
        <script
          src="https://apis.google.com/js/platform.js"
          async
          defer
        ></script>
      </Head>
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
        {/* <div>
          <button onClick={handleGoogleLogin}>Sign in with Google</button>
        </div> */}
        <div className="mt-10">
          {/* sign-up link */}
          <p className="text-center">
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="text-blue-500 hover:text-blue-700 transition-colors duration-300 ease-in-out"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
