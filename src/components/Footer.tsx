import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E2022] text-[#F4F4F4] pt-20 pb-8 px-6 md:px-16 lg:px-32 rounded-t-[4rem] mt-[-2rem] relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <img src="/static/images/Greenovex-individual-green.svg" alt="Greenovex Logo" className="h-10 w-auto" />
            <h2 className="text-3xl font-sans font-bold text-[#C57A36] uppercase tracking-wide">Greenovex</h2>
          </div>
          <p className="text-sm font-sans text-[#F4F4F4]/70 max-w-sm leading-relaxed mb-8">
            Precision engineering and sustainable infrastructure for a resilient tomorrow.
          </p>
          
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-3 bg-[#393E46]/50 rounded-full px-4 py-2 border border-[#F4F4F4]/10">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-mono text-xs text-green-400 tracking-wider uppercase">System Operational</span>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-serif italic text-xl mb-6">Navigation</h4>
          <ul className="space-y-4 font-sans text-sm text-[#F4F4F4]/70">
            <li><a href="#home" className="hover:text-[#C57A36] transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-[#C57A36] transition-colors">Services</a></li>
            <li><a href="#projects" className="hover:text-[#C57A36] transition-colors">Projects</a></li>
            <li><a href="#team" className="hover:text-[#C57A36] transition-colors">Team</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-serif italic text-xl mb-6">Connect</h4>
          <ul className="space-y-4 font-sans text-sm text-[#F4F4F4]/70">
            <li><a href="#" className="hover:text-[#C57A36] transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-[#C57A36] transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-[#C57A36] transition-colors">GitHub</a></li>
            <li><a href="mailto:contact@greenovex.com" className="hover:text-[#C57A36] transition-colors">contact@greenovex.com</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-[#F4F4F4]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-xs text-[#F4F4F4]/50">
          © {new Date().getFullYear()} Greenovex. All rights reserved.
        </p>
        <p className="font-mono text-xs text-[#F4F4F4]/50">
          Forging the Future.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
