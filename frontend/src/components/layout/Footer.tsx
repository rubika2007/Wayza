import React from 'react';
import { BrandLogo } from '../ui/BrandLogo';
import { Briefcase, GraduationCap, Award, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-14 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <BrandLogo size="md" showTagline={true} />
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              WAYZA is a unified career opportunity platform dedicated to empowering students, graduates, job seekers, and working professionals discover their ideal pathway across Placements, Higher Studies, and Government Examinations.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/60 border border-slate-800/80 rounded-xl px-3 py-2 w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Universal Access Guaranteed — Equal access for every aspirant.</span>
            </div>
          </div>

          {/* Three Pathways */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Career Pathways
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/placement" className="hover:text-blue-400 transition-colors flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                  <span>Placement Hub</span>
                </Link>
              </li>
              <li>
                <Link to="/higher-studies" className="hover:text-purple-400 transition-colors flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
                  <span>Higher Studies Hub</span>
                </Link>
              </li>
              <li>
                <Link to="/government-exams" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Government Exams Hub</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform & Account */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Platform & Account
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>
                <Link to="/dashboard" className="hover:text-slate-200 transition-colors">
                  Main Dashboard Selection
                </Link>
              </li>
              <li>
                <Link to="/profile" className="hover:text-slate-200 transition-colors">
                  User Profile Setup
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-slate-200 transition-colors">
                  Create Account
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-slate-200 transition-colors">
                  Account Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} WAYZA. All rights reserved. <span className="text-slate-400 font-medium">Your Next Step Starts Here.</span></p>
          <div className="flex gap-6">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 cursor-pointer">Security Overview</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

