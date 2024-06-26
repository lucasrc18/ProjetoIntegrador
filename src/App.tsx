import { BrowserRouter, Route, Routes } from "react-router-dom";

import ErrorPage from "./pages/error";
import Home from "./pages/home";
import HomeHandler from "./pages/HomeHandler";
import Profile from "./pages/profile";
import Store from "./pages/store";
import Tasks from "./pages/tasks";
import Social from "./pages/social";

import AuthContext from "./context/AuthContext";
import './global-styles.scss';

export default function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            Component={HomeHandler}
          />

          <Route
            path="/error/:ErrorCode"
            Component={ErrorPage}
          />

          <Route
            path="/login"
            Component={Home}
          />

          <Route
            path="/register"
            Component={Home}
          />

          <Route
            path="/tasks"
            Component={Tasks}
          />

          <Route
            path="/profile"
            Component={Profile}
          />

          <Route
            path="/store"
            Component={Store}
          />

          <Route
            path="/social"
            Component={Social}
          />

          {/* Error 404 page not found */}
          <Route
            path="*"
            Component={ErrorPage}
          />
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
}