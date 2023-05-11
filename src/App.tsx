import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { memo } from 'react'
import { useTexts, log } from './utils'




const Logo = memo(()=> {
  log('Logo');
  return (
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  )
})


function App() {
  log('App');
  console.log(useTexts())
  return (
    <>
      <Logo />
      <h1>Vite + React</h1>
      <div className="card">
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
