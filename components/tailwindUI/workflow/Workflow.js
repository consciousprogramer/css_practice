import React from "react"
import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineTeam,
  AiOutlineFolderView,
} from "react-icons/ai"
import {
  HiViewGridAdd,
  HiOutlineCog,
  HiOutlineSpeakerphone,
  HiMap,
  HiMail,
  HiPhone,
  HiSearch,
  HiFilter,
  HiOutlineFilter,
} from "react-icons/hi"
import DetailCard from "./components/DetailCard"
import MemberListItem from "./components/MemberListItem"
import SidebarItem from "./components/SidebarItem"
import TeamCard from "./components/TeamCard"

function Workflow() {
  return (
    <section className="tw-p-0 tw-m-0">
      <div className="tw-grid tw-grid-cols-11 tw-h-full">
        {/* sidebar */}
        <div className="tw-col-span-2 tw-bg-slate-100 tw-py-4 tw-h-full">
          <div className="tw-mb-6  tw-px-4">
            <img src="/workflow_logo.jpg" alt="" className="tw-w-40" />
          </div>
          <div className="tw-text-gray-600 tw-mb-4 tw-py-2  tw-px-2 tw-border-b tw-border-gray-300 tw-text-lg">
            <SidebarItem Icon={AiOutlineHome} text={"Dashboard"} />
            <SidebarItem Icon={AiOutlineCalendar} text={"Calender"} />
            <SidebarItem Icon={AiOutlineTeam} text={"Teams"} />
            <SidebarItem Icon={AiOutlineFolderView} text={"Directory"} />
            <SidebarItem Icon={HiOutlineSpeakerphone} text={"Announcement"} />
            <SidebarItem Icon={HiMap} text={"Office Map"} />
          </div>
          <div className="tw-text-gray-600 tw-mb-4 tw-py-2  tw-px-2 tw-border-b tw-border-gray-300 tw-text-lg">
            <SidebarItem Icon={HiViewGridAdd} text={"Apps"} />
            <SidebarItem Icon={HiOutlineCog} text={"Settings"} />
          </div>
        </div>
        {/* member list */}
        <div className="tw-col-span-3 tw-pt-4">
          <div className="tw-px-3">
            <h2 className="tw-text-xl tw-font-semibold tw-text-gray-800 tw-mb-1">
              Directory
            </h2>
            <p className="tw-text-gray-500 tw-mb-4">
              Search directory of 40,089 Employees
            </p>
          </div>
          <div className="tw-flex tw-items-center tw-px-3 tw-mb-4">
            <span className="tw-relative tw-group tw-flex-grow tw-mr-4">
              <i className="tw-absolute tw-left-0 tw-top-0 tw-bottom-0 tw-grid tw-place-items-center tw-p-2">
                <HiSearch className="group-hover:tw-text-gray-800 tw-text-gray-500 group-focus-within:tw-text-gray-800" />
              </i>
              <input
                type="text"
                className="tw-pl-10 tw-pr-4 tw-py-2 tw-rounded-md tw-border tw-border-gray-300 hover:tw-border-gray-500 tw-w-full focus:tw-outline-none tw-appearance-none focus:tw-bg-gray-50 focus:tw-ring-1 focus:tw-ring-gray-500 focus:hover:tw-border-0 focus:tw-border-0"
                placeholder="Search"
              />
            </span>
            <button className="tw-flex-shrink tw-px-3 tw-border-gray-300 tw-border tw-self-stretch tw-rounded-md tw-grid tw-place-items-center tw-text-gray-500">
              <HiOutlineFilter className="hover:tw-text-gray-800" />
            </button>
          </div>
          <div className="tw-px-3 tw-bg-slate-100 tw-text-gray-500 tw-font-semibold tw-capitalize tw-border-t tw-border-b tw-border-gray-200">
            A
          </div>
          <MemberListItem />
          <MemberListItem
            src={
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            }
            name={"Rohit Kumar"}
            position={"Rich"}
          />
          <MemberListItem />
          <MemberListItem
            src={
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            }
            name={"Rohit Kumar"}
            position={"Rich"}
          />
          <div className="tw-px-3 tw-bg-slate-100 tw-text-gray-500 tw-font-semibold tw-capitalize tw-border-t tw-border-b tw-border-gray-200">
            B
          </div>
          <MemberListItem />
          <MemberListItem
            src={
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            }
            name={"Rohit Kumar"}
            position={"Rich"}
          />
          <MemberListItem />
          <MemberListItem
            src={
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            }
            name={"Rohit Kumar"}
            position={"Rich"}
          />
          <div className="tw-px-3 tw-bg-slate-100 tw-text-gray-500 tw-font-semibold tw-capitalize tw-border-t tw-border-b tw-border-gray-200">
            C
          </div>
          <MemberListItem />
          <MemberListItem
            src={
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            }
            name={"Rohit Kumar"}
            position={"Rich"}
          />
          <MemberListItem />
          <MemberListItem
            src={
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            }
            name={"Rohit Kumar"}
            position={"Rich"}
          />
          <div className="tw-px-3 tw-bg-slate-100 tw-text-gray-500 tw-font-semibold tw-capitalize tw-border-t tw-border-b tw-border-gray-200">
            D
          </div>
        </div>
        {/* member details */}
        <div className="tw-col-span-6 tw-border-l tw-border-gray-300">
          {/* section one */}
          <div className="tw-h-52 tw-relative">
            <img
              src="https://images.unsplash.com/photo-1593179835737-9f82a5f30c68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
              className="tw-w-full tw-h-full tw-object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="tw-absolute tw-w-36 tw-h-36 tw-rounded-full tw-border-4 tw-border-white tw-shadow tw-bottom-0 tw-left-5 tw-translate-y-[50%] tw-object-cover"
            />
          </div>

          {/* section two */}
          <div className="tw-flex tw-items-center tw-justify-end tw-py-5 tw-mb-4">
            <button className="tw-flex tw-items-center tw-text-lg tw-px-5 tw-py-2 tw-font-semibold tw-text-gray-600 tw-rounded-md tw-border tw-border-gray-300 tw-mr-4">
              <HiMail />
              <span className="tw-pl-2">Message</span>
            </button>
            <button className="tw-flex tw-items-center tw-text-lg tw-px-5 tw-py-2 tw-font-semibold tw-text-gray-600 tw-rounded-md tw-border tw-border-gray-300 tw-mr-4">
              <HiPhone />
              <span className="tw-pl-2">Call</span>
            </button>
          </div>
          <h1 className="tw-text-2xl tw-pl-5 tw-font-bold tw-text-gray-700">
            Rohit Kumar
          </h1>

          <div className="tw-flex tw-items-center tw-justify-start tw-pl-5 tw-border-b tw-border-b-gray-300 tw-mb-6">
            <button className="tw-text-gray-700 tw-py-4 tw-mr-8 tw-border-b-2 tw-border-b-pink-500 tw-transition-[border] -tw-mb-0.5">
              Profile
            </button>
            <button className="tw-text-gray-500/80 hover:tw-text-gray-700 tw-py-4 tw-mr-8 tw-border-b-1 hover:tw-border-b hover:tw-border-b-pink-500 tw-border-gray-300 tw-transition-[border] -tw-mb-0.5">
              Calendar
            </button>
            <button className="tw-box-content tw-text-gray-500/80 hover:tw-text-gray-700 tw-py-4 tw-mr-8 tw-border-b-1 hover:tw-border-b hover:tw-border-b-pink-500 tw-border-gray-300 tw-transition-[border] -tw-mb-0.5">
              Recognition
            </button>
          </div>

          <div className="tw-grid tw-grid-cols-2 tw-gap-x-3 tw-gap-y-4 tw-pl-5 tw-mb-6">
            <DetailCard title={"Phone"} value={"+91 62 0000 1352"} />
            <DetailCard title={"E-mail"} value={"rohitkumar9133@gmail.com"} />
            <DetailCard
              title={"Title"}
              value={"Super Rich Multi Billionaire"}
            />
            <DetailCard title={"Team"} value={"With Top Notch Work Ethics"} />
            <DetailCard title={"Location"} value={"Shivoham"} />
            <DetailCard title={"Sits"} value={"Top and Edge"} />
            <DetailCard
              title={"Salary"}
              value={"clockwise 90 deg rotation of 8"}
            />
            <DetailCard title={"Age"} value={"Bijli Bijli ⚡"} />
          </div>

          <div className="tw-mb-6 tw-pl-5">
            <h3 className="tw-text-gray-500 tw-font-semibold tw-text-lg tw-mb-1">
              About
            </h3>
            <p className="tw-text-gray-800 tw-w-[100%] md:tw-w-[80%]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              inventore, quo ad ratione dolores sunt incidunt quos! Aliquid.{" "}
              <br />
              suscipit consequuntur repudiandae, quaerat alias officia earum
              esse expedita quis debitis hic?
            </p>
          </div>

          <div className="tw-mb-6 tw-px-5">
            <h3 className="tw-text-gray-500 tw-font-semibold tw-text-lg tw-mb-2">
              Team Members
            </h3>
            <div className="tw-grid tw-gap-4 tw-grid-cols-2">
              <TeamCard />
              <TeamCard />
              <TeamCard />
              <TeamCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Workflow
