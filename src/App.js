import { useState } from "react";
import "./App.css";
import Button from "./components/button/Button";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const menuOpen = () => {
    setIsMenuOpen((prevState) => {
      prevState = !prevState;
      return prevState;
    });
  };
  return (
    <div className="App">
      <header className={isMenuOpen ? "header header-nav-open" : "header"}>
        <button onClick={menuOpen}>Menu</button>
        <span>Invoicy</span>
        <button>Setting</button>
      </header>
      <div>
        <nav className={isMenuOpen ? "nav" : "nav-closed"}>
          <ul>
            <li>Dashboard</li>
            <li>invoices</li>
            <li>Clients</li>
            <li>Products</li>
          </ul>
        </nav>
        <div
          className={
            isMenuOpen ? "dashboard dashboard-nav-opened" : "dashboard"
          }
        >
          Dashboard content
          <Button size="small">Click me</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
