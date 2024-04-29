import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AlreadySigninRoute = ({ children }) => {
  const { token } = useAuth();
  const navigate = useNavigate();

  return <>{!token ? children : navigate("/")}</>;
};

export default AlreadySigninRoute;
