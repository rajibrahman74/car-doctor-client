import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center h-[30vh]">
        <progress className="progress w-56 my-auto"></progress>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoutes;