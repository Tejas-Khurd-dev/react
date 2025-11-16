import Card from "./components/card"

const App = () => {
  return (
    <div className="card-container">
      <Card user = "Tejas Khurd" age = {18} img = "https://w0.peakpx.com/wallpaper/766/843/HD-wallpaper-cool-anime-boy-mirror-selfie-animation-thumbnail.jpg"/> {/* Here we are passing objects and number should be pass in curly bracket */}

      <Card user = "Harsh Dhuri" age = {19} img = "https://i.pinimg.com/736x/35/18/d5/3518d59b998b2662450760296dcd3071.jpg" />

      <Card user = "Vedant Desai" age = {23} img = "https://i.pinimg.com/736x/e3/82/9f/e3829f6e914f20f7228e8fee9ef17db0.jpg" />
    </div>
  )
}

export default App