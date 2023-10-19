import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    //Gets if user is logged in from context, if it is loading then it shows nothing
    const { authed, loadingState } = useAuth();

    if (loadingState) {
        return "";
    } else {
        return authed === "teacher" ? (
            <Outlet />
        ) : (
            <Navigate to="/" replace={true} />
        );
    }
};

export default ProtectedRoute;
