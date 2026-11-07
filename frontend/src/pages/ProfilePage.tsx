import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Card } from '../components/ui/Card';
import {
  User,
  Calendar,
  GraduationCap,
  BookOpen,
  MapPin,
  CheckCircle2,
  Sparkles,
  Save,
  Briefcase,
  Award
} from 'lucide-react';

const AVAILABLE_INTERESTS = [
  { id: 'campus_placement', label: 'Campus Placements', icon: Briefcase, color: 'blue' },
  { id: 'software_engineering', label: 'Software & Tech Roles', icon: Sparkles, color: 'blue' },
  { id: 'core_engineering', label: 'Core Engineering', icon: Briefcase, color: 'blue' },
  { id: 'masters_abroad', label: 'Master\'s Abroad (MS/MBA)', icon: GraduationCap, color: 'purple' },
  { id: 'higher_studies_india', label: 'GATE & M.Tech / PhD India', icon: GraduationCap, color: 'purple' },
  { id: 'scholarships', label: 'Scholarships & Fellowships', icon: Award, color: 'purple' },
  { id: 'civil_services', label: 'UPSC & State Civil Services', icon: Award, color: 'emerald' },
  { id: 'banking_exams', label: 'Banking & Financial Exams (IBPS/SBI)', icon: Award, color: 'emerald' },
  { id: 'psu_defense', label: 'PSU & Defense Services', icon: Award, color: 'emerald' },
];

export const ProfilePage: React.FC = () => {
  const { user, profile, updateProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const isJustRegistered = (location.state as any)?.justRegistered;

  const [fullName, setFullName] = useState(user?.full_name || '');
  const [dob, setDob] = useState(profile?.dob || '');
  const [qualification, setQualification] = useState(profile?.qualification || 'Undergraduate');
  const [degree, setDegree] = useState(profile?.degree || '');
  const [branch, setBranch] = useState(profile?.branch || '');
  const [graduationYear, setGraduationYear] = useState<string>(
    profile?.graduation_year ? String(profile.graduation_year) : '2025'
  );
  const [userLocation, setUserLocation] = useState(profile?.location || '');
  const [careerInterests, setCareerInterests] = useState<string[]>(profile?.career_interests || []);
  const [bio, setBio] = useState(profile?.bio || '');

  const [isSaving, setIsSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    if (profile) {
      if (profile.full_name) setFullName(profile.full_name);
      if (profile.dob) setDob(profile.dob);
      if (profile.qualification) setQualification(profile.qualification);
      if (profile.degree) setDegree(profile.degree);
      if (profile.branch) setBranch(profile.branch);
      if (profile.graduation_year) setGraduationYear(String(profile.graduation_year));
      if (profile.location) setUserLocation(profile.location);
      if (profile.career_interests && profile.career_interests.length > 0) {
        setCareerInterests(profile.career_interests);
      }
      if (profile.bio) setBio(profile.bio);
    }
  }, [profile]);

  const toggleInterest = (interestLabel: string) => {
    if (careerInterests.includes(interestLabel)) {
      setCareerInterests(careerInterests.filter((item) => item !== interestLabel));
    } else {
      setCareerInterests([...careerInterests, interestLabel]);
    }
  };

  const calculateCompleteness = (): number => {
    let score = 0;
    if (fullName.trim()) score += 15;
    if (dob.trim()) score += 15;
    if (qualification.trim()) score += 15;
    if (degree.trim()) score += 15;
    if (branch.trim()) score += 15;
    if (userLocation.trim()) score += 10;
    if (careerInterests.length > 0) score += 15;
    return Math.min(100, score);
  };

  const completeness = calculateCompleteness();

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setStatusMessage(null);

    try {
      await updateProfile({
        full_name: fullName.trim(),
        dob: dob.trim(),
        qualification: qualification.trim(),
        degree: degree.trim(),
        branch: branch.trim(),
        graduation_year: graduationYear ? parseInt(graduationYear, 10) : undefined,
        location: userLocation.trim(),
        career_interests: careerInterests,
        bio: bio.trim(),
      });

      setStatusMessage({
        type: 'success',
        text: 'Profile updated successfully! Your preferences are now synchronized across all pathways.',
      });

      if (isJustRegistered) {
        setTimeout(() => {
          navigate('/dashboard');
        }, 1200);
      }
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'Failed to update profile. Please try again.',
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Onboarding Welcome Banner if just registered */}
        {isJustRegistered && (
          <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 border border-blue-500/40 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400">
                <Sparkles className="w-4 h-4" />
                <span>Step 2 of 2: Setup your Unified Profile</span>
              </div>
              <h3 className="text-xl font-bold text-white">Welcome to WAYZA, {fullName || 'Aspirant'}!</h3>
              <p className="text-xs text-slate-300">
                Tell us about your educational background and career interests to calibrate your pathway recommendations.
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate('/dashboard')}
              className="shrink-0 text-xs"
            >
              Skip to Dashboard
            </Button>
          </div>
        )}

        {/* Profile Header & Completeness */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              User Profile Setup & Management
            </h1>
            <p className="text-sm text-slate-400">
              One central profile power's your eligibility across Placement, Higher Studies, and Government Exams.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 w-full sm:w-56 space-y-2 shrink-0">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400 font-medium">Profile Score</span>
              <span className="font-bold text-blue-400">{completeness}%</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${completeness}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Status Toast */}
        {statusMessage && (
          <div
            className={`p-4 rounded-2xl text-xs flex items-center gap-2.5 ${
              statusMessage.type === 'success'
                ? 'bg-emerald-950/40 border border-emerald-800/60 text-emerald-300'
                : 'bg-red-950/40 border border-red-800/60 text-red-300'
            }`}
          >
            {statusMessage.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <Sparkles className="w-4 h-4 text-red-400 shrink-0" />
            )}
            <span>{statusMessage.text}</span>
          </div>
        )}

        {/* Profile Form */}
        <form onSubmit={handleSave} className="space-y-8">
          {/* Section 1: Personal & Basic Info */}
          <Card className="space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <User className="w-5 h-5 text-blue-400" />
                <span>Personal Information</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">Basic identity and contact details.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input
                label="Full Name"
                type="text"
                placeholder="Aarav Sharma"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                leftIcon={<User className="w-4 h-4" />}
                required
              />

              <Input
                label="Date of Birth"
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                helperText="Required for automated government exam age eligibility calculations."
                leftIcon={<Calendar className="w-4 h-4" />}
                required
              />

              <Input
                label="Registered Email"
                type="email"
                value={user?.email || ''}
                disabled
                className="opacity-70 cursor-not-allowed bg-slate-950"
                helperText="Permanent account identifier"
              />

              <Input
                label="Location (City, State / Country)"
                type="text"
                placeholder="e.g. Bengaluru, Karnataka, India"
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
                leftIcon={<MapPin className="w-4 h-4" />}
                helperText="Assists with regional drives & state domicile exams."
                required
              />
            </div>
          </Card>

          {/* Section 2: Educational Qualifications */}
          <Card className="space-y-6">
            <div className="border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                <span>Educational Qualifications</span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Degree details used to evaluate placement eligibility, academic prerequisites, and competitive exams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300 tracking-wide uppercase">
                  Qualification Level <span className="text-red-400">*</span>
                </label>
                <select
                  value={qualification}
                  onChange={(e) => setQualification(e.target.value)}
                  className="block w-full rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-100 text-sm py-2.5 px-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                >
                  <option value="Undergraduate">Undergraduate (B.Tech / B.E / B.Sc / B.Com / BCA)</option>
                  <option value="Postgraduate">Postgraduate (M.Tech / M.S / MBA / M.Sc / MCA)</option>
                  <option value="Diploma / Polytechnic">Diploma / Polytechnic</option>
                  <option value="Doctorate / PhD">Doctorate (PhD / Post-Doctoral)</option>
                  <option value="Higher Secondary (12th Grade)">Higher Secondary (12th Grade / PUC)</option>
                </select>
              </div>

              <Input
                label="Degree Name"
                type="text"
                placeholder="e.g. Bachelor of Technology (B.Tech)"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                leftIcon={<BookOpen className="w-4 h-4" />}
                required
              />

              <Input
                label="Branch / Specialization"
                type="text"
                placeholder="e.g. Computer Science, Mechanical, Finance"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                leftIcon={<BookOpen className="w-4 h-4" />}
                required
              />

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-300 tracking-wide uppercase">
                  Graduation Year <span className="text-red-400">*</span>
                </label>
                <select
                  value={graduationYear}
                  onChange={(e) => setGraduationYear(e.target.value)}
                  className="block w-full rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-100 text-sm py-2.5 px-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                >
                  {[2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029].map((year) => (
                    <option key={year} value={year}>
                      {year} {year >= 2025 ? '(Upcoming Batch)' : '(Alumni / Graduate)'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5 pt-2">
              <label className="block text-xs font-semibold text-slate-300 tracking-wide uppercase">
                Aspiration Summary / Brief Bio
              </label>
              <textarea
                rows={3}
                placeholder="Share your career aspirations, primary technical skills, or target higher education fields..."
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="block w-full rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-100 text-sm py-2.5 px-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/30 placeholder-slate-500"
              />
            </div>
          </Card>

          {/* Section 3: Career Interests Selection */}
          <Card className="space-y-6">
            <div className="border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span>Career Interests & Focus Areas</span>
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Select all avenues you wish to explore. You can change these anytime.
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                {careerInterests.length} selected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {AVAILABLE_INTERESTS.map((item) => {
                const isSelected = careerInterests.includes(item.label);
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleInterest(item.label)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-blue-600/15 border-blue-500 text-white shadow-md shadow-blue-500/10'
                        : 'bg-slate-900/60 border-slate-800/90 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-blue-500 text-white' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium leading-snug">{item.label}</span>
                  </button>
                );
              })}
            </div>
          </Card>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900">
            <p className="text-xs text-slate-500 text-center sm:text-left">
              Changes update your profile immediately across all 3 dashboards.
            </p>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                type="button"
                variant="secondary"
                size="md"
                onClick={() => navigate('/dashboard')}
                className="w-full sm:w-auto"
              >
                Go to Hub
              </Button>

              <Button
                type="submit"
                variant="primary"
                size="md"
                isLoading={isSaving}
                icon={<Save className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Save Profile
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
