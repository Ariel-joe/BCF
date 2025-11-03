import React from 'react'
import ProfileCard from '../components/ProfileCard';
import { TeamMembers } from "../data/team.json";

const TeamPage = () => {
  return (
      <>
          <section
              id="team-hero"
              className="h-[450px] flex items-center bg-neutral-50 relative text-white hero bg-cover bg-center"
              style={{ backgroundImage: 'url("/team.JPG")' }}
          ></section>
          <section id="leadership" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center mb-16">
                      <h2 className="text-2xl text-neutral-900 font-bold mb-6 marker-highlight">
                          BCF Leadership Team
                      </h2>
                      <p className="text-lg text-neutral-600 font-semibold max-w-2xl mx-auto">
                          Our experienced leaders guide our organization with
                          vision, integrity, and unwavering commitment to our
                          cause.
                      </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {TeamMembers.map((TeamMember, i) => (
                          <ProfileCard key={i} BoardMember={TeamMember} />
                      ))}
                  </div>
              </div>
          </section>
      </>
  );
}

export default TeamPage