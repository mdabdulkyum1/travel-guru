import { Outlet } from "react-router-dom"


function MainLayout() {
  return (
    <div>
        <Outlet></Outlet>
    </div>
  )
}

export default MainLayout