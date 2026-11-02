import {
  RiCheckboxCircleLine,
  RiLightbulbFill,
  RiLoopRightLine,
} from "@remixicon/react";

const ResultDashboard = ({ results, isAnalyzing, onReset }) => {
  return (
    <section className=" my-5 mb-40 h-fit w-full max-w-6xl rounded-2xl border-[0.5px] border-gray-300 bg-white shadow-md">
      <div className="rounded-t-2xl bg-linear-to-r from-indigo-500 to-purple-500 p-5 text-center text-white">
        <h2 className="text-2xl font-bold">
          {isAnalyzing ? "Analyzing your resume..." : "Analysis Complete"}
        </h2>
        <p className="text-md text-slate-200">
          {isAnalyzing
            ? "Comparing your skills with the job description"
            : "Here is how well your resume matches the job description"}
        </p>
      </div>

      {isAnalyzing ? (
        <div
          className="flex min-h-72 flex-col items-center justify-center gap-4 p-8 text-indigo-600"
          role="status"
          aria-live="polite"
        >
          <div className="size-12 animate-spin rounded-full border-4 border-indigo-100 border-t-indigo-600" />
          <p className="font-medium">Your results are on the way</p>
        </div>
      ) : (
        results && (
          <div className="grid gap-8 p-6 md:grid-cols-[220px_1fr] md:p-8">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="text-center">
                <p className="text-5xl font-bold text-indigo-600">
                  {results.score}%
                </p>
                <p className="text-sm font-medium text-gray-500">Match score</p>
              </div>
              <div
                className="h-3 w-full max-w-48 overflow-hidden rounded-full bg-slate-100"
                role="progressbar"
                aria-label="Resume match score"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={results.score}
              >
                <div
                  className="h-full rounded-full bg-indigo-500 transition-all"
                  style={{ width: `${results.score}%` }}
                />
              </div>
              <button
                type="button"
                onClick={onReset}
                className="flex items-center py-3 text-sm font-medium text-gray-500 hover:text-indigo-600"
              >
                <RiLoopRightLine size={17} className="mr-2" />
                Run New Analysis
              </button>
            </div>

            <div className="flex min-w-0 flex-col gap-6">
              <div>
                <div className="flex items-center gap-2 py-2">
                  <i className="rounded-full bg-green-100 p-1 text-green-600">
                    <RiCheckboxCircleLine />
                  </i>
                  <h3 className="font-medium text-slate-800">Matched skills</h3>
                </div>
                <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
                  {results.matched.length ? (
                    results.matched.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-2xl bg-green-100 px-3 text-sm font-medium text-green-600"
                      >
                        {skill}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-gray-500">
                      No matching skills found.
                    </li>
                  )}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 py-2">
                  <i className="rounded-full bg-red-100 p-1 text-red-600">
                    <RiCheckboxCircleLine />
                  </i>
                  <h3 className="font-medium text-slate-800">Missing skills</h3>
                </div>
                <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
                  {results.missing.length ? (
                    results.missing.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-2xl bg-red-100 px-3 text-sm font-medium text-red-600"
                      >
                        {skill}
                      </li>
                    ))
                  ) : (
                    <li className="text-sm text-gray-500">
                      No missing skills found.
                    </li>
                  )}
                </ul>
              </div>

              <div className="w-full rounded-xl border-[0.5px] border-gray-200">
                <div className="rounded-xl bg-slate-100 p-5">
                  <div className="flex items-center gap-2">
                    <RiLightbulbFill className="text-yellow-400" />
                    <h3 className="text-xl font-semibold">Actionable Tips</h3>
                  </div>
                  <ul className="flex list-disc flex-col gap-3 px-8 py-5 text-sm text-gray-500">
                    {results.tips.map((tip) => (
                      <li key={tip}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default ResultDashboard;
