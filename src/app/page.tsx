import Hero        from '@/Components/Hero';
import VideoBanner from '@/Components/VideoBanner';
import Services    from '@/Components/Services';
import ValueAddedServices from '@/Components/ValueAddedServices';
import WhyQualister from '@/Components/WhyQualister';
import ClientTestimonials from '@/Components/ClientTestimonials';
import Contact from '@/Components/Contact';
import Footer from '@/Components/Footer';

export default function Home() {
  return (
    <main>
      <section id="inicio">
        <Hero />
      </section>
      <section id="video">
        <VideoBanner />
      </section>
      <section id="servicios">
        <Services />
      </section>
      <section id="valor-anadido">
        <ValueAddedServices />
      </section>
      <section id="por-que-qualister">
        <WhyQualister />
      </section>
      <section id="clientes">
        <ClientTestimonials />
      </section>
      <section id="contacto">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}