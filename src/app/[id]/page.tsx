"use client";

import { useParams } from "next/navigation";
import { actors } from "@/api/data";
import ActorInfo from "@/components/sections/DetailActor/ActorInfo";

// Define the Actor type if it's not already defined
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

const Detail = () => {
  const params = useParams();
  const id = params?.id as string;

  const actor = actors.find((actor: Actor) => actor.id === id);

  if (!actor) {
    return <div>Actor not found</div>;
  }

  return (
    <div className="myContainer">
      <ActorInfo actor={actor} />
    </div>
  );
};

export default Detail;
