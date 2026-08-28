import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({children}: {children: React.ReactNode}) {
    const { user, isLoading } = useAuth();

    // 1. While AuthContext is still checking localStorage, show a loader or nothing
    if (isLoading) {
        return <div>Loading session...</div>; 
    }

    // 2. Once loaded, if no user, redirect to login
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // 3. If user exists, render the protected pages
    return children
}

export default ProtectedRoute;
