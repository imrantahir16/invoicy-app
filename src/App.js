import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import AppContainer from "./components/container/AppContainer";
import HomePage from "./pages/HomePage";
import ClientsListPage from "./pages/clients/ClientListPage";
import ProductListPage from "./pages/products/ProductListPage";
import InvoicesListPage from "./pages/invoices/InvoicesListPage";
import InvoiceDetailPage from "./pages/invoices/InvoiceDetailPage";
import AboutPage from "./pages/products/about/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="clients" element={<ClientsListPage />} />
          <Route path="products" element={<ProductListPage />} />
          <Route path="invoices">
            <Route path="" element={<InvoicesListPage />} />
            <Route path=":id" element={<InvoiceDetailPage />} />
          </Route>
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
