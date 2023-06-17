import "./App.css";
import "./css/styles.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./components/Root.js";
import Home from "./routes/Home.js";
import AvailableStocks from "./routes/AvailableStocks.js";
import StockInfo from "./routes/StockInfo.js";
import News from "./routes/News.js";
import About from "./routes/About.js";
import Login from "./routes/Login.js";
import Dashboard from "./routes/Dashboard.js";
import { ResetPasswordForm } from "./components/ResetPasswordForm.js";
import SignUp from "./routes/SignUp.js";
import ErrorPage from "./components/ErrorPage.js";
import Footer from "./components/Footer.js";
import ContactUs from "./routes/ContactUs.js";
import Privacy from "./routes/Privacy.js";

const router = createBrowserRouter ([
  {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          name: "Home",
          element: <Home />
        },
        {
          path: "/available-stocks",
          name: "Available Stocks",
          element: <AvailableStocks />,
        },
        {
          path: "available-stocks/stock-info/:stock",
          name: "Stock Info",
          element: <StockInfo />
        },
        {
          path: "/stock-news",
          name: "News",
          element: <News />
        },
        {
          path: "/about",
          name: "About",
          element: <About />
        },
        {
          path: "/login",
          name: "Login",
          element: <Login />
        },
        {
          path: "/dashboard",
          name: "User Dashboard",
          element: <Dashboard />
        },
        {
          path: "/reset-password",
          name: "Reset Password",
          element: <ResetPasswordForm />
        },
        {
          path: "/signup",
          name: "Sign Up",
          element: <SignUp />
        },
        {
          path: "/contact-stockstop",
          name: "Contact Us",
          element: <ContactUs />
        },
        {
          path: "/stockstop-privacy",
          name: "Privacy",
          element: <Privacy />
        }
      ],
    }
  ]);

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <div className="bottom-page-padding"></div>
      <Footer />
    </div>
  );
}