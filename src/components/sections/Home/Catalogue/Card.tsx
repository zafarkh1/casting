import Button from "@/components/Button";
import { IconArrowTopRight } from "@/components/icons/icons";
import Link from "next/link";
import { useState } from "react";

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

interface CardProps {
  filteredActors: Actor[];
}

const Card: React.FC<CardProps> = ({ filteredActors }) => {
  const [visibleActors, setVisibleActors] = useState(8);
  const [loading, setLoading] = useState(false);

  const showMoreActors = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleActors((prev) => prev + 8);
      setLoading(false);
    }, 1000);
  };

  const showLessActors = () => {
    setVisibleActors(8);
  };

  return (
    <>
      {/* Cards */}
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 xl:gap-10 sm:gap-8 gap-6 xl:py-14 sm:py-12 py-8 border-b border-y-[#FFFFFF1A]">
        {filteredActors.slice(0, visibleActors).map((actor) => (
          <Link key={actor.id} href={`/${actor.id}`}>
            <div className="cursor-pointer">
              <img
                src={actor.image}
                alt={`${actor.firstName} ${actor.lastName}`}
              />
              <h5 className="heading5 xl:mt-5 sm:mt-4 mt-3 xl:mb-3 mb-1">
                {actor.firstName} {actor.lastName}
              </h5>
              <p className="text-secondary lg:text-base sm:text-sm text-xs">
                {actor.job}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Show more/less button */}
      <div className="py-6 lg:border-b lg:border-y-[#FFFFFF1A] flexCenter">
        {visibleActors < filteredActors.length ? (
          <Button
            className="flexCenter gap-3 group myBtn hover:bg-primary hover:border-0"
            onClick={showMoreActors}
          >
            <span>{loading ? "Загрузка ..." : "Смотреть больше"}</span>
            <span className="bg-primary rounded-full p-[6px] transition-opacity duration-300 group-hover:border group-hover:border-white">
              <IconArrowTopRight className="size-3 fill-white" />
            </span>
          </Button>
        ) : (
          <Button
            className="flexCenter gap-3 group myBtn hover:bg-primary hover:border-0"
            onClick={showLessActors}
          >
            <span>Смотреть меньше</span>
            <span className="bg-primary rounded-full p-[6px] transition-opacity duration-300 group-hover:border group-hover:border-white">
              <IconArrowTopRight className="size-3 fill-white" />
            </span>
          </Button>
        )}
      </div>
    </>
  );
};

export default Card;
