const Header = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};
const Part = (props) => {
  return (
    <div>
      <p>
        {props.p1}
        {props.e1}
      </p>
      <p>
        {props.p2}
        {props.e2}
      </p>
      <p>
        {props.p3}
        {props.e3}
      </p>
    </div>
  );
};
const Content = (props) => {
  return (
    <div>
      <Part p1={props.p1} e1={props.e1} />
      <Part p2={props.p2} e2={props.e2} />
      <Part p3={props.p3} e3={props.e3} />
    </div>
  );
};
const Total = (props) => {
  return (
    <>
      <strong>Number of exercises {props.n1 + props.n2 + props.n3}</strong>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = {
    name: "fundamentals of react",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };
  return (
    <div>
      <Header course={course} />
      <Content
        p1={part1.name}
        e1={part1.exercises}
        p2={part2.name}
        e2={part2.exercises}
        p3={part3.name}
        e3={part3.exercises}
      />
      <Total n1={part1.exercises} n2={part2.exercises} n3={part3.exercises} />
    </div>
  );
};
export default App;
