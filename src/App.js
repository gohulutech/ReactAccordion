import React from "react";
// import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite js library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use react by creating components",
  },
];

const App = () => {
  return (
    <div>
      <Search />
    </div>
  );
};

export default App;

// en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=PROGRAMMING
