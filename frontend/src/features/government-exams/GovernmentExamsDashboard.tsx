import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';
import { Award, ArrowLeft, ShieldCheck, Calculator, Bell, CheckCircle2 } from 'lucide-react';

export const GovernmentExamsDashboard: React.FC = () => {
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
          <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
            Module Blueprint Ready
          </span>
        </div>

        {/* Header Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-950/40 via-teal-950/20 to-slate-900 border border-emerald-500/30 p-8 sm:p-10">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Government Exams Pathway</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Government Exams Dashboard
              </h1>
              <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
                Discover government examinations and check eligibility instantly.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 text-center shrink-0 w-full md:w-auto">
              <div className="text-xs text-slate-400 uppercase tracking-wider">Aspirant Profile</div>
              <div className="text-lg font-bold text-white mt-1">{user?.full_name}</div>
              <div className="text-xs text-emerald-400 font-medium mt-0.5">
                {profile?.qualification || 'Qualification Active'} {profile?.location ? `• ${profile.location}` : ''}
              </div>
            </div>
          </div>
        </div>

        {/* Universal Access Notice */}
        <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/30 text-emerald-200 text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>
            <strong>Universal Eligibility Portal:</strong> Any candidate can evaluate public sector job examinations, Central & State notifications, and defense openings regardless of campus placement status.
          </span>
        </div>

        {/* Prepared Architecture Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
              <Calculator className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Automated Eligibility Engine</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Instant match across 200+ government exams based on your degree, age, state domicile, and criteria.
            </p>
            <div className="pt-2 text-xs text-slate-500">Scheduled for Module Rollout</div>
          </Card>

          <Card className="border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Exam Directory & Syllabi</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Official patterns, stage breakdowns, and cutoff archives for UPSC, SSC, IBPS, Railways, and State PSCs.
            </p>
            <div className="pt-2 text-xs text-slate-500">Scheduled for Module Rollout</div>
          </Card>

          <Card className="border-slate-800 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
              <Bell className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Notification Alert System</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Timely reminders for application release dates, admit cards, exam schedules, and result declarations.
            </p>
            <div className="pt-2 text-xs text-slate-500">Scheduled for Module Rollout</div>
          </Card>
        </div>

        {/* Action Footnote */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-base font-semibold text-white">Verify your Date of Birth & Qualification</div>
            <div className="text-xs text-slate-400">Accurate eligibility calculations rely on your profile date of birth and degree.</div>
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

