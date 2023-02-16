import React from "react";

const Table = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 mt-12">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="w-full border-separate table-auto md:table-fixed">
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <div className="flex flex-col items-center justify-start border-l border-light-green">
                      <button className="bg-gradient-to-b from-bg-green1 to-bg-green3 uppercase text-light-white font-bold rounded-full py-1 lg:py-2 px-3 lg:px-4 text-xs md:text-md xl:text-2xl flex flex-row items-center">
                        <div className="w-[15px] h-[15px] lg:w-[23px] lg:h-[23px] border border-2 border-white rounded-full px-2 py-2 border-r-dark-green"></div>
                        <span className="ml-1 md:ml-2">step 1</span>
                      </button>
                      <p className="text-bg-green3 mt-2 uppercase font-bold text-lg lg:text-xl xl:text-2xl">
                      SFT challenge
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="flex flex-col items-center justify-start border-l border-light-green">
                      <button className="bg-gradient-to-b from-bg-green1 to-bg-green3 uppercase text-light-white font-bold rounded-full py-1 lg:py-2 px-3 lg:px-4 text-xs md:text-md xl:text-2xl flex flex-row items-center">
                        <div className="w-[15px] h-[15px] lg:w-[23px] lg:h-[23px] border border-2 border-white rounded-full px-2 py-2 border-r-dark-green border-b-dark-green"></div>
                        <span className="ml-1 md:ml-2">step 2</span>
                      </button>
                      <p className="text-bg-green3 mt-2 uppercase font-bold text-lg lg:text-xl xl:text-2xl">
                      SFT challenge
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="flex flex-col items-center justify-start border-l border-light-green">
                      <button className="bg-gradient-to-b from-bg-green1 to-bg-green3 uppercase text-light-white font-bold rounded-full py-1 lg:py-2 px-3 lg:px-4 text-xs md:text-md xl:text-2xl flex flex-row items-center">
                        <div className="w-[15px] h-[15px] lg:w-[23px] lg:h-[23px] border border-2 border-white rounded-full px-2 py-2 border-r-dark-green border-b-dark-green border-l-dark-green border-t-dark-green"></div>
                        <span className="ml-1 md:ml-2">step 3</span>
                      </button>
                      <p className="text-bg-green3 mt-2 uppercase font-bold text-lg lg:text-xl xl:text-2xl">
                      SFT trader
                      </p>
                    </div>
                  </th>
                </tr>
                <tr className="h-[30px]">
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="uppercase text-lighter-black">
                <tr>
                  <td className="text-md font-bold px-8 py-4 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2">
                    Trading period
                  </td>
                  <td className="text-md font-light px-16 lg:px-0  py-4 whitespace-nowrap bg-bg-green1 text-center">
                    35 days
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0  py-4 whitespace-nowrap bg-bg-green2 text-center">
                    70 days
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0  py-4 whitespace-nowrap bg-bg-green3 text-center"></td>
                </tr>
                <tr>
                  <td className="text-md  font-bold px-8 py-4 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2">
                    Min. Trading Days
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0  py-4 whitespace-nowrap bg-bg-green1 text-center">
                    5 days
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0  py-4 whitespace-nowrap bg-bg-green2 text-center">
                    5 days
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0 py-4 whitespace-nowrap bg-bg-green3 text-center"></td>
                </tr>
                <tr>
                  <td className="text-md  font-bold px-8 py-4 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2">
                    Max. daily loss
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0 py-4 whitespace-nowrap bg-bg-green1 text-center">
                    $500
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0 py-4 whitespace-nowrap bg-bg-green2 text-center">
                    $500
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0 py-4 whitespace-nowrap bg-bg-green3 text-center">
                    $500
                  </td>
                </tr>
                <tr>
                  <td className="text-md  font-bold px-8 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2">
                    Max. loss
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0  py-4 whitespace-nowrap bg-bg-green1 text-center">
                    $1,000
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0 py-4 whitespace-nowrap bg-bg-green2 text-center">
                    $1,000
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0 py-4 whitespace-nowrap bg-bg-green3 text-center">
                    $1,000
                  </td>
                </tr>
                <tr>
                  <td className="text-md  font-bold px-8 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2">
                    profit target
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0 py-4 whitespace-nowrap bg-bg-green1 text-center">
                    $700
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0 py-4 whitespace-nowrap bg-bg-green2 text-center">
                    $500
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0 py-4 whitespace-nowrap bg-bg-green3 text-center"></td>
                </tr>
                <tr>
                  <td className="text-md  font-bold px-8 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2">
                    free repeat
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0 py-4 whitespace-nowrap bg-bg-green1 text-center">
                    yes
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0 py-4 whitespace-nowrap bg-bg-green2 text-center">
                    yes
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0 py-4 whitespace-nowrap bg-bg-green3 text-center"></td>
                </tr>
                <tr>
                  <td className="text-md  font-bold px-8 whitespace-nowrap bg-gradient-to-b from-bg-gray1 to-bg-gray2">
                    refundable fee
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0 py-4 whitespace-nowrap bg-bg-green1 text-center">
                    yes
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0 py-4 whitespace-nowrap bg-bg-green2 text-center">
                    no
                  </td>
                  <td className="text-md  font-light px-16 lg:px-0 py-4 whitespace-nowrap bg-bg-green3 text-center"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
