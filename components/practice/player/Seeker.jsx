import React from "react"

function Seeker() {
  return (
    <div className="tw-text-sky-500 tw-font-semibold tw-mx-8 tw-mb-6">
      {/* seeker and progress ui */}
      <div className="tw-mb-2 tw-relative tw-rounded tw-h-2 tw-bg-slate-300 tw-group tw-cursor-pointer">
        <div className="tw-absolute tw-top-0 tw-left-0 tw-bottom-0 tw-right-[50%] tw-bg-sky-500 tw-rounded"></div>
        <div className="tw-absolute tw-top-[50%] tw-left-[50%] tw-w-5 tw-h-5 tw-rounded-full tw-border-2 tw-border-blue-500 tw-bg-white tw-grid tw-place-content-center tw-z-10 tw-translate-y-[-50%] tw-translate-x-[-50%]">
          <div className="tw-bg-sky-500 tw-rounded-full tw-w-2 tw-h-2 group-hover:tw-w-3 group-hover:tw-h-3"></div>
        </div>
      </div>

      {/* timestamps */}
      <div className="tw-flex tw-items-center tw-justify-between tw-tracking-widest">
        <span className="">10:10</span>
        <span className="tw-text-gray-500">20:20</span>
      </div>
    </div>
  )
}

export default Seeker
