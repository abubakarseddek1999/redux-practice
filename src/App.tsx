import { Outlet } from "react-router";
import NavBar from "./components/layout/navbar";


export default function App() {
  return (
    <div>
      <NavBar />
    <Outlet />
    </div>

  )
}
