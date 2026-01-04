type Coffee = {
  title: string;
  subtitle: string;
  image: string;
};

type CoffeeCardProps = {
  coffeeData: Coffee;
  showModal?: () => void;
};

const CoffeeCard = ({ coffeeData, showModal }: CoffeeCardProps) => {
  return (
    <div key={coffeeData.title} onClick={showModal}>
      <div className="cursor-pointer hover:scale-105 hover:opacity-90 transition">
        <div className="">
          <img
            src={coffeeData.image}
            alt={coffeeData.title}
            className="object-cover rounded-xl max-h-50 overflow-hidden w-full mb-2"
          />
        </div>
        <div className="text-xl font-bold text-stone-800">
          {coffeeData.title}
        </div>
        <div className="text-stone-700">{coffeeData.subtitle}</div>
      </div>
    </div>
  );
};

export default CoffeeCard;
