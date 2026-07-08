import axios from 'axios'
import { SiFiles } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const CreaatePost = () => {

  const navigate  = useNavigate()
  const formHandler = (e)=>{
    e.preventDefault()

    const formData = new FormData(e.target)

    axios.post("http://localhost:3000/post-create", formData)
    .then((res)=>{
      navigate("/feed")
    })
  }

  return (
    <section className="bg-blue-300 h-screen w-screen flex flex-col justify-center items-center">
      <div className="bg-white flex flex-col items-center justify-center border-2 border-black rounded-3xl p-5">
        <h1 className="mb-5 text-4xl">Create Post</h1>
        <form
        onSubmit={formHandler}
        className="flex flex-col gap-5 ">
          <div className="flex gap-2 items-center border-2 border-gray-400 px-4 py-2 rounded-full">
            <input type="file" id='image' name="image" accept="image/*" required />
            <label htmlFor="image"><SiFiles /></label>
          </div>
          <input
            className="border-2 border-gray-400 px-4 py-2 rounded-full"
            type="text"
            name="caption"
            placeholder="Enter Caption here.."
            required
          />
          <button
            className="bg-pink-400 text-white px-5 py-2 rounded-full size-fit m-auto"
            type="submit"
          >
            Create Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreaatePost;
