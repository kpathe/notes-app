import { getNotes } from "../services/notes";

function Notes() {
  const notes = getNotes();
  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((item) => (
          <li key={item.id}>
            {item.content} {item.important && <strong>(important)</strong>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
