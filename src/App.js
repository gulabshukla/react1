import React, {useState} from 'react'
import Functional from './Functional';
import Class from './Class';


const App = () => {
 const [state, setState]= useState(false);
 const [state1, setState1] = useState(false);
 
 function Show(){
  setState(!state)
 };
 function Show1(){
  setState1(!state1)
 }


  return (
    <div>
       <h1 className="text1">Styling Using Functional and Class Component</h1>
       
       <button className="button1" onClick={Show}>To see styling in functional component</button>
       {state && <Functional/>}
       
       <button className="button2" onClick={Show1}>To see styling in class component</button>
       {state1 && <Class/> }

    </div>
  )
}

export default App
