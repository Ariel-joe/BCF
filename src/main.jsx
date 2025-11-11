import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { App } from "./App";
import Home from "./pages/HomePage";
import TeamPage from "./pages/TeamPage";
import BoardPage from "./pages/BoardPage";
import VolunteerPage from "./pages/VolunteerPage";
import ContactPage from "./pages/ContactPage";
import DonationPage from "./pages/DonatePage";
import SingleWelfare from "./pages/SingleWelfare";
import TeamProfile from "./pages/Teamprofile";
import BlogPage from "./pages/SingleBlogPage";
import InternalWelfarePage from "./pages/InternalWelfarePage";
import FOBWelfarePage from "./pages/FOBWelfarePage";
import BlogsUpdatePage from "./pages/BlogsUpdatePage";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/team" element={<TeamPage />} />
                <Route path="/board" element={<BoardPage />} />
                <Route path="/volunteer" element={<VolunteerPage />} />

                {/* welfare links */}
                <Route
                    path="/welfare/internal"
                    element={<InternalWelfarePage />}
                />
                <Route
                    path="/welfare/friendsofbeacon"
                    element={<FOBWelfarePage />}
                />

                {/* blogs and updates */}
                <Route path="/blog" element={<BlogsUpdatePage />} />

                <Route path="/contact" element={<ContactPage />} />
                <Route path="/donate" element={<DonationPage />} />
                <Route path="/welfare/:id" element={<SingleWelfare />} />
                <Route path="/profile/:id" element={<TeamProfile />} />

                {/* view blog route */}
                <Route path="/blog/:id" element={<BlogPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
