import Image from "next/image";

function MissionCard({ item }: any) {
  return (
    <div className="bg-[#F1F5FD] p-6 lg:p-4 xl:p-6 rounded-xl ">
      <div className="flex items-center gap-3 mb-3">
        <Image src={item.icon} alt={item.title} width={20} height={20} />
        <h3 className="text-secondHeaderColor font-semibold text-base lg:text-lg">
          {item.title}
        </h3>
      </div>
      <p className="text-pragraphColor text-base leading-[160%]">
        {item.description}
      </p>
    </div>
  );
}

export default MissionCard;
