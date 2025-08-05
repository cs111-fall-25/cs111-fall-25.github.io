import { BackButton } from "@/components/BackButton";

const SlideNavbar = ({ title, downloadHref }: { title: string, downloadHref: string }) => {

  /*
    * Should allow the user to go back if there's a history to go back to.
     */
  return (
    <>
      <div className="flex flex-row justify-between px-5 py-5 align-middle items-center">
      <BackButton />
      <span className="text-xl text-usf-yellow">{title}</span>
      <a href={`${downloadHref}`} download className="text-usf-green hover:bg-usf-green border-usf-green border-1 hover:text-usf-yellow rounded-xl px-5 py-2 align-middle">Download</a>
      </div>
    </>
  )
}  

export { SlideNavbar };
