import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  console.log("user in private route : ", user);
  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
}

export default PrivateRoute;

/**
 * ---------------
 *      steps
 * ---------------
 * 1. check user is logged in or not
 * 2. if user is logged in , then allow them to visit the route
 * 3. else redirect the user to the login page
 * 4. set up private router
 * 5. hadndle loading
 */
