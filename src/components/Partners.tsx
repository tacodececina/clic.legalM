import React from 'react';
import { PARTNERS } from '../data';

export default function Partners() {
  return (
    <section className="py-12 bg-dark-bg border-y border-dark-border/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-around gap-y-6 gap-x-12">
          {PARTNERS.map((partner, index) => (
            <div
              key={index}
              className="font-display text-xs md:text-sm font-bold tracking-[0.25em] text-dark-text-muted/40 hover:text-gold-light/80 transition-all duration-300 select-none cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
