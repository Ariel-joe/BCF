import React from "react";
import { Link } from "react-router";

const ProfileCard = ({ BoardMember }) => {
    const { name, title, image, id } = BoardMember;
    return (
        <>
            <div className="text-left bg-neutral-50 p-8 rounded-lg">
                <img
                    src={image}
                    alt="Executive Director"
                    className="w-32 h-32 rounded-full mx-auto mb-6"
                />
                <div className="border-l-4 pl-2 border-neutral-400">
                    <h3 className="text-2xl text-black font-semibold mb-2">
                        {name}
                    </h3>
                    <p className="text-neutral-500 mb-4">{title}</p>
                </div>

                <Link to={`/profile/${id}`}>
                    <button className="text-lg p-1.5 w-full bg-(--color-logo-orange) text-white rounded-sm">
                        Bio
                    </button>
                </Link>

                <div className="flex justify-center space-x-3">
                    <i className="fa-brands fa-linkedin text-neutral-600 hover:text-neutral-900 cursor-pointer"></i>
                    <i className="fa-solid fa-envelope text-neutral-600 hover:text-neutral-900 cursor-pointer"></i>
                </div>
            </div>
        </>
    );
};

export default ProfileCard;
