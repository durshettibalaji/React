const heading = React.createElement("div",{id:"balaji"},React.createElement("div",{},"balaji" ,[React.createElement("p",{id:1,key:1},"123"),React.createElement("h1",{id:2,key:2},"123")])); // this is an object 
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading)
root.render(heading)
const complexObject = React.createElement("div",{id:"level1"},[
    React.createElement("div",{id:"level2"},[
        React.createElement("p",{id:"Level3"},"a1"),
        React.createElement("p",{id:"level3"},"a2"),
    ]),
    React.createElement("div",{id:"level2"},[
        React.createElement("p",{id:"Level3"},"b1"),
        React.createElement("p",{id:"level3"},"b2"),
    ]),
])
const complex = ReactDOM.createRoot(document.getElementById("complex"));
complex.render(complexObject);