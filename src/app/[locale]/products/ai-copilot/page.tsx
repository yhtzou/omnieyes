import AiModules from "@/components/ai-modules";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AiCopilotPage" });

  return {
    title: t("main.title"),
    description: t("main.description"),
  };
}

export default function AiCopilot() {
  const t = useTranslations("AiCopilotPage");

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

      {/* Core AI Modules */}
      <div className="w-full space-y-12 bg-[#fcfcfc] py-28">
        <div className="container mx-auto">
          <h2 className="mb-2 text-4xl font-semibold">
            {t("aiModules.main.title")}
          </h2>
          <p>{t("aiModules.main.subtitle")}</p>
        </div>
        <AiModules />
      </div>
    </div>
  );
}
