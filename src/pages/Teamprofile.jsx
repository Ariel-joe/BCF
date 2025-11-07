import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router";
import TeamData from "../data/team.json";

const { TeamMembers } = TeamData;

const TeamProfile = () => {
    const params = useParams();
    const id = params?.id;

    // find the welfare item by id (ids in JSON are numbers)
    const member = TeamMembers.find((t) => String(t.id) === String(id));

    if (!member) {
        return (
            <section className="py-24">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-2xl font-semibold">
                        Profile not found
                    </h2>
                    <p className="mt-4 text-neutral-600">
                        No Profile matches the id in the URL.
                    </p>
                    <Link
                        to="/team"
                        className="inline-block mt-6 text-blue-600 underline"
                    >
                        Back to team
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <>
            <section id="bio-hero" className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12 items-start">
                        <div className="lg:col-span-1">
                            <div className="bg-white text-center sticky top-24">
                                <img
                                    src={member.image}
                                    alt="Sarah Kimani"
                                    className="w-70 h-70 mx-auto "
                                />

                                
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="prose prose-lg max-w-none">
                                <h1 className="text-3xl text-(--color-logo-orange) font-bold mb-2">
                                    {member.name}
                                </h1>
                                <p className="text-lg text-neutral-600 font-semibold mb-4">
                                    {member.title}
                                </p>
                                

                                <p className="text-lg text-neutral-500 mb-8 px-3 text-justify leading-relaxed">
                                    {member.description}
                                </p>
                                <Link
                                    to={"/team"}
                                    className="text-white bg-(--color-logo-orange) w-[50%] p-2 rounded-lg hover:text-neutral-900 text-lg flex items-center justify-center"
                                >
                                    <ArrowLeft size={22} className="mr-2" />
                                    Back to Team
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamProfile;
