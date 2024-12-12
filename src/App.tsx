import { useState } from "react";
import Preview from "./components/Preview";
import Editor from "./components/Editor";
function App() {
  const [markdown, setMarkdown] = useState("# Markdown Editor");
  return (
    <main className="w-full h-screen grid grid-cols-1 sm:grid-cols-2 bg-gray-800 text-gray-300">
      <Editor markdown={markdown} setMarkdown={setMarkdown} />
      <Preview markdown={markdown} />
    </main>
  );
}

export default App;
