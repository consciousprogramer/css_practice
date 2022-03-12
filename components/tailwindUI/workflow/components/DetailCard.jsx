import React from "react"

function DetailCard({ title, value }) {
  return (
    <div className="">
      <h3 className="tw-text-gray-500 tw-font-semibold tw-text-lg tw-mb-1">
        {title}
      </h3>
      <p className="tw-text-gray-800">{value}</p>
    </div>
  )
}

export default DetailCard
