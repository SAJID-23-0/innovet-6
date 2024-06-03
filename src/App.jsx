import Layouts from "./components/Layouts";
import About from "./pages/About";
import Home from "./pages/Home";

// =========== element ======
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// =========== element ======

// =========== object ======
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// =========== object ======

function App() {
  // ===== element ============
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layouts />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
    )
  );
  // ===== element ============
  // ===== object ============
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layouts />,
  //   },
  //   {
  //     path: "index",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/about",
  //     element: <About />,
  //   },
  // ]);
  // ===== object ============
  return <RouterProvider router={router} />;
}

export default App;
