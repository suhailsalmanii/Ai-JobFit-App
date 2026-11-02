import { useState } from "react";

const SKILL_DATABASE = [
  "javascript",
  "react",
  "html",
  "css",
  "tailwind",
  "node",
  "python",
  "sql",
  "api",
  "git",
  "aws",
  "typescript",
  "java",
  "c++",
  "agile",
  "docker",
  "kubernetes",
  "machine learning",
  "figma",
  "ui/ux",
  "communication",
  "leadership",
  "problem solving",
  "angular",
  "vue",
];

export const useJobAnalysis = () => {
  const [resumeText, setResumeText] = useState("");
  const [jobText, setJobText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const analyze = () => {
    if (!resumeText.trim() || !jobText.trim()) {
      alert("Please paste both your resume and the job description.");
      return;
    }

    setIsAnalyzing(true);
    // setResults(null);

    // setTimeout(() => {
    //   const resumeLower = resumeText.toLowerCase();
    //   const jobLower = jobText.toLowerCase();
    //   const requiredSkills = SKILL_DATABASE.filter((skill) =>
    //     jobLower.includes(skill),
    //   );

    //   const matched = [];
    //   const missing = [];

    //   requiredSkills.forEach((skill) => {
    //     resumeLower.includes(skill) ? matched.push(skill) : missing.push(skill);
    //   });

    //   let score =
    //     requiredSkills.length === 0
    //       ? Math.floor(Math.random() * 40) + 40
    //       : Math.round((matched.length / requiredSkills.length) * 100);

    //   if (requiredSkills.length === 0) {
    //     matched.push("soft skills", "general experience");
    //     missing.push("specific domain keywords");
    //   }

    //   const tips = [];
    //   if (missing.length > 0) {
    //     tips.push(
    //       `Update your resume to explicitly mention: ${missing.slice(0, 3).join(", ")}.`,
    //     );
    //     if (missing.length > 2)
    //       tips.push(
    //         `Consider taking a quick crash course or building a small project using ${missing[0]}.`,
    //       );
    //   }
    //   if (score < 70)
    //     tips.push(
    //       "Try tailoring your summary section to better align with the core responsibilities.",
    //     );
    //   if (score >= 80)
    //     tips.push(
    //       "Your match is strong! Ensure your formatting is clean and submit your application soon.",
    //     );
    //   if (tips.length === 0)
    //     tips.push(
    //       "Review your resume for any grammatical errors before submitting.",
    //     );

    //   setResults({ score, matched, missing, tips });
    //   setIsAnalyzing(false);
    //   window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    // }, 1500);
  };

  const reset = () => {
    setResults(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const loadDemoData = () => {
    setResumeText(
      "Passionate frontend developer with 2 years of experience building modern web applications. Proficient in HTML, CSS, JavaScript, and React. Strong understanding of UI/UX principles and responsive design. Always eager to learn new technologies and solve complex problems.",
    );
    setJobText(
      "We are looking for a Software Engineer to join our fast-paced team. The ideal candidate must have strong experience with JavaScript, React, and Node.js. Knowledge of Tailwind CSS and Git is highly preferred. Experience with Docker and AWS is a big plus. Good communication skills are required.",
    );
  };

  return {
    resumeText,
    setResumeText,
    jobText,
    setJobText,
    isAnalyzing,
    results,
    analyze,
    reset,
    loadDemoData,
  };
};
