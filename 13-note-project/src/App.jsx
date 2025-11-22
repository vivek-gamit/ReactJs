import React, { useState } from "react";

function App() {
  const [title, settitle] = useState("");
  const [Details, setDetails] = useState("");
  const [task, settask] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const copytask = [...task];
    copytask.push({ title, Details });
    settask(copytask);
    settitle("");
    setDetails("");
  };

  const DeleteNote = (idx) => {
    const copytask = [...task];
    copytask.splice(idx, 1);
    settask(copytask);
  };

  return (
    <div className="h-screen bg-slate-950 lg:flex text-slate-100 overflow-hidden">
      {/* LEFT SIDE: FORM */}
      <form
        onSubmit={SubmitHandler}
        className="items-start lg:w-1/2 flex flex-col gap-4 p-10"
      >
        <h1 className="text-3xl font-bold text-cyan-400">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Note Heading"
          className="w-full px-5 py-2 border border-slate-700 bg-slate-900 rounded outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 transition"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <textarea
          type="text"
          placeholder="Write Details"
          className="w-full h-32 px-5 py-2 border border-slate-700 bg-slate-900 rounded outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 transition"
          value={Details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />

        <button className="active:scale-95 w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-2 rounded outline-none shadow-lg shadow-cyan-500/30 transition">
          Add Notes
        </button>
      </form>

      {/* RIGHT SIDE: NOTES LIST */}
      <div className="lg:w-1/2 p-10 lg:border-l lg:border-slate-800">
        <h1 className="text-3xl font-bold text-cyan-400">Recent Notes</h1>

        <div className="items-start justify-start flex flex-wrap gap-5 mt-6 h-full overflow-auto no-scrollbar">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative flex flex-col justify-between h-52 w-40 rounded-2xl bg-slate-900 border border-slate-700/80 shadow-md shadow-cyan-500/10 hover:shadow-cyan-500/30 transition text-slate-100 p-4"
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold text-slate-50">
                    {elem.title}
                  </h3>
                  <p className="mt-3 leading-tight font-medium text-slate-400 line-clamp-4">
                    {elem.Details}
                  </p>
                </div>

                <button
                  onClick={() => {
                    DeleteNote(idx);
                  }}
                  className="w-full bg-rose-500 hover:bg-rose-600 text-xs active:scale-95 font-bold py-1 rounded text-slate-50 transition"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
