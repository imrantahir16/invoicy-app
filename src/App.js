import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import AppContainer from "./components/container/AppContainer";
import HomePage from "./pages/HomePage";
// import { useState } from "react";
// import ClientTable from "./components/clients/ClientTable";
// import QuickAddClient from "./components/clients/QuickAddClient";
// // eslint-disable-next-line
// import PageLoading from "./components/common/PageLoading";
// import Button from "./components/UI/Button";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
