import { NavLink, Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";

function RoutesLayout() {
  return (
    <div className='route-layout'>
        <header>
            <nav>
                <h1>Net Ninja React Router v6 in App_2</h1>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='careers'>Careers</NavLink>
                <NavLink to='help'>Help</NavLink>
            </nav>
            <Breadcrumbs />
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RoutesLayout
