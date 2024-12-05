import { useSectionStore } from "@/components/utils/zustand/useSectionInfoStore";

const photos = [
  { id: 1, src: "/assets/detailActor/actress_2.png" },
  { id: 2, src: "/assets/detailActor/actress_3.png" },
  { id: 3, src: "/assets/detailActor/actress_4.png" },
  { id: 4, src: "/assets/detailActor/actress_5.png" },
  { id: 5, src: "/assets/detailActor/actress_6.png" },
  { id: 6, src: "/assets/detailActor/actress_7.png" },
];

const PhotosInfo = ({ actor }: any) => {
  const { openSection, toggleSection } = useSectionStore();

  return (
    <div className="py-3 cursor-pointer">
      <div className="flexBetween" onClick={() => toggleSection("Фотографии")}>
        <h3
          className={`heading3 text-secondary transitionAcc ${
            openSection === "Фотографии" ? "text-white" : ""
          }`}
        >
          Фотографии
        </h3>
        <span className="lg:text-3xl text-2xl lg:pr-4 transition-all duration-500">
          {openSection === "Фотографии" ? "-" : "+"}
        </span>
      </div>

      <div
        className={`overflow-hidden transitionAcc ${
          openSection === "Фотографии" ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div className="lg:mt-10 lg:mb-7 my-4 grid md:grid-cols-3 grid-cols-2 lg:gap-x-7 lg:gap-y-8 gap-6">
          {photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.src}
              alt="photo"
              className="w-full h-full object-contain"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotosInfo;
