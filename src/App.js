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
  let list=[];
  
  for(let i=0;i<10;i++){
    list.push("hello Universe");
  }  
  console.log(list);
  return <>
    <h1>{data} </h1>  

    {/* forEach is consumer function */}
    {list.forEach((item)=>item)}

    {/* map is input/output */}
    {/* output because of this */}
    {list.map((item)=>item)}  
  </>;
}


export default App;