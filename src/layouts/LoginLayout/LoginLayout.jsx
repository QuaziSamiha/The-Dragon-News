import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/Shared/NavigationBar/NavigationBar";

function LoginLayout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}

export default LoginLayout;
