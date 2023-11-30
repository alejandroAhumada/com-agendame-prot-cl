import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({ path, element }) => {
  // Verifica si el usuario tiene un token válido
  const isAuthenticated = !!localStorage.getItem("firebaseToken");

  return isAuthenticated ? (
    <Route path={path} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
