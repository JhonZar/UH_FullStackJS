const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
};

const Content = (props) => {
  const partes = props.partes.parts;
  return (
    <div>
      {partes.map((val, index) => (
        <p key={index}>
          {val.name} {val.exercises}
        </p>
      ))}
    </div>
  );
};
const Total = (props) => {
  const partes = props.partes.parts;
  let a = 0;
  let n = 0;
  partes.forEach((element) => {
    n = element.exercises;
    a = a + n;
  });
  return (
    <>
      <strong> Total ejercicios {a}</strong>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "fundamentals of react",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content partes={course} />
      <Total partes={course} />
    </div>
  );
};
export default App;
