import React from "react";
import { Tabs } from "antd";
import PassedCertificates from "../components/PassedCertificates";
import PayoutCertificates from "../components/PayoutCertificates";
import Milestones from "../components/Milestones";

const Certificates = () => {
  return (
    <div>
      <div className="h-full pb-[200px] lg:pb-[300px] xl:pb-[360px]">
        <div className="pt-8">
          <div>
            <Tabs defaultActiveKey="3" className="tabs-info">
              <Tabs.TabPane tab="Passed Certificates" key="1">
                <PassedCertificates />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Payout Certificates" key="2">
                <PayoutCertificates />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Milestones" key="3">
                <Milestones />
              </Tabs.TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
