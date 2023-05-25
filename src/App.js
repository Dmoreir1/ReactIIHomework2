// import logo from './logo.svg';
import './App.css';
import { Animals } from './Animals'

export const App = () => {
 let animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
 return (

  <div className = 'farmAnimals'>
    Farm Animals!
    <Animals table = {animals}/>
  </div>
 );
};

export default App