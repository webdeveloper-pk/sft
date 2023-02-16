import React from 'react'
import sftscreens from "../assets/images/sftscreens.png"

const MetaTraderScreen = () => {
  return (
    <section class="px-6 md:px-8 lg:px-16 bg-lightest-white-bg">
      <div class="w-full mx-auto py-12 lg:py-16">
        <img src={sftscreens} alt="meta=traders" />
    </div>
    </section>
  )
}

export default MetaTraderScreen