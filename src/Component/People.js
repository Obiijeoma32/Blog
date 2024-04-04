import ada from "./Images/ada.png";
import kwame from "./Images/kwame.png";
import ada2 from "./Images/ada2.png";
function People() {
  return (
    <>
      {/* Large Screens */}
      <div className=" 13inch:flex 3xxS:hidden flex-col w-[85%] justify-between  items-start">
        <div className="flex w-full overflow-x-scroll justify-between items-center gap-[40px]">
          <div className="pt-10 bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
            <img src={ada} alt="people" />
            <div className="px-8 py-7  bg-white rounded-b-[20px] flex-col w-full justify-between items-start gap-[15px] flex">
              <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Adaku Nwosu</div>
              <div className="text-stone-500 text-xl font-normal font-['Montserrat'] tracking-tight">Entrepreneur</div>

              <div className="w-[374px] text-neutral-500 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">
                Adaku is a visionary entrepreneur dedicated to sustainable fashion. Through her brand, she promotes eco-friendly practices and empowers local artisans.
              </div>
            </div>
          </div>
          <div className="pt-10 bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
            <img src={kwame} alt="people" />
            <div className="px-8 py-7 bg-white rounded-b-[20px] flex-col w-full justify-between items-start gap-[15px] flex">
              <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Kwame Osei</div>
              <div className="text-stone-500 text-xl font-normal font-['Montserrat'] tracking-tight">Tech Innovator</div>

              <div className="w-[380px] text-neutral-500 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">
                Kwame is a leading figure in the tech industry, pioneering innovations that drive positive change. His work focuses on leveraging technology for social impact.{" "}
              </div>
            </div>
          </div>
          <div className="pt-10 bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
            <img src={ada2} alt="people" />
            <div className="px-8 py-7 bg-white rounded-b-[20px] flex-col w-full justify-between items-start gap-[15px] flex">
              <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Adaku Nwosu</div>
              <div className="text-stone-500 text-xl font-normal font-['Montserrat'] tracking-tight">Entrepreneur</div>

              <div className="w-[374px] text-neutral-500 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">
                Adaku is a visionary entrepreneur dedicated to sustainable fashion. Through her brand, she promotes eco-friendly practices and empowers local artisans.
              </div>
            </div>
          </div>
          <div className="pt-10 bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
            <img src={ada} alt="people" />
            <div className="px-8 py-7 bg-white rounded-b-[20px] flex-col w-full justify-between items-start gap-[15px] flex">
              <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Adaku Nwosu</div>
              <div className="text-stone-500 text-xl font-normal font-['Montserrat'] tracking-tight">Entrepreneur</div>

              <div className="w-[374px] text-neutral-500 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">
                Adaku is a visionary entrepreneur dedicated to sustainable fashion. Through her brand, she promotes eco-friendly practices and empowers local artisans.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Small Screen */}
      <div className=" 13inch:hidden 3xxS:flex flex-col w-full justify-between  gap-[70px] items-start">
        <div className="flex w-[85%] overflow-x-scroll justify-between items-center gap-[40px]">
          <div className="pt-10 bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
            <img src={ada} alt="people" />
            <div className="px-8 py-7  bg-white rounded-b-[20px] flex-col w-full justify-between items-start gap-[15px] flex">
              <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Adaku Nwosu</div>
              <div className="text-stone-500 text-xl font-normal font-['Montserrat'] tracking-tight">Entrepreneur</div>

              <div className="w-[374px] text-neutral-500 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">
                Adaku is a visionary entrepreneur dedicated to sustainable fashion. Through her brand, she promotes eco-friendly practices and empowers local artisans.
              </div>
            </div>
          </div>
          <div className="pt-10 bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
            <img src={kwame} alt="people" />
            <div className="px-8 py-7 bg-white rounded-b-[20px] flex-col w-full justify-between items-start gap-[15px] flex">
              <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Kwame Osei</div>
              <div className="text-stone-500 text-xl font-normal font-['Montserrat'] tracking-tight">Tech Innovator</div>

              <div className="w-[380px] text-neutral-500 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">
                Kwame is a leading figure in the tech industry, pioneering innovations that drive positive change. His work focuses on leveraging technology for social impact.{" "}
              </div>
            </div>
          </div>
          <div className="pt-10 bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
            <img src={ada2} alt="people" />
            <div className="px-8 py-7 bg-white rounded-b-[20px] flex-col w-full justify-between items-start gap-[15px] flex">
              <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Adaku Nwosu</div>
              <div className="text-stone-500 text-xl font-normal font-['Montserrat'] tracking-tight">Entrepreneur</div>

              <div className="w-[374px] text-neutral-500 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">
                Adaku is a visionary entrepreneur dedicated to sustainable fashion. Through her brand, she promotes eco-friendly practices and empowers local artisans.
              </div>
            </div>
          </div>
          <div className="pt-10 bg-sky-950 bg-opacity-10 rounded-[20px] flex-col justify-start items-center inline-flex">
            <img src={ada} alt="people" />
            <div className="px-8 py-7 bg-white rounded-b-[20px] flex-col w-full justify-between items-start gap-[15px] flex">
              <div className="text-sky-950 text-[34px] font-semibold font-['Montserrat'] tracking-tight">Adaku Nwosu</div>
              <div className="text-stone-500 text-xl font-normal font-['Montserrat'] tracking-tight">Entrepreneur</div>

              <div className="w-[374px] text-neutral-500 text-base font-normal font-['Roboto'] leading-[25px] tracking-tight">
                Adaku is a visionary entrepreneur dedicated to sustainable fashion. Through her brand, she promotes eco-friendly practices and empowers local artisans.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default People;
