import React from "react";
import { Link } from "react-router";

const ProfileCard = ({ BoardMember }) => {
    const { name, position, image, _id } = BoardMember;
    return (
        <>
            <div className="text-left bg-neutral-100 p-8 rounded-lg">
                <img
                    src={image}
                    alt="Executive Director"
                    className="w-42 h-42 rounded-full mx-auto mb-6"
                />
                <div className="border-l-4 pl-2 border-black">
                    <h3 className="text-2xl text-black font-semibold mb-2">
                        {name}
                    </h3>
                    <p className="text-neutral-500 mb-4">{position}</p>
                </div>

                <Link to={`/profile/${_id}`}>
                    <button className="text-lg py-1 w-full bg-(--color-logo-orange) text-white rounded-sm">
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
