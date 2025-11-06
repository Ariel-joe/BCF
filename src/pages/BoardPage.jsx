import React from 'react'
import ProfileCard from '../components/ProfileCard';
import { TeamMembers } from "../data/team.json";

const BoardPage = () => {
    const board = TeamMembers.filter(
        (b) => b.slug === "board" || b.slug === "both"
    );

    return (
        <>
            <section
                id="team-hero"
                className="h-[450px] flex items-center bg-neutral-50 relative text-white hero bg-cover bg-center"
                style={{ backgroundImage: 'url("/bg-board.jpg")' }}
            ></section>
            <section id="leadership" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl text-neutral-900 font-bold mb-6 marker-highlight">
                            BCF Board Members
                        </h2>
                        <p className="text-lg text-neutral-600 font-semibold max-w-2xl mx-auto">
                            The dedicated professionals who make our programs
                            possible through their expertise and commitment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {board.map((BoardMember, i) => (
                            <ProfileCard key={i} BoardMember={BoardMember} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default BoardPage