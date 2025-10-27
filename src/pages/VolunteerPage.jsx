import { Calendar, ChartAreaIcon, Clock, GraduationCap, Hammer, Handshake, Heart, Laptop, Users, UsersIcon } from 'lucide-react';
import React from 'react'

const VolunteerPage = () => {
  return (
      <>
          <section id="volunteers" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center mb-16">
                      <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                          Our Volunteers
                      </h2>
                      <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                          The heart of our organization - passionate individuals
                          who dedicate their time and skills to make a
                          difference.
                      </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                      <div className="text-center">
                          <div className="w-16 h-16 bg-(--color-logo-orange) rounded-full flex items-center justify-center mx-auto mb-4">
                              <UsersIcon size={30} color='white' />
                          </div>
                          <h3 className="text-xl text-neutral-900 mb-2">150+</h3>
                          <p className="text-neutral-600">Active Volunteers</p>
                      </div>
                      <div className="text-center">
                          <div className="w-16 h-16 bg-(--color-logo-orange) rounded-full flex items-center justify-center mx-auto mb-4">
                              <Clock size={30} color='white' />
                          </div>
                          <h3 className="text-xl text-neutral-900 mb-2">2,500+</h3>
                          <p className="text-neutral-600">
                              Hours Contributed Monthly
                          </p>
                      </div>
                      <div className="text-center">
                          <div className="w-16 h-16 bg-(--color-logo-orange) rounded-full flex items-center justify-center mx-auto mb-4">
                              <Heart size={30} color='white' />
                          </div>
                          <h3 className="text-xl text-neutral-900 mb-2">25+</h3>
                          <p className="text-neutral-600">Different Skill Areas</p>
                      </div>
                  </div>
                  <div className="bg-neutral-50 p-8 rounded-lg">
                      <h3 className="text-xl text-neutral-900 mb-6 font-semibold text-center">
                          Volunteer Opportunities
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          <div className="bg-white p-6 rounded-lg">
                              <GraduationCap />
                              <h4 className="text-lg font-medium text-neutral-900 mb-2">
                                  Education Support
                              </h4>
                              <p className="text-sm text-neutral-600">
                                  Tutoring, mentoring, and educational program
                                  assistance.
                              </p>
                          </div>
                          <div className="bg-white p-6 rounded-lg">
                              <Hammer />
                              <h4 className="text-lg font-medium text-neutral-900 mb-2">
                                  Community Building
                              </h4>
                              <p className="text-sm text-neutral-600">
                                  Help with construction, maintenance, and
                                  infrastructure projects.
                              </p>
                          </div>
                          <div className="bg-white p-6 rounded-lg">
                              <Laptop />
                              <h4 className="text-lg font-medium text-neutral-900 mb-2">
                                  Digital Support
                              </h4>
                              <p className="text-sm text-neutral-600">
                                  Web development, social media, and digital
                                  marketing.
                              </p>
                          </div>
                          <div className="bg-white p-6 rounded-lg">
                              <Calendar />  
                              <h4 className="text-lg font-medium text-neutral-900 mb-2">
                                  Event Planning
                              </h4>
                              <p className="text-sm text-neutral-600">
                                  Organize fundraisers, community events, and
                                  awareness campaigns.
                              </p>
                          </div>
                          <div className="bg-white p-6 rounded-lg">
                              <Handshake />
                              <h4 className="text-lg font-medium text-neutral-900 mb-2">
                                  Outreach
                              </h4>
                              <p className="text-sm text-neutral-600">
                                  Connect with communities and build
                                  partnerships.
                              </p>
                          </div>
                          <div className="bg-white p-6 rounded-lg">
                              <ChartAreaIcon />
                              <h4 className="text-lg font-medium text-neutral-900 mb-2">
                                  Administrative
                              </h4>
                              <p className="text-sm text-neutral-600">
                                  Data entry, research, and office support
                                  tasks.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </>
  );
}

export default VolunteerPage