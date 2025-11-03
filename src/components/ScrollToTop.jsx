import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        // smooth-scroll to top on route change
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [location.pathname]);

    return null;
};

export default ScrollToTop;
