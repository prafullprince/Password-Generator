import {useState ,useCallback, useEffect} from 'react'


function App() {

  const [length,setLength] = useState(8);
  const [number,setNumber] = useState(false);
  const [char,setChar] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str+="0123456789"
    if(char) str+="!@#$%^&*()-+_{}[]`~"

    for(let i=1 ; i<=length ; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    setPassword(pass)

  }, [length,number,char,setPassword])

  // useEffect(()=>{
  //   passwordGenerator();
  // },[length,number,char,passwordGenerator])

  return (
    <div className="App bg-black w-full h-screen">
      <input type="text" placeholder='password' value={password}/>
      <button>copy</button>
      <input type="range" value={length} min={4} max={16} id='num' onChange={(event)=>{return setLength(event.target.value)}} />
      <label htmlFor="num">length: {length}</label>
      <input type="checkbox" id="check" defaultChecked={number} onChange={()=>{return setNumber((prev)=> !prev)}} />
      <label htmlFor="check">Number</label>
      <input type="checkbox" id="check2" defaultChecked={char} onChange={()=>{return setChar((prev)=> !prev)}} />
      <label htmlFor="check2">Character</label>
      <button onClick={()=>{return passwordGenerator()}}>submit</button>
      
    </div>
  );
}

export default App;
