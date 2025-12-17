import {Navigate, Outlet} from "react-router-dom"
import {useAppSelector} from "@/stores/hooks"
import {isAuthenticated} from "@/stores/reducers/auth/auth.selectors"

const GuestOnly = () => {
    const authenticated = useAppSelector(isAuthenticated)

    if (authenticated) {
        return <Navigate to="/" replace/>
    }

    return <Outlet/>
}

export default GuestOnly
