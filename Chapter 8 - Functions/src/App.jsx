
const App = () => {
  function btnDoubleClicked (){
    console.log("btn is clicked");
  }

  function mouseEnter (){
    console.log("Mouse Enter");
  }

  function btnSingleClicked (){
    console.log("btn is explored");
  }

  function change (val){
    console.log(val);
  }

  return (
    <div>
      <button onMouseEnter={mouseEnter} onDoubleClick={btnDoubleClicked} >Click Here</button>
      <button onClick={btnSingleClicked} >Explore This</button>

      <button onClick={() => console.log("Direct button is clicked")}>Direct Btn</button>

      <input onChange={() => console.log("User is typing")} type="text" placeholder="Enter Name"/>

      <input onChange={(ele) => console.log(ele.target.value)} type="text" placeholder="Enter Name"/>

      <input onChange={function(ele){
        change(ele.target.value)
      }} type="text" placeholder="Enter Name"/>


      <div className="my-div" onMouseMove={(ele) => console.log(ele.clientX, ele.clientY)}></div>

      <div className="page" onWheel={() => console.log("Page Scrolling")}></div>
    </div>
  )
}

export default App