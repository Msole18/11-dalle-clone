import { useState } from "react"
import { Loader } from "../components/Loader"
import { RenderCards } from "../components/RenderCards"

export const Home = () => {
  const [loading, setLoading] = useState(false)
  const [searText, setSearText] = useState('')
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">
          Browse through a collection of imaginative and visually stunning
          images generated by DALL-E AI
        </p>
      </div>
      <div className="mt-16"></div>
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing results for{' '}
                <span className="text-[#222328]">{searText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xm:grid-cols-2 grid-cols-1 gap-3">
              {searText ? (
                <RenderCards data={[]} title="No search results found" />
              ) : (
                <RenderCards data={[]} title="No Posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
