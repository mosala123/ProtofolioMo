import React from 'react';

const timelineData = [
  {
    year: "2021",
    title: "First Project",
    description: "Started my journey in web development. Built my first project using HTML, CSS, and JavaScript.",
    icon: "🚀"
  },
  {
    year: "2022",
    title: "Started React.js",
    description: "Dove deep into React.js and modern frontend frameworks. Built multiple projects and mastered component-based architecture.",
    icon: "⚛️"
  },
  {
    year: "2023",
    title: "Bigger Projects",
    description: "Worked on larger, more complex applications. Explored state management with Redux, API integration, and backend services like Firebase.",
    icon: "💼"
  },
  {
    year: "2024",
    title: "Professional Portfolio",
    description: "Built this professional portfolio to showcase my skills and projects. Actively seeking full-time opportunities.",
    icon: "🎯"
  },
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "12+", label: "Projects Built" },
  { value: "5+", label: "Technologies" },
  { value: "100%", label: "Passion" },
];

const Timeline = () => {
  return (
    <div className="container text-light pb-5 mt-5">

      {/* Stats */}
      <div className="row g-3 mb-5">
        {stats.map((stat, i) => (
          <div key={i} className="col-6 col-md-3">
            <div style={{
              background: "rgba(142, 0, 255, 0.08)",
              border: "1px solid rgba(142, 0, 255, 0.3)",
              borderRadius: "12px",
              padding: "24px 16px",
              textAlign: "center",
              transition: "all 0.3s ease"
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "rgba(142, 0, 255, 0.18)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(142, 0, 255, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "2.2rem", fontWeight: "700", color: "#8e00ff", fontFamily: "'Fira Code', monospace" }}>
                {stat.value}
              </div>
              <div style={{ color: "#aaa", fontSize: "13px", marginTop: "4px" }}>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Timeline header */}
      <div className='d-flex align-items-center gap-3 mb-4'>
        <h2 className="mb-0 fw-bold">My Journey</h2>
        <div style={{ flex: 1, maxWidth: "200px", height: "1px", background: "linear-gradient(90deg, #8e00ff, transparent)" }}></div>
      </div>

      {/* Timeline */}
      <div style={{ position: "relative", paddingLeft: "30px" }}>
        {/* Vertical line */}
        <div style={{
          position: "absolute",
          left: "0",
          top: "10px",
          bottom: "10px",
          width: "2px",
          background: "linear-gradient(180deg, #8e00ff, rgba(142,0,255,0.1))"
        }}></div>

        {timelineData.map((item, i) => (
          <div key={i} style={{ position: "relative", marginBottom: "40px", paddingLeft: "30px" }}>
            {/* Dot */}
            <div style={{
              position: "absolute",
              left: "-39px",
              top: "8px",
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              background: "#8e00ff",
              border: "3px solid #282C33",
              boxShadow: "0 0 10px rgba(142,0,255,0.6)"
            }}></div>

            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(142,0,255,0.2)",
              borderRadius: "12px",
              padding: "20px 24px",
              transition: "all 0.3s ease"
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(142,0,255,0.5)";
                e.currentTarget.style.background = "rgba(142,0,255,0.06)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(142,0,255,0.2)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              <div className="d-flex align-items-center gap-3 mb-2">
                <span style={{
                  background: "rgba(142,0,255,0.2)",
                  border: "1px solid rgba(142,0,255,0.4)",
                  color: "#c778dd",
                  padding: "4px 12px",
                  borderRadius: "12px",
                  fontSize: "13px",
                  fontFamily: "'Fira Code', monospace",
                  fontWeight: "600"
                }}>{item.year}</span>
                <span style={{ fontSize: "1.3rem" }}>{item.icon}</span>
                <h5 style={{ margin: 0, fontWeight: "600", color: "white" }}>{item.title}</h5>
              </div>
              <p style={{ color: "#aaa", margin: 0, fontSize: "15px", lineHeight: "1.7" }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;