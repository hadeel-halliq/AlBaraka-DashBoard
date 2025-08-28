import { Navigate, Route, Routes } from "react-router-dom";

import LogIn from "./Pages/LogIn/LogIn";
import DashBoardLayout from "./MainLayout/DashBoardLayout";
import Home from "./Pages/Home/Home";
import Product from "./Pages/Product/Product";
import Images from "./Pages/Images/Images";
import Messages from "./Pages/Messages/Messages";
import Locations from "./Pages/Locations/Locations";
import SocialLinks from "./Pages/SocialLinks/SocialLinks";
import Services from "./Pages/Services/Services";
import ProtectedRoute from "./Routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashBoardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="images" element={<Images />}/>
        <Route path="messages" element={<Messages />}/>
        <Route path="locations" element={<Locations />}/>
        <Route path="services" element={<Services/>}/>
        <Route path="social-links" element={<SocialLinks />}/>
      </Route>
    </Routes>
  );
}
export default App;
