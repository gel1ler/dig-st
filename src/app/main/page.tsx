'use client'
import Calendar from "@/components/calendar";
import SideBlock from "@/components/sideBlock";
import Line from "@/components/UI/line";
import { Button } from "@mui/material";
import { useState } from "react";

const Example = ({ children }: { children: string }) =>
  <div className="text-nowrap rounded-tl-none rounded-full bg-[#006cdb] py-2 px-4 text-white bg-opacity-85 text-lg">{children}</div>


const SearchSuggestions = ({ started, suggestions }: { started: boolean; suggestions: string[] }) => {
  return (
    <div
      className={`flex flex-col w-full gap-2 px-4 transition-all duration-500 overflow-hidden`}
      style={{
        opacity: !started ? 0 : 1,
        maxHeight: !started ? 0 : '200px',
      }}
    >
      {suggestions.map((suggestion, index) => (
        <Example key={index}>{suggestion}</Example>
      ))}
    </div>
  );
}

export default function Home() {
  const [started, setStarted] = useState(false);

  const suggestions = [
    "Как получить справку?",
    "Стипендия",
    "График занятий",
    "Как зарегистрироваться на курс?",
    "Как получить справку?",
    "Как получить справку?",
  ];

  return (
    <div className="flex flex-col w-screen min-h-screen items-stretch mt-5">
      {/* Start */}
      <div className="flex w-screen h-[90vh] p-4 items-center relative">
        <Calendar />
        <Line />
        <SideBlock />
        <div className="flex flex-col items-center justify-center p-10 w-2/3 gap-3">
          <p className='text-5xl text-left w-full'><b className="gradient-text">BMSTU-AI</b></p>
          <div className="flex h-14 gap-2 w-full">
            <input
              placeholder="Введите свой вопрос"
              onChange={e => {
                setStarted(e.target.value !== '');
              }}
              className="text-xl bg-white bg-opacity-85 w-full py-2 rounded-full border-2 outline-none px-4 shadow-sm"
            />
            <Button variant="outlined" className="rounded-full px-10 shadow-md">Поиск</Button>

          </div>
          <SearchSuggestions started={started} suggestions={suggestions} />
          <div
            className={`flex w-full gap-2 px-4 transition-all duration-500`}
            style={{
              opacity: started ? 0 : 1,
              maxHeight: started ? 0 : '40px',
            }}
          >
            <Example>Как получить справку?</Example>
            <Example>Стипендия</Example>
            <Example>Как получить справку?</Example>
            <Example>Как получить справку?</Example>
          </div>
        </div>
      </div>
    </div >
  );
}
