import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { memo } from "react";
import { useTexts, log } from "./utils";
import { VirtualList } from './virtual-list'
const Logo = memo(() => {
  log("Logo");
  return (
    <div className="header">
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
  );
});

const List = memo(() => {
  log("List");
  const { data, error, loading } = useTexts();
  if (error) {
    return <div>failed to load</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div className="card">
      <VirtualList data={data} total={6000}></VirtualList>
    </div>
  );
});

function App() {
  log("App");
  return (
    <>
      <Logo />
      <List />
    </>
  );
}

export default App;
