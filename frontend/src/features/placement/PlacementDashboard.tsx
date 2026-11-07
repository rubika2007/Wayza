import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';
import { Briefcase, ArrowLeft, Building2, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export const PlacementDashboard: React.FC = () => {
  const { user, profile } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm" icon={<ArrowLeft className="w-4 h-4" />}>
              Back to Dashboard Hub
            </Button>
          </Link>
          <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
            Module Blueprint Ready
          </span>
        </div>

        {/* Header Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/20 to-slate-900 border border-blue-500/30 p-8 sm:p-10">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>Placement Pathway</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Placement Dashboard
              </h1>
              <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
                Find jobs, internships and company opportunities tailored to your profile.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 text-center shrink-0 w-full md:w-auto">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Aspirant Profile</div>
              <div className="text-lg font-bold text-white mt-1">{user?.full_name}</div>
              <div className="text-xs text-blue-400 font-medium mt-0.5">
                {profile?.degree || 'Profile Active'} {profile?.branch ? `• ${profile.branch}` : ''}
              </div>
            </div>
          </div>
        </div>

        {/* Universal Access Notice */}
        <div className="flex items-center gap-3 p-4 rounded-xl bg-blue-950/30 border border-blue-800/30 text-blue-200 text-sm">
          <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
          <span>
            <strong>Universal Opportunity Access:</strong> On WAYZA, you have full access to placement resources, curated hiring drives, and internship listings regardless of campus placement cell constraints.
          </span>
        </div>

        {/* Prepared Architecture Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Company Drives & Jobs</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Verified on-campus and off-campus opportunities filtered by eligibility, role requirements, and hiring schedules.
            </p>
            <div className="pt-2 text-xs text-slate-500">Scheduled for Module Rollout</div>
          </Card>

          <Card className="border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Internship Portal</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Paid internships and pre-placement offers (PPOs) across tech, product, finance, and engineering sectors.
            </p>
            <div className="pt-2 text-xs text-slate-500">Scheduled for Module Rollout</div>
          </Card>

          <Card className="border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Resume & Skill Match</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Real-time skill gap analysis mapping your branch qualifications against corporate job requirements.
            </p>
            <div className="pt-2 text-xs text-slate-500">Scheduled for Module Rollout</div>
          </Card>
        </div>

        {/* Profile Readiness Callout */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-base font-semibold text-white">Complete your Career Preferences</div>
            <div className="text-xs text-slate-400">Keep your branch, skills, and graduation year updated to receive targeted recommendations.</div>
          </div>
          <Link to="/profile">
            <Button variant="secondary" size="sm">
              Update Profile Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

