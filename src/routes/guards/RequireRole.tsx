import {Navigate, Outlet} from "react-router-dom"
import {useAppSelector} from "@/stores/hooks"
import {getUserRole, isAuthenticated,} from "@/stores/reducers/auth/auth.selectors"

interface Props {
    allowedRoles: string[];
}

const RequireRole = ({allowedRoles}: Props) => {
    const authenticated = useAppSelector(isAuthenticated)
    const roles = useAppSelector(getUserRole)

    if (!authenticated) {
        return <Navigate to="/login" replace/>
    }

    if (
        !roles ||
        roles.length === 0 ||
        !roles.some((r) => allowedRoles.includes(r))
    ) {
        return <Navigate to="/403" replace/>
    }

    return <Outlet/>
}

export default RequireRole
