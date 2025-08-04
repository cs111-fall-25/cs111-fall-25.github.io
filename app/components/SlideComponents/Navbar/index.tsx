import { BackButton } from "@/components/BackButton";

const SlideNavbar = ({ title }: { title: string }) => {

  /*
    * Should allow the user to go back if there's a history to go back to.
     */
  return (
    <>
      <div className="flex flex-row justify-between px-5 py-10">
      <BackButton />
      <span className="text-xl">{title}</span>
      <></>
      </div>
    </>
  )
}  

export { SlideNavbar };
