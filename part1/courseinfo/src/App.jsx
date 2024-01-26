const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};
const Part=(props)=>{
  return(
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
  )
}
const Content = (props) => {
  return (
    <div>
    <Part p1={props.p1}e1={props.e1}/>
    <Part p2={props.p2}e2={props.e2}/>
    <Part p3={props.p3}e3={props.e3}/>
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
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content
        p1={part1}
        e1={exercises1}
        p2={part2}
        e2={exercises2}
        p3={part3}
        e3={exercises3}
      />
      <Total n1={exercises1} n2={exercises2} n3={exercises3} />
    </div>
  );
};
export default App;
