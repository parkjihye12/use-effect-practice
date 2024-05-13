import { useState } from "react";
import Box from "./components/Box";
import { useEffect } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer");
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className="bg-gray-400 min-h-screen flex flex-col gap-4 justify-center items-center">
      {isOpen && <Box />}
      <button className="p-2 bg-gray-200" onClick={() => setIsOpen(!isOpen)}>
        내가 사라져볼게 얍
      </button>
    </div>
  );
};

export default App;
