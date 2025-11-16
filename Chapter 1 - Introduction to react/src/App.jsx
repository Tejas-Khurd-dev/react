// Using grandparent div

// const App = () => {
//   return (
//     <div id="grandparent">
//       <div id="parent1, p1">
//         <h1 id="child-p1.1">Welcome to React</h1>
//         <p  id="child-p1.2">-Tejas Sandeep Khurd</p>
//       </div>

//       <div id="parent2, p2">
//         <br />
//         <h1 id="child-p1.1">Hello</h1>
//       </div>
//     </div>
    
//   )
// }

// Using fragment

const App = () => {
  return (
    <>
      <div id="parent1, p1">
        <h1 id="child-p1.1">Welcome to React</h1> {/* Comment */}
        <p  id="child-p1.2">-Tejas Sandeep Khurd</p>
      </div>

      <div id="parent2, p2">
        <br />
        <h2 id="child-p1.1">Hello, I am from India</h2>
      </div>
    </>
    
  )
}

export default App