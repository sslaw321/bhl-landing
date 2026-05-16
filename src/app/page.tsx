import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Industries from '@/components/Industries';
import WhyUs from '@/components/WhyUs';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Industries />
      <WhyUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
