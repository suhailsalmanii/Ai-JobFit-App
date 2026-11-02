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
    <div className="bg-gray-100">
      <Header />
      <main className=" py-15">
        <div className="flex justify-center flex-col items-center py-5 gap-5">
          <h1 className="text-5xl text-center font-bold">
            Land Your dream job <br /> with
            <span className=" pl-2 text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-purple-600">
              tailored resumes
            </span>
          </h1>
          <p className="text-center text-gray-500">
            Paste your resume and the job description below. Our AI will analyze
            the keywords, <br /> identify missing skills, and give you a match
            score.
          </p>
          <button
            onClick={fillDemoData}
            className=" bg-indigo-100 text-indigo-500 rounded-full px-4 py-1 font-semibold"
          >
            Load Demo Data
          </button>
          <div className="grid md:grid-cols-2 gap-10 mb-8">
            <TextAreaCard
              tittle={"Your Resume / Skills"}
              icon={<RiFileTextLine />}
              colorClass={"text-blue-600"}
              placeHolder={
                "Paste your full resume thext here, or a list of your skills..."
              }
              value={resumeText}
              onChange={setResumeText}
            />
            <TextAreaCard
              tittle={"Job Description"}
              icon={<RiSuitcaseLine />}
              colorClass={"text-purple-500"}
              placeHolder={
                "Paste the job description requirements and responsibilities here..."
              }
              value={jobText}
              onChange={setJobText}
            />
          </div>

          <div>
            <Buttton onClick={analyze} isLoading={isAnalyzing} />
          </div>

          {(isAnalyzing || results) && (
            <div
              ref={resultsRef}
              className="w-full scroll-mt-24 flex justify-center items-center"
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
      <footer>
        <div className=" bg-white py-4 flex justify-center shadow-2xl fixed bottom-0 w-full  text-md font-medium text-gray-500 border-[0.5] border-t border-gray-400 ">
          <p>Built with React & Tailwind CSS for Job Seekers</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
