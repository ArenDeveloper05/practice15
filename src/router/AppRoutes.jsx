import { Route, Routes } from "react-router-dom";
import { ROUTER } from "./router";
import HomePage from "../pages/HomePage";
import SelectedPizzaPage from "../pages/SelectedPizzaPage";
<<<<<<< HEAD
import MenuPage from "../pages/MenuPage";
=======
import BlogDetailPage from "../pages/BlogDetailPage";
>>>>>>> 752e1d356b7ef37e6a21a3e9649e974a36ee511e
const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage />} />
<<<<<<< HEAD
      <Route path={ROUTER.SINGLE_MENU_PAGE_ROUTE} element={<SelectedPizzaPage />} />
      <Route path={ROUTER.MENU_PAGE_ROUTE} element={<MenuPage />}/>
      
=======
      <Route
        path={ROUTER.SINGLE_MENU_PAGE_ROUTE}
        element={<SelectedPizzaPage />}
      />
      <Route path={ROUTER.BLOG_PAGE_ROUTE} element={<BlogDetailPage />} />
>>>>>>> 752e1d356b7ef37e6a21a3e9649e974a36ee511e
    </Routes>
  );
};

export default AppRoutes;
