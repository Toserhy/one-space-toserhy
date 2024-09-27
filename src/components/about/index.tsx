import { useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { SECTION_TYPE } from "../tabs/constants"

import GithubSVG from "@/assets/icon/github.svg"
import TwitterSVG from "@/assets/icon/twitter.svg"
import GmailSVG from "@/assets/icon/gmail.svg"
import TelegramSVG from "@/assets/icon/telegram.svg"
import V2exSVG from "@/assets/icon/v2ex.svg"
import Image from "next/image"

import { BreeSerifFont } from "@/common/font"
import classNames from "classnames"

const contactList = [
  {
    icon: GithubSVG,
    link: "https://github.com/Toserhy"
  },
  {
    icon: GmailSVG,
    email: "astruggleman@outlook.com"
  },
]

const threshold: number[] = []
for (let i = 0; i < 1; i = i + 0.025) {
  threshold.push(i)
}

const About = () => {
  const { ref, entry } = useInView({
    threshold
  })

  const profileRadius = useMemo(() => {
    if (entry?.intersectionRatio === undefined || entry?.intersectionRatio === 1) {
      return "50%"
    }
    const radius = entry.intersectionRatio * 50
    return `${radius < 10 ? 10 : radius}%`
  }, [entry?.intersectionRatio])

  return (
    <div
      ref={ref}
      id={SECTION_TYPE.ABOUT}
      className="flex flex-col items-center justify-center pt-28 w-[90%] max-w-[840px] mx-auto"
    >
      <div
        className={classNames("relative cursor-pointer w-64 h-64 group")}
      >
        <Image
          src="/profile_cover.jpg"
          alt="profile"
          width={100}
          height={100}
          className="w-full h-full absolute top-0 left-0 z-[1] transition-all duration-300 group-hover:rotate-y-180"
          style={{
            borderRadius: profileRadius,
            backfaceVisibility: "hidden",
          }}
        />
        <Image
          src="/us.png"
          alt="profile"
          width={100}
          height={100}
          className="w-full h-full absolute top-0 left-0 transition-all duration-300 group-hover:rotate-y-180"
          style={{
            borderRadius: profileRadius
          }}
        />
      </div>

      <div
        className={classNames("text-2xl spacing-word-1", BreeSerifFont.className)}
        style={{
          wordSpacing: "0.25rem"
        }}
      >
        <div className="flex items-center justify-center gap-x-3 mt-16 mb-10">
          {
            contactList.map((item, index) => (
              <a
                href={item.email || item.link}
                target="_blank"
                className="p-1 border-black rounded-lg border-2 cursor-pointer hover:scale-110 transition-all"
                key={index}
              >
                <item.icon className="w-7 h-7" />
              </a>
            ))
          }
        </div>

        Hello, I{"'"}m Toserhy{"("}李昊宇{")"}, A standard Chinese student who is unemployed upon graduation. Welcome to my personal space!

        <div className="mt-6">
        I focused on eating a variety of large pies and piggybacking on skills that would only be useful within school. There are many hobbies such as music, movies, programming, video editing, and occasionally exploring the meaning of life.
        </div>
        
        <div className="mt-6">
          If you{"'"}d like to get to know me better, please to scroll down.
        </div>
      </div>
    </div>
  )
}

export default About
