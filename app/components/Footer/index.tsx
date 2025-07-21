import { ModeToggle } from "../ui/mode-toggle";
import { Button } from "../ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <div className="h-32 flex border-t-2 bottom-0 justify-center flex-col align-center p-5">
      <div className="flex-col text-center">
        <p>Made with React Router and Tailwind</p>
        <br />
        <div className="flex-row justify-center flex">
          <div className="w-10" />
          <Button variant="outline"><FontAwesomeIcon icon={faGithub} size="lg" inverse /><span>GitHub</span></Button>
        </div>
      </div>
    </div>
  )
}

export { Footer };
