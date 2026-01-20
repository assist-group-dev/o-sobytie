"use client";

import { useEffect, useState } from "react";
import { Header } from "./(landing)/components/Header";
import { Hero } from "./(landing)/components/Hero";
import { Cards } from "./(landing)/components/Cards";
import { CTA } from "./(landing)/components/CTA";
import { Footer } from "./(landing)/components/Footer";
import { LoadingOverlay } from "@/ui/components/LoadingOverlay";

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const resetScroll = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        const viewport = document.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
          viewport.scrollTop = 0;
        }
      }
    };

    resetScroll();

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setIsLoaded(true);
        resetScroll();
      }, 300);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const resetScroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        const viewport = document.querySelector('[data-radix-scroll-area-viewport]');
        if (viewport) {
          viewport.scrollTop = 0;
        }
      };
      
      const timeout = setTimeout(resetScroll, 100);
      return () => clearTimeout(timeout);
    }
  }, [isLoaded]);

  return (
    <>
      <LoadingOverlay isLoading={isLoading} />
      <div className="flex min-h-screen flex-col">
        <div
          style={{
            opacity: isLoaded ? 1 : 0,
            animation: isLoaded ? `fadeInDown 0.6s ease-out 0s both` : "none",
          }}
        >
          <Header />
        </div>
        
        <div
          style={{
            opacity: isLoaded ? 1 : 0,
            animation: isLoaded ? `fadeInDown 0.6s ease-out 0.1s both` : "none",
          }}
        >
          <Hero />
        </div>
        
        <div
          style={{
            opacity: isLoaded ? 1 : 0,
            animation: isLoaded ? `fadeInDown 0.6s ease-out 0.2s both` : "none",
          }}
        >
          <Cards />
        </div>
        
        <section
          id="how-it-works"
          className="py-20 bg-[var(--background)]"
          style={{
            opacity: isLoaded ? 1 : 0,
            animation: isLoaded ? `fadeInDown 0.6s ease-out 0.3s both` : "none",
          }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 uppercase tracking-wider text-center">
              Как это работает
            </h2>
          </div>
        </section>
        
        <section
          id="reviews"
          className="py-20 bg-[var(--color-cream-light)]"
          style={{
            opacity: isLoaded ? 1 : 0,
            animation: isLoaded ? `fadeInDown 0.6s ease-out 0.4s both` : "none",
          }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 uppercase tracking-wider text-center">
              Отзывы
            </h2>
          </div>
        </section>
        
        <div
          style={{
            opacity: isLoaded ? 1 : 0,
            animation: isLoaded ? `fadeInDown 0.6s ease-out 0.5s both` : "none",
          }}
        >
          <CTA />
        </div>
        
        <section
          id="faq"
          className="py-20 bg-[var(--background)]"
          style={{
            opacity: isLoaded ? 1 : 0,
            animation: isLoaded ? `fadeInDown 0.6s ease-out 0.6s both` : "none",
          }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 uppercase tracking-wider text-center">
              FAQ
            </h2>
          </div>
        </section>
        
        <div
          style={{
            opacity: isLoaded ? 1 : 0,
            animation: isLoaded ? `fadeInDown 0.6s ease-out 0.7s both` : "none",
          }}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}
