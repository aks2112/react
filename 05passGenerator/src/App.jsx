import { useCallback, useEffect, useState,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumber]=useState(false)
  const [charAllowed,setChar]=useState(false)
  const [password,setPassword]=useState("")

  const passRef=useRef(null)

  const passGenerator = useCallback(() =>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if(numberAllowed) str += "0123456789"

    if(charAllowed) str += "!@#$%^&*{}~"

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()* str.length +1)

      pass += str.charAt(char)

    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClibboard=useCallback(()=>{
    passRef.current?.select()
    passRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect ( ()=>{
    passGenerator()
  },[length,numberAllowed,charAllowed,passGenerator])

  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      
          <h1 className=' text-white text-center'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
              <input 
              type='text'
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
              ref={passRef}
              />
              <button
              onClick={copyPasswordToClibboard}
               className=' outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'>Copy</button>
              </div>
              <div className=' flex text-sm gap-x-2'>
                <div className=' flex items-center gap-x-1'>
                  <input type="range"
                  min={6}
                  max={90}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e)=> {setLength(e.target.value)}}
                  />
                  <label>lenght :{length}</label>
                </div>
                <div className=' flex items-center gap-x-1'>
                  <input
                  type='checkbox'
                  defaultChecked={numberAllowed}
                  id='numberInput'
                  onChange={ ()=>
                  { setNumber((prev)=>!prev)}}
                  />
                  <label htmlFor="">Numbers</label>
                </div>
                <div className=' flex items-center gap-x-1'>
                  <input
                  type='checkbox'
                  defaultChecked={charAllowed}
                  id='characterInput'
                  onChange={ ()=>
                  { setChar((prev)=>!prev)}}
                  />
                  <label htmlFor="">Characters</label>
                </div>
              </div>
        </div>
      
    </>
  )
}

export default App
