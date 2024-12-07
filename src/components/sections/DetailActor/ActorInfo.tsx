function ActorInfo({ actor }: any) {
  return (
    <section className="lg:mt-32 mt-20 pt-10 border-y border-y-[#FFFFFF1A] border-b-0 flex lg:flex-row flex-col lg:items-start items-center lg:gap-[54px] gap-3">
      {/* Image */}
      <img
        // src="/assets/detailActor/actress_1.png"
        src={actor?.picture?.medium || actor?.picture?.original}
        alt="actress"
        className="lg:w-[155px] w-[100px] lg:h-[184px] h-[144px] object-cover rounded-[18px]"
      />

      {/* Info */}
      <div className="flex flex-col justify-between w-full">
        <div className="lg:text-left text-center">
          <h2 className="lg:text-5xl sm:text-2xl text-xl uppercase">
            {actor?.name}
          </h2>
          <h6 className="text-primary heading6 mt-3">
            {actor?.profession?.name}
          </h6>
        </div>

        {/* About */}
        <div className="space-y-8 lg:mt-6 mt-9 lg:text-lg text-base">
          <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
            <span className="text-secondary">Пол:</span>
            <span>{actor?.gender === "M" ? "Мужчина" : "Женщина"}</span>
          </p>
          <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
            <span className="text-secondary">Место проживания:</span>
            <span>
              {actor?.city?.name} {actor?.city?.country?.name}
            </span>
          </p>
          <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
            <span className="text-secondary">Игровой возраст:</span>
            <span>{`От ${actor?.work_age_from} до ${actor?.work_age_to}`}</span>
          </p>
          <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
            <span className="text-secondary">Электронный адрес:</span>
            <span>{actor?.email ? actor?.email : "N/A"}</span>
          </p>
          <p className="lg:pb-0 pb-[11px] lg:border-0 border-b border-b-[#FFFFFF1A] flex flex-col lg:gap-[14px] gap-2">
            <span className="text-secondary">Коротко о себе:</span>
            <span>{actor.description}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ActorInfo;
