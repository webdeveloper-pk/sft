import React from "react";
import usa from "../assets/images/usa.png";
import eur from "../assets/images/eur.png";
import gbp from "../assets/images/gbp.png";
import czech from "../assets/images/czech.png";
import cad from "../assets/images/cad.png";
import aud from "../assets/images/aud.png";
import chf from "../assets/images/chf.png";
import Table from "./common/Table";
import Button from "./common/Button";
import Currency from "./common/Currency";
import ChallengeButton from "./common/ChallengeButton";

const Challenge = () => {
  return (
    <section class="px-6 md:px-8 lg:px-16 py-12 lg:py-16 bg-lightest-white-bg text-lighter-black">
      <div className="flex flex-col gap-y-4">
        <div className="uppercase font-bold text-2xl md:text-3xl">
          CHOOSE YOUR <span className="text-light-green">SFT CHALLENGE</span>
        </div>
        <div className="mt-3">
          <p className="font-bold">CURRENCY:</p>
          <div className="flex flex-row flex-wrap gap-2 mt-2">
            <Currency
              flag={<img src={usa} alt="USA" width={22} height={22} />}
              currency="USD"
              bg="bg-light-green"
              border="border-light-green"
            />
            <Currency
              flag={<img src={eur} alt="EUR" width={22} height={22} />}
              currency="EUR"
              bg="bg-lighter-gray"
              border="border-lighter-gray"
            />
            <Currency
              flag={<img src={gbp} alt="GBP" width={22} height={22} />}
              currency="GBP"
              bg="bg-lighter-gray"
              border="border-lighter-gray"
            />
            <Currency
              flag={<img src={czech} alt="EUR" width={22} height={22} />}
              currency="EUR"
              bg="bg-lighter-gray"
              border="border-lighter-gray"
            />
            <Currency
              flag={<img src={cad} alt="CAD" width={22} height={22} />}
              currency="CAD"
              bg="bg-lighter-gray"
              border="border-lighter-gray"
            />
            <Currency
              flag={<img src={aud} alt="AUD" width={22} height={22} />}
              currency="AUD"
              bg="bg-lighter-gray"
              border="border-lighter-gray"
            />
            <Currency
              flag={<img src={chf} alt="CHF" width={22} height={22} />}
              currency="CHF"
              bg="bg-lighter-gray"
              border="border-lighter-gray"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-16 mt-2">
          <div class="">
            <p className="font-bold">RISK:</p>
            <div className="flex flex-row flex-wrap gap-x-2 gap-y-3 mt-2">
              <ChallengeButton
                text="Aggressive"
                bgColor="bg-light-green"
                borderColor="border-light-green"
              />
              <ChallengeButton
                text="Normal"
                bgColor="bg-lighter-gray"
                borderColor="border-lighter-gray"
              />
            </div>
          </div>
          <div class="">
            <p className="font-bold">BALANCE:</p>
            <div className="flex flex-row flex-wrap gap-x-2 gap-y-3 mt-2">
              <ChallengeButton
                text="$10k"
                bgColor="bg-lighter-gray"
                borderColor="border-lighter-gray"
                tooltip="1st challenge"
              />
              <ChallengeButton
                text="$25k"
                bgColor="bg-lighter-gray"
                borderColor="border-lighter-gray"
                tooltip="1st challenge"
              />
              <ChallengeButton
                text="$50k"
                bgColor="bg-lighter-gray"
                borderColor="border-lighter-gray"
                tooltip="1st challenge"
              />
              <ChallengeButton
                text="$100k"
                bgColor="bg-lighter-gray"
                borderColor="border-lighter-gray"
                tooltip="1st challenge"
              />
              <ChallengeButton
                text="$200k"
                bgColor="bg-lighter-gray"
                borderColor="border-lighter-gray"
                tooltip="1st challenge"
              />
              <ChallengeButton
                text="$500k"
                bgColor="bg-lighter-gray"
                borderColor="border-lighter-gray"
                tooltip="1st challenge"
              />
              <span className="lg:ml-2">
                <button className="flex justify-center items-center gap-x-1.5 text-lightest-white-bg bg-light-pink border border-light-pink hover:bg-transparent hover:border-light-pink hover:text-light-pink py-3 2xl:py-3 px-3 uppercase font-bold rounded-full text-sm">
                  <span>first free challenge</span>
                </button>
              </span>
            </div>
          </div>
        </div>
        <div>
          <Table />
        </div>
        <div className="mt-6 flex flex-row justify-center">
          <Button buttonText="start challenge" goText="Start" />
        </div>
      </div>
    </section>
  );
};

export default Challenge;
