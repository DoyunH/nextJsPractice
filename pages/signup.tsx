import SignupForm from "@/components/Login/SignUpForm";
import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUpSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // check confirm password
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    e.preventDefault();
    await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  };

  return <SignupForm />;
};

export default Signup;
