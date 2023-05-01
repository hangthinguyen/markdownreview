import { useState } from "react";
import ShowPreview from "./ShowPreview";

function App() {
  const [input, setInput] = useState("");

  console.log(input);
  return (
    <div className="p-16 h-screen bg-light-gray">
      <header className="flex h-full justify-between gap-16">
        <textarea
          placeholder="#markdown preview"
          className="flex-1 shadow-3xl p-8 tracking-widest"
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <ShowPreview input={input} />
      </header>
    </div>
  );
}

export default App;
