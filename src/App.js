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
  let list=["","","",""];

  let list1=[];

  for(let i = 0; i<100;i++){}
  list1.push("");

  return ( 
  <>
    <h1>{data} </h1>  

    {/* version 3 */}
    {list.map((item)=>(
      <div>
        Hello Universe 
      </div>
    ))}  
    <hr />
    {list.map((item) => (
      <div>
        <h1>Hello World</h1>
      </div>
    ))}      
  </>
  );
}


export default App;