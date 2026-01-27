"use client";

import { Card } from "@/ui/components/Card";
import { Button } from "@/ui/components/Button";
import { User, Package, Calendar, LogOut, Mail } from "lucide-react";
import { cn } from "@/utils/cn";

export default function CabinetPage() {
  const user = {
    name: "Иван Иванов",
    email: "ivan@example.com",
  };

  const subscription = {
    title: "Премиум",
    price: "4 990 ₽/мес",
    status: "Активна",
    nextPayment: "15.03.2025",
  };

  const upcomingEvent = {
    deliveryDate: "10.03.2025",
    deliveryTime: "14:00",
    status: "В пути",
  };

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <div className="space-y-8 p-8">
      <div className="flex flex-col gap-0 max-w-2xl">
        <Card className="p-6">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-14 h-14 rounded-full bg-[var(--color-cream)]/30 dark:bg-[var(--color-cream)]/20 flex items-center justify-center shrink-0">
                <User className="h-7 w-7 text-[var(--color-golden)]" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold mb-1">{user.name}</h2>
                <div className="flex items-center gap-2 text-sm text-[var(--foreground)]/70">
                  <Mail className="h-4 w-4" />
                  <span>{user.email}</span>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className={cn(
                "uppercase tracking-wider flex items-center gap-2 shrink-0",
                "border-[var(--color-golden)] text-[var(--color-golden)]",
                "hover:bg-[var(--color-golden)] hover:text-[var(--background)]"
              )}
            >
              <LogOut className="w-4 h-4" />
              Выйти
            </Button>
          </div>
        </Card>

        <Card className="p-8 -mt-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[var(--color-cream)]/30 dark:bg-[var(--color-cream)]/20 flex items-center justify-center shrink-0">
              <Package className="h-6 w-6 text-[var(--color-golden)]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Текущая подписка</h3>
              <p className="text-base text-[var(--foreground)]/70">{subscription.title}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[var(--color-cream)]/30 dark:border-[var(--color-cream)]/20">
            <div>
              <p className="text-sm text-[var(--foreground)]/60 mb-2">Стоимость</p>
              <p className="text-lg font-medium text-[var(--color-golden)]">{subscription.price}</p>
            </div>
            <div>
              <p className="text-sm text-[var(--foreground)]/60 mb-2">Следующий платёж</p>
              <p className="text-lg font-medium">{subscription.nextPayment}</p>
            </div>
          </div>
        </Card>

        <Card className="p-8 -mt-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-[var(--color-cream)]/30 dark:bg-[var(--color-cream)]/20 flex items-center justify-center shrink-0">
              <Calendar className="h-6 w-6 text-[var(--color-golden)]" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Предстоящее мероприятие</h3>
              <p className="text-base text-[var(--foreground)]/70">Доставка коробки</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[var(--color-cream)]/30 dark:border-[var(--color-cream)]/20">
            <div>
              <p className="text-sm text-[var(--foreground)]/60 mb-2">Дата доставки</p>
              <p className="text-lg font-medium">{upcomingEvent.deliveryDate}</p>
            </div>
            <div>
              <p className="text-sm text-[var(--foreground)]/60 mb-2">Время доставки</p>
              <p className="text-lg font-medium">{upcomingEvent.deliveryTime}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

