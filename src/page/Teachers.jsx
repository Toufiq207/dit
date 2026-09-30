import React from "react";
import Container from "../component/Container";
import TeacherCart from "../component/TeacherCart";
import Heading from "../component/Heading";
import teacherData from "../data/TeacherData";

const Teachers = () => {
  return (
    <section>
      <Container>
        <Heading text="Course Instractors" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teacherData.map((item) => (
            <TeacherCart
              key={item.id}
              text={item.Name}
              pic={item.pic}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Teachers;