import { Route, Routes } from "react-router-dom";
import LogIn from "./Pages/LogIn/LogIn";
import DashBoardLayout from "./MainLayout/DashBoardLayout";
import ContentManagement from "./Pages/ContentManagement/ContentManagement";
import ProductManagement from "./Pages/ProductManagement/ProductManagement"
import ProtectedRoute from "./Components/ProtectedRoute"
function App() {
  return (
    <Routes>
      <Route path="/" element={<LogIn />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashBoardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="content" element={<ContentManagement />} />
        <Route path="products" element={<ProductManagement />} />
      </Route>
    </Routes>
  );
}

export default App;
