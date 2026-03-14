import { AboutSection } from "@/components/about-section";
import { AppointmentForm } from "@/components/appoiment-form";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ServicesSection } from "@/components/services-section";
import { TestimonialsSection } from "@/components/testimonias-section";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <AppointmentForm />
      <Footer />
    </main>
  )
}