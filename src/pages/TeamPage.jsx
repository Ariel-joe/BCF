import React, { useEffect } from 'react'
import ProfileCard from '../components/ProfileCard';
import { useProfileStore } from "../stores/profileStore";

const TeamPage = () => {
    const { loading, fetchProfiles, profilesData } = useProfileStore();
        const [fetchAttempted, setFetchAttempted] = React.useState(false)
    
        useEffect(() => {
            fetchProfiles();
            setFetchAttempted(true);
        }, []);
    
        if (loading || !fetchAttempted) {
            return (
                <div className="flex items-center justify-center h-screen">
                    loading...
                </div>
            );
        }


    const team = profilesData.filter(
        (b) => b.slug === "team" || b.slug === "both"
    );
  return (
      <>
          <section
              id="team-hero"
              className="h-[450px] flex items-center bg-neutral-50 relative text-white hero bg-cover bg-center"
              style={{ backgroundImage: 'url("/team.jpg")' }}
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
                      {team.map((TeamMember, i) => (
                          <ProfileCard key={i} BoardMember={TeamMember} />
                      ))}
                  </div>
              </div>
          </section>
      </>
  );
}

export default TeamPage