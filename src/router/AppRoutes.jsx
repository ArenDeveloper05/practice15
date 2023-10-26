import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage";
import SelectedPizzaPage from "../pages/SelectedPizzaPage";
import BlogLeftSidePage from "../pages/BlogLeftSidePage";
import BlogRightSidePage from "../pages/BlogRightSidePage";
import MenuPage from "../pages/MenuPage";
import BlogDetailPage from "../pages/BlogDetailPage";
import ReservationPage from "../pages/ReservationPage";
import ErrorPage from "../pages/ErrorPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route
        path={ROUTER.SINGLE_MENU_PAGE_ROUTE}
        element={<SelectedPizzaPage />}
      />
      <Route
        path={ROUTER.BLOG_LEFTSIDE_PAGE_ROUTE}
        element={<BlogLeftSidePage />}
      />
      <Route
        path={ROUTER.BLOG_RIGHTSIDE_PAGE_ROUTE}
        element={<BlogRightSidePage />}
      />
      <Route path={ROUTER.MENU_PAGE_ROUTE} element={<MenuPage />} />
      <Route path={ROUTER.BLOG_PAGE_ROUTE} element={<BlogDetailPage />} />
      <Route
        path={ROUTER.RESERVATION_PAGE_ROUTE}
        element={<ReservationPage />}
      />
      <Route
        path={ROUTER.ERROR_PAGE_ROUTE}
        element={<ErrorPage/>}
      />
    </Routes>
  );
};

export default AppRoutes;
