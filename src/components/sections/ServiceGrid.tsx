export default function ServiceGrid() {
  const services = [
    {
      heading: "Weight Loss and Fitness",
      body: "Increase your activity and improve your weight with our easy exercise guidance.",
    },
    {
      heading: "Exercise for Independnce and Balance",
      body: "We'll develop a program to help you feel more balanced whether on your feet or in a wheelchair.",
    },
    {
      heading: "Muscle and Joint Strength",
      body: "Develop your strength to support whatever you need to do.",
    },
    {
      heading: "Neurological Rehabilitation",
      body: "Improve your coordination, strength and function to help you do more",
    },
    {
      heading: "Structured and Science-backed",
      body: "We stay up to date with the latest exercise research so you can be sure to be getting the greatest and latest therapy.",
    },
  ];
  return (
    <section className="section-padding flex flex-col gap-8">
      <div className="text-center">
        <h2>NDIS Exercise Physiology Services</h2>
        <p>You focused and NDIS Specialised</p>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {services.map((service) => (
          <div
            className="w-full flex flex-col gap-2 border-[1.2px] border-grah-200 p-4 rounded-xl hover:bg-primary hover:text-white hover:scale-[105%] transition-all"
            key={service.heading}
          >
            <h4>{service.heading}</h4>
            <p>{service.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
