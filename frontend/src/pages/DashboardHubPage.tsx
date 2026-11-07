import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import {
  Briefcase,
  GraduationCap,
  Award,
  ArrowRight,
  ShieldCheck,
  User,
  CheckCircle2,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export const DashboardHubPage: React.FC = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Top Aspirant Welcome Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-850 border border-slate-800 p-8 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wide border border-blue-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>WAYZA Opportunity Hub</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                Welcome back, {user?.full_name || 'Aspirant'}
              </h1>
              <p className="text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                Select from the three interconnected career pathways below. Every pathway is active and fully open to you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <Link to="/profile">
                <Button
                  variant="secondary"
                  size="sm"
                  icon={<User className="w-4 h-4 text-blue-400" />}
                  className="w-full text-xs"
                >
                  Manage Profile
                </Button>
              </Link>
            </div>
          </div>

          {/* Profile completeness status bar */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span>
                Academic Focus: <strong className="text-slate-200">{profile?.degree || 'Undergraduate'}</strong>
                {profile?.branch ? ` (${profile.branch})` : ''}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span>
                Graduation: <strong className="text-slate-200">{profile?.graduation_year || 2025}</strong>
              </span>
              <span>•</span>
              <span>
                Location: <strong className="text-slate-200">{profile?.location || 'Profile Setup'}</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Universal Access Affirmation */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900 border border-blue-800/40 flex items-start gap-3.5 shadow-sm">
          <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-300 space-y-1">
            <p className="font-semibold text-white">Universal Career Access Policy</p>
            <p className="text-slate-400 leading-relaxed">
              On WAYZA, you have unconditional access to all three career opportunity modules regardless of campus placement cell eligibility, academic backlogs, or institutional constraints. Explore corporate jobs, higher education programs, and government examinations freely.
            </p>
          </div>
        </div>

        {/* The Three Clearly Organized Dashboard Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Select Your Career Dashboard
            </h2>
            <span className="text-xs text-slate-500 font-medium">3 Pathways Available</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1. PLACEMENT DASHBOARD */}
            <Card
              hoverEffect={true}
              glow="blue"
              className="flex flex-col justify-between border-slate-800 bg-slate-900/80 p-8 space-y-8 group transition-all"
            >
              <div className="space-y-6">
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center transition-transform group-hover:scale-105">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/30 uppercase tracking-wider">
                    Corporate & Tech
                  </span>
                </div>

                {/* Pathway Title & Description (Exact Prompt Specifications) */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
                    1. Placement
                  </h3>
                  <p className="text-slate-200 text-sm font-semibold leading-snug">
                    Find jobs, internships and company opportunities.
                  </p>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed">
                  Discover curated on-campus and off-campus corporate openings, verified summer internships, startup hiring drives, and resume skill gap benchmarking.
                </p>

                {/* Features Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Campus & Off-Campus Hiring Drives</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Verified Tech & Non-Tech Internships</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Corporate Eligibility Match</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  onClick={() => navigate('/placement')}
                  className="w-full text-sm font-semibold py-3 justify-center shadow-lg shadow-blue-600/20"
                >
                  Enter Placement Dashboard
                </Button>
              </div>
            </Card>

            {/* 2. HIGHER STUDIES DASHBOARD */}
            <Card
              hoverEffect={true}
              glow="purple"
              className="flex flex-col justify-between border-slate-800 bg-slate-900/80 p-8 space-y-8 group transition-all"
            >
              <div className="space-y-6">
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center transition-transform group-hover:scale-105">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/30 uppercase tracking-wider">
                    Global Academia
                  </span>
                </div>

                {/* Pathway Title & Description (Exact Prompt Specifications) */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-purple-400 transition-colors">
                    2. Higher Studies
                  </h3>
                  <p className="text-slate-200 text-sm font-semibold leading-snug">
                    Explore universities, postgraduate courses and scholarships.
                  </p>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed">
                  Browse international and national Master's (MS/MBA/M.Tech), PhD doctoral fellowships, fully-funded scholarships, and entrance test criteria (GRE/GMAT/GATE).
                </p>

                {/* Features Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Global University & Master's Search</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Scholarship & Stipend Directory</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>GRE, TOEFL & GATE Cutoff Benchmarks</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  onClick={() => navigate('/higher-studies')}
                  className="w-full text-sm font-semibold py-3 justify-center !from-purple-600 !to-indigo-600 shadow-lg shadow-purple-600/20"
                >
                  Enter Higher Studies Dashboard
                </Button>
              </div>
            </Card>

            {/* 3. GOVERNMENT EXAMS DASHBOARD */}
            <Card
              hoverEffect={true}
              glow="emerald"
              className="flex flex-col justify-between border-slate-800 bg-slate-900/80 p-8 space-y-8 group transition-all"
            >
              <div className="space-y-6">
                {/* Header Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center transition-transform group-hover:scale-105">
                    <Award className="w-7 h-7" />
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider">
                    Public Sector
                  </span>
                </div>

                {/* Pathway Title & Description (Exact Prompt Specifications) */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                    3. Government Exams
                  </h3>
                  <p className="text-slate-200 text-sm font-semibold leading-snug">
                    Discover government examinations and check eligibility.
                  </p>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed">
                  Automate eligibility mapping across UPSC Civil Services, SSC, Banking (IBPS/SBI), Defense, Railways, and State PSCs with up-to-date notification tracking.
                </p>

                {/* Features Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Instant Age & Degree Eligibility Engine</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Official Notification & Admit Card Alerts</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Syllabus & Exam Pattern Archive</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  onClick={() => navigate('/government-exams')}
                  className="w-full text-sm font-semibold py-3 justify-center !from-emerald-600 !to-teal-600 shadow-lg shadow-emerald-600/20"
                >
                  Enter Government Exams Dashboard
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Profile Summary Card */}
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">Need to update your career focus or qualification?</h4>
            <p className="text-xs text-slate-400">
              Keep your degree, graduation year, and career tags updated so that all three dashboards reflect your latest profile.
            </p>
          </div>
          <Link to="/profile">
            <Button variant="outline" size="sm" icon={<ExternalLink className="w-3.5 h-3.5" />} iconPosition="right">
              Edit Unified Profile
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
