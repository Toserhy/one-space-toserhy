import classNames from "classnames"
import { MonotonFont, BreeSerifFont } from "@/common/font"
import { SECTION_TYPE } from "../tabs/constants"
import Link from "../link"
import Image from "next/image"

const projectList = [
  {
    img: "/projects/one-space.png",
    title: "干了好多又好像没干",
    link: "https://toserhysblog.406418.xyz/",
    github: "https://github.com/Toserhy",
    desc: "等回头总结下做过的项目，现在是没时间了，太乱了",
    author:"Toserhy"
  },
  {
    img: "/projects/work.svg",
    title: "My Work",
    desc: "说实话我也不知自己在干什么，生活就像一个粪坑，工作就是里面一坨夹着玉米粒的屎",
    maxWidth: "170px"
  }
]

const Projects = () => {
  return (
    <div id={SECTION_TYPE.PROJECTS} className="w-full mt-32 pt-40 relative">
      <div
        className={classNames("w-full text-center text-6xl", MonotonFont.className)}
      >
        Projects
      </div>

      <div className="relative w-full">
        <div
          className="w-[90%] max-w-[1040px] mt-20 mx-auto relative rounded-3xl"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 15px 0px"
          }}
        >
          <div className="relative z-[2]">
            {
              projectList.map((project, index) => (
                <div
                  className="flex px-10 gap-x-4 relative py-12"
                  key={index}
                  style={{
                    flexDirection: index % 2 === 0 ? "row" : "row-reverse",
                    wordSpacing: "0.2rem"
                  }}
                >
                  <div className={classNames("w-1/2 flex-1", BreeSerifFont.className)}>
                    <div className="text-4xl text-center font-black">{project.title}</div>

                    <Image
                      src={project.img}
                      className="w-full h-auto rounded-xl my-5 mx-auto hidden max-600:block"
                      style={{
                        maxWidth: project.maxWidth || "auto"
                      }}
                      alt="projectImage"
                      width={200}
                      height={200}
                    /> 

                    {
                      project.link && (
                        <div className="text-base mt-2 flex">
                          <span className="font-semibold shrink-0 w-16">Link: </span>
                          <Link href={project.link} />
                        </div>
                      )
                    }
                    {
                      project.github && (
                        <div className="text-base mt-2 flex">
                          <span className="font-semibold shrink-0 w-16">Github: </span>
                          <Link href={project.github} />
                        </div>
                      )
                    }
                    <div className="text-base mt-2 flex">
                      <span className="font-semibold shrink-0 w-16">Desc: </span>
                      <span>
                        {project.desc}
                      </span>
                    </div>
                    {
                      project.author && (
                        <div className="text-base mt-2 flex">
                          <span className="font-semibold shrink-0 w-16">Author: </span>
                          <span className="whitespace-pre-line">
                            {project.author}
                          </span>
                        </div>
                      )
                    }
                  </div>

                  <div className="w-1/2 h-fit shrink-0 sticky top-20 justify-center flex max-600:hidden">
                    <Image
                      src={project.img}
                      width={200}
                      height={200}
                      className="w-full h-fit rounded-xl"
                      alt="projectImg"
                      style={{
                        maxWidth: project.maxWidth || "auto"
                      }}
                    />
                  </div>
                </div>
              ))
            }
          </div>
          <div className="w-full h-full bg-repeat bg-[url('/background.png')] bg-[length:100px_100px] opacity-15 absolute top-0 left-0 z-[0] rounded-3xl">
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
