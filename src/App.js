
import './App.css';
import Component from './components/Component'
import Message from './Message/Message'
import Count from './Count/Count'
import Welcome from './welcome/Welcome'
import EventBind from './EventBind/EventBind'

function App() {
  const names = 'siddiq';
  const size = [38,40,42];
  const obj = {
    friends:['kalam','imran','aslam','sana'],
    works:['collector','developer','doctor'],
    goal:'friendshipforever',
  }
  const myfunction = () =>{
    return (
      <div><h1>I love me </h1></div>
    )
  }
  return (
    <div className="App">
      <Component name = 'sid' arr = {size} dobj={obj} yourfunction = {myfunction} /> 
      <Welcome name = {names} arr = {size} dobj={obj} yourfunction = {myfunction} />
      <Message />
      <Count />
      <EventBind />
      
    </div>
  );
}

export default App;
