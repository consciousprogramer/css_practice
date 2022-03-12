import React from "react"
import { AiOutlineStar, AiOutlineEnvironment } from "react-icons/ai"
function Listing() {
  // tw-bg-gradient-to-t tw-from-black/75 tw-via-black/0 tw-sm:bg-none
  const src =
    "https://tailwindcss.com/_next/static/media/beach-house.02381ba1b6293047997200a3099d03cb.jpg"
  const src1 =
    "https://tailwindcss.com/_next/static/media/beach-house-interior-1.bc69273a536a51bb58092b2896b92e3a.jpg"
  const src2 =
    "https://tailwindcss.com/_next/static/media/beach-house-interior-2.de1a47680b1fb31d36d1130dc925b197.jpg"
  return (
    <>
      <div className="tw-grid tw-grid-cols-2 tw-bg-[#1E293B] tw-font-sans tw-py-8 tw-h-screen">
        <div className="tw-col-span-2 lg:tw-col-span-1 tw-p-4 tw-grid tw-place-content-center tw-order-2 lg:tw-order-1">
          <div className="tw-flex tw-flex-col">
            <h3 className="tw-text-gray-400 tw-font-semibold tw-text-sm tw-hidden md:tw-block">
              Entire house
            </h3>
            <h1 className="tw-font-semibold tw-text-2xl tw-text-white tw-mb-4 tw-hidden md:tw-block">
              Beach House in Collingwood
            </h1>
            <div className="tw-flex tw-items-center tw-justify-start tw-text-gray-400 tw-text-sm tw-mb-6">
              <div className="tw-flex tw-items-center">
                <AiOutlineStar size={14} />
                <span className="tw-ml-2">4.89 (128)</span>
              </div>
              <div className="tw-flex tw-items-center tw-ml-4">
                <AiOutlineEnvironment size={14} />
                <span className="tw-ml-2">Collingwood, Ontario</span>
              </div>
            </div>
            <div className="tw-flex-shrink">
              <button className="tw-text-white tw-font-semibold tw-bg-indigo-600 tw-px-4 tw-py-2 tw-rounded-md">
                Check availability
              </button>
            </div>
            <div className="tw-text-gray-500 tw-font-semibold tw-mt-6">
              This sunny and spacious room is for those traveling light and
              looking for a comfy and cosy place to lay their head for a night
              or two. This beach house sits in a vibrant neighborhood littered
              with cafes, pubs, restaurants and supermarkets and is close to all
              the major attractions such as Edinburgh Castle and Arthur's Seat.
            </div>
          </div>
        </div>
        <div className="tw-col-span-2 lg:tw-col-span-1 tw-p-4 tw-order-1 lg:tw-order-2 tw-my-auto">
          <div className="tw-grid tw-grid-cols-4 tw-grid-rows-4 tw-gap-4 lg:tw-gap-6 lg:tw-h-96">
            <div className="tw-relative tw-col-span-4 tw-row-span-4 sm:tw-col-span-4 sm:tw-row-span-4 md:tw-col-span-2 md:tw-row-span-4 lg:tw-col-span-4 lg:tw-row-span-2">
              <img
                src={src}
                alt=""
                className="tw-rounded-md tw-w-full tw-h-full tw-object-cover"
              />
              <div className="tw-grid md:tw-hidden tw-px-3 tw-pb-0 tw-absolute tw-inset-0 tw-content-end tw-justify-items-start tw-justify-start tw-bg-gradient-to-t tw-from-black/80 tw-via-black/0 tw-sm:bg-none">
                <h3 className="tw-text-gray-400 tw-font-semibold tw-text-sm">
                  Entire house
                </h3>
                <h1 className="tw-font-semibold tw-text-2xl tw-text-white tw-mb-4">
                  Beach House in Collingwood
                </h1>
              </div>
            </div>
            <div className="tw-rounded-md tw-hidden md:tw-block tw-col-span-1 tw-row-span-4 lg:tw-row-span-2 lg:tw-col-span-2">
              <img
                src={src1}
                alt=""
                className="tw-rounded-md tw-w-full tw-h-full tw-object-cover"
              />
            </div>
            <div className="tw-rounded-md tw-hidden md:tw-block tw-col-span-1 tw-row-span-4 lg:tw-row-span-2 lg:tw-col-span-2">
              <img
                src={src2}
                alt=""
                className="tw-rounded-md tw-w-full tw-h-full tw-object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <p className="tw-text-center tw-capitalize tw-bg-slate-500 tw-text-white tw-font-semibold tw-py-2">
        this design is fully responsive so try resizing the window
      </p>
    </>
  )
}

export default Listing
