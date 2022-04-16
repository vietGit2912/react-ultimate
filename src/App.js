import './App.css';
import BoxGenerate from './components/ComposeComponents/BoxGenerator/index';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placeimg.com/640/480/any',
  },
};

 function App() {
  //  const [isAuth, setIsAuth] = useState(false);
  //  let button;
  //  if(isAuth) {
  //       button = <ButtonLogin />
  //   }
  //   else button = <ButtonLogout /> 
  return (
    <div className="App">
      {/* <Comment comment={comment}/>
      <Button 
        type='button' 
        id="btnA" 
        text='Button A' 
        onClick={() => {}} 
        style={{background: '#CA3438', fontSize: 30, color: 'white', border: 'none'}}
      />
      <Button type='submit' id="btnB" text='Button B' onClick={() => {}}/>
      {/* <State /> */}
      {/* <h4>Conditional Rendering</h4>
      {button} */} 
      <section>
        <BoxGenerate />
      </section>
    </div>
  )  
}

export default App;
