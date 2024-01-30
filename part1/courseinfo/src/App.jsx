const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = (props) => {
  const partes = props.partes;
  // console.log(partes)
  return (
    <div>
      {partes.map((value) => (
        <p key={value.name}>
          {value.name} {value.exercises}
        </p>
      ))}
    </div>
  );
};
const Total = (props) => {
  const t = props.partes;
  let n = 0;
  let a = 0;
  t.forEach((element) => {
    n = element.exercises;
    a = a + n;
  });
  return (
    <>
      <strong>Total ejercicios {a}</strong>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
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
  ];

  return (
    <div>
      <Header course={course} />
      <Content partes={parts} />
      <Total partes={parts} />
    </div>
  );
};
export default App;
