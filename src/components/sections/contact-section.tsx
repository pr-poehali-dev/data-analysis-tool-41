import { useReveal } from "@/hooks/use-reveal"
import { MagneticButton } from "@/components/magnetic-button"
import Icon from "@/components/ui/icon"

export function ContactSection() {
  const { ref, isVisible } = useReveal(0.3)

  const conclusions = [
    {
      num: "29",
      title: "Ключевые выводы",
      text: "СМП — главный приоритет арктической стратегии. Необходим специальный ФЗ «О СМП», единый оператор и субсидирование авиационной доступности.",
      direction: "left",
    },
    {
      num: "29",
      title: "Автономное судовождение",
      text: "МАНС требуют изменений в КТМ РФ, синхронизации с нормами ИМО и законодательного регулирования ответственности за применение ИИ.",
      direction: "right",
    },
    {
      num: "30",
      title: "Перспективы до 2035 года",
      text: "Выход на 4-е место в мире по ВВП. Технологическая независимость, экономика замкнутого цикла, сбалансированное развитие регионов.",
      direction: "left",
    },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-10 ${
                isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-4xl font-light leading-[1.05] tracking-tight text-foreground md:mb-3 md:text-6xl lg:text-7xl">
                Итоги
                <br />
                <span className="text-foreground/50">и перспективы</span>
              </h2>
              <p className="font-mono text-xs text-foreground/60 md:text-sm">/ Блок 6 · Слайды 29–30</p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="Anchor" className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Нормативно-правовая база</span>
                </div>
                <p className="text-sm text-foreground md:text-base">Указ Президента РФ №309 · Транспортная стратегия до 2030/2035 г. · Стратегия пространственного развития</p>
              </div>

              <div
                className={`transition-all duration-700 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
                }`}
                style={{ transitionDelay: "350ms" }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <Icon name="Target" className="h-3 w-3 text-foreground/60" />
                  <span className="font-mono text-xs text-foreground/60">Национальные цели</span>
                </div>
                <p className="text-sm text-foreground md:text-base">Технологическое лидерство · Цифровая трансформация · Комфортная среда</p>
              </div>

              <div
                className={`flex gap-3 pt-2 transition-all duration-700 md:pt-4 ${
                  isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <MagneticButton variant="primary" size="lg" onClick={() => window.scrollTo(0, 0)}>
                  Начало презентации
                </MagneticButton>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-4 md:space-y-6">
            {conclusions.map((item, i) => (
              <div
                key={i}
                className={`group border-l border-foreground/20 pl-4 transition-all duration-700 hover:border-foreground/40 md:pl-6 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : item.direction === "left"
                    ? "-translate-x-12 opacity-0"
                    : "translate-x-12 opacity-0"
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <div className="mb-1 flex items-center gap-2">
                  <span className="font-mono text-xs text-foreground/40">Слайд {item.num}</span>
                </div>
                <h3 className="mb-1 font-sans text-base font-light text-foreground transition-transform duration-300 group-hover:translate-x-1 md:text-xl">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-foreground/70 md:text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
