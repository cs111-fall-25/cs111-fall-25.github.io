import { Button } from "../ui";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from 'react-router';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button className="pr-5" onClick={() => navigate(-1)}>
      <ChevronLeft />
    </button>
  )
}

export { BackButton };
