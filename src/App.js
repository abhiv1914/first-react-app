function App(){
  return(
    <>
      <h1>Props Demo</h1>
      <ListDemo/>
    </>
  );
}

function ListDemo(){
  let data="Hello World";
  let list=["delhi","calcutta","chennai"];

  return <>
    <h1>{data} </h1>  

    {/* version 3 */}
    {list.map((item)=>(
      <h1>Hello World</h1> 
    ))}  

    {/* version 2 */}
    {list.map((item)=>" Hello "+item)}  

    {/* version 1 */}
    {list.map((item)=>" "+item)}  
  </>;
}


export default App;