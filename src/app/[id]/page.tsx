"use client";

import { useParams } from "next/navigation";
import ActorInfo from "@/components/sections/DetailActor/ActorInfo";
import AccordionInfo from "@/components/sections/DetailActor/AccordionInfo";
import { useEffect, useState } from "react";
import { getActorDetail, getActors } from "@/api/api";

const Detail = () => {
  const [actor, setActor] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const id = params?.id as string;

  useEffect(() => {
    const fetchActor = async () => {
      try {
        const fetchedData = await getActorDetail(id);
        setActor(fetchedData);
      } catch (error) {
        setError("Failed to fetch actor.");
      } finally {
        setLoading(false);
      }
    };

    fetchActor();
  }, []);

  if (!actor) {
    return <div>Actor not found</div>;
  }

  return (
    <div className="myContainer">
      <ActorInfo actor={actor} />
      <AccordionInfo actor={actor} />
    </div>
  );
};

export default Detail;
