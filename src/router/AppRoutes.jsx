import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage";
import SelectedPizzaPage from "../pages/SelectedPizzaPage";
import BlogDetailPage from "../pages/BlogDetailPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route
        path={ROUTER.SINGLE_MENU_PAGE_ROUTE}
        element={<SelectedPizzaPage />}
      />
      <Route path={ROUTER.BLOG_PAGE_ROUTE} element={<BlogDetailPage />} />
    </Routes>
  );
};

export default AppRoutes;
