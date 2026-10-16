'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BeforeAfter from '@/components/BeforeAfter';
import Services from '@/components/Services';
import Calculator from '@/components/Calculator';
import Portfolio from '@/components/Portfolio';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import ZoneIntervention from '@/components/ZoneIntervention';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingCallBar from '@/components/FloatingCallBar';
import QuoteModal from '@/components/QuoteModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);

  const handleOpenDevis = (serviceName?: string) => {
    setModalService(serviceName);
    setModalOpen(true);
  };

  const handleCloseDevis = () => {
    setModalOpen(false);
    setModalService(undefined);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Header with DA phone pill */}
      <Header onOpenDevis={() => handleOpenDevis()} />

      {/* Hero Section */}
      <Hero onOpenDevis={() => handleOpenDevis()} />

      {/* Interactive Before / After transformation */}
      <BeforeAfter />

      {/* Tous corps d'état services */}
      <Services onSelectService={(service) => handleOpenDevis(service)} />

      {/* Real-time Project Simulator */}
      <Calculator onDirectQuote={(data) => console.log('Estimation reçue:', data)} />

      {/* High-end Portfolio */}
      <Portfolio />

      {/* 4-Step Methodology */}
      <Process />

      {/* Verified Reviews */}
      <Testimonials />

      {/* Geographic Coverage */}
      <ZoneIntervention />

      {/* Contact & Quotation Section */}
      <ContactSection />

      {/* Footer matching exact DA */}
      <Footer />

      {/* Mobile Floating Call Pill */}
      <FloatingCallBar onOpenDevis={() => handleOpenDevis()} />

      {/* Quick Quote Modal */}
      <QuoteModal
        isOpen={modalOpen}
        onClose={handleCloseDevis}
        initialService={modalService}
      />
    </main>
  );
}
