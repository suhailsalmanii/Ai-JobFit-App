import React, { useEffect, useRef } from "react";
import { RiFileTextLine, RiSuitcaseLine } from "@remixicon/react";
import Header from "./components/features/Header";
import { TextAreaCard } from "./components/ui/TextAreaCard";
import { useJobAnalysis } from "./hooks/useAnalysis";
import Buttton from "./components/ui/Buttton";
import ResultDashboard from "./components/features/ResultDashboard";

const App = () => {
  const {
    resumeText,
    setResumeText,
    jobText,
    setJobText,
    isAnalyzing,
    results,
    analyze,
    reset,
    fillDemoData,
  } = useJobAnalysis();
  const resultsRef = useRef(null);

  useEffect(() => {
    if (isAnalyzing || results) {
      resultsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isAnalyzing, results]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-5 py-5">
          <h1 className="text-center text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Land Your dream job <br className="hidden sm:block" /> with
            <span className="block pl-2 text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600 sm:inline">
              tailored resumes
            </span>
          </h1>
          <p className="max-w-3xl text-center text-sm text-gray-500 sm:text-base">
            Paste your resume and the job description below. Our AI will analyze
            the keywords, identify missing skills, and give you a match
            score.
          </p>
          <button
            onClick={fillDemoData}
            className="rounded-full bg-indigo-100 px-4 py-2 font-semibold text-indigo-500"
          >
            Load Demo Data
          </button>
          <div className="mb-4 grid w-full grid-cols-1 gap-5 sm:gap-8 lg:grid-cols-2">
            <TextAreaCard
              tittle={"Your Resume / Skills"}
              icon={<RiFileTextLine />}
              colorClass={"text-blue-600"}
              placeHolder="Paste your full resume text here, or a list of your skills..."
              value={resumeText}
              onChange={setResumeText}
            />
            <TextAreaCard
              tittle={"Job Description"}
              icon={<RiSuitcaseLine />}
              colorClass={"text-purple-500"}
              placeHolder="Paste the job description requirements and responsibilities here..."
              value={jobText}
              onChange={setJobText}
            />
          </div>

          <div className="w-full">
            <Buttton onClick={analyze} isLoading={isAnalyzing} />
          </div>

          {(isAnalyzing || results) && (
            <div
              ref={resultsRef}
              className="flex w-full scroll-mt-24 items-center justify-center"
            >
              <ResultDashboard
                results={results}
                isAnalyzing={isAnalyzing}
                onReset={reset}
              />
            </div>
          )}
        </div>
      </main>
      <footer className="border-t border-gray-200 bg-white px-4 py-4 text-center text-sm font-medium text-gray-500 sm:text-base">
        <div>
          <p>Built with React &amp; Tailwind CSS for Job Seekers</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
