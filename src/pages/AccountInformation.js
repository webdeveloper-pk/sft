import React from "react";
import { Tabs } from "antd";
import ButtonFilled from "../components/common/ButtonFilled";

const AccountInformation = () => {
  return (
    <div>
      <div className="h-full pb-[200px] lg:pb-[300px] xl:pb-[360px]">
        <div className="pt-10">
          <div>
            <Tabs defaultActiveKey="1">
              <Tabs.TabPane tab="Tab 1" key="1">
                <div className="flex flex-col gap-y-8 w-full bg-white rounded-xl px-8 py-6 mt-4">
                  <div>tab1</div>
                  <div className="">form</div>
                  <div className="flex flex-row justify-center">
                    <ButtonFilled
                      buttonText="save changes"
                      textSize="text-base"
                      paddingY="py-2"
                      paddingX="px-6 md:px-10 lg:px-12"
                    />
                  </div>
                </div>
              </Tabs.TabPane>
              <Tabs.TabPane tab="Tab 2" key="2">
              <div className="flex flex-col gap-y-8 w-full bg-white rounded-xl px-8 py-6 mt-4">
                  <div>tab2</div>
                  <div className="">form</div>
                  <div className="flex flex-row justify-center">
                    <ButtonFilled
                      buttonText="save changes"
                      textSize="text-base"
                      paddingY="py-2"
                      paddingX="px-6 md:px-10 lg:px-12"
                    />
                  </div>
                </div>
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;
