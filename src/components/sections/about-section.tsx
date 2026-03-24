import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <div
              className={`mb-6 transition-all duration-700 md:mb-12 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-2 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-5xl lg:text-6xl">
                Экологическая
                <br />
                безопасность
                <br />
                <span className="text-foreground/40">и цифровизация</span>
              </h2>
              <p className="font-mono text-sm text-foreground/60">/ Блоки 4–5 · Слайды 19–28</p>
            </div>

            <div
              className={`space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-base">
                <strong className="text-foreground/70">Экология:</strong> Разработка стандартов вредных выбросов для маломерных судов, внедрение технологий очистки, цели нацпроекта «Экологическое благополучие».
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-base">
                <strong className="text-foreground/70">Цифровизация:</strong> Достижение «цифровой зрелости», внедрение ИИ и отечественного ПО, единая цифровая картографическая основа.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-base">
                <strong className="text-foreground/70">Кадры:</strong> Подготовка специалистов для работы с автономными системами, ИИ и современными экологическими стандартами.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6 md:space-y-10">
            {[
              { value: "2035", label: "Горизонт стратегии", sublabel: "Транспортная стратегия РФ", direction: "right" },
              { value: "4-е", label: "Место по ВВП", sublabel: "Целевой показатель к 2035 году", direction: "left" },
              { value: "30", label: "Слайдов", sublabel: "6 тематических блоков доклада", direction: "right" },
            ].map((stat, i) => {
              const getRevealClass = () => {
                if (!isVisible) {
                  return stat.direction === "left" ? "-translate-x-16 opacity-0" : "translate-x-16 opacity-0"
                }
                return "translate-x-0 opacity-100"
              }

              return (
                <div
                  key={i}
                  className={`flex items-baseline gap-4 border-l border-foreground/30 pl-4 transition-all duration-700 md:gap-8 md:pl-8 ${getRevealClass()}`}
                  style={{
                    transitionDelay: `${300 + i * 150}ms`,
                    marginLeft: i % 2 === 0 ? "0" : "auto",
                    maxWidth: i % 2 === 0 ? "100%" : "85%",
                  }}
                >
                  <div className="text-3xl font-light text-foreground md:text-5xl lg:text-6xl">{stat.value}</div>
                  <div>
                    <div className="font-sans text-base font-light text-foreground md:text-xl">{stat.label}</div>
                    <div className="font-mono text-xs text-foreground/60">{stat.sublabel}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          className={`mt-8 flex flex-wrap gap-3 transition-all duration-700 md:mt-12 md:gap-4 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "750ms" }}
        >
          <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(4)}>
            Итоги и перспективы
          </MagneticButton>
          <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(0)}>
            К началу
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
