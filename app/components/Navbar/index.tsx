import { NavLink } from 'react-router';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-10 bg-usf-green text-gray-50 text-lg">
    <div> 
    <NavLink to="/" className="font-bold text-2xl dark:text-white">CS 111: Foundation of Program Design</NavLink>
    </div>
    <div className="text-right w-96">
    <DropdownMenu>
    <DropdownMenuTrigger>Links</DropdownMenuTrigger>
    <DropdownMenuContent className="flex flex-col text-white">
    <DropdownMenuItem>
    <NavLink to="/policies">Policies</NavLink>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <NavLink to="/slides">Slides</NavLink>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <NavLink to="/inclass">In Class</NavLink>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <NavLink to="/labs">Labs</NavLink>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <NavLink to="/projects">Projects</NavLink>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <NavLink to="/schedule">Schedule</NavLink>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <NavLink to="/worksheets">Worksheets</NavLink>
    </DropdownMenuItem>
    <DropdownMenuItem>
    <NavLink to="/resources">Resources</NavLink>
    </DropdownMenuItem>
    </DropdownMenuContent>
    </DropdownMenu>
    </div>
    </div>
  )
}

export { Navbar };
