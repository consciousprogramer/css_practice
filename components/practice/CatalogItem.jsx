import React from "react"
import { AiOutlineHeart } from "react-icons/ai"
function CatalogItem() {
  const src =
    "https://tailwindcss.com/_next/static/media/classic-utility-jacket.0f108046e151c8576017eaf383406fe6.jpg"
  return (
    <div className="tw-rounded-md tw-shadow-md tw-m-4 tw-pb-4 tw-max-w-md tw-mx-auto">
      <div className="tw-h-52">
        <img
          src={src}
          alt=""
          className="tw-object-cover tw-object-center tw-w-full tw-h-full tw-rounded-t-md"
        />
      </div>
      <section className="tw-px-3">
        <div className="tw-my-1.5 tw-flex tw-items-center tw-justify-between">
          <h1 className="tw-text-2xl tw-font-semibold tw-text-blue-900 tw-capitalize">
            utility jacket
          </h1>
          <p className="tw-text-gray-400 tw-font-semibold tw-text-lg">
            $ 110.00
          </p>
        </div>
        <div className="tw-my-1.5">
          <h1 className="tw-text tw-text-blue-900">In stock</h1>
        </div>
        <div className="tw-my-1.5">
          <div className="tw-flex tw-justify-start tw-items-center tw-font-medium">
            <button className="tw-rounded tw-text-white tw-bg-blue-900 tw-font-semibold tw-shadow tw-transition-shadow tw-uppercase tw-mr-2 tw-p-2">
              xs
            </button>
            <button className="tw-rounded tw-text-blue-900 hover:tw-text-white hover:tw-bg-blue-900 hover:tw-font-semibold hover:tw-shadow tw-transition-shadow tw-uppercase tw-mr-2 tw-p-2">
              s
            </button>
            <button className="tw-rounded tw-text-blue-900 hover:tw-text-white hover:tw-bg-blue-900 hover:tw-font-semibold hover:tw-shadow tw-transition-shadow tw-uppercase tw-mr-2 tw-p-2">
              m
            </button>
            <button className="tw-rounded tw-text-blue-900 hover:tw-text-white hover:tw-bg-blue-900 hover:tw-font-semibold hover:tw-shadow tw-transition-shadow tw-uppercase tw-mr-2 tw-p-2">
              l
            </button>
            <button className="tw-rounded tw-text-blue-900 hover:tw-text-white hover:tw-bg-blue-900 hover:tw-font-semibold hover:tw-shadow tw-transition-shadow tw-uppercase tw-mr-2 tw-p-2">
              xl
            </button>
          </div>
        </div>
        <hr className="tw-my-4" />
        <div className="tw-grid tw-grid-cols-2">
          <div className="tw-col-span-2 md:tw-col-span-1 tw-my-1.5 tw-mx-0 md:tw-mr-1">
            <button className="tw-bg-blue-900 tw-rounded tw-text-lg tw-font-bold tw-text-white tw-w-full tw-p-2">
              Buy now
            </button>
          </div>
          <div className="tw-col-span-2 md:tw-col-span-1 tw-my-1.5 tw-mx-0 md:tw-ml-1">
            <div className="tw-flex tw-items-center tw-justify-between">
              <button className="tw-flex-grow tw-font-semibold tw-p-2 tw-border tw-border-gray-300 tw-rounded">
                Add to bag
              </button>
              <button className="tw-grid tw-place-items-center tw-flex-shrink-0 tw-p-2 tw-border tw-border-gray-300 tw-rounded tw-ml-2 tw-self-stretch tw-text-gray-400 hover:tw-text-red-500 hover:tw-border-red-500">
                <AiOutlineHeart size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CatalogItem
