import Header from "./Header";
import people1 from "./Images/image 7.png";
import people2 from "./Images/image 8.png";
import people3 from "./Images/image 2.png";
import Section from "./Section";
import TopArticles from "./TopArticles";
import Individuals from "./Individuals";
import Innovation from "./Innovation";
import Culture from "./Culture";
import Explore from "./Explore";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
// import People from "./People";
// import Place from "./Place";
// import Business from "./Business";
// import Inn from "./Inn";

function HomePage() {
  return (
    <>
      <Header />
      <div className="  mt-[80px] w-full flex flex-col items-center justify-center ">
        {/* Large screens */}
        <div className="3xxS:hidden 13inch:flex w-[90%] 4xS:w-[75%] h-[551px]  gap-[90px] flex justify-between items-center ">
          <div className="flex-col justify-center items-start gap-5 inline-flex">
            <div className="w-[680px]  text-[64px] font-semibold font-montserrat leading-[85px] tracking-wide ">
              <span className="text-sky-950 ">Discover the Extraordinary: </span>
              <span className="text-yellow-400 ">The Best of Us</span>
            </div>
            <div className="w-[606px] text-neutral-500 text-2xl font-normal font-roboto leading-10 tracking-tight">
              Explore inspiring stories of people, businesses, and innovations originating from Africa and the diaspora. Join us on a journey celebrating excellence, diversity, and success.
            </div>
          </div>
          <div className="flex flex-col justify-between items-center gap-[10px]">
            <div className="flex justify-between items-center gap-[10px]">
              <img src={people1} alt="People" />
              <img src={people2} alt="People" />
            </div>
            <img src={people3} alt="People" />
          </div>
        </div>
        {/* Small screens */}
        <div className=" 3xxS:flex 13inch:hidden mt-[50px] w-full flex justify-center ">
          <div className="flex-col w-[85%] justify-center items-start gap-5 flex">
            <div className="text-[50px] w-full font-semibold font-montserrat leading-[65px] tracking-wide">
              <span className="text-sky-950 ">Discover the Extraordinary: </span>
              <span className="text-yellow-400 ">The Best of Us</span>
            </div>
            <div className=" text-neutral-500 text-2xl font-normal font-roboto leading-10 tracking-tight">
              Explore inspiring stories of people, businesses, and innovations originating from Africa and the diaspora. Join us on a journey celebrating excellence, diversity, and success.
            </div>
            <div className="flex mt-[40px] w-full flex-col justify-between items-center gap-[10px]">
              <div className="flex justify-between w-full items-center gap-[10px]">
                <img className="w-[50%]" src={people1} alt="People" />
                <img className="w-[50%]" src={people2} alt="People" />
              </div>
              <div className="w-full">
                <img className="w-full" src={people3} alt="People" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Space Nav Page */}
      <div className="w-full    mt-12  flex-col justify-start items-center flex">
        <Section>{[<TopArticles />]}</Section>
        <Individuals />
        <Innovation />
        <Culture />
        <Explore />
        <AboutUs />
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
