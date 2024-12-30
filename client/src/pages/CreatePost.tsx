import { FormField } from "../components/FormField"


import { useState } from "react";

export const CreatePost = () => {
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const handleSubmit = () => {

  }
  const handleChange = (e) => {

  }
  const handleIsSurpriseMe = () => {

  }

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Create imaginative and visually stunning images through DALL-E AI and
          share with the community
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your name"
            name="name"
            type="text"
            placeholder="Berli Rod"
            value={form.name}
            handleChange={handleChange}
            isSurpriseMe
            handleIsSurpriseMe={handleIsSurpriseMe}
          />
          <FormField
            labelName="Prompt"
            name="prompt"
            type="text"
            placeholder="A centaur but with a mermaid tail instead of a horse tail"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleIsSurpriseMe={handleIsSurpriseMe}
          />
        </div>
      </form>
    </section>
  )
}
