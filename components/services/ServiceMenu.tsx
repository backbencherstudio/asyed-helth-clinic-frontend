import { categoysubItems } from "@/demoAPI/serviceMenu";



const ServiceMenu = () => {
  return (
    <div className="max-w-[89.5rem]  mx-auto p-6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
      {Object.entries(categoysubItems).map(([category, links]) => (
        <div key={category}>
          <h3 className="font-semibold text-xl text-[#1D1F2C] mb-3">{category}</h3>
          <ul className="space-y-2">
            {links.map((item) => (
              <li key={item.path}>
                <a href={`/services/${item.path}`} className="text-[#1D1F2C] text-base hover:text-seconderyColor transition">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServiceMenu;
