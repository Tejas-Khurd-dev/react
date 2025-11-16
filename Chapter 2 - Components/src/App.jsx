import Card2 from "./components/Card2"
import Navbar from "./components/Navbar"

const App = () => {
  const name = "Tejas"
  const age = 18
  return (
    <>
      <Navbar />
      <div className="card-container">
        <div className="card1">
          <p>Hello I am {name} <br /> 
          and my age is {age}
          </p>
        </div> {/* In react we write className insted of class attribute */}

        {Card2()} {/* For printing like thisv "fun()" curly brackets are necessary */}
        <Card2 />
      </div>
      
    </>
  )
}

export default App