import { useEffect, useState } from "react";
import ServiceCard from "../../Pages/Services/ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch("services.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);

   
  return (
    <div className="mt-12 mb-12">
      <div className="text-center">
        <p className="text-2xl text-[#FF3811]">Service</p>
        <h2 className="text-5xl font-bold mb-4">Our Service Area</h2>
        <p className="text-lg">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
            {
                services.map(service => <ServiceCard
                     key={service._id}
                     service = {service}
                      ></ServiceCard>)
            }
        </div>
    </div>
  );
};

export default Services;
