import bannerImg from "../../../assets/image/Banner.png";

const Banner = () => {
  return (
    <div className="flex  flex-col-reverse md:flex-row mb-10">
      <div className="flex-1">
        <div className="space-y-4  ">
          <h2 className="text-3xl font-bold">
            Сервисный центер <br />{" "}
            <span className="text-[#0391D3]">INDESIT</span> в Алматы
          </h2>
          <p className="text-[#000000] font-semibold">
            Обходитесь без лишних затрат
          </p>
          <button className=" shadow-2xl py-3 px-10 font-semibold  rounded-full text-white bg-[#0391D3]">
            Вызвать мастера
          </button>
          <p>
            <span className="text-red-700 font-bold">*</span> Выезд и
            диагностика бесплатно <br /> при условии ремонта
          </p>
        </div>
        {/* ₸ диагностика */}
        <div className="stats stats-vertical lg:stats-horizontal  md:mt-20">
        <div className="stat flex">
            <div className="stat-value">0</div>
            <div className="stat-desc text-sm"><span className="text-xl text-black">день </span> <br /> диагностика</div>
          </div>
          <div className="stat flex">
            <div className="stat-value">1</div>
            <div className="stat-desc text-sm"><span className="text-xl text-black">день </span> <br /> диагностика</div>
          </div>
          <div className="stat flex">
            <div className="stat-value">3</div>
            <div className="stat-desc text-xl"><span className="text-xl text-black">день </span> <br /> диагностика</div>
          </div>
        </div>
      </div>
      {/* img */}
      <div className="flex-1 border bg-[#3CA7DB]  rounded-tl-full pl-10 p-5">
        <img className="md:w-[630px]" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
