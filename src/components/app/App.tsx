import { Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import { MainPage, MainProdPage, ProductsList, NotFoundPage, HelpPage } from "../pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/products/mens" element={<ProductsList />} />
        <Route path="/products/mens/sale" element={<ProductsList />} />
        <Route path="/products/womens" element={<ProductsList />} />
        <Route path="/products/womens/sale" element={<ProductsList />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
