import React from "react";
import { Input, Tooltip } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import logo from "../assets/images/login-logo.png";
import Button from "../components/common/Button";
import ButtonFilled from "../components/common/ButtonFilled";
import bg from "../assets/images/sign-in-bg.png";
import candles from "../assets/images/sign-in-candles.png";
import gorila from "../assets/images/sign-in-gorilla.png";

const Login = () => {
  return (
    <div className="px-6 md:px-8 lg:px-16 pt-8 pb-4 lg:pt-12 flex flex-col justify-between min-h-screen bg-black relative">
      <div className="absolute left-0 bottom-0">
        <img
          src={bg}
          alt="background-dots"
          className="w-[250px] md:w-[100%] h-[500px] md:h-[100%]"
        />
      </div>
      <div className="absolute right-0 top-[40%] md:top-[30%] lg:top-0">
        <img src={candles} alt="background-candles" />
      </div>
      <div className="absolute right-0 top-5 md:top-0">
        <img
          src={gorila}
          alt="background-gorilla"
          className="w-[100%] h-[500px] md:h-[95vh] xl:h-[99vh]"
        />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between lg:min-h-[85vh] gap-y-8 lg:gap-x-8 xl:gap-x-0">
        <div className="w-full lg:w-[30%] flex flex-row justify-center lg:justify-start z-50">
          <img
            src={logo}
            alt="logo"
            className="w-[250px] lg:w-[320px] xl:w-[350px] h-[100%]"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-[40%] xl:w-[30%] mx-auto text-center z-50">
          <div className="w-full bg-white rounded-lg px-4 lg:px-8 xl:px-10 py-6 lg:py-8 xl:py-12">
            <p className="text-lighter-black2 text-xl mb-0 lg:mb-3">
              Welcome to
            </p>
            <p className="text-lighter-black2 text-3xl font-bold">Firexfunded</p>
            <p className="text-lighter-black2 text-2xl mt-8 lg:mt-12 font-bold">Login</p>
            <div className="w-full mt-6 lg:mt-10 text-left">
              <div className="mb-4 lg:mb-6">
                <Input
                  placeholder="Email address"
                  bordered={false}
                  style={{ borderBottom: "1px solid #a8a8a8" }}
                  suffix={
                    <Tooltip title="Email">
                      <MailOutlined
                        style={{
                          color: "#01c887",
                        }}
                      />
                    </Tooltip>
                  }
                />
              </div>
              <Input
                placeholder="Password"
                bordered={false}
                className="text-light-gray"
                style={{ borderBottom: "1px solid #a8a8a8" }}
                suffix={
                  <Tooltip title="Password">
                    <LockOutlined
                      style={{
                        color: "#01c887",
                      }}
                    />
                  </Tooltip>
                }
              />
            </div>
            <div className="flex flex-row items-center justify-center lg:justify-start mt-6 lg:mt-10 gap-x-4">
              <ButtonFilled
                textSize="text-xs lg:text-sm"
                buttonText="get started"
              />
              <Button
                textSize="text-xs md:text-sm"
                buttonText="Forget Password?"
              />
            </div>
            <div className="flex flex-row item-center gap-x-2 justify-center lg:justify-start mt-6 lg:mt-10">
              <p className="text-lightest-black text-sm font-medium xl:text-base">
                Still doesn't have an account?
              </p>
              <Button textSize="text-sm xl:text-base" buttonText="Sign up" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[30%] hidden lg:block"></div>
      </div>
      <div className="flex flex-row flex-wrap justify-center lg:justify-start text-white text-xs md:text-sm xl:text-base z-50">
        <p className="">© 2008 - 2021 Girls Chase Inc.</p>
        <ul className="flex flex-row gap-x-1 ml-3">
          <li>
            <a href="/privacy" className="login-link">
              Privacy
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="/terms" className="login-link">
              Terms
            </a>
          </li>
          <li>|</li>
          <li>
            <a href="/support" className="login-link">
              Support
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
