// src/App.jsx
import './App.css'
import FirstComponent from "./components/FirstComponent"
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'
import Challenge from './components/Challenge'
import FinalChallenge from './components/FinalChallenge'
import Calculator from './components/Calculator'

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <MyComponent />
      <Events />
      <Challenge />
      <FinalChallenge x={5} y={10} />
      <FinalChallenge x={25} y={30} />
      <FinalChallenge x={85} y={1} />
      <hr />
      <Calculator />
    </div>
  )
}

export default App