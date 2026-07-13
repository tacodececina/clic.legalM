import React from 'react';

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 36, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      id="clic-legal-logo-svg"
    >
      <defs>
        {/* Dynamic golden linear gradient to mimic the premium gold-leaf texture in their uploaded logo */}
        <linearGradient id="gold-metallic" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5E3C3" />
          <stop offset="25%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#947C63" />
          <stop offset="75%" stopColor="#E6C79C" />
          <stop offset="100%" stopColor="#4A3C2F" />
        </linearGradient>

        <linearGradient id="gold-shine" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.6} />
          <stop offset="30%" stopColor="#DEC2A5" />
          <stop offset="70%" stopColor="#947C63" />
          <stop offset="100%" stopColor="#151413" />
        </linearGradient>
      </defs>

      {/* Main outer gold circle representing the 'C' arch wrapping the whole emblem */}
      <path
        d="M 100 10 A 90 90 0 0 0 54 177.3 L 64.7 165 A 74 74 0 0 1 100 26 A 74 74 0 0 1 161.4 67.5 L 174.6 57.5 A 90 90 0 0 0 100 10 Z"
        fill="url(#gold-metallic)"
      />

      {/* Second inner sweeping swoosh/arc that creates the distinctive gap-and-curve effect */}
      <path
        d="M 51 114 A 65 65 0 0 1 100 45 A 65 65 0 0 1 172.5 86.5 L 184 75 A 80 80 0 0 0 100 30 A 80 80 0 0 0 40 125 L 51 114 Z"
        fill="url(#gold-metallic)"
      />

      {/* Column Pillars/Temple structures with rounded-2xl arch-tops on the right side */}
      {/* Pillar 1 (Left column inside the ring) */}
      <rect
        x="79"
        y="103"
        width="18"
        height="87"
        rx="9"
        fill="url(#gold-metallic)"
      />

      {/* Pillar 2 (Middle column inside the ring) */}
      <rect
        x="118"
        y="94"
        width="18"
        height="96"
        rx="9"
        fill="url(#gold-metallic)"
      />

      {/* Pillar 3 (Right column inside the ring) */}
      <rect
        x="157"
        y="85"
        width="18"
        height="56"
        rx="9"
        fill="url(#gold-metallic)"
      />

      {/* Top horizontal connection arch for the Greek pillars */}
      <path
        d="M 72 84 C 72 73 184 73 184 84 L 177.5 94.5 C 177.5 90 78.5 90 78.5 94.5 L 72 84 Z"
        fill="url(#gold-metallic)"
      />
    </svg>
  );
}
