import React from "react"

function TeamCard({ src }) {
  if (!src) {
    src =
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
  }
  return (
    <div className="tw-py-4 tw-px-6 tw-rounded-md tw-border tw-border-gray-300 tw-flex tw-items-center">
      <img
        src={src}
        alt=""
        className="tw-w-10 tw-h-10 tw-rounded-full tw-object-cover"
      />
      <div className="tw-ml-2">
        <h5 className="tw-text-gray-800 tw-font-semibold">Vikas Kumawat</h5>
        <p className="tw-text-gray-500 tw-text-sm tw-font-semibold">co-founder & CMO</p>
      </div>
    </div>
  )
}

export default TeamCard
