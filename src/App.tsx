import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home";

import './global-styles.scss';

export default function App() {
  return (
    <BrowserRouter>
      {/* <Route 
        path="/"
        Component={Home}
        />     */}

        <Home />
    </BrowserRouter>
  );
}