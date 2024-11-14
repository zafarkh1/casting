type Actor = {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  lives: string;
  playingAge: { min: number; max: number };
  about: string;
  image: string;
  job: string;
  category: string;
};

function ActorInfo({ actor }: { actor: Actor }) {
  return (
    <section className="lg:mt-24 mt-20 pt-10 border-y border-y-[#FFFFFF1A] border-b-0 flex lg:flex-row flex-col lg:items-start items-center lg:gap-[54px] gap-3">
      {/* Image */}
      <img
        src="/assets/detailActor/actress_1.png"
        alt="actress"
        className="lg:w-[155px] w-[100px] lg:h-[184px] h-[144px] object-cover rounded-[18px]"
      />

      {/* Info */}
      <div className="flex flex-col justify-between">
        <div className="lg:text-left text-center">
          <h2 className="lg:text-5xl sm:text-2xl text-xl uppercase">
            {actor.firstName} {actor.lastName}
          </h2>
          <h6 className="text-primary heading6 mt-3">{actor.job}</h6>
        </div>

        {/* About */}
        <div className="space-y-8 lg:mt-6 mt-9 lg:text-lg text-base">
          <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
            <span className="text-secondary">Пол:</span>
            <span>{actor.gender}</span>
          </p>
          <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
            <span className="text-secondary">Место проживания:</span>
            <span>{actor.lives}</span>
          </p>
          <p className="pb-[11px] border-b border-b-[#FFFFFF1A] flexBetween">
            <span className="text-secondary">Игровой возраст:</span>
            <span>
              {`От ${actor.playingAge.min} до ${actor.playingAge.max}`}
            </span>
          </p>
          <p className="lg:pb-0 pb-[11px] lg:border-0 border-b border-b-[#FFFFFF1A] flex flex-col lg:gap-[14px] gap-2">
            <span className="text-secondary">Коротко о себе:</span>
            <span>{actor.about}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ActorInfo;
