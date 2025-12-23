// App.js
import React, { useState } from "react";
import Navbar from "./Componenets/Navbar";
import { FiUsers, FiSettings, FiCpu, FiGlobe } from "react-icons/fi";
import { translations } from "./translations";

import img1 from "./img/1.png";
import img2 from "./img/2.webp";
import img3 from "./img/3.webp";

const casePatterns = [
  {
    img: img1,
    title: "Case Pattern Diagram",
    desc: "A multistate family governance realignment to reduce decision friction and protect long term cohesion."
  },
  {
    img: img2,
    title: "Case Pattern Diagram",
    desc: "A founder led high tech expansion blueprint that aligned cross border ownership structure with local operating risk controls."
  },
  {
    img: img3,
    title: "Case Pattern Diagram",
    desc: "A semiconductor landing risk boundary framework integrating policy cadence, supply chain readiness, and workforce ramp scenarios."
  },
];

const iconMap = {
  users: <FiUsers size={22} className="text-gray-400" />,
  settings: <FiSettings size={22} className="text-gray-400" />,
  cpu: <FiCpu size={22} className="text-gray-400" />,
  globe: <FiGlobe size={22} className="text-gray-400" />,
};

const insideItems = [
  {
    icon: "users",
    title: "Cross Border Family Governance",
    desc: "Succession architecture, decision rights, risk boundaries, and multi jurisdiction coordination."
  },
  {
    icon: "cpu",
    title: "Founder and Family Influenced Tech Stewardship",
    desc: "Aligning ownership, governance, and operating realities across generations and regions."
  },
  {
    icon: "globe",
    title: "Semiconductor and High Tech Landing Governance",
    desc: "Site ecosystem assessment, stakeholder mapping, workforce localization, and execution risk gates."
  },
  {
    icon: "settings",
    title: "Geopolitics, Supply Chain, and Talent Resilience",
    desc: "Scenario design for capital, operations, and reputational stability in volatile environments."
  }
];

function App() {
  const [lang, setLang] = useState("en");
  const t = translations[lang] || translations["en"];

  const restrictedItems = [
    { id: "01", title: "Cross Border Family Governance in 2026", desc: "decision rights, conflict prevention, and multijurisdiction risk gates." },
    { id: "02", title: "A Practical Playbook for Family Influenced Tech Companies", desc: "aligning ownership, board design, and operating control." },
    { id: "03", title: "Semiconductor Landing Readiness", desc: "a confidential risk map for policy cadence, supply chain, and workforce ramp." },
    { id: "04", title: "Founder Liquidity Events and Post Exit Stewardship", desc: "preserving control, culture, and cross border resilience." },
    { id: "05", title: "Building a Two Speed Governance Model", desc: "separating long horizon family priorities from fast cycle operating decisions." },
    { id: "06", title: "High Sensitivity Stakeholder Management for Advanced Manufacturing Sites", desc: "a quiet model for trust and alignment." },
    { id: "07", title: "Talent Localization for Semiconductor and High Tech", desc: "partnering with regional ecosystems without diluting standards." },
    { id: "08", title: "Cross Border Data, IP, and Reputational Risk", desc: "governance patterns for high consequence environments." },
    { id: "09", title: "Family Office and Industrial Strategy Convergence", desc: "how families support long term technology and manufacturing theses." },
    { id: "10", title: "Crisis Ready Governance", desc: "discreet protocols for health, leadership, regulatory, and geopolitical shocks." },
    { id: "11", title: "ESG as a Landing Constraint and Opportunity in Advanced Manufacturing", desc: "what leaders must decide early." },
    { id: "12", title: "The New Geography of High Tech Capital", desc: "how private owners manage jurisdiction, incentives, and long term optionality." },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navbar */}
      <Navbar lang={lang} setLang={setLang} />

      <main className="max-w-6xl mx-auto px-6 pt-32">
        {/* HERO */}
        <section className="mb-32">
          <h2 className="text-xs tracking-widest text-gray-500 mb-3 uppercase">AUTHORIZED ACCESS</h2>
          <h1 className="text-3xl md:text-4xl font-light mb-6">{t.heroTitle}</h1>
          <p className="text-gray-700 max-w-3xl text-sm leading-relaxed">{t.heroDesc}</p>
        </section>

        {/* WHAT IS INSIDE */}
        <section className="mb-32">
          <h3 className="text-xl text-center mb-12 font-medium">{t.whatInside}</h3>
          <div className="grid md:grid-cols-2 gap-12">
            {insideItems.map((item, idx) => (
              <div key={idx} className="flex gap-5">
                {iconMap[item.icon]}
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

       {/* RESTRICTED */}
<section className="bg-[#001f3f] py-20 px-6 mb-32">
  <h3 className="text-xl mb-12 text-center font-medium text-white">Private Briefings Title Library</h3>
  <div className="grid md:grid-cols-2 gap-8">
    {restrictedItems.map(item => (
      <div 
        key={item.id} 
        className="bg-[#003366] p-5 rounded-lg shadow-md hover:bg-[#004080] transition-colors"
      >
        <span className="text-[11px] tracking-widest block mb-2 text-white">
          RESTRICTED · {item.id}
        </span>
        <p className="font-medium mb-2 text-white">{item.title}</p>
        <p className="text-sm text-white">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

        {/* CASE PATTERNS */}
        <section className="mb-32">
          <h3 className="text-xl font-semibold mb-6">Discreet Case Patterns</h3>
          <h3 className="text-xl mb-12 font-medium">{t.casePatternsTitle}</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {casePatterns.map((item, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-56 md:h-48 overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold mb-2">{item.title}</p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* REQUEST ACCESS */}
        <section className="text-center mb-40">
          <h3 className="text-lg font-light mb-6">{t.howAccessTitle}</h3>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10">{t.howAccessDesc}</p>

          <div className="max-w-2xl mx-auto">
            <h4 className="text-lg font-light mb-8 tracking-wider uppercase">{t.requestAccessTitle}</h4>
            <form className="flex flex-col gap-4 bg-gray-50 p-8 rounded-lg shadow-md">
              {["YOUR FULL NAME", "YOUR ORGANIZATION", "YOUR ROLE", "PRIMARY AREA OF INTEREST", "SENSITIVITY LEVEL", "REFERRER NAME", "REFERRER ORGANIZATION", "RELATIONSHIP TO REFERRER"].map((ph, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={ph}
                  className="w-full px-4 py-2 text-sm bg-white border border-gray-300 placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50"
                />
              ))}
              <textarea
                placeholder="BRIEF DESCRIPTION OF THE DECISION CONTEXT"
                className="w-full px-4 py-2 text-sm bg-white border border-gray-300 placeholder-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 h-28 resize-none"
              ></textarea>
              <button
                type="submit"
                className="mt-4 px-6 py-3 bg-yellow-400 text-black font-medium uppercase tracking-wider hover:bg-yellow-500 transition-colors rounded"
              >
                Request Access Through Referral
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-gray-100 py-10 mt-32">
          <div className="max-w-6xl mx-auto px-6 text-center text-gray-500 space-y-2">
            <p className="text-sm">Privately held. Owner and Chair, Serena G. Caldwell.</p>
            <p className="text-sm">A private advisory firm operating by invitation and referral only.</p>
            <p className="text-sm">Contact: <span className="text-black">nobledomainlcc@gmail.com</span></p>
          </div>
        </footer>

      </main>
    </div>
  );
}

export default App;
