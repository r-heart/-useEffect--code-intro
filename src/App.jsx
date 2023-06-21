import React from "react";

function App() {
  React.useEffect(() => {
    console.log("Hello world!");
  });

  const [count, setCount] = React.useState(0);

  return <button
  type="button"
  onClick={() => {
    setCount((prev) => prev +1);
  }}
  className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
  >
    Count {count}
  </button>
}

export default App;
