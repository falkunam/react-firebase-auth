import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import ForgotPassword from "./pages/forgotPassword";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import RequireUser from "./firebase/requireUser";
import NonUser from "./firebase/nonUser";
import EmailSignIn from "./pages/email-sign-in";
import PhoneNumber from "./pages/phone-number";
import Document from "./document";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/email-sign-in" element={<EmailSignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/phone-auth" element={<PhoneNumber />} />
        <Route path="/document" element={<Document/>} />
        <Route
          path="/dashboard"
          element={
            <RequireUser>
              <Dashboard />
            </RequireUser>
          }
        />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;