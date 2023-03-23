import Link from "next/link";
import React from "react";

const projects = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Link href="/project">
        <button className="btn bg-primary-blue hover:bg-blue-600">
          01. ¡Mucho gusto conocerte!
        </button>
      </Link>
    </div>
  );
};

export default projects;
