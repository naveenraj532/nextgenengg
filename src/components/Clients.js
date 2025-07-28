import clientlogos from "../assets/images/softwares.png";

export const Clients = () => {
  return (
    <div className="py-10">
      <h1 className="font-inter font-bold text-black text-4xl text-center pb-9">
        Softwares We Use
      </h1>
      <div className="slider overflow-hidden relative">
        <div className="slide-track flex items-center animate-scroll">
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