import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="p-5 bg-teal-600 text-gray-100 font-bold font-mono justify-center flex leading-loose">
          <Link href="/">
            <li className="mx-4 cursor-pointer hover:text-gray-200">Home</li>
          </Link>
          <Link href="/versions">
            <li className="mx-4 cursor-pointer hover:text-gray-200">Versions</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
