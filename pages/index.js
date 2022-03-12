import { nanoid } from "nanoid"
import { useEffect } from "react"

const uniqueIds = []
export default function Home() {
  const links = [
    { name: "E-commerce item card", link: "/components/Item" },
    { name: "Property listing card", link: "/components/ListingItem" },
    { name: "Project management ui", link: "/components/ProjectItems" },
    { name: "Movies list", link: "/components/MoviesList" },
    { name: "Audio Player UI", link: "/components/MusicPlayer" },
    {
      name: "Tailwind UI - workflow",
      link: "/components/tailwindUI/WorkflowPage",
    },
  ]

  useEffect(() => {
    const numbersOfIterations = links.length - uniqueIds.length
    for (let i = 0; i < numbersOfIterations; i++) {
      uniqueIds.push(nanoid(24))
    }
  }, [links])

  return (
    <div className="tw-min-h-screen tw-m-0">
      <h1 className="tw-max-w-lg tw-my-4 tw-capitalize tw-text-purple-600 tw-font-semibold tw-mx-auto tw-p-2 tw-rounded tw-shadow-purple-100 tw-shadow-sm">
        I have created created replica of designs which I liked on internet and
        coded them. This project is made with Nextjs.
      </h1>
      <section className="tw-shadow tw-shadow-purple-200 tw-mx-2 tw-rounded tw-py-4 tw-px-2">
        <ol>
          {links.map((item, index) => {
            return (
              <li className="hover:tw-underline" key={uniqueIds[index]}>
                <a
                  href={item.link}
                  className="tw-text-lg tw-font-semibold tw-text-blue-500"
                >
                  {`${index} - ${item.name}`}
                </a>
              </li>
            )
          })}
        </ol>
      </section>
    </div>
  )
}
