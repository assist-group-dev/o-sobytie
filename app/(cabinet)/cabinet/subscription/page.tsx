"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/ui/components/Button";
import { Card } from "@/ui/components/Card";
import { Modal } from "@/ui/components/Modal";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

interface Tariff {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  price: string;
  image: string;
  features: string[];
  details: string[];
  benefitTag?: string;
}

const TARIFFS: Tariff[] = [
  {
    id: "1-month",
    title: "1 месяц",
    description: "Попробуйте подписку на месяц. Идеально для первого знакомства с нашими впечатлениями.",
    fullDescription: "Подписка на 1 месяц — отличный способ попробовать наши коробки с впечатлениями. Вы получите одну коробку с тщательно отобранным содержимым, которое поможет вам открыть что-то новое и получить максимум удовольствия.",
    price: "от 2 990 ₽",
    image: "/boxes/Box_2.jpg",
    features: ["1 месяц", "Гибкость", "Пробный период"],
    details: [
      "Коробка с готовым впечатлением",
      "Материалы для медитации и релаксации",
      "Книги и арт-наборы для творчества",
      "Сертификаты на спа-процедуры",
      "Персональные рекомендации по развитию",
    ],
  },
  {
    id: "3-months",
    title: "3 месяца",
    description: "Оформите подписку на 3 месяца и получите выгоду. Больше впечатлений, больше экономии.",
    fullDescription: "Подписка на 3 месяца — оптимальный выбор для тех, кто хочет получить больше впечатлений и сэкономить. Каждый месяц вас ждут уникальные коробки с тщательно отобранным содержимым, которое поможет вам открыть что-то новое и получить максимум удовольствия.",
    price: "от 2 690 ₽/мес",
    image: "/boxes/Box_1.jpg",
    features: ["3 месяца", "Экономия", "Больше впечатлений"],
    details: [
      "Коробка с готовым впечатлением каждый месяц",
      "Материалы для медитации и релаксации",
      "Книги и арт-наборы для творчества",
      "Сертификаты на спа-процедуры",
      "Персональные рекомендации по развитию",
    ],
    benefitTag: "Экономия 10%",
  },
  {
    id: "6-months",
    title: "6 месяцев",
    description: "Максимальная выгода при оформлении на полгода. Больше месяцев — больше экономии.",
    fullDescription: "Подписка на 6 месяцев — лучший выбор для тех, кто ценит выгоду и хочет получить максимум впечатлений. Каждый месяц вас ждут уникальные коробки с тщательно отобранным содержимым премиум-класса, которое поможет вам открыть что-то новое и получить максимум удовольствия.",
    price: "от 2 390 ₽/мес",
    image: "/boxes/Box_3.jpg",
    features: ["6 месяцев", "Максимальная выгода", "Премиум впечатления"],
    details: [
      "Коробка с готовым впечатлением каждый месяц",
      "Материалы для медитации и релаксации",
      "Книги и арт-наборы для творчества",
      "Сертификаты на спа-процедуры",
      "Персональные рекомендации по развитию",
    ],
    benefitTag: "Экономия 20%",
  },
];

export default function SubscriptionPage() {
  const [selectedTariff, setSelectedTariff] = useState<Tariff | null>(null);

  return (
    <div className="space-y-8 p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {TARIFFS.map((tariff) => (
          <Card
            key={tariff.id}
            className={cn(
              "group cursor-pointer overflow-hidden flex flex-col"
            )}
            onClick={() => setSelectedTariff(tariff)}
          >
            <div className="relative aspect-square mb-4 overflow-hidden bg-[var(--color-cream)]/30 dark:bg-[var(--color-cream)]/20">
              <Image
                src={tariff.image}
                alt={tariff.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {tariff.benefitTag && (
                <div className="absolute top-4 left-4">
                  <span className="bg-[var(--color-golden)] text-black text-xs font-bold px-2 py-1 uppercase tracking-wider">
                    {tariff.benefitTag}
                  </span>
                </div>
              )}
            </div>

            <div className="flex-1 flex flex-col p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold uppercase">{tariff.title}</h3>
                <span className="text-base font-medium text-[var(--color-golden)]">{tariff.price}</span>
              </div>

              <p className="text-base text-[var(--foreground)]/70 line-clamp-2 flex-1">
                {tariff.description}
              </p>

              <div className="pt-2 mt-auto">
                <Button
                  variant="text"
                  className="group/btn p-0 flex items-center gap-2 text-sm uppercase font-bold tracking-wider hover:text-[var(--color-golden)]"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTariff(tariff);
                  }}
                >
                  Подробнее <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={selectedTariff !== null}
        onClose={() => setSelectedTariff(null)}
        className="p-0 max-w-6xl w-full mx-2 sm:mx-4"
      >
        {selectedTariff && (
          <div className="flex flex-col lg:grid lg:grid-cols-3">
            <div className="relative h-[250px] sm:h-[300px] lg:hidden order-1">
              <div className="relative h-full w-full overflow-hidden bg-[var(--color-cream)]/30 dark:bg-[var(--color-cream)]/20">
                <Image
                  src={selectedTariff.image}
                  alt={selectedTariff.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8 flex flex-col lg:col-span-1 order-2">
              <div className="mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <h2 className="text-2xl sm:text-3xl font-bold uppercase">{selectedTariff.title}</h2>
                  <span className="text-lg sm:text-xl font-bold text-[var(--color-golden)] whitespace-nowrap">{selectedTariff.price}</span>
                </div>

                <p className="text-base sm:text-lg text-[var(--foreground)]/80 mb-4 sm:mb-6">{selectedTariff.fullDescription}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 border-t border-[var(--color-cream)]/30 dark:border-[var(--color-cream)]/20 mt-auto">
                <Button 
                  size="lg" 
                  className="uppercase tracking-widest w-full sm:flex-1 sm:min-w-[200px] text-sm sm:text-base"
                >
                  Оформить подписку
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setSelectedTariff(null)}
                  className="uppercase tracking-widest w-full sm:w-auto text-sm sm:text-base"
                >
                  Закрыть
                </Button>
              </div>
            </div>

            <div className="hidden lg:block relative h-full min-h-[500px] p-8 lg:col-span-2 order-3">
              <div className="relative h-full w-full overflow-hidden bg-[var(--color-cream)]/30 dark:bg-[var(--color-cream)]/20">
                <Image
                  src={selectedTariff.image}
                  alt={selectedTariff.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}

