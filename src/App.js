import { useState } from "react";
import PageLoading from "./components/common/PageLoading";
import Button from "./components/UI/Button";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const menuOpen = () => {
    setIsMenuOpen((prevState) => {
      prevState = !prevState;
      return prevState;
    });
  };
  return (
    <div className="">
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
          <div className="mt-3 flex align-center justify-center">
            <Button outlined={1} success={1}>
              Click me
            </Button>
          </div>
          <PageLoading />
        </div>
      </div>
    </div>
  );
}

export default App;
