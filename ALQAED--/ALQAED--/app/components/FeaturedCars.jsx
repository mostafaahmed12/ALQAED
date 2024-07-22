import CarCard from './CarCard';

const FeaturedCars = () => {
  const cars = [
    {
      name: "Daewoo Nexia ",
      description: "A high-performance supercar with a twin-turbo V8 engine.",
      price: "$280,000",
      image: "/images/car1.jpg",
    },
    {
      name: "Isuzu D-Max Double Cab",
      description: "A stunning sports car with a naturally aspirated V10 engine.",
      price: "$320,000",
      image: "/images/car2.jpg",
    },
    {
      name: "Seat Leon Linea ",
      description: "An iconic sports car with a turbocharged flat-six engine.",
      price: "$140,000",
      image: "/images/car3.jpg",
    },
    {
      name: "Peugeot",
      description: "An iconic sports car with a turbocharged flat-six engine.",
      price: "$170,000",
      image: "/images/car4.jpg",
    },
    {
      name: " Peugeot",
      description: "An iconic sports car with a turbocharged flat-six engine.",
      price: "$150,000",
      image: "/images/car5.jpg",
    },
    {
      name: "Lifan 620 ",
      description: "An iconic sports car with a turbocharged flat-six engine.",
      price: "$200,000",
      image: "/images/car6.jpg",
    },
  ];

  return (
    <section id="featured-cars" className="py-16 ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">ALQAED-القائد Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;
