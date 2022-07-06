import { Fragment } from "react";
import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { PATH_NAME } from "../configs";
import { GuestGuard } from "../guards/GuestGuard/GuestGuard";

// lazy
const PageButton = lazy(() => import("../components/Button/index").then(res => ({
    default: res.ButtonDemo,
})));
const routes = [
  {
    path: PATH_NAME.HOME,
    element: PageButton,
    guard: GuestGuard
  },
];
const MainRouter = () => (
  <Router>
    <Suspense fallback={<div />}>
      <Routes>
        {routes.map((routeItem, routeIndex) => {
          let { element, layout, guard, path } = routeItem;
          const Component = element;
          const Layout = layout || Fragment;
          const Guard = guard || Fragment;

          return (
            <Route
              key={routeIndex}
              path={path}
              element={
                <Guard>
                  <Layout>
                    <Component />
                  </Layout>
                </Guard>
              }
            />
          );
        })}
      </Routes>
    </Suspense>
  </Router>
);

export {
    MainRouter
}