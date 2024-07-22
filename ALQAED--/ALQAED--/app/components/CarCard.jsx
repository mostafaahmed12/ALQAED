const CarCard = ({ car }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden text-white">
      <img src={car.image} alt={car.name} className="w-full h-48 object-fill" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{car.name}</h3>
        <p className="text-white">{car.description}</p>
        <div className="mt-4">
          <span className="text-white  text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">{car.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
