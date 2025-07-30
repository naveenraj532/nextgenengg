import clientlogos from "../assets/images/softwares.png";
export const Clients = () => {
  return (
    <div className="bg-gradient-to-br from-[#0c2020] to-[#163232] py-16 px-4">
      <h1 className="font-inter font-bold text-white text-2xl sm:text-3xl md:text-4xl text-center pb-9">
        Softwares We Use
      </h1>

      <div className="slider overflow-hidden relative">
        <div className="slide-track flex items-center">
          <img
            src={clientlogos}
            alt="logos"
            className="w-50 h-100 object-cover"
          />
          <img
            src={clientlogos}
            alt="logos"
            className="w-50 h-100 object-cover"
          />
        </div>
      </div>
    </div>
  );
};