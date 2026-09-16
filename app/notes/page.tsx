import Link from "next/link";
import { getNotes } from "../services/notes";

function Notes() {
  const notes = getNotes();
  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((item) => (
          <li key={item.id}>
            <Link href={`/notes/${item.id}`}>{item.content}</Link>
            {item.important && <strong>(important)</strong>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notes;
