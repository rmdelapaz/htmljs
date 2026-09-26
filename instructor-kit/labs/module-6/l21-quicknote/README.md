# L21 Lab — Build QuickNote (capstone)

**Time:** the whole 90-minute lesson is a guided build. You code each step live; the
room mirrors you; everyone checks the checkpoint before you move on.
**Files:** `starter/quicknote.html` (everyone starts here) · `checkpoints/` (catch-up
files) · `solution/quicknote.html` (the lesson's complete source).

## The one idea to repeat all afternoon

> **user action → update state → save → re-render**

Every feature follows that loop. When something breaks, ask which link of the chain is
missing.

## Build steps and checkpoints

| Step | Students write (TODOs) | Checkpoint — "you're done when…" | Catch-up file |
|------|------------------------|----------------------------------|---------------|
| 1 HTML | nothing — tour the starter's markup and CSS | the page loads with an empty grid and no Console errors | `starter/quicknote.html` |
| 2 Data layer | 2a–2g: `loadNotes`, `saveNotes`, `notes`, `createNote`, `updateNote`, `deleteNote`, `getNotes` | `createNote("Test", "Hello", "work")` in the Console, then `notes` shows it and **Application → Local Storage** has `quicknote_notes` | — |
| 3 Rendering | 3a–3c: `formatDate`, `renderNotes`, uncomment `renderNotes()` | reload: the Console-made note appears as a card; with no notes, the empty-state message shows | `checkpoints/step-3-render.html` |
| 4 Form | 4a–4h: show/hide form, validation, errors, save status, submit, buttons | **+ New Note** opens the form; saving empty shows **both** messages; a valid note appears with "Note saved!" | `checkpoints/step-4-form.html` |
| 5 Search & filter | 5a–5c: `debounce`, `applyFilters`, listeners | typing filters after a short pause; the category menu filters instantly | `checkpoints/step-5-search.html` |
| 6 Quote | 6a–6b: `fetchQuote`, uncomment `fetchQuote()` | a quote appears; with **Network → Offline** and a reload, the fallback quote shows and the app still works | `checkpoints/step-6-quote.html` |
| 7 Polish | 7a–7b: delegated edit/delete, keyboard shortcuts | ✏️ edits (button says "Update Note"), 🗑️ confirms and fades out, **N** / **/** / **Esc** work | `solution/quicknote.html` |

The CSS transitions (form slide, card fade-in/out, status fade) are already in the
starter's `<style>` — Step 7 only has to add and remove the classes.

## Final test checklist (run it on your own app)

- [ ] **Add** a note in each category; the newest appears first.
- [ ] **Validate:** save with both fields empty → "Title is required" **and** "Note content is required"; focus jumps to the title.
- [ ] **Edit:** ✏️ fills the form, the button reads "Update Note", saving shows "Note updated!".
- [ ] **Delete:** 🗑️ asks to confirm, the card fades out, the count updates.
- [ ] **Delete the note you're editing:** the form closes and clears (no ghost "Update Note").
- [ ] **Search** is debounced (filters after you pause, not per keystroke); no match → "No notes match your search."
- [ ] **Category filter** narrows instantly and combines with search.
- [ ] **Reload** — every note is still there.
- [ ] **Quote** loads; offline (DevTools → Network → Offline) shows the fallback and nothing else breaks.
- [ ] **Shortcuts:** **N** opens a new note (and typing "n" in a field does *not*), **/** focuses search, **Esc** closes the form. Not Ctrl+N — Chrome keeps that for "new window".
- [ ] **Safety:** a note titled `<img src=x onerror=alert(1)>` shows as plain text — no alert.
- [ ] Console is clean (no red errors).

## Extensions (the lesson's 8 stretch challenges)

Pick one or two for early finishers or as take-home work. Each one reuses skills from the course.

1. **Dark mode** — a theme toggle that saves to `localStorage`. Move the colors into CSS custom properties first, then switch a class on `<html>`. *(L14, L19)*
2. **Export / import** — Export: `JSON.stringify(notes)` into a `Blob` and a temporary download link. Import: `<input type="file">` + `FileReader`, then `JSON.parse`, validate the shape, save, render. *(L10, L17, L19)*
3. **Drag & drop** — reorder cards with the HTML Drag and Drop API (`draggable="true"`, `dragstart`, `dragover`, `drop`); reorder the `notes` array, then save and render. Keep a keyboard way to move notes too. *(L15, L11)*
4. **Markdown preview** — render note bodies as Markdown with a library such as `marked`. The output is HTML, so it must be sanitized (for example with DOMPurify) before it goes near `innerHTML` — the textContent rule still stands for everything else.
5. **Multiple tabs** — listen for the `storage` event; when `quicknote_notes` changes in another tab, reload `notes` and re-render. Test with two tabs side by side. *(L19)*
6. **Word count** — a live "12 words · 64 characters" line under the textarea using the `input` event. *(L12, L15)*
7. **Confirmation modal** — replace `confirm()` with a `<dialog>` (`showModal()`); return focus to the card's button when it closes. *(L16, L15)*
8. **Pin notes** — a `pinned` property and a 📌 button; sort pinned notes to the top in `getNotes()` before rendering. Remember old saved notes have no `pinned` field. *(L10, L11)*
