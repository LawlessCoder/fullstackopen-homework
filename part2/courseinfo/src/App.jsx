const Course = ({ course }) => {
  return (
    <>
      <Header course_name={course.name} />
      <Content course_parts={course.parts} />
    </>
  );
};

const Header = ({ course_name }) => {
  return <h1>{course_name}</h1>;
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
      Number of exercises{" "}
      {course_parts.reduce((sum, part) => {
        return sum + part.num_of_exercises;
      }, 0)}
    </p>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

export default App;
