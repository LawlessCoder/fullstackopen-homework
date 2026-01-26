const Course = ({ course }) => {
  return (
    <>
      <Header course_name={course.name} />
      <Content course_parts={course.parts} />
      <Total course_parts={course.parts} />
    </>
  );
};

const Header = ({ course_name }) => {
  return <h2>{course_name}</h2>;
};

const Part = ({ part_name, num_of_exercises }) => {
  return (
    <p>
      {part_name} {num_of_exercises}
    </p>
  );
};

const Content = ({ course_parts }) => {
  return (
    <>
      {course_parts.map((part) => (
        <Part
          key={part.id}
          part_name={part.name}
          num_of_exercises={part.exercises}
        />
      ))}
    </>
  );
};

const Total = ({ course_parts }) => {
  return (
    <p>
      <strong>
        total of{" "}
        {course_parts.reduce((sum, part) => {
          return sum + part.exercises;
        }, 0)}{" "}
        {" exercises"}
      </strong>
    </p>
  );
};

export default Course;
