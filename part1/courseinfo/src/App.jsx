const Header = ({course_name}) => {
  return (
    <h1>{course_name}</h1>
  )
}

const Part = ({part_name, num_of_exercises}) => {
  return (
    <p>{part_name} {num_of_exercises}</p>
  )
}

const Content = ({course_parts}) => {
  return (
    <>
      {course_parts.map(part => ( 
        <Part key={part.id} part_name={part.part_name} num_of_exercises={part.num_of_exercises} />
      ))}
    </>
  )
}

const Total = ({course_parts}) => {
  return (
    <p>
      Number of exercises {course_parts.reduce((sum, part) => {
        return sum + part.num_of_exercises;
      }, 0)}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const course_parts = [
    { id: 1, part_name: 'Fundamentals of React', num_of_exercises: 10 },
    { id: 2, part_name: 'Using props to pass data', num_of_exercises: 7 },
    { id: 3, part_name: 'State of a component', num_of_exercises: 14 },
  ] 

  return (
    <div>
      <Header course_name={course} />
      <Content course_parts={course_parts} />
      <Total course_parts={course_parts} />
    </div>
  )
}

export default App
