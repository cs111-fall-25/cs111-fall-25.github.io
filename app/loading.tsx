import { Navbar, Loading } from "@/components";

export default function LoadingScreen(){
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
    <Navbar />
    <Loading />
    </div>
  )
}
