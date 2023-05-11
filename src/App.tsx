import { useCallback, useState, memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useSWR from 'swr'


const SendButton = memo((props: any)=> {
  console.log('SendButton  update')
  return (
    <button onClick={props.sendCount}>
        + 
    </button>
  )
}) 


function App() {
  const [count, setCount] = useState(0)

  const sendCount = useCallback(()=>{
    setCount((count) => count + 1)
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>
          count is {count}
        </button>
        <SendButton sendCount={sendCount}></SendButton>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
