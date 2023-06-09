import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import ContactPage from "./Pages/ContactPage";
import SignUpPage from "./Pages/SignUpPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ReferPage from "./Pages/ReferPage";
import { SnackbarProvider } from "notistack";
import AdminLogin from "./Pages/AdminLogin";
import DashboardPage from "./Pages/DashboardPage";

function App() {
    return (
        <>
            <SnackbarProvider maxSnack={3}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<LandingPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route
                            path="/affiliate-program"
                            element={<ReferPage />}
                        />
                        <Route path="/sign-up" element={<SignUpPage />} />
                        <Route path="/admin" element={<DashboardPage />} />
                        <Route path="/admin/login" element={<AdminLogin />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </SnackbarProvider>
        </>
    );
}

export default App;
