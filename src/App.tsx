import { useEffect, useState } from "react";

import "./App.css";
import mobileDivider from "./assets/images/pattern-divider-mobile.svg";
import desktopDivider from "./assets/images/pattern-divider-desktop.svg";
import dice from "./assets/images/icon-dice.svg";

function App() {
  const [slipId, setSlipId] = useState<number>(117);
  const [advice, setAdvice] = useState<string>("It is easy to sit up and take notice, what's difficult is getting up and taking action.");

  async function fetchAdvice() {
    try {

      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      console.log("API response", data);
      setSlipId(data.slip.id);
      setAdvice(data.slip.advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-16">
      <main className="bg-neutral-dark-grayish-blue px-6 pt-6 rounded-lg flex flex-col items-center justify-center gap-6 max-w-sm">
        <p className="uppercase font-medium text-primary-neon-green">
          Advice # {slipId}
        </p>
        <q className="font-bold text-xl">{advice}</q>
        <div className=" flex flex-col items-center justify-center ">
          <img
            src={mobileDivider}
            alt="Pattern Divider"
            className="block sm:hidden"
          ></img>
          <img
            src={desktopDivider}
            alt="Pattern Divider"
            className="hidden sm:block"
          ></img>
          <button
            type="button"
            onClick={() => fetchAdvice()}
            className="bg-primary-neon-green p-4 rounded-full relative -bottom-8 cursor-pointer hover:drop-shadow-3xl transition-colors duration-300 ease-initial"
          >
            <img
              src={dice}
              alt="Dice icon"
              className="text-primary-neon-green"
            ></img>
          </button>
        </div>
      </main>
      <footer className="attribution">
        Challenge by{" "}
        <a
          rel="noopener"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="#" className="text-primary-neon-green">
          Onyinye Oguocha
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
