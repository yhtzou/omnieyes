import AiModules from "@/components/ai-modules";
import { AskForQuotation, TopCallToAction } from "@/components/call-to-action";
import TwoColsCard from "@/components/two-col-card";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "MyFleetPage" });

  return {
    title: t("main.title"),
    description: t("main.description"),
  };
}

export default function MyFleet() {
  const t = useTranslations("MyFleetPage");

  const industries = ["solutions.solution_1", "solutions.solution_2"] as const;
  const features = [
    "features.feature_1",
    "features.feature_2",
    "features.feature_3",
    "features.feature_4",
    "features.feature_5",
    "features.feature_6",
    "features.feature_7",
  ] as const;
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

      {/* Product Overview */}
      <div className="w-full py-28">
        <div className="container mx-auto grid grid-cols-2 gap-16">
          <div className="flex flex-col">
            <h2 className="mb-2 text-3xl font-bold">{t("section_1.title")}</h2>
            <p>{t("section_1.content")}</p>
            <div className="my-12 mr-8 rounded-xl border border-zinc-200 p-6 text-center">
              <div className="mb-6 text-2xl font-bold">
                {t("product_overview.title")}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="min-h-20 place-content-center rounded-xl border border-zinc-200 bg-zinc-50 text-xl">
                  {t("product_overview.software.title")}
                </div>
                <div className="min-h-20 place-content-center rounded-xl border border-zinc-200 bg-zinc-50 text-xl">
                  {t("product_overview.hardware.title")}
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              className={cn("h-full w-full dark:invert")}
              src={t("section_1.image")}
              alt={t("section_1.title")}
              width={1224 / 2}
              height={808 / 2}
            />
          </div>
        </div>
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

      <AskForQuotation />

      {/* features */}
      <div className="container mx-auto my-20">
        <h2 className="mb-12 text-4xl font-semibold">{t("features.title")}</h2>
        <div className="flex flex-col gap-16">
          {features?.map((key, i) => {
            return (
              <div key={i} className="">
                <TwoColsCard
                  title={t(`${key}.title`)}
                  content={t(`${key}.content`)}
                  imageSrc={t(`${key}.image`)}
                  imagePosition={i % 2 == 0 ? "left" : "right"}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Solutions */}
      <div className="w-full space-y-12 bg-[#fcfcfc] py-28">
        <div className="container mx-auto">
          <h2 className="mb-2 text-4xl font-semibold">
            {t(`solutions.main.title`)}
          </h2>
          <p>{t("solutions.main.subtitle")}</p>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-row justify-start gap-6">
            {industries?.map((key, i) => {
              return (
                <Link
                  key={i}
                  href={t(`${key}.href`)}
                  className="rounded-xl border border-zinc-200/80 bg-white p-6 text-sm text-zinc-700 transition-shadow hover:shadow-md"
                >
                  {t(`${key}.title`)}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <TopCallToAction />
    </div>
  );
}
