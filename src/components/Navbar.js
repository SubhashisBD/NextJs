import Link from "next/link";
import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between px-4 m-4 py-4 bg-blue-400 items-center">
      <div className="flex gap-6">
        <Link href={"/"}>Home</Link>
      </div>
    </div>
  )
}

export default Navbar;
