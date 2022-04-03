import logo from './logo.svg';
import './App.css';
import {Button, ButtonWithIcon} from './components/Button/index';
import { useState } from 'react';


const StatelessComponent = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const StateFullComponent = () => {
  const [count, setCount] = useState(1);

  function updateCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={updateCount}>Increment + </button>
    </div>
  )
}

const Welcome = (props) => (<h3>{props.name}</h3>)
function App() {

  const ele2 = (
    <ul>
      <li>Reacr</li>
      <li>Angular</li>
      <li>Vue</li>
    </ul>
  )

  const functHtml = () => {
    return (
      <div>This is HTML from function</div>
    )
  }

  const shortHand = () => (<div>Short hand HTML</div>)

  return (
    <div className="App">
      <br />
      <div className="emptyDiv" />
      {ele2}
      {functHtml()}
      {shortHand()}
      <Button />
      <ButtonWithIcon />
      <StatelessComponent name='Viet'/>
      <StateFullComponent />
      <Welcome name='Viet' />
      <Welcome name='Tuan' />
    </div>
  );
}

export default App;
