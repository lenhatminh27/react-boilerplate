import {Navigate, Outlet, useLocation} from "react-router-dom"
import {useAppSelector} from "@/stores/hooks"
import {isAuthenticated} from "@/stores/reducers/auth/auth.selectors"

const RequireAuth = () => {
    const authenticated = useAppSelector(isAuthenticated)
    const location = useLocation()

    if (!authenticated) {
        return (
            <Navigate
                to="/login"
                replace
                state={{from: location}}
            />
        )
    }

    return <Outlet/>
}

export default RequireAuth
