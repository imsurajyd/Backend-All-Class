import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Feed = () => {
  const [Notes, setNotes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3000/notes');
      setNotes(res.data.note);
    };
    fetchData();
  }, []);

  return (
    <section className="w-dvw h-dvh bg-gray-200 flex items-center justify-center">
      <div className="bg-white h-[90%] w-[90%] rounded-3xl flex flex-col overflow-hidden relative">
        <h1 className="text-5xl text-center p-4">All Notes</h1>

        <div className="flex-1 overflow-y-auto px-5 py-2 flex flex-wrap justify-center content-start gap-3">
          {Notes.length > 0 ? (
            Notes.map((note) => <NoteCard key={note._id} note={note} />)
          ) : (
            <h1>No Data</h1>
          )}
        </div>

        <button
          onClick={() => navigate('/')}
          className="h-20 w-20 bg-blue-500 text-6xl text-white rounded-full absolute right-10 bottom-10"
        >
          +
        </button>
      </div>
    </section>
  );
};

export default Feed;
