import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About() {
  const t = useTranslations("AboutPage");

  return (
    <div className="flex flex-col items-center">
      {/* main_section */}
      <div className="relative w-full scroll-m-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className={cn("mb-2 text-5xl font-bold tracking-tight")}>
            {t("main.title")}
          </h1>
          <p className="text-lg">{t("main.subtitle")}</p>
        </div>
        {t("main.image") ? (
          <Image
            className={cn("h-[400px] w-full dark:invert")}
            src={t("main.image")}
            alt={t("main.title")}
            width={1024}
            height={768}
            style={{
              objectFit: "cover",
            }}
            priority
          />
        ) : (
          <div className="h-[400px] w-full bg-zinc-50" />
        )}
      </div>

      {/* section 1: key benefits */}
      <div className="flex flex-col items-center space-y-12 border-y">
        <div className="container mx-auto grid grid-cols-2 gap-16">
          {t("introSection.image") ? (
            <Image
              className="h-full w-full dark:invert"
              src={t("introSection.image")}
              alt={t("introSection.title")}
              width={500}
              height={325}
            />
          ) : (
            <div className="h-[400px] w-full bg-zinc-50" />
          )}

          <p className="self-center">{t("introSection.content")}</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-12 border-y">
        <div className="grid grid-cols-3 gap-16">
          {/* {benefits.map((key, index) => (
            <Block
              key={index}
              title={t(`benefitSection.benefits.benefit_${key}.title`)}
              content={t(`benefitSection.benefits.benefit_${key}.content`)}
              iconSrc={t(`benefitSection.benefits.benefit_${key}.icon`)}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
}
