"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/ui/components/Button";
import { cn } from "@/utils/cn";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleCanPlay = () => {
        setIsVideoLoaded(true);
      video.play().catch(() => {
        // Автовоспроизведение может быть заблокировано браузером
      });
      };

      const handleLoadedData = () => {
        setIsVideoLoaded(true);
      };

      const handleError = () => {
        console.error("Ошибка загрузки видео");
        setIsVideoLoaded(true);
      };

      if (video.readyState >= 3) {
        setIsVideoLoaded(true);
        video.play().catch(() => {});
      } else {
        video.addEventListener("canplay", handleCanPlay, { once: true });
        video.addEventListener("loadeddata", handleLoadedData, { once: true });
        video.addEventListener("error", handleError, { once: true });
      }

      const updateVideoPosition = () => {
        if (window.innerWidth >= 1024) {
          video.style.objectPosition = "110% center";
        } else {
          video.style.objectPosition = "center center";
        }
      };

      updateVideoPosition();
      window.addEventListener("resize", updateVideoPosition);

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("error", handleError);
        window.removeEventListener("resize", updateVideoPosition);
      };
    }
  }, []);

  const handleScrollToTariffs = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("tariffs");
    if (element) {
      const headerHeight = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative py-10 sm:py-16 lg:py-32 overflow-hidden bg-[var(--color-cream-light)] min-h-[400px] sm:min-h-[600px] lg:min-h-[700px]">
      {/* Video Background - full width behind everything */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 w-full h-full object-cover object-center",
            "transition-opacity duration-1000 ease-out",
            isVideoLoaded ? "opacity-100" : "opacity-0"
          )}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/1799656_Gift_Wrapping_Box_3840x2160.mp4" type="video/mp4" />
        </video>
        
        {/* White overlay on video - более плотный на мобильных */}
        <div className="absolute inset-0 bg-[var(--color-cream-light)]/20 sm:bg-[var(--color-cream-light)]/30 lg:bg-[var(--color-cream-light)]/25 z-0" />
      </div>

      {/* Solid opaque background on the left with diagonal cut - скрыт на мобильных */}
      <div 
        className="hidden lg:block absolute inset-0 bg-[var(--color-cream-light)] z-[1]"
        style={{
          clipPath: "polygon(0 0, 55% 0, 40% 100%, 0 100%)"
        }}
      />

      {/* Полупрозрачный фон для мобильных */}
      <div className="lg:hidden absolute inset-0 bg-[var(--color-cream-light)]/70 z-[1]" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-[2]">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 animate-in">
            О!СОБЫТИЕ — ваша ежемесячная порция "Вау!"
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl text-[var(--foreground)]/70 sm:text-[var(--foreground)]/60 mb-6 sm:mb-8 font-light animate-in leading-relaxed" style={{ animationDelay: "0.1s" }}>
            Надоела рутина? Подари себе О!Событие — коробку с впечатлением, 
            которое приходит к вам раз в месяц.
            <span className="hidden sm:inline"><br />Откройте и скажите "О!"</span>
            <span className="sm:hidden"> Откройте и скажите "О!"</span>
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 animate-in" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="uppercase tracking-widest text-xs sm:text-sm w-full sm:w-auto"
              onClick={handleScrollToTariffs}
            >
              Выбрать тариф
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
