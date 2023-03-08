import {BrowserRouter Routes, Route } from "react-router-dom";
import Error from "../views/Error/Error";
import Home from "../views/home";

const RoutesProvider = () => {
  return (
    <Routes>
    <Route path="/" component={<Home/>} />
    <Route path="*" component={<Error/>} />
    </Routes>
  );
};
export default RoutesProvider;
