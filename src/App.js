import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppContainer from "./components/container/AppContainer";
import HomePage from "./pages/HomePage";
import ClientsPage from "./pages/clients/ClientsPage";
import ProductsPage from "./pages/products/ProductsPage";
import InvoicesPage from "./pages/invoices/InvoicesPage";
import InvoiceDetailPage from "./pages/invoices/InvoiceDetailPage";
import AboutPage from "./pages/about/AboutPage";
import useAppInit from "./hooks/useAppInit";
import { useEffect } from "react";

function App() {
  const { initialSetData } = useAppInit();

  useEffect(() => {
    initialSetData();
  }, [initialSetData]);

  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="clients" element={<ClientsPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="invoices">
            <Route path="" element={<InvoicesPage />} />
            <Route path=":id" element={<InvoiceDetailPage />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppContainer>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
