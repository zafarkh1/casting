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
    <section className="lg:mt-24 mt-20 pt-10 lg:pb-20 pb-9 border-y border-y-[#FFFFFF1A] border-b-0 flex lg:flex-row flex-col lg:gap-14 gap-3">
      {/* Image */}
      <img
        src="/assets/detailActor/actress_1.png"
        alt="actress"
        className="lg:w-[486px] lg:h-[540px] flex-shrink-0 object-contain rounded-2xl"
      />

      {/* Info */}
      <div className="flex flex-col justify-between">
        <div className="lg:text-left text-center">
          <h2 className="lg:text-5xl sm:text-2xl text-xl uppercase">
            {actor.firstName} {actor.lastName}
          </h2>
          <h6 className="text-primary heading6 lg:mt-4 mt-3">{actor.job}</h6>
        </div>

        {/* About */}
        <div className="space-y-8 lg:mt-auto mt-9">
          <p className="pb-3 border-b border-b-[#FFFFFF1A] flexBetween">
            <span className="text-secondary">Пол:</span>
            <span>{actor.gender}</span>
          </p>
          <p className="pb-3 border-b border-b-[#FFFFFF1A] flexBetween">
            <span className="text-secondary">Место проживания:</span>
            <span>{actor.lives}</span>
          </p>
          <p className="pb-3 border-b border-b-[#FFFFFF1A] flexBetween">
            <span className="text-secondary">Игровой возраст:</span>
            <span>
              {`От ${actor.playingAge.min} до ${actor.playingAge.max}`}
            </span>
          </p>
          <p className="pb-3 border-b border-b-[#FFFFFF1A] flex flex-col lg:gap-[14px] gap-2">
            <span className="text-secondary">Коротко о себе:</span>
            <span>{actor.about}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ActorInfo;
