const NewNote = () => {
  return (
    <div>
      <h2>Create a new note</h2>
      <form>
        <div>
          <label>
            Content
            <input name="content" required type="text" />
          </label>
        </div>

        <div>
          <label>
            <input type="checkbox" name="important" />
            Important
          </label>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NewNote;
