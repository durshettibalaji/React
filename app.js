const heading = React.createElement("h1", { id: "heading" }, "hello world");  // in object we give attributes
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);
console.log(root);

const nested = React.createElement("div",{id: "parent"},React.createElement("div",{id: "child"},React.createElement("h1",{id: "head"},"header")));
const nest = ReactDOM.createRoot(document.getElementById("nest"));
nest.render(nested);


const siblings = React.createElement("div",{id: "parent"},React.createElement("div",{id: "child"},[React.createElement("h1",{id: "head"},"child 1"),React.createElement("h1",{id: "head"},"child 2")]));
const sibling = ReactDOM.createRoot(document.getElementById("sibling"));
sibling.render(siblings);