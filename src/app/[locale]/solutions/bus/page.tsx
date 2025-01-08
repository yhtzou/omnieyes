import { CallToAction } from "@/components/call-to-action";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { getTranslations } from "next-intl/server";
import AiModules from "@/components/ai-modules";

function PainpointItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-navy-800 text-2xl font-bold">{title}</h3>
      <p className="text-lg leading-relaxed text-gray-700">{description}</p>
    </div>
  );
}

function AiFeatureItem({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: keyof typeof Icons;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-8 w-8">{icon ? Icons[icon]({}) : null}</div>
      <div className="text-navy-800 text-2xl font-bold">{title}</div>
      <p className="text-lg leading-relaxed text-gray-700">{description}</p>
    </div>
  );
}

function MyFleetFeatureItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      {/* <Image
        className={cn("h-50 w-50 dark:invert")}
        src=""
        alt="feature icon"
        width={50}
        height={50}
      /> */}

      <div className="text-navy-800 text-2xl font-bold">{title}</div>
      <p className="text-lg leading-relaxed text-gray-700">{description}</p>
    </div>
  );
}

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

export default function Bus() {
  const t = useTranslations("MyFleetPage");
  const bus = useTranslations("BusPage");
  const ai = useTranslations("AiCopilotPage");

  return (
    <div className="flex flex-col items-center">
      {/* main_section */}
      <div className="relative w-full scroll-m-20">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className={cn("mb-2 text-5xl font-bold tracking-tight")}>
            {bus("main.title")}
          </h1>
          <p className="text-lg">{bus("main.subtitle")}</p>
        </div>
        <Image
          className={cn("h-[400px] w-full dark:invert")}
          src="/solutions/solution-bus-bg.webp"
          alt={bus("main.title")}
          width={1024}
          height={768}
          style={{
            objectFit: "cover",
            objectPosition: "left 30%",
          }}
          priority
        />
      </div>

      {/* Painpoints */}
      <div className="container mx-auto py-24">
        <div className="grid grid-cols-2">
          <div>
            <Image
              className={cn("h-full w-full dark:invert")}
              src="/solutions/solution-bus-01.jpg"
              alt={bus("main.title")}
              width={1224 / 2}
              height={808 / 2}
            />
          </div>
          <div>
            <h2 className="mb-2 text-4xl font-bold">
              {bus("painpoints.mainTitle")}
            </h2>
            {Object.keys(bus.raw("painpoints.points")).map((key) => (
              <PainpointItem
                key={key}
                title={bus(`painpoints.points.${key}.title`)}
                description={bus(`painpoints.points.${key}.description`)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* AI Features */}
      <div className="container mx-auto py-24">
        <h2 className="mb-2 text-4xl font-bold">
          {bus("aiFeatures.mainTitle")}
        </h2>
        <div className="grid grid-cols-3">
          {Object.keys(bus.raw("aiFeatures.features")).map((key) => (
            <AiFeatureItem
              key={key}
              title={bus(`aiFeatures.features.${key}.title`)}
              description={bus(`aiFeatures.features.${key}.description`)}
              icon={
                bus(`aiFeatures.features.${key}.icon`) as keyof typeof Icons
              }
            />
          ))}
        </div>
      </div>

      {/* MyFleet Features */}
      <div className="container mx-auto py-24">
        <h2 className="mb-2 text-4xl font-bold">
          {bus("myFleetFeatures.mainTitle")}
        </h2>
        <div className="grid grid-cols-3">
          {Object.keys(bus.raw("myFleetFeatures.features")).map((key) => (
            <MyFleetFeatureItem
              key={key}
              title={bus(`myFleetFeatures.features.${key}.title`)}
              description={bus(`myFleetFeatures.features.${key}.description`)}
            />
          ))}
        </div>
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
            {ai("aiModules.main.title")}
          </h2>
          <p>{ai("aiModules.main.subtitle")}</p>
        </div>
        <AiModules />
      </div>

      <CallToAction />
    </div>
  );
}
