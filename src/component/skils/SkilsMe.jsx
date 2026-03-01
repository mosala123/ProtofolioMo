import React, { useState } from 'react';
import "./SkilsMe.css";

// ===== بيانات الـ Skills =====
const allSkills = [
  // Core Languages
  {
    name: "HTML5",
    icon: "🌐",
    sub: "Markup Language",
    level: 5,
    tags: ["Semantic", "Accessibility", "SEO"],
    category: "Core",
    catClass: "cat-core"
  },
  {
    name: "CSS3",
    icon: "🎨",
    sub: "Styling",
    level: 5,
    tags: ["Flexbox", "Grid", "Animations"],
    category: "Core",
    catClass: "cat-core"
  },
  {
    name: "JavaScript",
    icon: "⚡",
    sub: "ES6+",
    level: 4,
    tags: ["DOM", "ES6+", "Async/Await"],
    category: "Core",
    catClass: "cat-core"
  },

  // React Ecosystem
  {
    name: "React.js",
    icon: "⚛️",
    sub: "Frontend Library",
    level: 5,
    tags: ["Hooks", "Router", "Components"],
    category: "React",
    catClass: "cat-react"
  },
  {
    name: "Next.js",
    icon: "▲",
    sub: "React Framework",
    level: 4,
    tags: ["SSR", "SSG", "App Router"],
    category: "React",
    catClass: "cat-react"
  },

  // Styling & UI
  {
    name: "Bootstrap",
    icon: "🅱",
    sub: "CSS Framework",
    level: 5,
    tags: ["Grid", "Components", "Responsive"],
    category: "Styling",
    catClass: "cat-style"
  },
  {
    name: "SCSS",
    icon: "💅",
    sub: "CSS Preprocessor",
    level: 3,
    tags: ["Variables", "Mixins", "Nesting"],
    category: "Styling",
    catClass: "cat-style"
  },

  // State Management
  {
    name: "Redux Toolkit",
    icon: "🔄",
    sub: "State Management",
    level: 4,
    tags: ["Slices", "Thunk", "RTK Query"],
    category: "State",
    catClass: "cat-state"
  },
  {
    name: "Context API",
    icon: "🔗",
    sub: "React Built-in",
    level: 5,
    tags: ["useContext", "Provider", "Consumer"],
    category: "State",
    catClass: "cat-state"
  },
  {
    name: "Zustand",
    icon: "🐻",
    sub: "Lightweight State",
    level: 3,
    tags: ["Store", "Actions", "Persist"],
    category: "State",
    catClass: "cat-state"
  },

  // API & Fetching
  {
    name: "REST API",
    icon: "🔌",
    sub: "API Integration",
    level: 5,
    tags: ["Fetch", "Axios", "CRUD"],
    category: "API",
    catClass: "cat-api"
  },
  {
    name: "Fetch API",
    icon: "📡",
    sub: "Data Fetching",
    level: 5,
    tags: ["Async", "JSON", "Error Handling"],
    category: "API",
    catClass: "cat-api"
  },

  // Backend Services
  {
    name: "Firebase",
    icon: "🔥",
    sub: "Backend as a Service",
    level: 4,
    tags: ["Auth", "Firestore", "Hosting"],
    category: "Backend",
    catClass: "cat-backend"
  },
  {
    name: "Appwrite",
    icon: "🚀",
    sub: "Open Source BaaS",
    level: 3,
    tags: ["Database", "Storage", "Auth"],
    category: "Backend",
    catClass: "cat-backend"
  },

  // Tools
  {
    name: "Git & GitHub",
    icon: "🐙",
    sub: "Version Control",
    level: 4,
    tags: ["Commits", "Branches", "PRs"],
    category: "Tools",
    catClass: "cat-tools"
  },
  {
    name: "Figma",
    icon: "🎭",
    sub: "UI/UX Design",
    level: 3,
    tags: ["Wireframes", "Prototypes", "Design"],
    category: "Tools",
    catClass: "cat-tools"
  },
  {
    name: "VSCode",
    icon: "💻",
    sub: "Code Editor",
    level: 5,
    tags: ["Extensions", "Shortcuts", "Debug"],
    category: "Tools",
    catClass: "cat-tools"
  },
];

const categories = ["All", "Core", "React", "Styling", "State", "API", "Backend", "Tools"];

const levelLabels = { 5: "Expert", 4: "Advanced", 3: "Intermediate", 2: "Beginner", 1: "Learning" };

const SkilsMe = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All"
    ? allSkills
    : allSkills.filter(s => s.category === activeTab);

  return (
    <div className="skills-section">
      <div className="container px-3">

        {/* Header */}
        <div className="skills-header">
          <p className="tag-line">// What I work with</p>
          <div className="d-flex align-items-center gap-3">
            <h2 className="mb-0 fw-bold text-white">Skills</h2>
            <div style={{ flex: 1, maxWidth: "200px", height: "1px", background: "linear-gradient(90deg, #8e00ff, transparent)" }}></div>
          </div>
          <p style={{ color: "#9aa3b0", fontSize: "15px", marginTop: "10px", marginBottom: "0" }}>
            {allSkills.length} technologies · {filtered.length} shown
          </p>
        </div>

        {/* Tabs */}
        <div className="skill-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`skill-tab ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat === "All"     && "⚡ "}
              {cat === "Core"    && "🌐 "}
              {cat === "React"   && "⚛️ "}
              {cat === "Styling" && "🎨 "}
              {cat === "State"   && "🔄 "}
              {cat === "API"     && "🔌 "}
              {cat === "Backend" && "🔥 "}
              {cat === "Tools"   && "🛠️ "}
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="row g-3">
          {filtered.map((skill, i) => (
            <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className={`skill-card ${skill.catClass}`}>
                <div className="skill-card-inner">

                  {/* Icon */}
                  <div className="skill-icon-wrapper">
                    {skill.icon}
                  </div>

                  {/* Name */}
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-sub">{skill.sub}</div>

                  {/* Level dots */}
                  <div className="skill-level">
                    {[1,2,3,4,5].map(dot => (
                      <div
                        key={dot}
                        className={`level-dot ${dot <= skill.level ? 'filled' : 'empty'}`}
                        style={dot <= skill.level ? {
                          animationDelay: `${dot * 0.08}s`
                        } : {}}
                      />
                    ))}
                    <span className="level-label">{levelLabels[skill.level]}</span>
                  </div>

                  {/* Tags */}
                  <div className="skill-tags">
                    {skill.tags.map((tag, ti) => (
                      <span key={ti} className="skill-tag-item">{tag}</span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default SkilsMe;