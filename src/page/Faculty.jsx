import faculty from "../data/faculty";
import FacultyCart from "../component/FacultyCart";
import Container from "../component/Container";

const Faculty = () => {
    return (
       <section>
        <Container>
             <div className="flex flex-wrap justify-center gap-6">
            {faculty.map((item) => (
                <FacultyCart
                    key={item.id}
                    img={item.img}
                    name={item.name}
                    sub={item.sub}
                />
            ))}
        </div>
        </Container>
       </section>
    );
};

export default Faculty;