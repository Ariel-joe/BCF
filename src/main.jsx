import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "./App";
import Home from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import BoardPage from "./pages/BoardPage";
import VolunteerPage from "./pages/VolunteerPage";
import WelfarePage from "./pages/WelfarePage";
import ContactPage from "./pages/ContactPage";
import Donatepage from "./pages/Donatepage";
import SingleWelfare from "./pages/SingleWelfare";
import TeamProfile from "./pages/Teamprofile";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/board" element={<BoardPage />} />
                <Route path="/volunteer" element={<VolunteerPage />} />
                <Route path="/welfare" element={<WelfarePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/donate" element={<Donatepage />} />
                <Route path="/welfare/:id" element={<SingleWelfare />} />
                <Route path="/profile/:id" element={<TeamProfile />} />
                

            </Route>
        </Routes>
    </BrowserRouter>
);
