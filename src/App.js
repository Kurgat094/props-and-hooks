
import './App.css';
import Greeting from './Greeting';  // Import the Greeting component
import Counter  from './Counter';
function App() {
  const userName="Tobias";
  const userAge="22";
  const userId="40447466";
  return(
    <>
     <div className='greeting-container'>
      <h2>Welcome to props Demo</h2>
      <Greeting name={userName} age={userAge} id={userId}/>
    </div>
    <Counter/>
    </>
   
  )
}

export default App;
