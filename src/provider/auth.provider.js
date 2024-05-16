import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const useAuth = () => {
  // const token = localStorage.getItem("userTokenId");
  const token = Cookies.get("token");
  const user = { logged: token ? true : false };
  return user && user.logged;
};

const Authentication = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default Authentication;
