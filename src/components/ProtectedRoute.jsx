import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, allowedRoles = [] }) {
    const token = localStorage.getItem("token");
    const raw = localStorage.getItem("user");
    let user = null;

    try { user = raw ? JSON.parse(raw) : null; } catch { user = null; }

    if (!token || !user) return <Navigate to="/login" replace />;
    if (allowedRoles.length && !allowedRoles.includes(user.role)) {
        return <Navigate to="/" replace />;
    }
    return children;
}
