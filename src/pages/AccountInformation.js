import React from "react";
import { Tabs } from "antd";
import Information from "../components/Information";
import ChnagePassword from "../components/ChnagePassword";

const AccountInformation = () => {
  return (
    <div>
      <div className="h-full pb-[200px] lg:pb-[300px] xl:pb-[360px]">
        <div className="pt-10">
          <div>
            <Tabs defaultActiveKey="1" className="tabs-info">
              <Tabs.TabPane tab="Personal Information" key="1">
                <Information />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Change Password" key="2">
                <ChnagePassword />
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
