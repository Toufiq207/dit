
import React from "react";
import Container from "../component/Container";
import Coursecart from "../component/Coursecart";
import Heading from "../component/Heading";
import coursedata from "../data/coursedata";

const Course = () => {
  return (
    <div id="courses"  className="scroll-mt-3 py-10">
      <Container>
        
        <Heading
        
  intro="Our Courses"
  text="Learn Skills That Matter"
  para="Explore industry-focused courses designed to help you develop practical skills and build a strong foundation for your professional career."
/>

        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {coursedata.map((item) => (
            <Coursecart
              key={item.id}
              img={item.img}
            />
          ))}
        </div>

        {/* Apply Button */}
        <div className="flex justify-center mt-8">
         <a href="https://docs.google.com/forms/d/e/1FAIpQLSdhKbHIo2J7eWmoEQvt834jGAjFlb_US1wR4z0zg_5pQpEOyg/viewform?usp=publish-editor" target="blank">
           <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
            Registaration Now
          </button>
         </a>
        </div>
      </Container>
    </div>
  );
};

export default Course;
