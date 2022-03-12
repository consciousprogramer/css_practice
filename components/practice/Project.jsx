import React from "react"
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai"
function Project() {
  const imageUrls = {
    p1: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
    p2: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
    p3: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
    p4: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
    p5: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=facearea&facepad=2&w=48&h=48&q=80",
  }

  const persons = (
    <div className="tw-flex tw-items-center tw-justify-start -tw-space-x-1 tw-mt-4">
      {Object.entries(imageUrls).map((item) => {
        return (
          <span className="" key={item[0]}>
            <img
              src={item[1]}
              alt=""
              className="tw-w-7 tw-h-7 tw-rounded-full group-hover:tw-ring-2 group-hover:tw-ring-white"
            />
          </span>
        )
      })}
    </div>
  )
  return (
    <section className="tw-p-6">
      <div className="tw-bg-slate-700 tw-px-6 tw-py-6 tw-rounded-t-md">
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
          <h1 className="tw-font-semibold tw-text-white">Projects</h1>
          <button className="tw-bg-blue-500 tw-font-semibold tw-flex tw-items-center tw-space-x-1 tw-text-white tw-px-4 tw-py-2 tw-rounded-md">
            <AiOutlinePlus className="tw-text-white" />{" "}
            <span className="tw-ml-2">New</span>
          </button>
        </div>
        <form action="" className="tw-w-full">
          <div className="tw-group tw-relative">
            <span className="group-focus-within:tw-text-blue-500 tw-absolute tw-left-0 tw-top-0 tw-bottom-0 tw-text-slate-300 tw-grid tw-place-items-center tw-p-2">
              <AiOutlineSearch size={20} />
            </span>
            <input
              type="text"
              className="tw-w-full tw-pl-10 tw-pr-2 tw-py-2 tw-rounded-md tw-bg-slate-500/60 tw-shadow-sm focus:tw-bg-slate-600 focus:tw-ring-2 focus:tw-ring-blue-500 focus:tw-outline-none tw-appearance-none tw-text-white tw-font-semibold"
              placeholder="Filter projects..."
            />
          </div>
        </form>
      </div>
      <div className="tw-rounded-b-md tw-py-6 tw-px-6 tw-bg-slate-800/95 tw-grid tw-grid-cols-2 tw-gap-2 sm:tw-gap-3">
        <div className="tw-rounded-md tw-py-5 tw-px-3 hover:tw-bg-blue-500 tw-bg-slate-600 tw-col-span-2 md:tw-col-span-1  tw-group">
          <div className="tw-grid tw-grid-cols-2">
            <div className="tw-col-span-1 md:tw-col-span-2">
              <h2 className="tw-font-semibold tw-text-white tw-mb-1">
                API Integration
              </h2>
              <h3 className="tw-text-slate-400 group-hover:tw-text-slate-300">
                Engineering
              </h3>
            </div>
            <div className="tw-col-span-1 md:tw-col-span-2 tw-justify-self-end md:tw-justify-self-start">
              {persons}
            </div>
          </div>
        </div>
        <div className="tw-rounded-md tw-py-5 tw-px-3 hover:tw-bg-blue-500 tw-bg-slate-600 tw-col-span-2 md:tw-col-span-1  tw-group">
          <div className="tw-grid tw-grid-cols-2">
            <div className="tw-col-span-1 md:tw-col-span-2">
              <h2 className="tw-font-semibold tw-text-white tw-mb-1">
                New Benefits Plan
              </h2>
              <h3 className="tw-text-slate-400 group-hover:tw-text-slate-300">
                Human Resources
              </h3>
            </div>
            <div className="tw-col-span-1 md:tw-col-span-2 tw-justify-self-end md:tw-justify-self-start">
              {persons}
            </div>
          </div>
        </div>
        <div className="tw-rounded-md tw-py-5 tw-px-3 hover:tw-bg-blue-500 tw-bg-slate-600 tw-col-span-2 md:tw-col-span-1  tw-group">
          <div className="tw-grid tw-grid-cols-2">
            <div className="tw-col-span-1 md:tw-col-span-2">
              <h2 className="tw-font-semibold tw-text-white tw-mb-1">
                Onboarding Emails
              </h2>
              <h3 className="tw-text-slate-400 group-hover:tw-text-slate-300">
                Customer Success
              </h3>
            </div>
            <div className="tw-col-span-1 md:tw-col-span-2 tw-justify-self-end md:tw-justify-self-start">
              {persons}
            </div>
          </div>
        </div>
        <div className="tw-rounded-md tw-py-5 tw-px-3 tw-border-dashed tw-border-2 tw-border-slate-600 tw-grid tw-justify-center tw-justify-items-center tw-content-center tw-text-white hover:tw-text-blue-500 hover:tw-border-blue-500 hover:tw-border-solid tw-col-span-2 md:tw-col-span-1">
          <span className="">
            <AiOutlinePlus size={16} />
          </span>
          <p className="tw-font-semibold">New project</p>
        </div>
      </div>
      <p className="tw-text-center tw-capitalize tw-bg-slate-500 tw-text-white tw-font-semibold tw-py-2 tw-mt-4 tw-rounded-md">
        this design is fully responsive so try resizing the window
      </p>
    </section>
  )
}

export default Project
