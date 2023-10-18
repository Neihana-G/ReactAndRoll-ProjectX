import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { authed, loadingState } = useAuth();

    if (loadingState) {
        return '';
    }

    return authed === 'teacher'  ? <Outlet /> : <Navigate to="/" replace={true} />;
};

export default ProtectedRoute;
