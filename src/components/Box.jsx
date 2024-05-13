import { useEffect, useState } from "react";

const Box = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count: ${count}`);

    return () => {
      console.log("useEffect return");
    };
  }, [count]);

  return (
    <div className="bg-gray-100 w-96 h-96 flex justify-center items-center gap-2">
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Box;
