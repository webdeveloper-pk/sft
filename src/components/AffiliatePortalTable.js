import React from "react";
import emoji from "../assets/images/order-face-icon.png";

const AffiliatePortalTable = () => {
  return (
    <div className="overflow-auto">
      <table className="w-full table-auto lg:table-fixed">
        <thead className="">
          <tr className="bg-light-green text-white font-semibold text-sm">
            <th className="py-4 px-8 xl:px-0">Client Name</th>
            <th className="py-4 px-8 xl:px-0">Order ID</th>
            <th className="py-4 px-8 xl:px-0">Purchase Date</th>
            <th className="py-4 px-8 xl:px-0">Product Purchased</th>
            <th className="py-4 px-8 xl:px-0">Purchase Price</th>
            <th className="py-4 px-8 xl:px-0">Affiliate Commission</th>
            <th className="py-4 px-8 xl:px-0">Affiliate Commission</th>
            <th className="py-4 px-8 xl:px-0">Discount Code</th>
          </tr>
        </thead>
      </table>
      <div className="flex justify-center items-center h-[280px] py-6 bg-white rounded-md mb-8">
        <div className="affiliate-table-bg">
          <div className="flex flex-col items-center mt-16">
            <div>
              <img src={emoji} alt="emoji" width={60} height={60} />
            </div>
            <p className="text-light-gray font-semibold text-sm mt-4">
              No data available in table
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliatePortalTable;
