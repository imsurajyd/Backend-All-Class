const NoteCard = ({ note }) => {
  return (
    <section>
      <div className="bg-red-400 h-auto lg-70 lg:w-90 p-5 rounded-2xl flex flex-col gap-5">
        <h1 className="text-3xl font-semibold">{note.heading}</h1>
        <p className="text-lg ">{note.description}</p>
        <p className="text-gray-800">
          {new Date(note.date).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      </div>
    </section>
  );
};

export default NoteCard;
