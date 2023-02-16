import React from "react";
import chat from "../assets/images/chat.png"

const SubHero = () => {
  return (
    <section class="body-font px-6 md:px-8 lg:px-16 py-12 lg:py-16 md:mt-40">
      <div className="flex flex-col-reverse md:flex-row justify-between items-end md:items-center gap-y-8">
      <div class="flex flex-col text-center md:text-left">
        <h1 class="text-5xl lg:text-6xl xl:text-8xl mb-4 font-medium text-light-black uppercase">
          FIRST <br />
          CHALLENGE <br />
          IS
          <span className="text-light-green font-bold px-4">FREE!</span>
        </h1>
        <div className="pk-0 lg:pl-24 text-light-black text-3xl">
          <p>
            Join your{" "}
            <span className="text-light-green font-bold px-1">FREE</span>{" "}
            challenge. <br />
            <span className="text-light-green font-bold px-1">WIN</span> your
            challenge. <br />
            Manage{" "}
            <span className="text-light-green font-bold px-1">100k!</span>
          </p>
        </div>
      </div>
      <div className="-mt-4 md:mt-0">
      <img src={chat} alt="chat" width="80px" height="auto" />
      </div>
      </div>
     
      {/* <div>

      </div> */}
    </section>
  );
};

export default SubHero;
