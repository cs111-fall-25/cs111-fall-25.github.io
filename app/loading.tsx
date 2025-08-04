import { Navbar, Loading } from "@/components";

export default function LoadingScreen(){
  return (
    <div className="flex bg-usf-green text-gray-100">
    <Navbar />
    <Loading />
    </div>
  )
}
