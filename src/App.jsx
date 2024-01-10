import { useState, useRef, useCallback, useEffect } from 'react'

// import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [isNum, setIsNum] = useState(false)
  const [isChar, setIsChar] = useState(false)
  const [password, setPassword] = useState('')


  console.log('');
  // now i am gonna write a method to generate password
  const letPass = useCallback(() => {
    // console.log('it me being called')
    let pass = ""
    let str = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"

    if (isNum) str += "1234567890"
    if (isChar) str += "!@#$%^&*"

    for (let i = 1; i < length; i++) {
      let Char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(Char)
      // console.log(pass);
    }

    setPassword(pass)
  }, [isChar, isNum, length])

  useEffect(() => {
    letPass()
  }, [isChar, length, isNum])

  const getCoppied = async () => {
    await window.navigator.clipboard.writeText(password)
    console.log(await window.navigator.clipboard.read().then((data)=>console.log(data)))
    // alert('successFully Copied'+ copiedPass)
  }
  return (
    <main className='flex  justify-center p- bg-slate-500 h-screen'>
      
        <div className='bg-amber-500 w-1/2 h-1/2 self-center flex justify-center items-center flex-col '>
        <h1 className='text-3xl font-semibold self-center text-white'>This is password generator</h1>
         
          <div className=' w-full p-2'>
            <div className=' '>
            <input className='p-4 text-2xl  w-5/6  shadow-blue-800  shadow-inner' type="text" readOnly value={password} />

            <button className='bg-purple-500 p-2  text-3xl self-center text-white font-bold' onClick={getCoppied}>COPY</button>

            </div>
          </div>

          <div className='mt-3 space-x-2 w-full p-2  text-white'>
            <input className='w-full border-4  ' type="range" id="numRange" name="range" min="0" max="50" value={length} onChange={(e) => {
              setLength(e.target.value)

            }} />

            <label className='text-2xl' htmlFor="">{length} Characters </label>
          </div>

          <div className='flex gap-x-3 m-2 text-white text-3xl '>
            {/* selection division */}
            <div>
              <input className='h-6 w-6 mr-2' type="checkbox" name="" id="number"
                onChange={(e) => {
                  setIsNum((prev) => !prev)
                }}
              />
              <label  htmlFor="">Number</label>
            </div>

            <div>
              <input  className='h-6 w-6 mr-2' type="checkbox" name="" id="specialChar"
                onChange={(e) => {
                  setIsChar((prev) => !prev)
                }}
              />
              <label htmlFor="">Special Character</label>
            </div>

          </div>
        </div>
     
    </main>
  )
}

export default App
