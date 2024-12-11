import React, { useState } from 'react';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    team: '',
    experience: 'beginner',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="registration" className="py-20 bg-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-cyber text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          Join the Battle
        </h2>

        <div className="cyber-box p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="cyber-card p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-cyan-400 font-cyber mb-2">
                    Hacker Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black border-2 border-cyan-500/30 rounded-lg p-3 text-gray-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-cyan-400 font-cyber mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border-2 border-cyan-500/30 rounded-lg p-3 text-gray-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="team" className="block text-cyan-400 font-cyber mb-2">
                    Team Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="team"
                    name="team"
                    value={formData.team}
                    onChange={handleChange}
                    className="w-full bg-black border-2 border-cyan-500/30 rounded-lg p-3 text-gray-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-cyan-400 font-cyber mb-2">
                    Experience Level
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full bg-black border-2 border-cyan-500/30 rounded-lg p-3 text-gray-300 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-colors"
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="expert">Expert</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-bold rounded-lg hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-[0_0_20px_rgba(6,182,212,0.5)]"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Registration;