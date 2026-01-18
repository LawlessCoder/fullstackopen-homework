const Header = ({course_name}) => {
  return (
    <h1>{course_name}</h1>
  )
}

const Content = ({course_parts}) => {
  return (
    <>
      {course_parts.map(({id, part_name, num_of_exercises}) => ( 
        <p key={id}>
         {part_name} {num_of_exercises}
        </p>
      ))}
    </>
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
    </div>
  )
}

export default App
