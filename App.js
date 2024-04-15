const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello from h1"),
    React.createElement("h2", {}, "Hello from h2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello from h1"),
    React.createElement("h2", {}, "Hello from h2"),
  ]),
]);
console.log(heading); // object not h1.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
