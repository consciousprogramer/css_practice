import React from "react"
import {
  MdOutlineSkipNext,
  MdOutlineSkipPrevious,
  MdPause,
  MdOutlineBookmark,
  MdForward10,
  MdReplay10,
} from "react-icons/md"

function Controls() {
  return (
    <div className="tw-bg-slate-50 tw-text-slate-500 tw-px-5 tw-py-2 tw-flex tw-items-center tw-justify-evenly tw-border-t tw-border-slate-100">
      <button className="tw-p-2 hover:tw-bg-gray-200 tw-rounded-lg">
        <MdOutlineBookmark size={26} />
      </button>
      <button className="tw-p-2 hover:tw-bg-gray-200 tw-rounded-lg">
        <MdOutlineSkipPrevious size={26} />
      </button>
      <button className="tw-p-2 hover:tw-bg-gray-200 tw-rounded-lg">
        <MdReplay10 size={26} />
      </button>
      <button className="tw-bg-white tw-text-gray-700 tw-rounded-full tw-shadow tw-p-3 tw-scale-[1.7] tw-border tw-border-slate-100">
        <MdPause size={26} />
      </button>
      <button className="tw-p-2 hover:tw-bg-gray-200 tw-rounded-lg">
        <MdOutlineSkipNext size={26} />
      </button>
      <button className="tw-p-2 hover:tw-bg-gray-200 tw-rounded-lg">
        <MdForward10 size={26} />
      </button>
      <button className="tw-font-semibold hover:tw-bg-gray-200 tw-border-2 tw-text-sm tw-border-slate-500 tw-rounded-lg tw-px-1.5">
        1x
      </button>
    </div>
  )
}

export default Controls
