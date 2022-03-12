import React from "react"
import AudioDetails from "./player/AudioDetails"
import Controls from "./player/Controls"
import Seeker from "./player/Seeker"
function MusicPlayer() {
  return (
    <section className="tw-p-6">
      <div className="tw-shadow tw-rounded-xl">
        <AudioDetails />
        <Seeker />
        <Controls />
      </div>
    </section>
  )
}

export default MusicPlayer
