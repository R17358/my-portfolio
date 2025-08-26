import React from "react";
import ai_resume from "./AIML_Ritesh_Pandit_Resume_updated.pdf";
import full_stack_resume from "./Full_stack_Ritesh_Pandit_Resume.pdf";

const Resume = () => {
  const resumes = [
    {
      title: "AI/ML Developer",
      file: ai_resume,
    },
    {
      title: "Full Stack Developer",
      file: full_stack_resume,
    },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {resumes.map((resume, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              borderRadius: "10px",
              width: "300px",
              textAlign: "center",
            }}
          >
            <h3 className="resumeTitle">{resume.title}</h3>

            <iframe
              src={resume.file}
              title={resume.title}
              style={{ width: "100%", height: "300px", border: "none" }}
            ></iframe>

            <div style={{ marginTop: "10px" }}>
              <a
                href={resume.file}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginRight: "10px",
                  padding: "8px 12px",
                  background: "#007bff",
                  color: "#fff",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                Preview
              </a>
              <a
                href={resume.file}
                download
                style={{
                  padding: "8px 12px",
                  background: "#28a745",
                  color: "#fff",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resume;
