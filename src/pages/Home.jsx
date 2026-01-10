import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import FilterBar from "../components/FilterBar";
import CarsList from "../components/CarsList";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Footer from "../components/Footer";


const Home = () => {
  const [filters, setFilters] = useState({
    search: "",
    city: "",
    price: "",
    brand: "",
  });

  return (
    <>
      <Header />
      <Hero />
      <WhyChooseUs />
      <WhatsAppFloat />
      
      <FilterBar filters={filters} setFilters={setFilters} />
      <CarsList filters={filters} />
       <Footer />
    </>
  );
};

export default Home;
