import { BreeSerifFont } from "@/common/font"
import classNames from "classnames"
import FaceSVG from "@/assets/face.svg"

const PageFooter = () => {
  return (
    <div
      className='flex flex-col py-56 mx-auto items-center justify-center w-[90%] max-w-[840px]'
      style={{
        wordSpacing: "0.25rem"
      }}
    >
      <div className='relative'>
        <FaceSVG className={classNames("w-20 h-20 twinkle-display")} />
        <FaceSVG className={classNames("w-20 h-20 twinkle-style")} />
      </div>
      <span className={classNames("text-2xl mt-6", BreeSerifFont.className)}>
        {
          "Thank you for your interest in this boring carbon-based organism, before it is replaced by a silicon-based organism, I hope we can all focus on life and feel it, instead of being held hostage by grandiose propositions！"
        }
      </span>
    </div>
  )
}

export default PageFooter
