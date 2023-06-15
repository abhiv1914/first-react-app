import { useState } from "react";

function App() {
  return (
    <>
      <h1>Stateful List</h1>
      <ListDemo />
    </>
  );
}

function ListDemo() {
  // let list = ["delhi"]
  // C1: Stateful Variable
  let [list, setList] = useState(["delhi"]);

  // C2: Acton Member Funcn
  let addItemAction = () => {
    let inputRef =document.querySelector("#id1");
    let inputValue = inputRef.value;

    let newList = [...list, inputValue];

    setList(newList);

    inputRef.value="";
  };

  return (
    <>
      {/** C3: Event Binding */}
      <input type="text" id="id1" placeholder="Enter user input" />
      <input type="button" value="Add New Item" onClick={addItemAction} />

      {/** C4: List */}
      {list.map((item) => (
        <h1>Hello {item}</h1>
      ))}
    </>
  );
}

export default App;