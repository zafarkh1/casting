const images = [
  {
    id: 1,
    src: "/assets/partners/partners_1.png",
  },
  {
    id: 2,
    src: "/assets/partners/partners_2.png",
  },
  {
    id: 3,
    src: "/assets/partners/partners_3.png",
  },
  {
    id: 4,
    src: "/assets/partners/partners_4.png",
  },
  {
    id: 5,
    src: "/assets/partners/partners_5.png",
  },
];

function Partners() {
  return (
    <section className="pt-5 xl:pb-24 sm:pb-16 pb-8 border-t border-t-[#FFFFFF1A]">
      <h2 className="heading2 uppercase">партнеры и клиенты</h2>
      <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-6 mt-10">
        {images.map((image) => (
          <div
            key={image.id}
            className="lg:py-14 py-10 lg:px-10 px-8 bg-[#33333366] rounded-2xl border border-[#333333] partnerCard"
          >
            <img
              key={image.id}
              src={image.src}
              alt="partner"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;
