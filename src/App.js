import './App.css';
import Comment from './components/ComposeComponents/Comment/index';


const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placeimg.com/640/480/any',
  },
};

 function App() {
  return (
    <div className="App">
      <Comment comment={comment}/>
    </div>
  )  
}

export default App;
