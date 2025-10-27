import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
    return (
        <div>
            <div className="relative w-full">
                <Header />
            </div>

            <main className="pt-20">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export { App };
