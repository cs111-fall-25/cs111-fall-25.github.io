import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, NavLink, Link, useNavigate, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, useParams } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import * as React from "react";
import { useRef, useEffect, useState } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { ThemeProvider as ThemeProvider$1 } from "next-themes";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, XIcon, ChevronLeft, ChevronDown, ChevronUp, ChevronRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Reveal from "reveal.js";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { config } from "@fortawesome/fontawesome-svg-core";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
import axios from "axios";
import { remark } from "remark";
import rehypeExternalLinks from "rehype-external-links";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import rehypeVideo from "rehype-video";
import { DateTime } from "luxon";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const toTitleCase = (name) => {
  return name.split(" ").map((val) => val.charAt(0).toUpperCase() + val.substring(1)).join(" ");
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const to_date_string = (date) => {
  let dateObj = new Date(date);
  return dateObj.toLocaleString();
};
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
const Navbar = () => {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-row justify-between p-10 bg-usf-green text-gray-50 text-lg", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(NavLink, { to: "/", className: "font-bold text-2xl dark:text-white", children: "CS 111: Foundation of Program Design" }) }),
    /* @__PURE__ */ jsx("div", { className: "text-right w-96", children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsx(DropdownMenuTrigger, { children: "Links" }),
      /* @__PURE__ */ jsxs(DropdownMenuContent, { className: "flex flex-col text-white", children: [
        /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(NavLink, { to: "/policies", children: "Policies" }) }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(NavLink, { to: "/slides", children: "Slides" }) }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(NavLink, { to: "/inclass", children: "In Class" }) }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(NavLink, { to: "/labs", children: "Labs" }) }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(NavLink, { to: "/projects", children: "Projects" }) }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { children: /* @__PURE__ */ jsx(NavLink, { to: "/schedule", children: "Schedule" }) })
      ] })
    ] }) })
  ] });
};
const schedule = [
  {
    date: "8/20",
    topics: [
      "Introduction",
      "Class Overview",
      "Expectations",
      "Logistics"
    ],
    assignments: [],
    slides: [
      {
        name: "Day 0: Introduction",
        link: "/slides/00/intro"
      }
    ]
  },
  {
    date: "8/25",
    topics: [
      "Setup",
      "Hello World",
      "Introduction to Java Fundamentals"
    ],
    assignments: [
      {
        name: "Setup",
        type: "inclass"
      },
      {
        name: "Printing-Output",
        type: "lab",
        hidden: true
      }
    ],
    slides: [
      {}
    ]
  },
  {
    date: "8/27",
    topics: [
      "Output",
      "Variables",
      "Data Types"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "2/3",
    topics: [
      "Input",
      "Operators"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "2/5",
    topics: [
      "Boolean Expressions",
      "Conditional Statements",
      "Conditional Iteration",
      "Infinite Loops"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "2/10",
    topics: [
      "Increment",
      "Decrement"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "2/12",
    topics: [
      "Strings",
      "Immutability",
      "Indexing",
      "Iterating through a string"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "2/17",
    topics: [
      "President's Day: NO CLASS"
    ],
    special: true,
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "2/19",
    topics: [
      "Concatenation v StringBuilder",
      "Memory Access",
      "String Functions",
      "Arrays",
      "Stack v Heap"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "2/24",
    topics: [
      "2D Arrays"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "2/26",
    topics: [
      "Static Functions",
      "Object Oriented Programming"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "3/3",
    topics: [
      "Classes and Objects"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "3/5",
    topics: [
      "Encapsulation"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "3/10",
    topics: [
      "SPRING BREAK: NO CLASS"
    ],
    special: true,
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "3/12",
    topics: [
      "SPRING BREAK: NO CLASS"
    ],
    special: true,
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "3/17",
    topics: [
      "Instantiating Objects",
      "Calling methods"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "3/19",
    topics: [
      "UML",
      "Static v Instance",
      "Method Overloading"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "3/24",
    topics: [
      "Inheritance",
      "extends"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "3/26",
    topics: [
      "Inheritance",
      "super"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "3/31",
    topics: [
      "Inheritance"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "4/2",
    topics: [
      "Inheritance"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "4/7",
    topics: [
      "Upcast"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "4/9",
    topics: [
      "Downcast"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "4/14",
    topics: [
      "HashSet",
      "HashMap"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "4/16",
    topics: [
      "HashSet",
      "HashMap"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "4/21",
    topics: [
      "ArrayList",
      "LinkedList"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "4/23",
    topics: [
      "ArrayList",
      "LinkedList"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "4/28",
    topics: [
      "Recursion"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "4/30",
    topics: [
      "TBD"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "5/5",
    topics: [
      "Applications"
    ],
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  },
  {
    date: "5/7",
    topics: [
      "FINAL CLASS"
    ],
    special: true,
    assignments: [
      {}
    ],
    slides: [
      {}
    ]
  }
];
const date_to_weekday = (date) => {
  let dateObj = /* @__PURE__ */ new Date(`${date}/2025`);
  let day = dateObj.getDay();
  let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekdays[day];
};
const date_passed = (date) => {
  let dateObj = /* @__PURE__ */ new Date(`${date}/2025`);
  let today = /* @__PURE__ */ new Date();
  return dateObj < today;
};
const format_assignment_name = (name, type) => {
  switch (type) {
    case "inclass":
      return /* @__PURE__ */ jsxs("span", { className: "text-yellow-600 dark:text-yellow-200", children: [
        "[In Class] ",
        name
      ] });
    case "lab":
      return /* @__PURE__ */ jsxs("span", { className: "text-orange-600 dark:text-orange-200", children: [
        "[Lab] ",
        name
      ] });
    case "project":
      return /* @__PURE__ */ jsxs("span", { className: "text-red-600 dark:text-red-200", children: [
        "[Project] ",
        name
      ] });
    default:
      return /* @__PURE__ */ jsx("span", { children: name });
  }
};
const ScheduleRow = ({ date, topics, assignments, slides: slides2, special }) => {
  return /* @__PURE__ */ jsxs("tr", { className: "py-10", children: [
    /* @__PURE__ */ jsx("td", { className: "w-1/10", children: date }),
    /* @__PURE__ */ jsx("td", { className: "w-1/10", children: date_to_weekday(date) }),
    /* @__PURE__ */ jsx("td", { className: "w-1/5 text-left", children: special ? /* @__PURE__ */ jsx("strong", { children: topics[0] }) : /* @__PURE__ */ jsx("ul", { children: topics.map((val, i) => /* @__PURE__ */ jsx("li", { children: val }, i)) }) }),
    /* @__PURE__ */ jsx("td", { className: "w-1/5", children: /* @__PURE__ */ jsx("ol", { children: assignments.map((val, i) => (val == null ? void 0 : val.name) !== void 0 && (val == null ? void 0 : val.type) !== void 0 && !(val == null ? void 0 : val.hidden) ? /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: `/${val == null ? void 0 : val.type}/${val == null ? void 0 : val.name}`, children: format_assignment_name(val == null ? void 0 : val.name, val == null ? void 0 : val.type) }) }, i) : /* @__PURE__ */ jsx(Fragment, {})) }) }),
    /* @__PURE__ */ jsx("td", { className: "w-1/5", children: /* @__PURE__ */ jsx("ol", {
      // Add a modal open for the slide with the src being the link
      children: slides2.map((val, i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: val == null ? void 0 : val.link, target: "_blank", children: val == null ? void 0 : val.name }) }, i))
    }) })
  ] }, date);
};
const Schedule = ({ showPrevious }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("table", { className: "table-fixed w-full px-10 h-20", children: /* @__PURE__ */ jsx("thead", { className: "sticky top-0", children: /* @__PURE__ */ jsxs("tr", { className: "border", children: [
      /* @__PURE__ */ jsx("th", { className: "w-1/10", children: "Date" }),
      /* @__PURE__ */ jsx("th", { className: "w-1/10", children: "Weekday" }),
      /* @__PURE__ */ jsx("th", { className: "w-1/5", children: "Topics" }),
      /* @__PURE__ */ jsx("th", { className: "w-1/5", children: "Assignment" }),
      /* @__PURE__ */ jsx("th", { className: "w-1/5", children: "Slides/Resources" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "flex-1 overflow-y-auto w-full", children: /* @__PURE__ */ jsx("table", { className: "table-fixed border-separate border-spacing-y-5 w-full border divide-y divide-solid", children: /* @__PURE__ */ jsx("tbody", { className: "text-center h-80 overflow-y-auto divide-y ", children: schedule.map(({ date, topics, assignments, slides: slides2, special }) => !date_passed(date) || showPrevious ? /* @__PURE__ */ jsx(ScheduleRow, { date, topics, assignments, slides: slides2, special }, date) : /* @__PURE__ */ jsx(Fragment, {})) }) }) })
  ] });
};
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const HoverCardContent = React.forwardRef(({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  HoverCardPrimitive.Content,
  {
    ref,
    align,
    sideOffset,
    className: cn(
      "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName;
const Switch = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SwitchPrimitives.Root,
  {
    className: cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    ),
    ...props,
    ref,
    children: /* @__PURE__ */ jsx(
      SwitchPrimitives.Thumb,
      {
        className: cn(
          "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
        )
      }
    )
  }
));
Switch.displayName = SwitchPrimitives.Root.displayName;
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api == null ? void 0 : api.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api == null ? void 0 : api.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api == null ? void 0 : api.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || ((opts == null ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ jsx(DialogPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsx(XIcon, {}),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
const Footer = () => {
  return /* @__PURE__ */ jsx("div", { className: "h-32 flex border-t-2 bottom-0 justify-center flex-col align-center p-5", children: /* @__PURE__ */ jsxs("div", { className: "flex-col text-center", children: [
    /* @__PURE__ */ jsx("p", { children: "Made with React Router and Tailwind" }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { className: "flex-row justify-center flex", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10" }),
      /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
        /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faGithub, size: "lg", inverse: true }),
        /* @__PURE__ */ jsx("span", { children: "GitHub" })
      ] })
    ] })
  ] }) });
};
const Container = ({ children, className }) => {
  return /* @__PURE__ */ jsx("main", { className: `flex p-10 flex-grow  ${className}`, children });
};
const PageContainer = ({ children }) => {
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col min-h-screen", children });
};
const markdown = "_markdown_1s8ca_2";
const markdownStyles = {
  markdown
};
const AssignmentSpecification = ({
  due_date,
  content,
  assignment_link,
  demo_links
}) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("p", { className: "font-bold text-xl pt-2", children: [
      "Due: ",
      due_date
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("a", { href: assignment_link, target: "_blank", className: "p-2 bg-usf-green text-gray-100 rounded", children: "Clone/Go to Assignment" }),
    demo_links && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("p", { className: "font-bold text-xl pt-2", children: "Demo" }),
      /* @__PURE__ */ jsxs(Carousel, { className: "px-10 mx-20", children: [
        /* @__PURE__ */ jsx(CarouselContent, { children: demo_links.map((val, i) => {
          return /* @__PURE__ */ jsxs(CarouselItem, { children: [
            /* @__PURE__ */ jsx("p", { className: "text-2xl text-center", children: val.title }),
            /* @__PURE__ */ jsx("video", { className: "w-screen", width: "1024", controls: true, children: /* @__PURE__ */ jsx("source", { src: val.link }) })
          ] }, i);
        }) }),
        /* @__PURE__ */ jsx(CarouselNext, {}),
        /* @__PURE__ */ jsx(CarouselPrevious, {})
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "font-bold text-xl pt-2", children: "Specification" }),
    /* @__PURE__ */ jsx("div", { className: markdownStyles["markdown"], dangerouslySetInnerHTML: { __html: content } })
  ] });
};
const BackButton = () => {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsx("button", { className: "pr-5", onClick: () => navigate(-1), children: /* @__PURE__ */ jsx(ChevronLeft, {}) });
};
const Slides = ({ children }) => {
  const deckDivRef = useRef(null);
  const deckRef = useRef(null);
  useEffect(() => {
    if (deckRef.current) return;
    deckRef.current = new Reveal(deckDivRef.current, {
      transition: "slide"
      // other config options
    });
    deckRef.current.initialize().then(() => {
    });
    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);
  return (
    // Your presentation is sized based on the width and height of
    // our parent element. Make sure the parent is not 0-height.
    /* @__PURE__ */ jsx("div", { className: "reveal p-10 max-h-[88%]", ref: deckDivRef, children: /* @__PURE__ */ jsx("div", { className: "slides", children }) })
  );
};
const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
const NotFoundPage = () => {
  return /* @__PURE__ */ jsxs(PageContainer, { children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs(Container, { className: "flex-col align-center justify-center h-screen", children: [
      /* @__PURE__ */ jsxs("div", { className: "h-16 flex-row flex align-center justify-center w-full px-16", children: [
        /* @__PURE__ */ jsx("p", { className: "text-4xl pr-10", children: "404" }),
        /* @__PURE__ */ jsx(Separator, { orientation: "vertical" }),
        /* @__PURE__ */ jsx("p", { className: "text-3xl pl-10", children: "This page could not be found" })
      ] }),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("div", { className: "flex-row justify-center align-center flex", children: /* @__PURE__ */ jsx(Link, { className: "text-2xl align-center pr-16 justify-center", to: "/", children: "Go Home" }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
function ThemeProvider({
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(ThemeProvider$1, { ...props, children });
}
config.autoAddCss = false;
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx(ThemeProvider, {
        attribute: "class",
        defaultTheme: "system",
        enableSystem: true,
        disableTransitionOnChange: true,
        children
      }), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let details = "An unexpected error occurred.";
  if (isRouteErrorResponse(error)) {
    error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsx(NotFoundPage, {});
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root
}, Symbol.toStringTag, { value: "Module" }));
function meta({}) {
  return [{
    title: "CS 111"
  }, {
    name: "description",
    content: "CS 111 Class Page"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs(PageContainer, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsxs(Container, {
      className: "flex-col pt-5",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "pb-5",
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-4xl py-5 font-bold",
          children: "Welcome"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-lg",
          children: "Welcome to CS 111: Foundation of Program Design for Fall 2025."
        })]
      }), /* @__PURE__ */ jsx("div", {
        className: "w-1/4 flex flex-row",
        children: /* @__PURE__ */ jsxs(Dialog, {
          children: [/* @__PURE__ */ jsx(DialogTrigger, {
            className: "dark:bg-usf-green dark:text-usf-yellow bg-usf-yellow text-usf-green p-4 rounded-2xl",
            children: "Course Syllabus"
          }), /* @__PURE__ */ jsxs(DialogContent, {
            className: "max-w-screen w-full lg:min-w-[512pt]",
            children: [/* @__PURE__ */ jsx(DialogHeader, {
              children: "Course Syllabus"
            }), /* @__PURE__ */ jsx("iframe", {
              width: "100%",
              height: "600pt",
              src: "/assets/Syllabus.pdf#view=FitH"
            }), /* @__PURE__ */ jsxs(DialogFooter, {
              children: [/* @__PURE__ */ jsx(Button, {
                type: "button",
                variant: "default",
                children: /* @__PURE__ */ jsx("a", {
                  href: "/assets/Syllabus.pdf",
                  download: true,
                  children: "Download"
                })
              }), /* @__PURE__ */ jsx(DialogClose, {
                children: /* @__PURE__ */ jsx(Button, {
                  type: "button",
                  variant: "secondary",
                  children: "Close"
                })
              })]
            })]
          })]
        })
      }), /* @__PURE__ */ jsx("div", {
        className: "py-5 h-96 overflow-clip flex flex-col",
        children: /* @__PURE__ */ jsx(Schedule, {
          showPrevious: false
        })
      })]
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const SchedulePage = () => {
  return /* @__PURE__ */ jsxs(PageContainer, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsxs(Container, {
      className: "p-5 m-0 flex w-full h-1/2 flex-col ",
      children: [/* @__PURE__ */ jsx("p", {
        className: "text-3xl font-bold text-center p-10",
        children: "Schedule"
      }), /* @__PURE__ */ jsx("div", {
        className: "p-5 h-3/4 overflow-clip flex flex-col",
        children: /* @__PURE__ */ jsx(Schedule, {
          showPrevious: true
        })
      })]
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
};
const page$9 = UNSAFE_withComponentProps(SchedulePage);
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: page$9
}, Symbol.toStringTag, { value: "Module" }));
const Document = ({
  name,
  iframeSrc
}) => {
  const [isOpened, setIsOpened] = useState(false);
  return /* @__PURE__ */ jsxs(Collapsible, {
    open: isOpened,
    onOpenChange: setIsOpened,
    className: "py-5",
    children: [/* @__PURE__ */ jsxs(CollapsibleTrigger, {
      className: "text-2xl flex flex-row space-x-10",
      children: [isOpened ? /* @__PURE__ */ jsx(ChevronDown, {}) : /* @__PURE__ */ jsx(ChevronUp, {}), name]
    }), /* @__PURE__ */ jsx(CollapsibleContent, {
      children: /* @__PURE__ */ jsx("div", {
        className: "flex flex-row justify-center align-center py-5",
        children: /* @__PURE__ */ jsx("iframe", {
          src: iframeSrc,
          height: "600",
          width: "100%"
        })
      })
    })]
  });
};
const PoliciesPage = () => {
  return /* @__PURE__ */ jsxs(PageContainer, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsxs(Container, {
      className: "flex-col",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "text-3xl font-bold",
        children: "Policies"
      }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs("ul", {
        className: "",
        children: [/* @__PURE__ */ jsx("li", {
          children: /* @__PURE__ */ jsx(Document, {
            name: "Syllabus",
            iframeSrc: "/assets/Syllabus.pdf#view=FitH"
          })
        }), /* @__PURE__ */ jsx("li", {
          children: /* @__PURE__ */ jsx(Document, {
            name: "Grading System",
            iframeSrc: "/assets/Grading-System.pdf#view=FitH"
          })
        })]
      })]
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
};
const page$8 = UNSAFE_withComponentProps(PoliciesPage);
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: page$8
}, Symbol.toStringTag, { value: "Module" }));
const api_url = "https://localhost:8080";
async function getAssignmentByName(type, name) {
  const { data: { data } } = await axios.get(`${api_url}/assignment/${type}/${name}`);
  return data;
}
async function getAllAssignmentsByType(type) {
  const { data: { data } } = await axios.get(`${api_url}/assignments/${type}`);
  return data;
}
const Table = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
const InclassPage = () => {
  const [assignments, setAssignments] = useState(null);
  useEffect(() => {
    getAllAssignmentsByType("inclass").then((data) => setAssignments(data));
  }, [assignments !== null]);
  return /* @__PURE__ */ jsxs(PageContainer, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsxs(Container, {
      className: "flex-col",
      children: [/* @__PURE__ */ jsx("p", {
        className: "text-3xl font-bold",
        children: "In-class Assignments"
      }), /* @__PURE__ */ jsx("div", {
        className: "py-10 px-5 w-3/4",
        children: /* @__PURE__ */ jsxs(Table, {
          className: "text-xl",
          children: [/* @__PURE__ */ jsx(TableHeader, {
            children: /* @__PURE__ */ jsxs(TableRow, {
              children: [/* @__PURE__ */ jsx(TableHead, {
                children: "Name"
              }), /* @__PURE__ */ jsx(TableHead, {
                children: "Due Date"
              }), /* @__PURE__ */ jsx(TableHead, {
                className: "w-10",
                children: "Link"
              })]
            })
          }), /* @__PURE__ */ jsx(TableBody, {
            children: assignments == null ? void 0 : assignments.map((assignment) => /* @__PURE__ */ jsxs(TableRow, {
              children: [/* @__PURE__ */ jsx(TableCell, {
                children: /* @__PURE__ */ jsx(Link, {
                  to: `/inclass/${assignment.name}`,
                  children: toTitleCase(assignment.name)
                })
              }), /* @__PURE__ */ jsx(TableCell, {
                children: to_date_string(assignment.due_date)
              }), /* @__PURE__ */ jsx(TableCell, {
                children: /* @__PURE__ */ jsx(Link, {
                  to: `/inclass/${assignment.name}`,
                  children: /* @__PURE__ */ jsx(ChevronRight, {})
                })
              })]
            }, assignment.name))
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
};
const page$7 = UNSAFE_withComponentProps(InclassPage);
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: page$7
}, Symbol.toStringTag, { value: "Module" }));
async function markdownToHtml(markdown2) {
  const result = await remark().use(remarkRehype).use(rehypeVideo, { test: /\/(.*)(\.mp4|\.mov)$/ }).use(rehypeSanitize).use(rehypeStringify).use(rehypeExternalLinks, { target: "_blank" }).process(markdown2);
  return result.toString();
}
const InclassAssignmentPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const name = params.name ?? "";
  const [details, setDetails] = useState(null);
  const [content, setContent] = useState(null);
  useEffect(() => {
    getAssignmentByName("inclass", name).then((val) => {
      setDetails(val);
      return val;
    }).then((details2) => markdownToHtml((details2 == null ? void 0 : details2.content) || "").then((data) => setContent(data)));
    setDetails(getAssignmentByName("inclass", name));
    markdownToHtml((details == null ? void 0 : details.content) || "").then((data) => setContent(data));
  }, [content !== null && details !== null]);
  if (!details) {
    return navigate("/");
  }
  const due_date_output = (details == null ? void 0 : details.due_date) ? DateTime.fromFormat(details == null ? void 0 : details.due_date, "yyyy-MM-dd HH:mm:ss").toFormat("EEE LLL d, yyyy @ h:mma") : details == null ? void 0 : details.due_date;
  return /* @__PURE__ */ jsxs(PageContainer, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsxs(Container, {
      className: "flex-col",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "flex-row flex py-2",
        children: [/* @__PURE__ */ jsx(BackButton, {}), /* @__PURE__ */ jsxs("p", {
          className: "text-3xl font-bold",
          children: ["In-class Assignment: ", toTitleCase(name)]
        })]
      }), /* @__PURE__ */ jsx(AssignmentSpecification, {
        name,
        assignment_type: details.type,
        due_date: (details == null ? void 0 : details.due_date) ? due_date_output : "",
        content,
        assignment_link: details.assignment_link,
        demo_links: details.demo_links
      })]
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
};
const page$6 = UNSAFE_withComponentProps(InclassAssignmentPage);
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: page$6
}, Symbol.toStringTag, { value: "Module" }));
const LabsPage = () => {
  const [assignments, setAssignments] = useState();
  useEffect(() => {
    getAllAssignmentsByType("labs").then((data) => setAssignments(data));
  }, [assignments !== null]);
  return /* @__PURE__ */ jsxs(PageContainer, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsxs(Container, {
      className: "flex-col",
      children: [/* @__PURE__ */ jsx("p", {
        className: "text-3xl font-bold",
        children: "Labs"
      }), /* @__PURE__ */ jsx("div", {
        className: "py-10 px-5 w-3/4",
        children: /* @__PURE__ */ jsxs(Table, {
          className: "text-xl",
          children: [/* @__PURE__ */ jsx(TableHeader, {
            children: /* @__PURE__ */ jsxs(TableRow, {
              children: [/* @__PURE__ */ jsx(TableHead, {
                children: "Name"
              }), /* @__PURE__ */ jsx(TableHead, {
                children: "Due Date"
              }), /* @__PURE__ */ jsx(TableHead, {
                className: "w-10",
                children: "Link"
              })]
            })
          }), /* @__PURE__ */ jsx(TableBody, {
            children: assignments == null ? void 0 : assignments.map((assignment) => /* @__PURE__ */ jsxs(TableRow, {
              children: [/* @__PURE__ */ jsx(TableCell, {
                children: /* @__PURE__ */ jsx(Link, {
                  to: `/labs/${assignment.name}`,
                  children: toTitleCase(assignment.name)
                })
              }), /* @__PURE__ */ jsx(TableCell, {
                children: assignment.due_date
              }), /* @__PURE__ */ jsx(TableCell, {
                children: /* @__PURE__ */ jsx(Link, {
                  to: `/labs/${assignment.name}`,
                  children: /* @__PURE__ */ jsx(ChevronRight, {})
                })
              })]
            }, assignment.name))
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
};
const page$5 = UNSAFE_withComponentProps(LabsPage);
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: page$5
}, Symbol.toStringTag, { value: "Module" }));
const LabsAssignmentPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const name = params.name ?? "";
  const [details, setDetails] = useState(null);
  const [content, setContent] = useState(null);
  useEffect(() => {
    getAssignmentByName("labs", name).then((val) => {
      setDetails(val);
      return val;
    }).then((details2) => markdownToHtml((details2 == null ? void 0 : details2.content) || "").then((data) => setContent(data)));
    setDetails(getAssignmentByName("labs", name));
    markdownToHtml((details == null ? void 0 : details.content) || "").then((data) => setContent(data));
  }, [content !== null && details !== null]);
  if (!details) {
    return navigate("/");
  }
  const due_date_output = (details == null ? void 0 : details.due_date) ? DateTime.fromFormat(details == null ? void 0 : details.due_date, "yyyy-MM-dd HH:mm:ss").toFormat("EEE LLL d, yyyy @ h:mma") : details == null ? void 0 : details.due_date;
  return /* @__PURE__ */ jsxs(PageContainer, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsxs(Container, {
      className: "flex-col",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "flex-row flex py-2",
        children: [/* @__PURE__ */ jsx(BackButton, {}), /* @__PURE__ */ jsxs("p", {
          className: "text-3xl font-bold",
          children: ["Lab: ", toTitleCase(name)]
        })]
      }), /* @__PURE__ */ jsx(AssignmentSpecification, {
        name,
        assignment_type: details.type,
        due_date: (details == null ? void 0 : details.due_date) ? due_date_output : "",
        content,
        assignment_link: details.assignment_link,
        demo_links: details.demo_links
      })]
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
};
const page$4 = UNSAFE_withComponentProps(LabsAssignmentPage);
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: page$4
}, Symbol.toStringTag, { value: "Module" }));
const ProjectsPage = () => {
  const [assignments, setAssignments] = useState();
  useEffect(() => {
    getAllAssignmentsByType("projects").then((data) => setAssignments(data));
  }, [assignments !== null]);
  return /* @__PURE__ */ jsxs(PageContainer, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsxs(Container, {
      className: "flex-col",
      children: [/* @__PURE__ */ jsx("p", {
        className: "text-3xl font-bold",
        children: "Projects"
      }), /* @__PURE__ */ jsx("div", {
        className: "py-10 px-5 w-3/4",
        children: /* @__PURE__ */ jsxs(Table, {
          className: "text-xl",
          children: [/* @__PURE__ */ jsx(TableHeader, {
            children: /* @__PURE__ */ jsxs(TableRow, {
              children: [/* @__PURE__ */ jsx(TableHead, {
                children: "Name"
              }), /* @__PURE__ */ jsx(TableHead, {
                children: "Due Date"
              }), /* @__PURE__ */ jsx(TableHead, {
                className: "w-10",
                children: "Link"
              })]
            })
          }), /* @__PURE__ */ jsx(TableBody, {
            children: assignments == null ? void 0 : assignments.map((assignment) => /* @__PURE__ */ jsxs(TableRow, {
              children: [/* @__PURE__ */ jsx(TableCell, {
                children: /* @__PURE__ */ jsx(Link, {
                  to: `/labs/${assignment.name}`,
                  children: toTitleCase(assignment.name)
                })
              }), /* @__PURE__ */ jsx(TableCell, {
                children: assignment.due_date
              }), /* @__PURE__ */ jsx(TableCell, {
                children: /* @__PURE__ */ jsx(Link, {
                  to: `/labs/${assignment.name}`,
                  children: /* @__PURE__ */ jsx(ChevronRight, {})
                })
              })]
            }, assignment.name))
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
};
const page$3 = UNSAFE_withComponentProps(ProjectsPage);
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: page$3
}, Symbol.toStringTag, { value: "Module" }));
const ProjectsAssignmentPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const name = params.name ?? "";
  const [details, setDetails] = useState(null);
  const [content, setContent] = useState(null);
  useEffect(() => {
    getAssignmentByName("projects", name).then((val) => {
      setDetails(val);
      return val;
    }).then((details2) => markdownToHtml((details2 == null ? void 0 : details2.content) || "").then((data) => setContent(data)));
    setDetails(getAssignmentByName("projects", name));
    markdownToHtml((details == null ? void 0 : details.content) || "").then((data) => setContent(data));
  }, [content !== null && details !== null]);
  if (!details) {
    return navigate("/");
  }
  const due_date_output = (details == null ? void 0 : details.due_date) ? DateTime.fromFormat(details == null ? void 0 : details.due_date, "yyyy-MM-dd HH:mm:ss").toFormat("EEE LLL d, yyyy @ h:mma") : details == null ? void 0 : details.due_date;
  return /* @__PURE__ */ jsxs(PageContainer, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsxs(Container, {
      className: "flex-col",
      children: [/* @__PURE__ */ jsxs("div", {
        className: "flex-row flex py-2",
        children: [/* @__PURE__ */ jsx(BackButton, {}), /* @__PURE__ */ jsxs("p", {
          className: "text-3xl font-bold",
          children: ["Project: ", toTitleCase(name)]
        })]
      }), /* @__PURE__ */ jsx(AssignmentSpecification, {
        name,
        assignment_type: details.type,
        due_date: (details == null ? void 0 : details.due_date) ? due_date_output : "",
        content,
        assignment_link: details.assignment_link,
        demo_links: details.demo_links
      })]
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
};
const page$2 = UNSAFE_withComponentProps(ProjectsAssignmentPage);
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: page$2
}, Symbol.toStringTag, { value: "Module" }));
const slides = [
  {
    name: "00",
    slide_names: [
      {
        name: "intro",
        date: "8/21/2025"
      }
    ]
  }
];
const Digitify = (weekNumber) => {
  const weekNum = parseInt(weekNumber);
  if (isNaN(weekNum)) {
    return weekNumber;
  }
  return weekNum;
};
const SlidesPage = () => {
  return /* @__PURE__ */ jsxs(PageContainer, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsxs(Container, {
      className: "flex-col",
      children: [/* @__PURE__ */ jsx("p", {
        className: "text-3xl font-bold",
        children: "Slides"
      }), /* @__PURE__ */ jsx("div", {
        className: "py-10 px-5 w-3/4",
        children: /* @__PURE__ */ jsxs(Table, {
          className: "text-xl",
          children: [/* @__PURE__ */ jsx(TableHeader, {
            children: /* @__PURE__ */ jsxs(TableRow, {
              children: [/* @__PURE__ */ jsx(TableHead, {
                children: "Name"
              }), /* @__PURE__ */ jsx(TableHead, {
                children: "Posting Date"
              }), /* @__PURE__ */ jsx(TableHead, {
                className: "w-10",
                children: "Link"
              })]
            })
          }), /* @__PURE__ */ jsx(TableBody, {
            children: slides == null ? void 0 : slides.map(({
              name,
              slide_names
            }) => {
              return slide_names.map(({
                name: slide_name,
                date
              }, jdx) => /* @__PURE__ */ jsxs(TableRow, {
                children: [/* @__PURE__ */ jsx(TableCell, {
                  children: /* @__PURE__ */ jsxs(Link, {
                    to: `/slides/${name}/${slide_name}`,
                    children: ["Week ", Digitify(name), " - ", toTitleCase(slide_name)]
                  })
                }), /* @__PURE__ */ jsx(TableCell, {
                  children: date
                }), /* @__PURE__ */ jsx(TableCell, {
                  children: /* @__PURE__ */ jsx(Link, {
                    to: `/slides/${name}/${slide_name}`,
                    children: /* @__PURE__ */ jsx(ChevronRight, {})
                  })
                })]
              }, `${name}-${slide_name}-${jdx}`));
            })
          })]
        })
      })]
    }), /* @__PURE__ */ jsx(Footer, {})]
  });
};
const page$1 = UNSAFE_withComponentProps(SlidesPage);
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: page$1
}, Symbol.toStringTag, { value: "Module" }));
const usfca = "/assets/usfca-cOW9X8q0.jpg";
const nightskyline = "/assets/night-skyline-hong-kong-DKJgs2IH.jpg";
const gradingTable = "/assets/grading-table-DGCr8DDC.png";
const IntroSlides = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsxs(Slides, {
      children: [/* @__PURE__ */ jsx("section", {
        children: /* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "CS 111: Foundations of Program Design"
        })
      }), /* @__PURE__ */ jsx("section", {
        children: /* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Welcome!"
        })
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "About Me!"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsxs("div", {
            className: "r-hstack gap-10",
            children: [/* @__PURE__ */ jsx("img", {
              width: 500,
              src: nightskyline,
              alt: "Hong kong skyline",
              className: "fragment"
            }), /* @__PURE__ */ jsx("img", {
              width: 500,
              src: usfca,
              alt: "campus",
              className: "fragment"
            })]
          })
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Academic Experience"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsx("div", {
            className: "text-md",
            children: /* @__PURE__ */ jsxs("ul", {
              className: "fragment",
              children: [/* @__PURE__ */ jsx("li", {
                children: "USF Alumni"
              }), /* @__PURE__ */ jsxs("ul", {
                children: [/* @__PURE__ */ jsx("li", {
                  children: "BS CS"
                }), /* @__PURE__ */ jsx("li", {
                  children: "MAT"
                })]
              }), /* @__PURE__ */ jsx("li", {
                children: "CS Major, Psych Minor, joined Dual Degree Teaching Program"
              }), /* @__PURE__ */ jsx("li", {
                children: "TA for C and Systems, Tutor in the Tutoring Center"
              }), /* @__PURE__ */ jsx("li", {
                children: "Taught Mathematics at different Secondary Schools"
              }), /* @__PURE__ */ jsx("li", {
                children: "Helped various startups"
              }), /* @__PURE__ */ jsx("li", {
                children: "CoderSchool Management"
              }), /* @__PURE__ */ jsx("li", {
                children: "Solutions Architect at a current Startup"
              })]
            })
          })
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Tech Interests"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsxs("ul", {
            className: "fragment",
            children: [/* @__PURE__ */ jsx("li", {
              children: "Web Development"
            }), /* @__PURE__ */ jsx("li", {
              children: "System Design"
            }), /* @__PURE__ */ jsx("li", {
              children: "DevOps"
            }), /* @__PURE__ */ jsx("li", {
              children: "Programming Languages"
            }), /* @__PURE__ */ jsx("li", {
              children: "CS for All"
            }), /* @__PURE__ */ jsx("li", {
              children: "Computer Science Education"
            })]
          })
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Hobbies"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsx("div", {
            className: "fragment r-hstack",
            children: "Sailing Programming Teaching"
          })
        })]
      }), /* @__PURE__ */ jsx("section", {
        children: /* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Your Turn!"
        })
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "With a partner next to you, share about yourself!"
        }), /* @__PURE__ */ jsxs("ul", {
          children: [/* @__PURE__ */ jsx("li", {
            children: "What’s your name?"
          }), /* @__PURE__ */ jsx("li", {
            children: "Where are you from?"
          }), /* @__PURE__ */ jsx("li", {
            children: "What year are you in?"
          }), /* @__PURE__ */ jsx("li", {
            children: "What program are you in?"
          }), /* @__PURE__ */ jsx("li", {
            children: "What are you interested in? Doesn't have to be technical interests."
          })]
        })]
      }), /* @__PURE__ */ jsx("section", {
        children: "Out of curiosity..."
      }), /* @__PURE__ */ jsx("section", {
        children: "How many of you are CS majors?"
      }), /* @__PURE__ */ jsx("section", {
        children: "CS Minors?"
      }), /* @__PURE__ */ jsx("section", {
        children: "Math Majors?"
      }), /* @__PURE__ */ jsx("section", {
        children: "Data Science?"
      }), /* @__PURE__ */ jsx("section", {
        children: "UTEC/Teaching/UESJ?"
      }), /* @__PURE__ */ jsx("section", {
        children: "Engineering?"
      }), /* @__PURE__ */ jsx("section", {
        children: "Others?"
      }), /* @__PURE__ */ jsx("section", {
        children: "Freshmen?"
      }), /* @__PURE__ */ jsx("section", {
        children: "Sophomores?"
      }), /* @__PURE__ */ jsx("section", {
        children: "Juniors?"
      }), /* @__PURE__ */ jsx("section", {
        children: "Seniors?"
      }), /* @__PURE__ */ jsx("section", {
        children: "Alright that's enough."
      }), /* @__PURE__ */ jsx("section", {
        children: "TA Introduction!"
      }), /* @__PURE__ */ jsx("section", {
        children: "Class Expectations"
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Attendance"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsx("p", {
            className: "fragment",
            children: "Mandatory. Email me or message me on CampusWire (we will get into that more later) if you can’t come to class."
          })
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Textbook"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex flex-row fragment",
            children: [/* @__PURE__ */ jsxs("ul", {
              children: [/* @__PURE__ */ jsx("li", {
                children: "Java Software Solutions"
              }), /* @__PURE__ */ jsx("li", {
                children: "ISBN: 9780134543284"
              }), /* @__PURE__ */ jsx("li", {
                children: "Authors: John Lewis, William Loftus"
              }), /* @__PURE__ */ jsx("li", {
                children: "Publisher: Pearson"
              }), /* @__PURE__ */ jsx("li", {
                children: "Publication Date: 2017-02-17"
              }), /* @__PURE__ */ jsx("li", {
                children: "Recommended"
              })]
            }), /* @__PURE__ */ jsx("img", {
              src: nightskyline,
              alt: "Skyline"
            })]
          })
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Getting Help"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsxs("ul", {
            className: "fragment",
            children: [/* @__PURE__ */ jsx("li", {
              children: "Myself"
            }), /* @__PURE__ */ jsx("li", {
              children: "TA"
            }), /* @__PURE__ */ jsx("li", {
              children: "Tutoring Center"
            })]
          })
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Code Review"
        }), /* @__PURE__ */ jsxs("section", {
          children: [/* @__PURE__ */ jsx("p", {
            children: "If I question or doubt whether you wrote your own code, I'll ask you to come into my office hours and have you explain different parts of your code to me."
          }), /* @__PURE__ */ jsx("p", {
            children: "Additionally, the projects will have an Interactive Grading portion, where you will meet with one of us (TA or myself). We'll ask some questions about your project to ensure you understand your work."
          })]
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Late Policy/Resubmission Policy"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsxs("ul", {
            children: [/* @__PURE__ */ jsx("li", {
              children: "5 Late Submissions throughout the semester"
            }), /* @__PURE__ */ jsx("ul", {
              children: /* @__PURE__ */ jsx("li", {
                children: "Canvas Module countdown"
              })
            }), /* @__PURE__ */ jsx("li", {
              children: "Send me your reasoning for why it was late"
            }), /* @__PURE__ */ jsx("li", {
              children: "If you use the submission, up to 3 days late to still receive credit"
            }), /* @__PURE__ */ jsx("li", {
              children: "No resubmissions"
            })]
          })
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Taking Notes/Tech Policy"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsxs("ul", {
            children: [/* @__PURE__ */ jsx("li", {
              className: "fragment",
              children: "I will post the slides online after class."
            }), /* @__PURE__ */ jsx("li", {
              className: "fragment",
              children: "I may post the code written in class on Canvas, on CampusWire, or on GitHub (more on this later) depending on the context."
            }), /* @__PURE__ */ jsx("li", {
              className: "fragment",
              children: "I’m okay with you all using your computers and tablets, but please be productive in class and pay attention. I don’t want to end up repeating myself every time in Office Hours because you were doing something else in class."
            })]
          })
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Office Hours"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsxs("ul", {
            children: [/* @__PURE__ */ jsx("li", {
              children: "MW 4:00-5:00 (After class)"
            }), /* @__PURE__ */ jsx("li", {
              children: "Room HR 415"
            }), /* @__PURE__ */ jsx("li", {
              children: "On Syllabus"
            }), /* @__PURE__ */ jsx("li", {
              children: "Also posted on CampusWire after today"
            }), /* @__PURE__ */ jsx("li", {
              children: "Please come into my Office Hours or the Office Hours of a TA to get help if you’re unsure about anything!"
            })]
          })
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "TA Office Hours"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex flex-row justify-around",
            children: [/* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("p", {
                children: "Omyaasree"
              }), /* @__PURE__ */ jsx("p", {
                children: "TIME"
              }), " ", /* @__PURE__ */ jsx("p", {
                children: "HR 411/413 (CS Labs)"
              })]
            }), /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("p", {
                children: "Rudraraj"
              }), /* @__PURE__ */ jsx("p", {
                children: "TIME"
              }), " ", /* @__PURE__ */ jsx("p", {
                children: "HR 411/413 (CS Labs)"
              })]
            })]
          })
        })]
      }), /* @__PURE__ */ jsx("section", {
        children: "Syllabus Walkthrough"
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Course Objectives"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsx("div", {
            className: "text-md",
            children: /* @__PURE__ */ jsxs("ul", {
              className: "",
              children: [/* @__PURE__ */ jsx("li", {
                children: "Students will learn basic principles of software design, development, and debugging. Students should leave the course able to develop quality software: well-structured, clearly written, and robust."
              }), /* @__PURE__ */ jsx("li", {
                children: "Mastery of these subjects shall be demonstrated through the labs, projects, quizzes, in-class assignments, and exams."
              })]
            })
          })
        })]
      }), /* @__PURE__ */ jsx("section", {
        children: /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsx("div", {
            children: /* @__PURE__ */ jsxs("ul", {
              children: [/* @__PURE__ */ jsx("li", {
                children: "Students will learn and be able to use the following computer science concepts:"
              }), /* @__PURE__ */ jsxs("ul", {
                children: [/* @__PURE__ */ jsx("li", {
                  children: "Variable types and uses"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Objects and references to objects"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Command line, Keyboard, and File input/output"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Conditional Statements"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Loops"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Mathematical Operations"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Object Oriented Programming, including encapsulation and inheritance"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Basic arrays"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Basic collection data types"
                })]
              })]
            })
          })
        })
      }), /* @__PURE__ */ jsx("section", {
        children: "Class Structure"
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Assignment Structure"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex text-[16pt]",
            children: [/* @__PURE__ */ jsx("div", {
              className: "flex flex-col",
              children: /* @__PURE__ */ jsxs("ul", {
                children: [/* @__PURE__ */ jsx("li", {
                  children: "Weekly quizzes - short quizzes to check for understanding"
                }), /* @__PURE__ */ jsx("ul", {
                  children: /* @__PURE__ */ jsx("li", {
                    children: "Done in class (Mondays)"
                  })
                }), /* @__PURE__ */ jsx("li", {
                  children: "In-class Programming - short programming assignments that can usually be completed in class. Can only be madeup if you weren't in class."
                }), /* @__PURE__ */ jsx("ul", {
                  children: /* @__PURE__ */ jsx("li", {
                    children: "Due end of class"
                  })
                }), /* @__PURE__ */ jsx("li", {
                  children: "Labs - medium sized assignments that take 3-5 days"
                }), /* @__PURE__ */ jsx("ul", {
                  children: /* @__PURE__ */ jsx("li", {
                    children: "Due by the end of the week, usually worked on in class on Wednesdays"
                  })
                })]
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "flex flex-col",
              children: /* @__PURE__ */ jsxs("ul", {
                children: [/* @__PURE__ */ jsx("li", {
                  children: "Projects - larger assignments that can take 7-10 days"
                }), /* @__PURE__ */ jsx("ul", {
                  children: /* @__PURE__ */ jsx("li", {
                    children: "Due two weeks after on Fridays"
                  })
                }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("li", {
                  children: "Exams - a Midterm and Final Exam to demonstrate your understanding of the material through multiple choice, fill in the blanks, free response, and paper coded problems."
                })]
              })
            })]
          })
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Specification based Grading"
        }), /* @__PURE__ */ jsxs("section", {
          children: [/* @__PURE__ */ jsx("p", {
            children: "The projects will have a specification regarding required features implemented for each grade point"
          }), /* @__PURE__ */ jsxs("p", {
            children: ["For example, to get a C for the project, you ", /* @__PURE__ */ jsx("strong", {
              children: "must"
            }), " completely implement specific features. To get a B for the project, you ", /* @__PURE__ */ jsx("strong", {
              children: "must"
            }), " completely implement the features of a C and additional features to get a B."]
          }), /* @__PURE__ */ jsx("p", {
            children: "We will see this more when we get to the first project."
          })]
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Labor Based Grading"
        }), /* @__PURE__ */ jsxs("section", {
          children: [/* @__PURE__ */ jsx("p", {
            children: "We will use a Labor Based Grading"
          }), /* @__PURE__ */ jsx("p", {
            children: 'There is a supporting document in the "Policies" in the "Grading System" document. Please read it before next week to have a better understanding of what it is.'
          })]
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Labor Based Grading cont."
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsxs("div", {
            className: "text-[20pt]",
            children: [/* @__PURE__ */ jsx("p", {
              children: "Short of it:"
            }), /* @__PURE__ */ jsxs("ul", {
              children: [/* @__PURE__ */ jsx("li", {
                children: "Do X number of each assignment and you'll end up with a certain grade"
              }), /* @__PURE__ */ jsx("li", {
                children: "Do less work, you'll end up with a lower grade."
              }), /* @__PURE__ */ jsx("li", {
                children: "Do more work, you'll end up with a better grade"
              }), /* @__PURE__ */ jsx("li", {
                children: "Labs, In Class, Quizzes, and Exams will be graded by Complete/Incomplete"
              }), /* @__PURE__ */ jsx("li", {
                children: "Projects will be graded with Specification Based Grading"
              }), /* @__PURE__ */ jsx("li", {
                children: "Engagement and Extra Credit are also Complete/Incomplete"
              }), /* @__PURE__ */ jsx("li", {
                children: "Exams are also Complete/Incomplete"
              })]
            })]
          })
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Table"
        }), /* @__PURE__ */ jsx("img", {
          height: 500,
          src: gradingTable,
          alt: "Grading Table",
          className: "fragment"
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Projects"
        }), /* @__PURE__ */ jsx("p", {
          children: "Quiz Study Helper"
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "CS Engagement"
        }), /* @__PURE__ */ jsx("p", {
          children: "Go to a CS event and take a picture of yourself at the event."
        })]
      }), /* @__PURE__ */ jsx("section", {
        children: /* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Important note about AI"
        })
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "AI Use"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsxs("ul", {
            children: [/* @__PURE__ */ jsx("li", {
              children: "Don't use it"
            }), /* @__PURE__ */ jsx("li", {
              children: "We can tell"
            }), /* @__PURE__ */ jsx("li", {
              children: "You won't learn to code by relying on it."
            }), /* @__PURE__ */ jsx("li", {
              children: "Not always accurate"
            }), /* @__PURE__ */ jsx("ul", {
              children: /* @__PURE__ */ jsx("li", {
                children: "Spend more time fixing it than writing it in some cases"
              })
            }), /* @__PURE__ */ jsx("li", {
              children: "We may have exercises to showcase this throughout the semester"
            }), /* @__PURE__ */ jsx("li", {
              children: "Just don't use it."
            })]
          })
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Plagiarism and Cheating"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsxs("ul", {
            children: [/* @__PURE__ */ jsx("li", {
              children: "Conversation around your code"
            }), /* @__PURE__ */ jsx("li", {
              children: "If suspicion remains after meeting, report may be sent to Academic Integrity Committee"
            }), /* @__PURE__ */ jsx("li", {
              children: "IC/F on submission"
            }), /* @__PURE__ */ jsx("li", {
              children: "Second time, IC/F on submission, report sent to Academic Integrity Committee"
            }), /* @__PURE__ */ jsx("li", {
              children: "Likely means CASA and Dean get involved"
            }), /* @__PURE__ */ jsxs("ul", {
              children: [/* @__PURE__ */ jsx("li", {
                children: "Not fun"
              }), /* @__PURE__ */ jsx("li", {
                children: "Don't do it."
              })]
            })]
          })
        })]
      }), /* @__PURE__ */ jsx("section", {
        children: "Set some expectations"
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "What you'll do in this class"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex flex-row text-[16pt] ",
            children: [/* @__PURE__ */ jsx("div", {
              className: "flex flex-col",
              children: /* @__PURE__ */ jsxs("ul", {
                children: [/* @__PURE__ */ jsx("li", {
                  children: "Create small to medium sized programs to develop a deeper understanding of Java"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Learn the Foundations of the Java Programming Language"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Brainstorm and problem solve your way through various programs"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Practice what you've learned in various settings with different kinds of programs"
                })]
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "flex flex-col",
              children: /* @__PURE__ */ jsxs("ul", {
                children: [/* @__PURE__ */ jsx("li", {
                  children: "Present your code to others."
                }), /* @__PURE__ */ jsx("li", {
                  children: "Diagram your code and explain your thinking to others"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Develop a Quiz Study Program"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Become more comfortable with the Terminal to run programs"
                })]
              })
            })]
          })
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "What we won't do in this class"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsxs("div", {
            className: "flex flex-row justify-between",
            children: [/* @__PURE__ */ jsx("div", {
              className: "flex flex-col",
              children: /* @__PURE__ */ jsxs("ul", {
                children: [/* @__PURE__ */ jsx("li", {
                  children: "Learn another programming language like C or Rust"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Create an AI"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Create a Mobile App"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Create a Game"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Create a new OS"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Develop the next big GPT equivalent"
                })]
              })
            }), /* @__PURE__ */ jsx("div", {
              className: "flex flex-col",
              children: /* @__PURE__ */ jsxs("ul", {
                children: [/* @__PURE__ */ jsx("li", {
                  children: "Hack into your friends' social media accounts"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Fix your family's printer"
                }), /* @__PURE__ */ jsx("li", {
                  children: "Get your friend's password"
                })]
              })
            })]
          })
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Hopefully what you'll be able to do after this semester"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsxs("ul", {
            children: [/* @__PURE__ */ jsx("li", {
              children: "Code in Java"
            }), /* @__PURE__ */ jsx("li", {
              children: "Problem solve and develop a foundational understanding of debugging"
            }), /* @__PURE__ */ jsx("li", {
              children: "Have a stronger understanding of Programming as a whole"
            }), /* @__PURE__ */ jsx("li", {
              children: "Understand how to work through a problem and solve it"
            })]
          })
        })]
      }), /* @__PURE__ */ jsxs("section", {
        children: [/* @__PURE__ */ jsx("p", {
          className: "text-usf-yellow",
          children: "Lastly, what you might be able to do after this semester"
        }), /* @__PURE__ */ jsx("section", {
          children: /* @__PURE__ */ jsxs("ul", {
            children: [/* @__PURE__ */ jsx("li", {
              children: "Use tools to find bugs in your code"
            }), /* @__PURE__ */ jsx("li", {
              children: "Research on your own to expand your own understanding"
            }), /* @__PURE__ */ jsx("li", {
              children: "How to ask for help and find the resources you need"
            })]
          })
        })]
      }), /* @__PURE__ */ jsx("section", {
        children: "See you on Monday for our setup!"
      })]
    })]
  });
};
const page = UNSAFE_withComponentProps(IntroSlides);
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: page
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CELrRKo2.js", "imports": ["/assets/index-DhHEgl_Z.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-CXD2xa8o.js", "imports": ["/assets/index-DhHEgl_Z.js", "/assets/usfca-djDklq4e.js", "/assets/index-B7YJak7Q.js"], "css": ["/assets/root-BG8SBaMb.css", "/assets/usfca-GrqwCCJo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-iQ7VlNE8.js", "imports": ["/assets/index-DhHEgl_Z.js", "/assets/usfca-djDklq4e.js", "/assets/index-Rr8qUa06.js", "/assets/index-B7YJak7Q.js"], "css": ["/assets/usfca-GrqwCCJo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/schedule/page": { "id": "routes/schedule/page", "parentId": "root", "path": "/schedule", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/page-BvNtJPCb.js", "imports": ["/assets/index-DhHEgl_Z.js", "/assets/usfca-djDklq4e.js", "/assets/index-Rr8qUa06.js", "/assets/index-B7YJak7Q.js"], "css": ["/assets/usfca-GrqwCCJo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/policies/page": { "id": "routes/policies/page", "parentId": "root", "path": "/policies", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/page-6TE6pSYs.js", "imports": ["/assets/index-DhHEgl_Z.js", "/assets/usfca-djDklq4e.js", "/assets/index-B7YJak7Q.js"], "css": ["/assets/usfca-GrqwCCJo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/inclass/page": { "id": "routes/inclass/page", "parentId": "root", "path": "/inclass", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/page-B5TBqj5w.js", "imports": ["/assets/index-DhHEgl_Z.js", "/assets/usfca-djDklq4e.js", "/assets/index-B7YJak7Q.js", "/assets/api-DGCxlulT.js", "/assets/table-BTu2pyoX.js"], "css": ["/assets/usfca-GrqwCCJo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/inclass/[name]/page": { "id": "routes/inclass/[name]/page", "parentId": "root", "path": "/inclass/:name", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/page-CN-4Mm3N.js", "imports": ["/assets/index-DhHEgl_Z.js", "/assets/usfca-djDklq4e.js", "/assets/index-B7YJak7Q.js", "/assets/datetime-B_b54rSF.js", "/assets/api-DGCxlulT.js"], "css": ["/assets/usfca-GrqwCCJo.css", "/assets/datetime-6bB3eYpp.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/labs/page": { "id": "routes/labs/page", "parentId": "root", "path": "/labs", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/page-Dc4kLiF6.js", "imports": ["/assets/index-DhHEgl_Z.js", "/assets/usfca-djDklq4e.js", "/assets/index-B7YJak7Q.js", "/assets/api-DGCxlulT.js", "/assets/table-BTu2pyoX.js"], "css": ["/assets/usfca-GrqwCCJo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/labs/[name]/page": { "id": "routes/labs/[name]/page", "parentId": "root", "path": "/labs/:name", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/page-L66bF6UH.js", "imports": ["/assets/index-DhHEgl_Z.js", "/assets/usfca-djDklq4e.js", "/assets/index-B7YJak7Q.js", "/assets/datetime-B_b54rSF.js", "/assets/api-DGCxlulT.js"], "css": ["/assets/usfca-GrqwCCJo.css", "/assets/datetime-6bB3eYpp.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/projects/page": { "id": "routes/projects/page", "parentId": "root", "path": "/projects", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/page-CMcrslQG.js", "imports": ["/assets/index-DhHEgl_Z.js", "/assets/usfca-djDklq4e.js", "/assets/index-B7YJak7Q.js", "/assets/api-DGCxlulT.js", "/assets/table-BTu2pyoX.js"], "css": ["/assets/usfca-GrqwCCJo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/projects/[name]/page": { "id": "routes/projects/[name]/page", "parentId": "root", "path": "/projects/:name", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/page-7-Hn491M.js", "imports": ["/assets/index-DhHEgl_Z.js", "/assets/usfca-djDklq4e.js", "/assets/index-B7YJak7Q.js", "/assets/datetime-B_b54rSF.js", "/assets/api-DGCxlulT.js"], "css": ["/assets/usfca-GrqwCCJo.css", "/assets/datetime-6bB3eYpp.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/slides/page": { "id": "routes/slides/page", "parentId": "root", "path": "/slides", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/page-Dtds0Qbc.js", "imports": ["/assets/index-DhHEgl_Z.js", "/assets/usfca-djDklq4e.js", "/assets/index-B7YJak7Q.js", "/assets/table-BTu2pyoX.js"], "css": ["/assets/usfca-GrqwCCJo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/slides/00/intro/page": { "id": "routes/slides/00/intro/page", "parentId": "root", "path": "/slides/00/intro", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/page-Cwym1oQy.js", "imports": ["/assets/index-DhHEgl_Z.js", "/assets/usfca-djDklq4e.js"], "css": ["/assets/usfca-GrqwCCJo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-9938fff7.js", "version": "9938fff7", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/schedule/page": {
    id: "routes/schedule/page",
    parentId: "root",
    path: "/schedule",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/policies/page": {
    id: "routes/policies/page",
    parentId: "root",
    path: "/policies",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/inclass/page": {
    id: "routes/inclass/page",
    parentId: "root",
    path: "/inclass",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/inclass/[name]/page": {
    id: "routes/inclass/[name]/page",
    parentId: "root",
    path: "/inclass/:name",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/labs/page": {
    id: "routes/labs/page",
    parentId: "root",
    path: "/labs",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/labs/[name]/page": {
    id: "routes/labs/[name]/page",
    parentId: "root",
    path: "/labs/:name",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/projects/page": {
    id: "routes/projects/page",
    parentId: "root",
    path: "/projects",
    index: void 0,
    caseSensitive: void 0,
    module: route8
  },
  "routes/projects/[name]/page": {
    id: "routes/projects/[name]/page",
    parentId: "root",
    path: "/projects/:name",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/slides/page": {
    id: "routes/slides/page",
    parentId: "root",
    path: "/slides",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/slides/00/intro/page": {
    id: "routes/slides/00/intro/page",
    parentId: "root",
    path: "/slides/00/intro",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
