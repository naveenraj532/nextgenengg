// src/data/services.js
// First service content taken from your company booklet (Mechanical capabilities).
// Source: Skyrin_Engineering_Booklet.pdf. :contentReference[oaicite:1]{index=1}

import { FaCogs } from "react-icons/fa";

export const services = [
  {
    slug: "mechanical-drafting",
    title: "Mechanical Engineering & Drafting",
    short:
      "Component design, GD&T, manufacturing-ready drawings and simulation.",
    icon: FaCogs,
    overview:
      "Full-cycle mechanical engineering & drafting services: equipment design, valve specification, FEA/CFD support and manufacturing-ready documentation.",
    capabilities: [
      "Equipment Design",
      "Valve Specifications",
      "Stress and FEA Analysis",
      "Material Engineering",
      "CFD Analysis",
      "Railway car body / gangway design",
      "Special purpose machines",
      "Machining fixtures for VMC / HMC / VTL",
      "Robotic welding & welding fixtures",
      "Manufacturing process drawings",
      "Automobile body design",
      "Pressure parts design",
      "Pressure vessel design",
      "Storage tank design",
      "Boiler tube failure analysis",
      "High temperature surface engineering",
      "Acoustic analysis",
    ],
    deliverables: [
      "GA drawings & shop drawings",
      "Manufacturing drawings with GD&T",
      "FEA & CFD reports",
      "Material Take-Off (MTO) / BOM",
    ],
    contact: {
      email: "info@skyrinengineering.com",
      phone: "+91 9884988607",
    },
  },

  // add other services here similarly (slug must be unique)
];
