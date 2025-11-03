import React from "react";

const ProfileCard = ({ BoardMember }) => {
    const { name, title, description, image } = BoardMember;
    return (
        <>
            <div className="text-center bg-neutral-50 p-8 rounded-lg">
                <img
                    src={image}
                    alt="Executive Director"
                    className="w-32 h-32 rounded-full mx-auto mb-6"
                />
                <h3 className="text-xl text-neutral-900 mb-2">{name}</h3>
                <p className="text-neutral-600 mb-4">{title}</p>
                <p className="text-sm text-neutral-600 mb-4">{description}</p>
                <div className="flex justify-center space-x-3">
                    <i className="fa-brands fa-linkedin text-neutral-600 hover:text-neutral-900 cursor-pointer"></i>
                    <i className="fa-solid fa-envelope text-neutral-600 hover:text-neutral-900 cursor-pointer"></i>
                </div>
            </div>
        </>
    );
};

export default ProfileCard;
