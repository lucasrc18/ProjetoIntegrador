import { BrowserRouter } from "react-router-dom";
import Profile from "./pages/profile";

import './global-styles.scss';

export default function App() {
  return (
    <BrowserRouter>
      {/* <Route 
        path="/"
        Component={Home}
        />     */}

        <Profile />
    </BrowserRouter>
  );
}