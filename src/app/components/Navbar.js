import Link from "next/link";
import React from 'react';

const Navbar = () => {
  return (
    <div className="flex justify-between px-4 m-4 py-4 bg-blue-400 items-center">
      <h2 className="text-bold">Subhashis</h2>
      <div className="flex gap-6">
        <Link href={"/"}>Home</Link>
        <Link href={"/job"}>Job</Link>
        <Link href={"/product"}>Product</Link>
        <Link href={"/course"}>Course</Link>
      </div>
    </div>
  )
}

export default Navbar;
