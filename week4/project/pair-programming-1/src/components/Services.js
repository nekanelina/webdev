import { services } from "../data";
import { useState } from "react";
import Service from "./Service";
import Title from "./Title";

function Services() {
  const [servicesData, setServicesData] = useState(services);

  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" span="services" />
        <div className="section-center services-center">
          {servicesData.map((service) => (
            <Service key={service.id} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
