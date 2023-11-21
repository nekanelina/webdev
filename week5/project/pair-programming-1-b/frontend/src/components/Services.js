import { useState, useEffect } from "react";
import { services } from "../data";
import Service from "./Service";
import Title from "./Title";

const apiUrl = "http://localhost:3001/api/services";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    const fetchServices = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setServicesData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

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
};

export default Services;
