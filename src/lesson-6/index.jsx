import React, { useEffect, useState } from "react";

const CustomComponentC = (props) => {
  const {count} = props;
  return <div>{count}</div>
}

const CustomComponentB = (props) => {
  const {count} = props;
  return <div>{count}</div>
}

export default function Lesson6(props) {
  const { loading } = props;

  const [counter, setCounter] = useState(0);
  // const [arrayDummy, setArrayDummy] = useState([]);
  const [objectDummy, setObjectDummy] = useState({
    test1: 0,
  });
  // useEffect(() => {
  //   console.log(objectDummy)
  //   // setInterval(() => {
  //   //   console.log(arrayDummy);
  //   // }, 1000);
  // }, []);

  return (
    <div
      onClick={() => {
        // arrayDummy.push(1);
        // setArrayDummy([...arrayDummy, 1]);
        setCounter(counter + 1);
        // objectDummy.test1 += 1;
        // setObjectDummy({
        //   ...objectDummy,
        //   test1: objectDummy.test1 + 1,
        // });
      }}
    >
      <CustomComponentB count={`asd${counter}`}/>
      <CustomComponentC count={`asd${counter}`}/>
      
    </div>
  );
}

export const Example = (props) => {
  // You can use Hooks here!
  return <div />;
};

export const Example1 = (props) => {
  // You can use Hooks here!
  return <div />;
};

export const Example2 = (props) => {
  // You can use Hooks here!
  return <div />;
};

export const Example3 = (props) => {
  // You can use Hooks here!
  return <div />;
};
