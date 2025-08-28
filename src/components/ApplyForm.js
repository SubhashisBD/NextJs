'use client'
import React from "react";

export default function ApplyForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted ✅");
  };

  return (
    <form onSubmit={handleSubmit} className="w-xl border border-gray-300 p-4">
      <div className="flex gap-10 m-2 ">
        <p>Name</p>
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 px-3 py-1"
        />
      </div>
      <div className="flex gap-10 m-2 ">
        <p>Email</p>
        <input
          type="email"
          placeholder="subh@gmail.com"
          className="border border-gray-300 px-3 py-1"
        />
      </div>
      <div className="flex gap-3 m-2 ">
        <p>Password</p>
        <input
          type="password"
          placeholder="*********"
          className="border border-gray-300 px-3 py-1"
        />
      </div>
      <div>
        <button className="bg-green-400 px-3 py-1">Submit</button>
      </div>
    </form>
  );
}
