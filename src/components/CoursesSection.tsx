'use client';

import { useState } from 'react';
import CourseCard from './CourseCard';

const tabs = ['Featured', 'Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design'];

const allCourses = [
  {
    title: 'Learn Figma from Basic',
    author: 'by purepearl studio',
    level: 'Beginner',
    price: '$25',
    rating: 4.5,
    students: '26+',
    gradient: 'bg-gradient-to-br from-violet-900/80 to-purple-700/50',
    icon: '🎨',
    tab: 'UI/UX Design',
  },
  {
    title: 'Build Digital Asset',
    author: 'by purepearl studio',
    level: 'Beginner',
    price: '$25',
    rating: 4.5,
    students: '26+',
    gradient: 'bg-gradient-to-br from-cyan-900/80 to-teal-700/50',
    icon: '💎',
    tab: 'Featured',
  },
  {
    title: 'The Power of Big Data',
    author: 'by purepearl studio',
    level: 'Beginner',
    price: '$25',
    rating: 4.5,
    students: '26+',
    gradient: 'bg-gradient-to-br from-blue-900/80 to-indigo-700/50',
    icon: '📊',
    tab: 'Featured',
  },
  {
    title: 'Balancing Productivity and Self-Care',
    author: 'by purepearl studio',
    level: 'Beginner',
    price: '$25',
    rating: 4.5,
    students: '26+',
    gradient: 'bg-gradient-to-br from-rose-900/80 to-pink-700/50',
    icon: '🧘',
    tab: 'Featured',
  },
  {
    title: 'Mastering Money Management',
    author: 'by purepearl studio',
    level: 'Beginner',
    price: '$25',
    rating: 4.5,
    students: '26+',
    gradient: 'bg-gradient-to-br from-amber-900/80 to-yellow-700/50',
    icon: '💰',
    tab: 'Marketing',
  },
  {
    title: 'From Idea to Startup Success',
    author: 'by purepearl studio',
    level: 'Beginner',
    price: '$25',
    rating: 4.5,
    students: '26+',
    gradient: 'bg-gradient-to-br from-emerald-900/80 to-green-700/50',
    icon: '🚀',
    tab: 'Featured',
  },
];

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState('Featured');

  const filtered = allCourses.filter(
    (c) => activeTab === 'Featured' || c.tab === activeTab
  );
  const displayed = filtered.length > 0 ? filtered : allCourses;

  return (
    <section className="py-24 relative" id="courses">
      <div className="glow-orb absolute top-0 left-[-200px] w-[600px] h-[400px] bg-violet-800/10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-[120px]">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/8 mb-4">
            <span className="text-xs text-purple-300 font-medium uppercase tracking-widest">Our Courses</span>
          </div>
          <h2 className="text-[42px] lg:text-[52px] font-black text-white leading-tight mb-4">
            Discover Your Passion,<br />
            <span className="gradient-text">Build Your Skills</span>
          </h2>
          <p className="text-white/50 text-[16px] max-w-[680px] mx-auto leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety
            of courses across different fields, from technology to the arts.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 flex-wrap mb-10 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-violet-600 text-white shadow-lg shadow-purple-900/30'
                  : 'text-white/50 border border-white/10 hover:border-white/25 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((course, i) => (
            <CourseCard key={i} {...course} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 rounded-full border border-white/15 text-white/70 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all font-medium text-[15px] group">
            View All Courses
            <svg className="w-4 h-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
