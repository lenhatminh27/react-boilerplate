import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import {Outlet} from "react-router-dom";
import {Suspense} from "react";

const MainLayout = () => {
    return <>
        <Header/>
        <Suspense fallback={<div>Loading....</div>}>
            <Outlet/>
        </Suspense>
        <Footer/>
    </>
}

export default MainLayout