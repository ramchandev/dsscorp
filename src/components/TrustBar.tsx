import React from "react";
import { Calendar, Users, Award, Briefcase } from "lucide-react";

export default function TrustBar() {
  const stats = [
    {
      icon: <Calendar className="w-5 h-5 text-cyan" />,
      value: "20+ Years",
      label: "In Practice",
    },
    {
      icon: <Users className="w-5 h-5 text-cyan" />,
      value: "1,500+",
      label: "Clients Served",
    },
    {
      icon: <Award className="w-5 h-5 text-cyan" />,
      value: "Certified",
      label: "Chartered Accountants",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-cyan" />,
      value: "Major Industries",
      label: "Tech, MSME & Family Offices",
    },
  ];

  return (
    <div className="w-full bg-card-white border-y border-border-hairline py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-navy/10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 justify-center md:px-6 ${
                idx > 1 ? "pt-4 md:pt-0" : ""
              } ${idx === 1 ? "pt-0 md:pt-0" : ""}`}
            >
              <div className="flex-shrink-0 p-2 bg-navy/5 rounded-full">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-sm sm:text-base text-navy leading-none">
                  {stat.value}
                </span>
                <span className="text-xs text-text-secondary mt-1 font-body">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
