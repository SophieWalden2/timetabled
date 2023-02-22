import './App.css';
import Calendar from "./components/Calendar"

const App = () => {

  return (
    <div className="App">
      <h1>Time tabled</h1>
      <h2>Welcome to the scheduler!</h2>
      <Calendar />
    </div>
  )
}

export default App