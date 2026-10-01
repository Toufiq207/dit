
import React, { useState } from "react";

import Container from "../component/Container";
import Heading from "../component/Heading";
import Image from "../component/Image";
import facultyData from "../data/facultyData";

import { ImCross } from "react-icons/im";

const Faculty = () => {
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  return (
    <section id="faculty"  className="bg-gray-50 py-10 scroll-mt-2 py-10" >
      <Container>
        <Heading text="Our Teacher" />

        {/* Faculty Cards */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {facultyData.map((item) => (
            <div
              key={item.id}
              className="group w-full max-w-[300px] overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  className="h-[280px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subject */}
                <span className="absolute bottom-3 left-3 rounded-full bg-red-500 px-4 py-1.5 text-sm font-medium text-white shadow">
                  {item.sub}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h2 className="text-xl font-bold text-gray-800">
                  {item.name}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Instructor
                </p>

                <button
                  onClick={() => setSelectedFaculty(item)}
                  className="mt-4 rounded-lg bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-red-500"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Profile Modal */}
      {selectedFaculty && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 top-18 "
          onClick={() => setSelectedFaculty(null)}
        >
          <div
            className="relative max-h-[90vh] w-full md:max-w-2xl  max-w-screen   overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedFaculty(null)}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-red-500 hover:text-white"
            >
              <ImCross />

            </button>

            {/* Profile Header */}
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <Image
                src={selectedFaculty.img}
                alt={selectedFaculty.name}
                className="h-32 w-32 rounded-full object-cover ring-4 ring-red-100"
              />

              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedFaculty.name}
                </h2>

                <p className="mt-1 font-medium text-red-500">
                  {selectedFaculty.sub}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Instructor
                </p>
              </div>
            </div>

            {/* Profile Information */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Experience</p>
                <p className="mt-1 font-semibold text-gray-800">
                  {selectedFaculty.experience}
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Education</p>
                <p className="mt-1 font-semibold text-gray-800">
                  {selectedFaculty.education}
                </p>
              </div>
            </div>

            {/* About */}
            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-800">
                About Instructor
              </h3>

              <p className="mt-2 leading-7 text-gray-600">
                {selectedFaculty.bio}
              </p>
            </div>

            {/* Skills */}
            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-800">
                Skills
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {selectedFaculty.skills?.map((skill, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-red-50 px-3 py-1.5 text-sm font-medium text-red-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div className="mt-6">
              <h3 className="text-lg font-bold text-gray-800">
                Courses
              </h3>

              <div className="mt-3 space-y-2">
                {selectedFaculty.courses?.map((course, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-gray-100 px-4 py-3 text-gray-600"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="mt-6 border-t pt-5">
              <h3 className="text-lg font-bold text-gray-800">
                Contact
              </h3>

              <p className="mt-2 text-gray-600">
                📧 {selectedFaculty.email}
              </p>

              <p className="mt-1 text-gray-600">
                📱 {selectedFaculty.phone}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Faculty;
