
import React from "react";
import Image from "./Image";

const FacultyCart = ({ img, name, sub }) => {
  return (
    <div className="group w-full max-w-[300px] overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={img}
          alt={name}
          className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Subject */}
        <span className="absolute bottom-3 left-3 rounded-full bg-red-500 px-4 py-1.5 text-sm font-medium text-white shadow">
          {sub}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-gray-800">
          {name}
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Instructor
        </p>

        <button className="mt-4 rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-red-500">
          View Profile
        </button>
      </div>

    </div>
  );
};

export default FacultyCart;

