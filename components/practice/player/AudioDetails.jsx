import React from "react"

function AudioDetails() {
  const src =
    "https://tailwindcss.com/_next/static/media/full-stack-radio.485d0b2c6e3aa1cacc6b50e462cd3675.png"
  return (
    <div className="tw-flex tw-items-center tw-justify-around tw-gap-x-4 tw-mb-6 tw-pt-8 tw-px-8">
      <img
        src={src}
        alt=""
        className="tw-rounded-md tw-w-24 tw-flex-shrink tw-flex-grow-0"
      />
      <div className="tw-flex-grow tw-flex-shrink-0">
        <h2 className="tw-text-sky-500 tw-font-semibold tw-mb-1">Ep. 128</h2>
        <h2 className="tw-text-gray-500 tw-font-semibold tw-mb-1.5">
          How to improve you CSS design skill
        </h2>
        <h2 className="tw-text-black tw-font-semibold tw-text-xl">
          Rohit kumar
        </h2>
      </div>
    </div>
  )
}

export default AudioDetails
