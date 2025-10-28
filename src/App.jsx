import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <div>
            <div className="relative w-full">
                <Header />
            </div>

            {/* ensure page resets to top on navigation */}
            <ScrollToTop />
            <main className="pt-20">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export { App };
