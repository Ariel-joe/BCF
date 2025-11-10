import { ChevronLeft, ChevronRight, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const images = [
    "/20250906_191100.jpg",
    "LEE_8770.jpg",
    "LEE_8906.jpg",
    "LEE_8919.jpg",
    "LEE_8928.jpg",
    "/LEE_8805.jpg",
    "/IMG-20250901-WA0018.jpg",
    "/LEE_8804.jpg",
    "/IMG-20250901-WA0032.jpg",
    "/IMG-20250901-WA0022.jpg",
    "/IMG-20250901-WA0029.jpg",
    "/IMG-20250901-WA0035.jpg",
];

const VolunteerGallery = () => {
    const [openSrc, setOpenSrc] = useState(null);
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        if (openSrc) {
            // trigger animation on next frame
            requestAnimationFrame(() => setAnimateIn(true));
            const onKey = (e) => {
                if (e.key === "Escape") close();
                if (e.key === "ArrowLeft") prev();
                if (e.key === "ArrowRight") next();
            };
            window.addEventListener("keydown", onKey);
            return () => window.removeEventListener("keydown", onKey);
        } else {
            setAnimateIn(false);
        }
    }, [openSrc]);

    const open = (src) => {
        setOpenSrc(src);
    };

    const close = () => {
        // play reverse animation briefly then close so it feels smooth
        setAnimateIn(false);
        // wait for the CSS transition duration (matching CSS below: 350ms)
        setTimeout(() => setOpenSrc(null), 220);
    };

    const onThumbKey = (e, src) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            open(src);
        }
    };

    const getCurrentIndex = () => images.findIndex((s) => s === openSrc);

    const prev = () => {
        if (!openSrc) return;
        const idx = getCurrentIndex();
        const prevIdx = (idx - 1 + images.length) % images.length;
        // set new src (animation handled by effect)
        setAnimateIn(false);
        setTimeout(() => setOpenSrc(images[prevIdx]), 80);
    };

    const next = () => {
        if (!openSrc) return;
        const idx = getCurrentIndex();
        const nextIdx = (idx + 1) % images.length;
        setAnimateIn(false);
        setTimeout(() => setOpenSrc(images[nextIdx]), 80);
    };

    return (
        <>
            <div className="text-center mb-16">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                    Photo Gallery
                </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((src, idx) => (
                    <div key={idx}>
                        <img
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => onThumbKey(e, src)}
                            onClick={() => open(src)}
                            className="h-full max-w-full rounded-lg cursor-pointer transform transition duration-200 hover:scale-105"
                            src={src}
                            alt={`Volunteer ${idx + 1}`}
                        />
                    </div>
                ))}
            </div>

            {openSrc && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center modal-backdrop`}
                    onClick={close}
                    aria-modal="true"
                    role="dialog"
                >
                    <div
                        className={`modal-inner p-4 rounded-lg relative`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={close}
                            aria-label="Close image"
                            className="absolute top-2 -right-1 sm:top-2 sm:-right-3 md:right-1 text-white bg-black/40 hover:bg-black/60 rounded-full p-1 z-20"
                        >
                            <X />
                        </button>

                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        prev();
                                    }}
                                    aria-label="Previous image"
                                    className="modal-nav-button absolute -left-3 top-1/2 sm:left-2 sm:top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/50 rounded-full p-2 z-20"
                                >
                                    <ChevronLeft size={32} />
                                </button>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        next();
                                    }}
                                    aria-label="Next image"
                                    className="modal-nav-button absolute -right-3 top-1/2 sm:right-2 sm:top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/50 rounded-full p-2 z-20"
                                >
                                    <ChevronRight size={32} />
                                </button>
                            </>
                        )}

                        <img
                            src={openSrc}
                            alt="Enlarged volunteer"
                            className={`modal-image block mx-auto rounded-lg shadow-lg max-h-[80vh] object-contain transform transition-[transform,opacity] duration-300 ${
                                animateIn
                                    ? "scale-100 opacity-100"
                                    : "scale-90 opacity-0"
                            }`}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default VolunteerGallery;
