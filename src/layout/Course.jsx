
import React from "react";
import Container from "../component/Container";
import Coursecart from "../component/Coursecart";
import Heading from "../component/Heading";
import coursedata from "../data/coursedata";

const Course = () => {
  return (
    <div id="courses"  className="scroll-mt-3 py-10">
      <Container>
        <Heading className='pb-4' text="Our Courses" />

        <div className="flex flex-wrap justify-center gap-4">
          {coursedata.map((item) => (
            <Coursecart
              key={item.id}
              img={item.img}
            />
          ))}
        </div>

        {/* Apply Button */}
        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Registaration Now
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Course;
