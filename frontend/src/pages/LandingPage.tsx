import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { BrandLogo } from '../components/ui/BrandLogo';
import { useAuth } from '../context/AuthContext';
import {
  Briefcase,
  GraduationCap,
  Award,
  ArrowRight,
  ShieldCheck,
  Compass,
  CheckCircle2,
  Users,
  Target,
  Sparkles,
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="relative overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-100px] left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[128px]"></div>
        <div className="absolute top-[50px] right-1/4 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[140px]"></div>
        <div className="absolute top-[200px] left-1/3 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-inner mb-8">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span className="font-medium">Unified Career Opportunity Platform</span>
          <span className="w-1 h-1 rounded-full bg-slate-600"></span>
          <span className="text-blue-400 font-semibold">WAYZA 1.0</span>
        </div>

        {/* Brand Focus Hero Headline */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="mb-2">
            <BrandLogo size="lg" showTagline={false} linkToHome={false} />
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl font-['Plus_Jakarta_Sans',sans-serif] leading-[1.15]">
            <span className="block text-slate-100">Your Next Step</span>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Starts Here.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mt-4">
            A unified ecosystem helping students, graduates, job seekers, and working professionals discover and evaluate three distinct career pathways with total clarity.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {isAuthenticated ? (
            <Link to="/dashboard">
              <Button
                size="lg"
                variant="primary"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                className="w-full sm:w-auto text-base px-8 py-4"
              >
                Go to Dashboard Hub
              </Button>
            </Link>
          ) : (
            <>
              <Link to="/register" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="primary"
                  icon={<Compass className="w-5 h-5" />}
                  iconPosition="right"
                  className="w-full text-base px-8 py-4"
                >
                  Create Free Account
                </Button>
              </Link>
              <Link to="/login" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full text-base px-8 py-4"
                >
                  Sign In to WAYZA
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Quick Social Proof Counters */}
        <div className="mt-16 pt-10 border-t border-slate-900 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">3 Pathways</div>
            <div className="text-xs text-slate-400">One Unified Platform</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">100% Equal</div>
            <div className="text-xs text-slate-400">Campus & Off-Campus Access</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">1 Unified</div>
            <div className="text-xs text-slate-400">Shared Aspirant Profile</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">Instant</div>
            <div className="text-xs text-slate-400">Eligibility & Pathway Mapping</div>
          </div>
        </div>
      </section>

      {/* The Three Career Pathways Section */}
      <section id="pathways" className="py-20 bg-slate-950/60 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 uppercase tracking-widest">
              Core Career Horizons
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
              Three Distinct Pathways. One Destination.
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              Every career journey is unique. WAYZA unifies the three most impactful opportunity verticals so you never miss a step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Placement */}
            <Card
              hoverEffect={true}
              glow="blue"
              className="flex flex-col justify-between border-slate-800 bg-slate-900/60 p-8 space-y-6 group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center transition-transform group-hover:scale-105">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    Pathway 01
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    Placement
                  </h3>
                  <p className="text-slate-300 font-medium text-sm">
                    Find jobs, internships and company opportunities.
                  </p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Connect with leading tech giants, enterprise employers, and high-growth startups for campus and off-campus roles tailored to your qualifications.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Curated campus & off-campus hiring drives</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Pre-placement offers & verified internships</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Degree and branch-based company matching</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link to={isAuthenticated ? '/placement' : '/register'} className="block w-full">
                  <Button variant="secondary" className="w-full justify-between group-hover:border-blue-500/40">
                    <span>Explore Placement</span>
                    <ArrowRight className="w-4 h-4 text-blue-400" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Card 2: Higher Studies */}
            <Card
              hoverEffect={true}
              glow="purple"
              className="flex flex-col justify-between border-slate-800 bg-slate-900/60 p-8 space-y-6 group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center transition-transform group-hover:scale-105">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    Pathway 02
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    Higher Studies
                  </h3>
                  <p className="text-slate-300 font-medium text-sm">
                    Explore universities, postgraduate courses and scholarships.
                  </p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Navigate prestigious master's, doctoral, and specialized programs across leading domestic and global universities with transparent grant information.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Global university & master's program database</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Scholarship, stipend & fellowship tracker</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>GRE, GMAT, TOEFL, IELTS & GATE insights</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link to={isAuthenticated ? '/higher-studies' : '/register'} className="block w-full">
                  <Button variant="secondary" className="w-full justify-between group-hover:border-purple-500/40">
                    <span>Explore Higher Studies</span>
                    <ArrowRight className="w-4 h-4 text-purple-400" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Card 3: Government Exams */}
            <Card
              hoverEffect={true}
              glow="emerald"
              className="flex flex-col justify-between border-slate-800 bg-slate-900/60 p-8 space-y-6 group"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center transition-transform group-hover:scale-105">
                    <Award className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Pathway 03
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Government Exams
                  </h3>
                  <p className="text-slate-300 font-medium text-sm">
                    Discover government examinations and check eligibility.
                  </p>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed">
                  Automate eligibility calculations across Central, State, Banking, Defense, and PSU opportunities based on your age, degree, and domicile.
                </p>

                <div className="space-y-2.5 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Instant eligibility calculator & age criteria</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>UPSC, SSC, Banking, Defense & State PSC tracks</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Exam calendar deadlines & notification alerts</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link to={isAuthenticated ? '/government-exams' : '/register'} className="block w-full">
                  <Button variant="secondary" className="w-full justify-between group-hover:border-emerald-500/40">
                    <span>Explore Govt Exams</span>
                    <ArrowRight className="w-4 h-4 text-emerald-400" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why WAYZA Value Proposition */}
      <section id="why-wayza" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Universal Access Commitment</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Why Career Decisions Shouldn't Be Fragmented.
            </h2>
            
            <p className="text-slate-400 text-base leading-relaxed">
              Traditional career guidance forces students into silos: if you don't qualify for campus placements, you are left to search alone. WAYZA breaks this barrier by unifying all three major career avenues under one single profile.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Target className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">One Shared Profile</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Fill your academic details once and leverage them across corporate, academic, and government pathways.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Universal Dashboard Access</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Never get blocked by placement cell filters. Every registered user can explore and apply to all three pathways unconditionally.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Clarity in Next Steps</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Clean SaaS user experience designed without clutter, ads, or confusing multi-portal redirections.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
            <div className="relative bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
                </div>
                <span className="text-xs text-slate-500 font-mono">wayza.platform/hub</span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Placement Opportunity</div>
                      <div className="text-xs text-slate-400">Software & Core Engineering Drives</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 font-medium">Available</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Higher Studies Intake</div>
                      <div className="text-xs text-slate-400">Graduate Scholarships & Fellowships</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 font-medium">Available</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">Government Exams</div>
                      <div className="text-xs text-slate-400">Eligibility & Notification Alerts</div>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 font-medium">Available</span>
                </div>
              </div>

              <div className="text-center pt-2">
                <span className="text-xs text-slate-400">
                  Tagline: <strong className="text-slate-200">Your Next Step Starts Here.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900/50 via-indigo-900/40 to-slate-900 border border-blue-500/30 p-10 sm:p-16 text-center space-y-6">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Ready to Discover Your Next Step?
            </h2>
            <p className="text-slate-300 text-base">
              Join WAYZA today and unlock unified access to Placements, Higher Studies, and Government Examinations.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/register" className="w-full sm:w-auto">
              <Button size="lg" variant="primary" className="w-full sm:w-auto px-8 py-4">
                Register for Free
              </Button>
            </Link>
            <Link to="/login" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto px-8 py-4">
                Sign In to Existing Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

