import { nanoid } from "nanoid"
import { useEffect } from "react"
import { Head } from "next/head"

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
      <Head>
        <title>
          High End Modern UI components made with Nextjs & tailwindCSS
        </title>
        <meta
          name="description"
          content="These are some of the examples of Modern UI components made with tailwindcss. all the designs are responsive."
        />
        <meta
          property="og:title"
          content="High End Modern UI components made with Nextjs & tailwindCSS"
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/react-burger1-7e687.appspot.com/o/components-cover.png?alt=media&token=1443e3b4-f882-4182-86df-802c1b7e743f"
        />
        <meta
          property="og:description"
          content="These are some of the examples of Modern UI components made with tailwindcss. all the designs are responsive."
        />
        <meta
          property="og:url"
          content="https://v1-moderui-showcase.vercel.app"
        />
      </Head>
      <h1 className="tw-max-w-lg tw-my-4 tw-capitalize tw-text-purple-600 tw-font-semibold tw-mx-auto tw-p-2 tw-rounded tw-shadow-purple-100 tw-shadow-sm">
        I have created created replica of designs which I liked on internet and
        coded them. This project is made with Nextjs and tailwind CSS.
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
