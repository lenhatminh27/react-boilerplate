import {createBrowserRouter} from "react-router-dom"
import {MainLayout} from "@components/layouts";
import {Pages} from "@routes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Pages.Home/>
            }
        ]
    }
])
