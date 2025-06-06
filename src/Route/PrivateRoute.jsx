// export default PrivateRoute = ({ children, allowedRoles = [] }) => {
//   const token = localStorage.getItem("token");
//   const user = JSON.parse(localStorage.getItem("user")); // assuming user info is stored after login

//   if (!token) return <Navigate to="/login" replace />;

//   if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, allowedRoles = [] }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token) return <Navigate to="/login" replace />;
  if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoute;
