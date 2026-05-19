const heading = React.createElement("div", {
    id: "parent",
    xyz: "abc"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {
        key: 1
    }, "I am a big fan"),
    React.createElement("h1", {
        key: 2
    }, "I am a big fan1"),
    React.createElement("h1", {
        key: 3
    }, "I am a big fan2")
]));
React.createElement("div", {
    id: "child1"
}, [
    React.createElement("h1", {
        key: 1
    }, "I am a big fan")
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);

//# sourceMappingURL=Namaste React.6bd02f5a.js.map
