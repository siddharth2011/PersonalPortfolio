import React from "react";
import SkillBox from "../../chip/SkillBox";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
// import { FaPlay } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import resumePDF from "../../assets/Resume.pdf";


const Hero = () => {
  return (
    <div id="home" className={` bg-gradient-to-r from-green-200 to-blue-200 `}>
      <div className=" container mx-auto pt-5 h-[750px] md:h-[100vh] md:flex-col-reverse sm:h-[780px]  flex sm:flex-col-reverse sm:pt-0 ">
        <div className=" left mt-4 md:mt-0 flex-1 flex flex-col justify-center gap-5 w-1/2 md:w-full md:py-2 sm:py-0">
          <div className="info w-fit flex flex-col items-start justify-center gap-3 sm:gap-2">
          <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
          <div class="pt-4 className='h-[50%] w-full object-cover md:h-[55%] md:m-auto sm:m-0'" data-aos="fade-up">
          <div class="pt-4 className='h-[50%] w-full object-cover md:h-[55%] md:m-auto sm:m-0'" data-aos="fade-up">
          <img
              data-aos="fade-up"
              className="h-[50%] object-cover md:h-[55%] md:m-auto sm:m-0"
              style={{ maxWidth: '50%', height: '50%' }}
              src='https://i.postimg.cc/DZ1ZZDt9/edit-1.jpg'
              alt="mine"
            />
      </div>
                  
           
                
              </div>
            </div>
            
            <div>

            <h2
              data-aos="fade-up"
              className=" text-3xl font-bold sm:text-[2rem]"
            >
              Hello, I'm Siddharth Goyal
            </h2>
            <br />
            <TypeAnimation
              data-aos="fade-up"
              sequence={[
                "Software Developer",
                2000,
                "Software Engineer",
                2000,
                "",
              ]}
              speed={30}
              wrapper="h2"
              repeat={Infinity}
              className="text-yellow-500 text-4xl font-bold sm:text-3xl"
            />

              <p
              // data-aos="fade-up"
              className=" text-2xl font-medium w-3/4 md:w-full text-gray-600 sm:text-[.95rem]"
            >
              Graduate Student pursuing Masters in Computer Science from Arizona State University
            </p>

            </div>
            <div>
            <SkillBox
              // logo={<SiPython />}
              
              black={"white"}
              white={"black"}
              skill={"Python"}
              size = {"small"}
            />
            <SkillBox
              // logo={<GrCode />}
              black={"black"}
              white={"white"}
              skill={"C++"}
              size = {"small"}
            />
            <SkillBox
              // logo={<SiPython />}
              
              black={"white"}
              white={"black"}
              skill={"Python"}
              size = {"small"}
            />
            <SkillBox
              // logo={<GrCode />}
              black={"black"}
              white={"white"}
              skill={"C++"}
              size = {"small"}
            />
            <SkillBox
              // logo={<SiPython />}
              
              black={"white"}
              white={"black"}
              skill={"Python"}
              size = {"small"}
            />
            <SkillBox
              // logo={<GrCode />}
              black={"black"}
              white={"white"}
              skill={"C++"}
              size = {"small"}
            />
            <SkillBox
              // logo={<SiPython />}
              
              black={"white"}
              white={"black"}
              skill={"Python"}
              size = {"small"}
            />
            <SkillBox
              // logo={<GrCode />}
              black={"black"}
              white={"white"}
              skill={"C++"}
              size = {"small"}
            />
            <SkillBox
              // logo={<SiPython />}
              
              black={"white"}
              white={"black"}
              skill={"Python"}
              size = {"small"}
            />
            <SkillBox
              // logo={<GrCode />}
              black={"black"}
              white={"white"}
              skill={"C++"}
              size = {"small"}
            />
            </div>
            
           
          </div>
          <div data-aos="fade-up" className="buttons flex gap-5">
            <a
              href=""
              className=" bg-black text-[1rem] text-white px-10 py-2 sm:px-8 rounded-lg font-bold  hover:text-yellow-500"
            >
              <span> Hire Me</span>
            </a>
            <a
              href={resumePDF}
              className="flex items-center gap-2 border- text-[1rem] bg-white border-black px-7 py-2 sm:px-6 rounded-lg font-bold  hover:text-yellow-500"
              download
            >
              <div className="flex items-center gap-1">
                Resume <FiDownload />
              </div>
            </a>
          </div>
          <div className="icons flex mt-5">
            <ul
              data-aos="fade-up"
              data-aos-duration="1500"
              className=" flex gap-5"
            >
              <li>
                <a href="https://github.com/siddharth2011">
                  {" "}
                  <AiFillGithub className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125" />{" "}
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/siddharth-goyal-8b1a4814b/">
                  {" "}
                  <FaLinkedinIn className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125 " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <AiFillInstagram className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <FaFacebook className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
              <li>
                <a href="">
                  {" "}
                  <AiFillTwitterCircle className=" h-[1.8rem] w-[1.8rem] text-xl hover:scale-125  " />{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="right  top-5 flex-1 flex items-center justify-center md:items-end sm:items-end">
          <div className="relative h-[88%] w-fit flex items-center sm:items-end">
            <img
            data-aos="fade-up"
              className=" h-[90%]  w-full object-cover md:h-[95%] md:m-auto sm:m-0"
              src='https://i.postimg.cc/DZ1ZZDt9/edit-1.jpg'
              // src={mine}
              alt="mine"
            />
           
                
              </div>
            </div> */}
          </div>
        </div>
      // </div>
    // </div>
  );
};

export default Hero;
