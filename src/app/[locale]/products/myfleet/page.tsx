import AiModules from "@/components/ai-modules";
import { AskForQuotation, CallToAction } from "@/components/call-to-action";
import TwoColsCard from "@/components/two-col-card";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function MyFleet() {
  const t = useTranslations("MyFleetPage");

  const industries = ["一般車隊", "校車接送", "物流車", "冷鏈管理", "達富重車"];

  const customers = ["薇閣中學", "YouBike", "新北市環保局", "台塑貨運"];

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
                MyFleet 車隊管理平台
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="min-h-20 place-content-center rounded-xl border border-zinc-200 bg-zinc-50 text-xl">
                  軟體 AI Copilot
                </div>
                <div className="min-h-20 place-content-center rounded-xl border border-zinc-200 bg-zinc-50 text-xl">
                  硬體 AI Box
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
          <h2 className="mb-2 text-4xl font-semibold">AI 駕駛安全模組</h2>
          <p>description</p>
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
          <h2 className="mb-2 text-4xl font-semibold">產業解決方案</h2>
          <p>description</p>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-row justify-start gap-6">
            {industries?.map((key, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-200/80 bg-white p-6 text-sm text-zinc-700 transition-shadow hover:shadow-md"
              >
                {key}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="w-full space-y-12 bg-[#fcfcfc] py-28">
        <div className="container mx-auto">
          <h2 className="mb-2 text-4xl font-semibold">客戶導入實例</h2>
          <p>description</p>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-row justify-start gap-6">
            {customers?.map((key, i) => (
              <div
                key={i}
                className="rounded-xl border border-zinc-200/80 bg-white p-6 text-sm text-zinc-700 transition-shadow hover:shadow-md"
              >
                {key}
              </div>
            ))}
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
}
