import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProfilePage from "./pages/profile";
import CreateUserPage from "./pages/temp-create-user";

import './global-styles.scss';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          Component={ProfilePage}
          />

        <Route 
          path="/create/user"
          Component={CreateUserPage}
          />
      </Routes>
    </BrowserRouter>
  );
}