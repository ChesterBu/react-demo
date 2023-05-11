import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { memo } from 'react'
import { useTexts, log } from './utils'




const Logo = memo(()=> {
  log('Logo');
  return (
    <div className='logo'>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  )
})

const List = memo(()=>{
  log('List');
  const { data, error, loading } = useTexts()
  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return <div>{
    data?.map((i)=> <div key={i.id}>{i.title}</div>)
  }</div>
})



function App() {
  log('App');
  return (
    <>
      <Logo/>
      <div className='card'>
        <List />
      </div>
    </>
  )
}

export default App
