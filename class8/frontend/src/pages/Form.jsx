import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Form = () => {
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()

  const formHandler = async (e) => {
    e.preventDefault()
    console.log("From Submit");
    console.log({
      heading,
      description
    });

    setHeading('')
    setDescription('')

    await axios.post("http://localhost:3000/create-note",{
      heading,
      description
    })

    navigate('/feed')
  };

  return (
    <section className="bg-gray-400 h-dvh w-dvw flex justify-center items-center">
      <div className="bg-white h-[90%] w-[90%] rounded-3xl p-5 flex flex-col justify-center items-center">
        <h1 className="text-4xl lg:text-6xl mb-4">Create Note</h1>
        <form
        onSubmit={(e)=>{
          formHandler(e)
        }}
        className="flex flex-col justify-center items-center gap-3">
          <input
            className="lg:w-100 px-4 py-2 rounded-full border-2 border-gray-600 outline-none"
            type="text"
            placeholder="Enter Note Title"
            onChange={(e)=>{
              setHeading(e.target.value)
            }}
            value={heading}
            name="heaading"
            required
          />

          <input
            className="lg:w-100 px-4 py-2 rounded-full border-2 border-gray-600 outline-none"
            type="text"
            placeholder="Enter Note Description"
            onChange={(e)=>{
              setDescription(e.target.value)
            }}
            value={description}
            name="description"
            required
          />

          <button className="bg-red-400 text-white text-center px-4 py-2 rounded-full active:scale-95">
            Create Note
          </button>
        </form>
      </div>
    </section>
  );
};

export default Form;
