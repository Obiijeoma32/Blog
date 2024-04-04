import culture1 from "./Images/culture1.png";
import culture2 from "./Images/culture2.png";
import culture3 from "./Images/culture3.png";

function Place() {
  return (
    <>
      <div className="flex   w-[1230px] overflow-x-scroll  justify-between   items-center gap-[40px]">
        <div className="flex flex-col w-[450px]  h-fit justify-between items-start">
          <img src={culture1} className="w-full" alt="Culture" />
          <div className="px-[17px] italic text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight w-full py-[19px]">A cultural snapshot of a vibrant neighborhood, with colorful street markets, local art installations.</div>
        </div>
        <div className="flex flex-col w-[450px]  h-fit justify-between items-start">
          <img src={culture2} className="w-full" alt="Culture" />
          <div className="px-[17px] italic text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight w-full py-[19px]">A panoramic shot of a lively cityscape, showcasing iconic landmarks and the energy of urban life.</div>
        </div>
        <div className="flex flex-col w-[450px]  h-fit justify-between items-start">
          <img src={culture3} className="w-full" alt="Culture" />
          <div className="px-[17px] italic text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight w-full py-[19px]">
            A tranquil image of a nature retreat, featuring lush greenery, winding trails, and a peaceful atmosphere.
          </div>
        </div>
        <div className="flex flex-col w-[450px]  h-fit justify-between items-start">
          <img src={culture1} className="w-full" alt="Culture" />
          <div className="px-[17px] italic text-zinc-800 text-sm font-normal font-['Roboto'] leading-[25px] tracking-tight w-full py-[19px]">A cultural snapshot of a vibrant neighborhood, with colorful street markets, local art installations.</div>
        </div>
      </div>
    </>
  );
}

export default Place;
