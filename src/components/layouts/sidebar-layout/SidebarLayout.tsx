import Sider from "./Sider.tsx";
import {Outlet} from "react-router-dom";

const SidebarLayout = () => {
    return <>
        <Sider/>
        <Outlet/>
    </>
}

export default SidebarLayout