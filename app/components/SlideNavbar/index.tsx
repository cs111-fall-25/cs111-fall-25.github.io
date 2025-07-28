import { useNavigate } from "react-router"
import { ChevronLeft } from "lucide-react";

const SlideNavbar = ({ title }: { title: string }) => {
  const navigate = useNavigate(); 

  /*
    * Should allow the user to go back
     */
  return (
    <>
      <div className="flex flex-row justify-between px-5 py-10">
      <button onClick={() => {navigate(-1)}}><ChevronLeft /></button>
      <span className="text-xl">{title}</span>
      </div>
    </>
  )
}  

export { SlideNavbar };
