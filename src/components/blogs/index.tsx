import Image from "next/image"
import NavSvg from "@/assets/icon/navigation.svg"
import { SECTION_TYPE } from "../tabs/constants"
import { MonotonFont, BreeSerifFont } from "@/common/font"
import classNames from "classnames"

const blogList = [
  {
    img: "/projects/paint-board.png",
    title: "如何不太优雅的绕过校园网计费",
    date: "Apr 16, 2024",
    link: "https://toserhysblog.406418.xyz/posts/%E5%A6%82%E4%BD%95%E4%B8%8D%E5%A4%AA%E4%BC%98%E9%9B%85%E7%9A%84%E7%BB%95%E8%BF%87%E6%A0%A1%E5%9B%AD%E7%BD%91%E8%AE%A1%E8%B4%B9/"
  },
  {
    img: "/projects/paint-board.png",
    title: "基于快速理解Yolo算法原理视频上，记录对于算法的理解",
    date: "Apr 15, 2024",
    link: "https://toserhysblog.406418.xyz/posts/yolo%E7%AE%97%E6%B3%95%E7%9A%84%E6%B5%81%E7%A8%8B%E5%A4%A7%E6%A6%82%E7%90%86%E8%A7%A3/"
  },
  {
    img: "/projects/paint-board.png",
    title: "如何优雅的实现科学上网自由",
    date: "Apr 14, 2024",
    link: "https://toserhysblog.406418.xyz/posts/%E5%85%B3%E4%BA%8E%E6%A2%AF%E5%AD%90/"
  },
]

const Blogs = () => {

  return (
    <div id={SECTION_TYPE.BLOGS} className="mt-32 pt-40 w-[90%] max-w-[1040px] mx-auto">
      <div className={classNames("w-full text-center text-6xl", MonotonFont.className)}>
        Blogs
      </div>

      <div
        className="w-full mx-auto flex justify-center items-center mt-24 relative rounded-3xl"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 12px 15px 0px"
        }}
      >
        <div className="w-full px-12 py-6 relative z-[1]">
          {
            blogList.map((blog, index) => (
              <a
                key={index}
                className="flex py-10 border-b-[1px] border-solid border-[#6D5D6E] gap-x-8"
                href={blog.link}
                target="_blank"
              >
                <Image
                  src={blog.img}
                  alt="blog cover"
                  className="shrink-0 w-40 h-fit max-w-[40%]"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col justify-center" >
                  <div className={classNames("text-lg", BreeSerifFont.className)}>{blog.date}</div>
                  <div className={classNames("text-2xl mt-2", BreeSerifFont.className)}>{blog.title}</div>
                </div>
              </a>
            ))
          }

          <div className="flex justify-center w-full">
            <a href="https://toserhysblog.406418.xyz/" target="_blank" className="inline-flex items-center px-5 py-2 rounded-3xl mt-8 mx-auto cursor-pointer hover:scale-105 transition-all bg-[#2C3333]">
              <span className={classNames("text-white mr-4", BreeSerifFont.className)}>View More</span>
              <NavSvg className="w-4 h-4" />
            </a>
          </div>
        </div>
        <div className="w-full h-full bg-repeat bg-[url('/background.png')] bg-[length:100px_100px] opacity-15 absolute top-0 left-0 z-[0] rounded-3xl">
        </div>
      </div>
    </div>
  )
}

export default Blogs
