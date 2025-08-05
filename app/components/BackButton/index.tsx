import { ChevronLeft } from "lucide-react";
import { useNavigate } from 'react-router';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="pr-5 text-usf-yellow" onClick={() => navigate(-1)}>
      <ChevronLeft size={50}/>
    </button>
  )
}

export { BackButton };
