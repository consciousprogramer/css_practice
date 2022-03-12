import React from "react"
import { AiFillStar } from "react-icons/ai"
function ListItem({
  movieData: { name, year, rated, rating, cast, genre, poster, length },
}) {
  return (
    <div className="tw-flex tw-justify-around tw-items-center tw-w-full tw-gap-x-4 tw-p-6 tw-border-b tw-border-slate-500/70">
      <img
        src={poster}
        alt={name + " movie poster"}
        className="tw-rounded-md tw-w-16"
      />
      <div className="tw-flex-shrink-0 tw-flex-grow">
        {/* row 1 */}
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-2">
          <h2 className="tw-text-white tw-font-semibold tw-text-lg">{name}</h2>
          <span className="tw-flex tw-items-center tw-flex-shrink tw-flex-grow-0">
            <span className="tw-text-sky-500">
              <AiFillStar />
            </span>
            <p className="tw-text-white tw-font-semibold">{rating}</p>
          </span>
        </div>
        {/* row 2 */}
        <div className="tw-flex tw-items-center tw-justify-start tw-space-x-2 tw-mb-2">
          <span className="tw-border tw-border-slate-500 tw-px-1.5 tw-py-0.5 tw-text-white tw-font-semibold tw-rounded-md">
            {rated}
          </span>
          <span className="tw-text-slate-400 tw-font-semibold">{year}</span>
          <svg
            width="2"
            height="2"
            fill="currentColor"
            className="tw-mx-2 tw-text-slate-300"
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          <span className="tw-text-slate-400 tw-font-semibold tw-capitalize">
            {genre}
          </span>
          <svg
            width="2"
            height="2"
            fill="currentColor"
            className="tw-mx-2 tw-text-slate-300"
            aria-hidden="true"
          >
            <circle cx="1" cy="1" r="1" />
          </svg>
          <span className="tw-text-slate-400 tw-font-semibold">{length}</span>
        </div>
        {/* row 3 */}
        <div className="tw-flex tw-items-center tw-justify-start">
          <span className="tw-text-slate-400 tw-font-semibold tw-mr-0.5">
            {cast.join(", ")},
          </span>
        </div>
      </div>
    </div>
  )
}

export default ListItem
