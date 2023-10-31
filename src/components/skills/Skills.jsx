import React from "react";
import ProgressBar from "../../chip/ProgressBar";
import SkillBox from "../../chip/SkillBox";

import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";

import {SiPython} from "react-icons/si";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { GrCode } from "react-icons/gr";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex md:flex-col ">
          <div className="left flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" text-gray-700 font-medium w-[100%]"
            >
              Here are my skills.
            </p>           
            </div>
          
          
          {/* right relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full */}
          <div className="middle relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
  <div className="first2 flex flex-col gap-10 items-center justify-center"> {/* Added 'items-center' and 'justify-center' here */}
    <SkillBox
      logo={<IoLogoNodejs />}
      black={"white"}
      white={"black"}
      skill={"Node Js"}
    />
    <SkillBox
      logo={<SiMongodb />}
      black={"white"}
      white={"black"}
      skill={"MongoDB"}
    />
  </div>
  <div className="last2 flex flex-col gap-10 items-center justify-center"> {/* Added 'items-center' and 'justify-center' here */}
    <SkillBox
      logo={<SiExpress />}
      black={"black"}
      white={"white"}
      skill={"Express Js"}
    />
    <SkillBox
      className=""
      logo={
        <GrCode />
      }
      black={"black"}
      white={"white"}
      skill={"C++"}
    />
  </div>
</div>

        </div>

        {/* icons */}
        
      </div>
    </div>
  );
};

export default Skills;
