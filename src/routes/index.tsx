import { BrowserRouter, Routes as RoutesDom, Route } from "react-router-dom";
import Root from "../pages/Root";
import HookFormRegister from "../pages/Exemples/HookFormRegister";
import BasicReactForm from "../pages/Exemples/BasicReactForm";
import HookFormZod from "../pages/Exemples/HookFormZod";

function Routes() {
  return (
    <BrowserRouter>
      <RoutesDom>
        <Route path="/" Component={Root} />
        <Route path="/basic-react-form" Component={BasicReactForm} />
        <Route path="/hook-form-register" Component={HookFormRegister} />
        <Route path="/hook-form-zod" Component={HookFormZod} />
      </RoutesDom>
    </BrowserRouter>
  );
}

export default Routes;
