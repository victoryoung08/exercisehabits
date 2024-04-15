type ServiceProps = {
  data: {
    heading: string;
    body: string;
  }[];
};
export default function ServiceGrid({ data = [] }: ServiceProps) {
  const services = data;
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
