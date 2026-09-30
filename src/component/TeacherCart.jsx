import React from "react";

const TeacherCart = ({ pic, text }) => {
//   console.log("IMAGE:", pic);

  return (
    <div className="w-[370px] bg-white rounded-lg overflow-hidden shadow-md">
      <div className="w-full h-[370px]">
        <img
          src={pic}
        //   alt={text}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 text-center">
        <p className="text-base text-blue-500 font-bold">
          {text}
        </p>
        {/* <p></p> */}
      </div>
    </div>
  );
};

export default TeacherCart;