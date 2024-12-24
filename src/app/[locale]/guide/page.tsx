import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Guide() {
  const t = useTranslations("GuidePage");

  return (
    <div className="flex flex-col items-center">
      {/* main_section */}
      <div className="relative w-full scroll-m-20">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className={cn("mb-2 text-5xl font-bold tracking-tight")}>
            {t("main.title")}
          </h1>
          <p className="text-lg">{t("main.subtitle")}</p>
        </div>
        <Image
          className={cn("h-[400px] w-full dark:invert")}
          src={t("main.image")}
          alt={t("main.title")}
          width={1024}
          height={768}
          style={{
            objectFit: "cover",
            objectPosition: "left 30%",
          }}
          priority
        />
      </div>
    </div>
  );
}
