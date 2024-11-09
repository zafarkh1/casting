// Define the Actor type once at the top
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
  console.log(actor);

  return (
    <section className="min-h-screen lg:mt-24 mt-20 pt-10 pb-20 border-y border-y-[#FFFFFF1A] border-b-0 flex lg:gap-14">
      <div>
        <img
          src="/assets/detailActor/actress_1.png"
          alt="actress"
          className=""
        />
      </div>
      <div>
        <h2 className="lg:text-5xl sm:text-2xl text-xl">
          {actor.firstName} {actor.lastName}
        </h2>
        <h6 className="text-primary mt-4">{actor.job}</h6>
      </div>
    </section>
  );
}

export default ActorInfo;
