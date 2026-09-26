/* console-mirror.js — INSTRUCTOR ADD-ON, not part of the student exercise.
   Copies everything app.js sends to the console into a panel on the page, so the
   whole room can see the output on the projector without opening DevTools.
   Students don't write this file (it uses DOM skills from Module 4).
   Load it BEFORE app.js. Every message still goes to the real console too. */
(function () {
  const panel = document.getElementById("console-mirror");
  if (!panel) return;

  function show(value) {
    if (typeof value === "string") return value;
    if (typeof value === "number" && !Number.isFinite(value)) return String(value);
    if (value === undefined) return "undefined";
    try { return JSON.stringify(value); } catch (e) { return String(value); }
  }

  function addLine(level, args) {
    const line = document.createElement("div");
    line.className = "line " + level;
    const tag = document.createElement("span");
    tag.className = "lvl";
    tag.textContent = level;
    line.append(tag, " " + args.map(show).join(" "));
    panel.append(line);
  }

  ["log", "info", "warn", "error"].forEach(function (level) {
    const original = console[level].bind(console);
    console[level] = function (...args) {
      original(...args);
      addLine(level, args);
    };
  });

  const originalTable = console.table.bind(console);
  console.table = function (data) {
    originalTable(data);
    const rows = Array.isArray(data)
      ? data.map((v, i) => "  " + i + "  │ " + show(v))
      : Object.keys(data).map((k) => "  " + k + "  │ " + show(data[k]));
    addLine("table", ["(index) │ Value\n" + rows.join("\n")]);
  };
})();
