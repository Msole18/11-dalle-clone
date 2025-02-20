import { FormField } from "../components/FormField";
import preview from "../assets/preview.png";

import { useState } from "react";
import { Loader } from "../components/Loader";
import { getRandomPrompt } from "../utils";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  };

  const handleIsSurpriseMe = () => {
    const ramdomPrompt = getRandomPrompt(form.prompt)
    setForm({ ...form, prompt: ramdomPrompt})
  };

  const generateImage = async() => {
    if (form.prompt) {
      try {
        setGeneratingImg(true)
        const response = await fetch(`http://localhost:8080/api/v1/dalle`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({prompt: form.prompt})
        })

        const data = await response.json()
        setForm({...form, photo: `data:image/jpeg;base64,${data.photo}`})
      } catch (error) {
        alert(error)
      } finally {
        setGeneratingImg(false)
      } 
    } else {
      alert('Please enter a prompt')
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.prompt && form.photo) {
      setLoading(true)
      try {
        const response = await fetch(`http://localhost:8080/api/v1/post`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        })
        await response.json()
        navigate('/')
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      } 
    } else {
      alert('Please enter a prompt and generate a image')
    }
  };

  return (
    <section className="mx-auto max-w-7xl">
      <div>
        <h1 className="text-[32px] font-extrabold text-[#222328]">Create</h1>
        <p className="mt-2 max-w-[500px] text-[14px] text-[#666e75]">
          Create imaginative and visually stunning images through DALL-E AI and
          share with the community
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        
        <div className="flex flex-col gap-5">
          <FormField
            handleChange={handleChange}
            handleIsSurpriseMe={handleIsSurpriseMe}
            isSurpriseMe={false}
            labelName="Your name"
            name="name"
            placeholder="Ex. Berli Rod"
            type="text"
            value={form.name}
          />
          <FormField
            handleChange={handleChange}
            handleIsSurpriseMe={handleIsSurpriseMe}
            isSurpriseMe
            labelName="Prompt"
            name="prompt"
            placeholder="Ex. A centaur but with a mermaid tail instead of a horse tail"
            type="text"
            value={form.prompt}
          />

          <div className="relative flex h-64 w-64 items-center justify-center rounded-lg
           border-gray-300 bg-gray-50 p-3 text-sm text-gray-900
           focus:border-blue-500 focus:ring-blue-500">
            {form.photo
              ? <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain" />
              : <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain oppacity-40" />
            }

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center 
                  bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button
            className="text-white bg-green-700 font-medium rounded-md text-sm 
            w-full sm:w-auto px-5 py-2.5 text-center"
            onClick={generateImage}
            type="button">
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">
            ** Once you have created the image you want, you can share it with others 
            in the community **
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm 
              w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? 'Sharing...' : 'Share with the Community'}
          </button>
        </div>

      </form>
    </section>
  );
};
