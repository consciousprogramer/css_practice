import React from "react"

function SidebarItem({ Icon, text }) {
  return (
    <button className="tw-flex tw-items-center tw-px-2 tw-justify-start tw-py-1 tw-mb-2 tw-w-full tw-rounded-md hover:tw-bg-slate-200/50">
      <Icon />
      <span className="tw-pl-2 tw-flex-grow tw-text-left">{text}</span>
    </button>
  )
}

export default SidebarItem
