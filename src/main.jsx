import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "./App";
import Home from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import BoardPage from "./pages/BoardPage";
import VolunteerPage from "./pages/VolunteerPage";
import ContactPage from "./pages/ContactPage";
import Donatepage from "./pages/Donatepage";
import SingleWelfare from "./pages/SingleWelfare";
import TeamProfile from "./pages/Teamprofile";
import BlogPage from "./pages/SingleBlogPage";
import InternalWelfarePage from "./pages/InternalWelfarePage";
import FOBWelfarePage from "./pages/FOBWelfarePage";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/board" element={<BoardPage />} />
                <Route path="/volunteer" element={<VolunteerPage />} />

                {/* welfare links */}
                <Route path="/welfare/internal" element={<InternalWelfarePage />} />
                <Route path="/welfare/friendsofbeacon" element={<FOBWelfarePage />} />

                
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/donate" element={<Donatepage />} />
                <Route path="/welfare/:id" element={<SingleWelfare />} />
                <Route path="/profile/:id" element={<TeamProfile />} />

                {/* blo route */}
                <Route path="/blog/:id" element={<BlogPage />} />
                

            </Route>
        </Routes>
    </BrowserRouter>
);
