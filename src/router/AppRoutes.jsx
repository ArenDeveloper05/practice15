import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage";
import SelectedPizzaPage from "../pages/SelectedPizzaPage";
const AppRoutes = () => {

  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={ROUTER.SINGLE_MENU_PAGE_ROUTE} element={<SelectedPizzaPage />} />
    </Routes>
  );
};

export default AppRoutes;
