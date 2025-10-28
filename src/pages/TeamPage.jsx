import React from 'react'

const TeamPage = () => {
  return (
      <>
          <section
              id="team-hero"
              className="h-[400px] flex items-center bg-neutral-50 relative text-white hero bg-cover bg-center"
              
              style={{ backgroundImage: 'url("/team.JPG")' }}
          >
              
          </section>
          <section id="leadership" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center mb-16">
                      <h2 className="text-3xl text-neutral-900 font-bold mb-6 marker-highlight">
                          Leadership Team
                      </h2>
                      <p className="text-lg text-neutral-600 font-semibold max-w-2xl mx-auto">
                          Our experienced leaders guide our organization with
                          vision, integrity, and unwavering commitment to our
                          cause.
                      </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      <div className="text-center bg-neutral-50 p-8 rounded-lg">
                          <img
                              src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=12345"
                              alt="Executive Director"
                              className="w-32 h-32 rounded-full mx-auto mb-6"
                          />
                          <h3 className="text-xl text-neutral-900 mb-2">
                              Sarah Johnson
                          </h3>
                          <p className="text-neutral-600 mb-4">
                              Executive Director
                          </p>
                          <p className="text-sm text-neutral-600 mb-4">
                              15+ years in nonprofit leadership, passionate
                              about community development and sustainable
                              change.
                          </p>
                          <div className="flex justify-center space-x-3">
                              <i className="fa-brands fa-linkedin text-neutral-600 hover:text-neutral-900 cursor-pointer"></i>
                              <i className="fa-solid fa-envelope text-neutral-600 hover:text-neutral-900 cursor-pointer"></i>
                          </div>
                      </div>
                      <div className="text-center bg-neutral-50 p-8 rounded-lg">
                          <img
                              src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=67890"
                              alt="Program Director"
                              className="w-32 h-32 rounded-full mx-auto mb-6"
                          />
                          <h3 className="text-xl text-neutral-900 mb-2">
                              Michael Chen
                          </h3>
                          <p className="text-neutral-600 mb-4">
                              Program Director
                          </p>
                          <p className="text-sm text-neutral-600 mb-4">
                              Expert in program development and community
                              outreach with a focus on education initiatives.
                          </p>
                          <div className="flex justify-center space-x-3">
                              <i className="fa-brands fa-linkedin text-neutral-600 hover:text-neutral-900 cursor-pointer"></i>
                              <i className="fa-solid fa-envelope text-neutral-600 hover:text-neutral-900 cursor-pointer"></i>
                          </div>
                      </div>
                      <div className="text-center bg-neutral-50 p-8 rounded-lg">
                          <img
                              src="https://api.dicebear.com/7.x/notionists/svg?scale=200&seed=11111"
                              alt="Operations Manager"
                              className="w-32 h-32 rounded-full mx-auto mb-6"
                          />
                          <h3 className="text-xl text-neutral-900 mb-2">
                              Emily Rodriguez
                          </h3>
                          <p className="text-neutral-600 mb-4">
                              Operations Manager
                          </p>
                          <p className="text-sm text-neutral-600 mb-4">
                              Ensures smooth daily operations and coordinates
                              volunteer activities across all programs.
                          </p>
                          <div className="flex justify-center space-x-3">
                              <i className="fa-brands fa-linkedin text-neutral-600 hover:text-neutral-900 cursor-pointer"></i>
                              <i className="fa-solid fa-envelope text-neutral-600 hover:text-neutral-900 cursor-pointer"></i>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}

export default TeamPage