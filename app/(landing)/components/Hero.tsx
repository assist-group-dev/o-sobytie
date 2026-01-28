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

      return () => {
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("error", handleError);
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
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[var(--color-cream-light)] min-h-[600px] lg:min-h-[700px]">
      {/* Video Background - full width behind everything */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          className={cn(
            "absolute inset-0 w-full h-full object-cover object-center",
            "transition-opacity duration-1000 ease-out",
            isVideoLoaded ? "opacity-100" : "opacity-0"
          )}
          style={{
            objectPosition: "110% center"
          }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/1799656_Gift_Wrapping_Box_3840x2160.mp4" type="video/mp4" />
        </video>
        
        {/* White overlay on video */}
        <div className="absolute inset-0 bg-[var(--color-cream-light)]/25 z-0" />
      </div>

      {/* Solid opaque background on the left with diagonal cut */}
      <div 
        className="absolute inset-0 bg-[var(--color-cream-light)] z-[1]"
        style={{
          clipPath: "polygon(0 0, 55% 0, 40% 100%, 0 100%)"
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-[2]">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 animate-in">
            О!СОБЫТИЕ — ваша ежемесячная порция "Вау!"
          </h1>
          <p className="text-xl lg:text-2xl text-[var(--foreground)]/60 mb-8 font-light animate-in" style={{ animationDelay: "0.1s" }}>
            Надоела рутина? Подари себе О!Событие — коробку с впечатлением, 
            которое приходит к вам раз в месяц.<br />
            Откройте и скажите "О!"
          </p>
          <div className="flex flex-wrap gap-4 animate-in" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="uppercase tracking-widest text-sm"
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
