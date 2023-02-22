import React from "react";
import ButtonFilled from "../components/common/ButtonFilled";

const AccountMerge = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="pt-10">
          <h1 className="text-black text-2xl font-bold">Merge</h1>
          <p className="text-black text-sm font-medium">
            SFT offers flexibility with its master account merger. Two or more
            active trade-free funded accounts (nominated in the same currency)
            are accepted to integrate into one account.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-start gap-y-8 gap-x-12 mt-8 text-lighter-black pb-12 md:pb-0">
          <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[30%] bg-white rounded-xl px-8 py-6 text-center min-h-[200px]">
            <h1 className="text-lg font-semibold ">
              Avaiable challenge for switch
            </h1>
            <p className="text-xs font-semibold mt-10">
              No Challenge available for switch
            </p>
          </div>
          <div className="w-full md:w-[45%] lg:w-[40%] xl:w-[30%] bg-white rounded-xl px-8 py-6 text-center min-h-[200px]">
            <h1 className="text-lg font-semibold ">
              Trading objectives after switch
            </h1>
            <div className="flex flex-row justify-between my-6">
              <div>
                <p className="text-xs font-semibold ">Balance</p>
                <p className="text-lg lg:text-xl font-bold">$ 0.00</p>
              </div>
              <div className="border-r border-lighter-gray"></div>
              <div>
                <p className="text-xs font-semibold ">Max Daily Loss</p>
                <p className="text-lg lg:text-xl font-bold">$ 0.00</p>
              </div>
              <div className="border-r border-lighter-gray"></div>
              <div>
                <p className="text-xs font-semibold">Max Overall Loss</p>
                <p className="text-lg lg:text-xl font-bold">$ 0.00</p>
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <ButtonFilled
                buttonText="confirm"
                textSize="text-base"
                paddingY="py-2"
                paddingX="px-6 md:px-10 lg:px-14"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountMerge;
