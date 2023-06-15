function App() {
  return (
    <>
      <h1>Props Demo</h1>
      {/* Calling the MessageDemo */}
      <MessageDemo name="abc" email="abc@gmail.com"/>
      <MessageDemo name="pqr" email="pqr@gmail.com"/>
      <MessageDemo name="xyz" email="xyz@gmail.com"/>
    </>
  );
}

//Reusable
// how to make this dynamic
function MessageDemo({email,name}){
  return(
    <>
     <h1>Hello {name} {email}</h1>;
    </>
  );
}

export default App;
