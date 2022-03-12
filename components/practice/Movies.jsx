import React from "react"
import ListItem from "./movies/ListItem"
function Movies() {
  const data = [
    {
      name: "Prognosis Negative",
      year: "2021",
      poster:
        "https://tailwindcss.com/_next/static/media/prognosis-negative.a3c55fb717747ce6804f7375a2147a76.jpg",
      rated: "PG-13",
      rating: "2.66",
      genre: "comedy",
      length: "1h 46m",
      cast: ["Simon Pegg", "Zach Galifianakis"],
    },
    {
      name: "Rochelle, Rochelle",
      year: "2020",
      poster:
        "https://tailwindcss.com/_next/static/media/rochelle-rochelle.3dafce5e8fef150b65e158fc34a74769.jpg",
      rated: "R",
      rating: "3.25",
      genre: "Romance",
      length: "1h 56m",
      cast: ["Emilia Clarke"],
    },
    {
      name: "Death Blow",
      year: "2020",
      poster:
        "https://tailwindcss.com/_next/static/media/death-blow.8f06f1c002165401a49a4c6ec95e6500.jpg",
      rated: "18 (A)",
      rating: "4.95",
      genre: "Action",
      length: "2h 5m",
      cast: ["Idris Elba", "John Cena", "Thandiwe Newton"],
    },
  ]
  return (
    <section className="tw-p-6">
      <div className="tw-rounded-lg tw-bg-slate-700">
        <div className="tw-border-b tw-border-slate-500 tw-flex tw-items-center tw-justify-start tw-py-4 tw-px-6 tw-space-x-2">
          <button className="tw-text-white tw-font-semibold tw-bg-sky-400 tw-rounded-md tw-capitalize tw-py-2 tw-px-4">
            New Releases
          </button>
          <button className="tw-font-semibold tw-border tw-border-slate-500 tw-text-slate-300 tw-rounded-md tw-capitalize tw-py-2 tw-px-4">
            Top Rated
          </button>
          <button className="tw-font-semibold tw-border tw-border-slate-500 tw-text-slate-300 tw-rounded-md tw-capitalize tw-py-2 tw-px-4">
            Vincent's Picks
          </button>
        </div>
        {data.map((item) => (
          <ListItem movieData={item} />
        ))}
      </div>
    </section>
  )
}

export default Movies
