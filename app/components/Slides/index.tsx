import { useEffect, useRef } from 'react';
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import "./usfca.scss";

const Slides = ({ children }: any) => {
  const deckDivRef = useRef<HTMLDivElement>(null); // reference to deck container div
  const deckRef = useRef<Reveal.Api | null>(null); // reference to deck reveal instance
  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current!, {
      controls: true,
      transition: "slide",
      // hash: true,
      // other config options
    });

    deckRef.current.initialize().then(() => {
      Reveal.initialize({
        plugins: [RevealNotes]
      })
      // good place for event handlers and plugin setups
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
    <div className="reveal p-10 max-h-[88%]" ref={deckDivRef}>
    <div className="slides">
    {children}
    </div>
    </div>
  );
}


export { Slides };
