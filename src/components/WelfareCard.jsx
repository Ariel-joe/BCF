import React from "react";
import { Link } from "react-router";

const WelfareCard = ({ welfare }) => {

    const { image, title, status, date, about, progress, budget, id } = welfare;
    return (
        <>
            <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-neutral-400 h-48 flex items-center justify-center">
                    <img src={image} alt="welfare image" />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-neutral-100 text-neutral-800 text-sm rounded-full">
                            {status}
                        </span>
                        <span className="text-neutral-500 text-sm">{date}</span>
                    </div>
                    <h3 className="text-xl text-neutral-900 mb-3">{title}</h3>
                    <p className="text-neutral-600 mb-4">{about}</p>
                    <div className="mb-4">
                        <div className="flex justify-between text-sm text-neutral-600 mb-1">
                            <span>Progress</span>
                            <span>{progress}%</span>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                            <div className="bg-neutral-900 h-2 rounded-full w-2/3"></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-neutral-600">
                            Budget: Ksh {budget}
                        </span>
                        <Link to={`/welfare/community/${id}`}>
                            <button className="px-4 py-2 bg-neutral-900 text-white rounded-md text-sm hover:bg-neutral-800">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WelfareCard;
