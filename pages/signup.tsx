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

  return (
    <div>
      <form
        onSubmit={handleSignUpSubmit}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex flex-col align-middle">
          <p className="mt-2 mb-1 text-left ">Email</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" p-2 border border-gray-300 rounded-md min-w-[300px]"
          />
        </div>
        <div className="flex flex-col align-middle">
          <p className="mt-2 mb-1 text-left ">Password</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded-md min-w-[300px]"
          />
        </div>
        <div className="flex flex-col align-middle">
          <p className="mt-2 mb-1 text-left ">Confirm Password</p>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="mb-10 p-2 border border-gray-300 rounded-md min-w-[300px]"
          />
        </div>
        <button
          type="submit"
          className="mb-2 p-2 bg-amber-400 text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
