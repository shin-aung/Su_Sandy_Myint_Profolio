import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="bg-[#2F2F2F] text-white/70 py-8 text-center">
      <div className="max-w-5xl mx-auto px-5">
        <p className="font-display italic text-white/50 text-sm mb-2">
          "{profile.motto}"
        </p>
        <p className="font-body text-xs text-white/40">
          © {new Date().getFullYear()} {profile.name} · All rights reserved.
        </p>
        <p className="font-body text-xs text-white/25 mt-1">
          Built with React + TypeScript
        </p>
      </div>
    </footer>
  );
}
