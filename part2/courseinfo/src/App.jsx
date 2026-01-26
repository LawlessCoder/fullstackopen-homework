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

const App = () => {
  const courses = [
    {
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <>
      <h1>Web Development Curriculum</h1>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default App;
