import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import ProfilePage from "./pages/profile";

import createUser from "./factory/createUser";
import ErrorPage from "./pages/error";
import Home from "./pages/home";
import HomeHandler from "./pages/HomeHandler";

import AuthContext from "./context/AuthContext";
import './global-styles.scss';

export default function App() {

  createUser("Lucas", "lucas@gmail.com", "lucas123", "Lucas20");

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
            Component={
              function () {
                return (
                  <div id="page">
                    <Header />

                    <h1>Tarefas</h1>
                  </div>
                )
              }
            }
          />

          <Route
            path="/profile"
            Component={ProfilePage}
          />

          <Route
            path="/store"
            Component={
              function () {
                return (
                  <div id="page">
                    <Header />

                    <h1>Loja</h1>
                  </div>
                )
              }
            }
          />

          <Route
            path="/social"
            Component={
              function () {
                return (
                  <div id="page">
                    <Header />

                    <h1>Amigos</h1>
                  </div>
                )
              }
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext>
  );
}