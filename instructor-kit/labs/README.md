# Labs

All hands-on lab materials for the course, grouped by module. Each module folder has
its own README with the details; this is the map.

```
labs/
├─ module-1/   JavaScript Foundations — console exploration, then one cumulative js-practice project (L02–L04)
├─ module-2/   Control Flow & Functions — grade calculator, star rating & filter, utility library, score tracker
├─ module-3/   Working with Data — to-do manager, contact book, product pipeline, text utilities
├─ module-4/   The DOM — DOM explorer, profile card editor, task list, notification system
├─ module-5/   Building Interactive Pages — registration form, Pomodoro timer, persistent to-do list, GitHub user search
└─ module-6/   Capstone & Next Steps — l21-quicknote/ : the complete QuickNote app · l22-debugging/
```

Every lesson folder has a `starter/` (scaffold + TODO comments) and a `solution/`
(the lesson's exercise solution as a complete, working page). Open a folder with
Live Server, or serve this `labs/` folder with `python3 -m http.server` and browse to it.
Keep the DevTools console open — every solution runs with no console errors.

**How references work:** the facilitator guide, workbook, and answer key point to paths
like `labs/module-4/l15-task-list/solution/` — relative to the `instructor-kit/` root
(where the combined hand-out books live). Open the whole `instructor-kit/` folder to keep
those pointers valid.

**Network:** the L20 lab and the QuickNote capstone call public APIs (GitHub and
DummyJSON). GitHub allows about 60 unauthenticated requests per hour per public IP,
shared by everyone on the classroom network; the L20 solution has a mock-data
fallback for when the limit is reached.

Do not hand lab **solutions** to students before the corresponding lab.
