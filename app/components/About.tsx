import React from "react";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import Reveal from "./Reveal";
import { getAbout } from "@/lib/fetchAbout";
import { urlFor } from "@/lib/sanity";
import { AboutInterface } from "@/lib/interface";
const About = async () => {
  const aboutData: AboutInterface = await getAbout();
  return (
    <div className="flex flex-col mt-12 gap-y-4">
      <Reveal delay={0.1}>
        <SectionHeading title="Whoami" />
      </Reveal>
      <div className="flex flex-col sm:flex-row gap-x-6">
        <Reveal delay={0.1}>
          {" "}
          {aboutData?.authorImg && (
            <Image
              src={urlFor(aboutData?.authorImg)?.url()}
              alt="authorImg"
              width={100}
              height={100}
              className="w-40 h-40 rounded-lg hidden sm:flex"
            />
          )}
        </Reveal>

        <div className="flex flex-col gap-y-6 text-textDark dark:text-textLight justify-between">
          <Reveal delay={0.2}>
            <h1 className="">
              Hi, I am <span className="font-bold">Harjot Singh,</span>
            </h1>
          </Reveal>
          <div className="flex flex-col gap-y-3">
            <Reveal delay={0.3}>
              <p>
                Ex-Intern @{" "}
                <span className="text-primary hover:bg-primary hover:text-white cursor-pointer">
                  Cognizant Technology Solutions
                </span>{" "}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p>
                Ex-Frontend Developer @{" "}
                <span className="text-primary hover:bg-primary hover:text-white cursor-pointer">
                  Pixis Media Solutions
                </span>{" "}
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <p>
                CSE Graduate @{" "}
                <span className="text-primary hover:bg-primary hover:text-white cursor-pointer">
                  Chandigarh University
                </span>{" "}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
