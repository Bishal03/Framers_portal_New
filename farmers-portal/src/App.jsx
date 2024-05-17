import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import Home from "./pages/Home";
// import Navbar from './components/Navbar'
import Menu from "./components/Menu";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Login from "./pages/Login";
import CropManagement from "./pages/Agriculture/CropManagement";
import Soildetails from "./pages/Agriculture/Soildetails";
import Footer from './components/Footer'
import Fertilizer from "./pages/Agriculture/Fertilizer";
import IrrigatedView from "./pages/MapView/IrrigatedView";
import AgriculturalLand from "./pages/MapView/AgriculturalLand";
import Landing from "./pages/Landing"
import SignUp from './pages/SignUp'
import Hero from "./components/Hero";
import Weather from "./pages/Weather/Weather";
import DiseaseDetect from "./pages/Agriculture/DiseaseDetect";


function App() {
  const Layout =()=> {

    return (
      <div className="bg-backgroundcolor w-full">
          {/* Navbar */}
          {/* Menu */}
          <Menu />
          {/* Main content */}
          <Hero/>
          <div className="flex flex-col lg:flex-row lg:space-x-4 p-2">
              {/* Left sidebar */}
              <div className="lg:w-1/5">
                  <LeftSidebar />
              </div>
              {/* Content area */}
              <div className="lg:w-3/5 mt-2">
                  <Outlet />
              </div>
              {/* Right sidebar */}
              <div className="lg:w-1/5 hidden lg:block">
                  <RightSidebar />
              </div>
          </div>
          {/* Footer */}
          <Footer />
      </div>
  );
  };
  const router = createBrowserRouter([
    {
      path: "/home",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/home/crop-management",
          element: <CropManagement/>,
        },
        {
          path: "/home/disease-predict",
          element: <DiseaseDetect/>,
        },
        {
          path: "/home/soil-details",
          element: <Soildetails/>,
        },
        {
          path: "/home/fertilizer-recommendation",
          element: <Fertilizer/>,
        },
        {
          path: "/home/irrigated-unirrigated",
          element: <IrrigatedView/>,
        },
        {
          path: "/home/agricultural-land",
          element: <AgriculturalLand/>,
        },
        {
          path: "/home/weather",
          element: <Weather/>,
        }
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path :"/signup",
      element: <SignUp/>
    },
    {
      path: "/",
      element: <Landing />
    },
    
  ]);

  return <RouterProvider router={router} />;
}

export default App;
