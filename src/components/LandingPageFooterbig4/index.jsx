import React from "react";

import { Button, Img, Input, Text } from "components";

const LandingPageFooterbig4 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-10 items-start justify-start w-auto">
          <div className="flex flex-row gap-[9.89px] items-center justify-start w-auto">
            <Img
              className="h-[29px] w-[43px]"
              src="images/img_microphone.svg"
              alt="microphone"
            />
            <Img
              className="h-[25px] w-[137px]"
              src="images/img_nexcent_white_a700.svg"
              alt="nexcent_One"
            />
          </div>
          <div className="flex flex-col gap-2 items-center justify-start">
            <Text
              className="text-gray-100 text-sm w-auto"
              size="txtInterRegular14Gray100"
            >
              {props?.copyright2020}
            </Text>
            <Text
              className="text-gray-100 text-sm w-auto"
              size="txtInterRegular14Gray100"
            >
              {props?.allrightsreservOne}
            </Text>
          </div>
          <div className="flex flex-row gap-4 items-start justify-start">
            <Button
              className="flex h-8 items-center justify-center w-8"
              shape="circle"
              color="white_A700_63"
              size="xs"
              variant="fill"
            >
              <Img className="h-[17px]" src="images/img_info.svg" alt="info" />
            </Button>
            <Button
              className="flex h-8 items-center justify-center w-8"
              shape="circle"
              color="white_A700_63"
              size="xs"
              variant="fill"
            >
              <Img
                className="h-[17px]"
                src="images/img_globe.svg"
                alt="globe"
              />
            </Button>
            <Button
              className="flex h-8 items-center justify-center w-8"
              shape="circle"
              color="white_A700_63"
              size="xs"
              variant="fill"
            >
              <Img src="images/img_trash.svg" alt="trash" />
            </Button>
            <Button
              className="flex h-8 items-center justify-center w-8"
              shape="circle"
              color="white_A700_63"
              size="xs"
              variant="fill"
            >
              <Img src="images/img_path.svg" alt="path" />
            </Button>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-[30px] items-start justify-start w-auto md:w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtInterSemiBold20WhiteA700"
            >
              {props?.companytext}
            </Text>
            <ul className="flex flex-col gap-3 items-start justify-start w-auto">
              <li>
                <Text
                  className="text-gray-100 text-sm"
                  size="txtInterRegular14Gray100"
                >
                  {props?.aboutustext}
                </Text>
              </li>
              <li>
                <Text
                  className="text-gray-100 text-sm"
                  size="txtInterRegular14Gray100"
                >
                  {props?.blogtext}
                </Text>
              </li>
              <li>
                <Text
                  className="text-gray-100 text-sm"
                  size="txtInterRegular14Gray100"
                >
                  {props?.contactustext}
                </Text>
              </li>
              <li>
                <Text
                  className="text-gray-100 text-sm"
                  size="txtInterRegular14Gray100"
                >
                  {props?.pricingtext}
                </Text>
              </li>
              <li>
                <Text
                  className="text-gray-100 text-sm"
                  size="txtInterRegular14Gray100"
                >
                  {props?.testimonialstext}
                </Text>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <Text
              className="text-white-A700 text-xl w-auto"
              size="txtInterSemiBold20WhiteA700"
            >
              {props?.supporttext}
            </Text>
            <ul className="flex flex-col gap-3 items-start justify-start w-auto">
              <li>
                <Text
                  className="text-gray-100 text-sm"
                  size="txtInterRegular14Gray100"
                >
                  {props?.helpcentertext}
                </Text>
              </li>
              <li>
                <Text
                  className="text-gray-100 text-sm"
                  size="txtInterRegular14Gray100"
                >
                  {props?.termsofservicetext}
                </Text>
              </li>
              <li>
                <Text
                  className="text-gray-100 text-sm"
                  size="txtInterRegular14Gray100"
                >
                  {props?.legaltext}
                </Text>
              </li>
              <li>
                <Text
                  className="text-gray-100 text-sm"
                  size="txtInterRegular14Gray100"
                >
                  {props?.privacypolicytext}
                </Text>
              </li>
              <li>
                <Text
                  className="text-gray-100 text-sm"
                  size="txtInterRegular14Gray100"
                >
                  {props?.statustext}
                </Text>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start w-auto">
            <Text
              className="text-white-A700 text-xl"
              size="txtInterSemiBold20WhiteA700"
            >
              {props?.stayuptodatetext}
            </Text>
            <Input
              name="emailinputfield"
              placeholder="Your email address"
              className="!placeholder:text-gray-300_02 !text-gray-300_02 font-inter p-0 text-left text-sm w-full"
              wrapClassName="flex w-full"
              suffix={
                <Img
                  className="mt-px mb-auto h-[18px] ml-[35px]"
                  src="images/img_essential_icons_send.svg"
                  alt="Essential Icons / send"
                />
              }
              shape="round"
              color="white_A700_6c"
              size="xs"
              variant="fill"
            ></Input>
          </div>
        </div>
      </div>
    </>
  );
};

LandingPageFooterbig4.defaultProps = {
  copyright2020: "Copyright © 2020 Nexcent ltd.",
  allrightsreservOne: "All rights reserved",
  companytext: "Company",
  aboutustext: "About us",
  blogtext: "Blog",
  contactustext: "Contact us",
  pricingtext: "Pricing",
  testimonialstext: "Testimonials",
  supporttext: "Support",
  helpcentertext: "Help center",
  termsofservicetext: "Terms of service",
  legaltext: "Legal",
  privacypolicytext: "Privacy policy",
  statustext: "Status",
  stayuptodatetext: "Stay up to date",
};

export default LandingPageFooterbig4;
