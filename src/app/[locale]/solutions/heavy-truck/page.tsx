import { CallToAction } from "@/components/call-to-action";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { solutionPage } from "@/content.json";
import { Icons } from "@/components/icons";

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

export default function HeavyTruck() {
  const t = useTranslations("MyFleetPage");

  const vivid = [
    "Red light violations",
    "Stop sign violations",
    "Speeding detection",
    "Idle time monitoring",
    "Illegal parking detection",
    "Bus lane violations",
    "Sidewalk parking violations",
  ];

  const omniGuard = [
    "Traffic light warnings",
    "Forward collision warning",
    "Speed alerts",
    "Intersection stop warnings",
    "Pedestrian collision prevention",
    "Lane departure warning (Coming soon)",
  ];

  const driverCare = [
    "Seatbelt monitoring",
    "Phone usage detection",
    "Smoking detection",
    "Fatigue monitoring",
    "Alcohol testing integration",
  ];

  const solutions = solutionPage.solutions.find(
    (solution) => solution.text == "達富重車",
  );

  const painpoints = solutions?.painpoints;
  const aiFeatures = solutions?.aiFeatures;
  const myFleetFeatures = solutions?.myFleetFeatures;

  return (
    <div className="flex flex-col items-center divide-y divide-red-300">
      {/* main_section */}
      <div className="relative w-full scroll-m-20">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className={cn("mb-2 text-5xl font-bold tracking-tight")}>
            達富重車
          </h1>
          <p className="text-lg">{t("main.subtitle")}</p>
        </div>
        {solutions?.image && (
          <Image
            className={cn("h-[400px] w-full dark:invert")}
            src={solutions.image}
            alt={t("main.title")}
            width={1024}
            height={768}
            style={{
              objectFit: "cover",
              // objectPosition: "left 30%",
            }}
            priority
          />
        )}
      </div>

      {/* Painpoints */}
      <div className="container mx-auto py-24">
        <div className="grid grid-cols-2">
          {painpoints?.image && (
            <Image
              className={cn("h-full w-full dark:invert")}
              src={painpoints.image}
              alt="校車"
              width={1024}
              height={768}
            />
          )}

          <div>
            <h2 className="mb-2 text-4xl font-bold">{painpoints?.mainTitle}</h2>
            {painpoints?.points.map((point, index) => (
              <PainpointItem
                key={index}
                title={point.title}
                description={point.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* AI Features */}
      <div className="container mx-auto py-24">
        <h2 className="mb-2 text-4xl font-bold">{aiFeatures?.mainTitle}</h2>
        <div className="grid grid-cols-3">
          {aiFeatures?.features.map((key, index) => (
            <AiFeatureItem
              key={index}
              title={key.title}
              description={key.description}
              icon={key.icon as keyof typeof Icons}
            />
          ))}
        </div>
      </div>

      {/* MyFleet Features */}
      <div className="container mx-auto py-24">
        <h2 className="mb-2 text-4xl font-bold">
          {myFleetFeatures?.mainTitle}
        </h2>
        <div className="grid grid-cols-3">
          {myFleetFeatures?.features.map((key, index) => (
            <MyFleetFeatureItem
              key={index}
              title={key.title}
              description={key.description}
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
              <div className="mb-6 text-2xl font-bold">MyFleet</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="min-h-20 place-content-center rounded-xl border border-zinc-200 bg-zinc-50 text-xl">
                  AI Box + Cameras
                </div>
                <div className="min-h-20 place-content-center rounded-xl border border-zinc-200 bg-zinc-50 text-xl">
                  AI Copilot
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
        <div className="container mx-auto grid grid-cols-3 gap-4">
          <div className="relative col-span-2 grid grid-cols-2 gap-4 rounded-xl border border-dashed border-zinc-300 px-4 pb-4 pt-6">
            <span className="absolute -top-[6px] left-3 bg-background px-1.5 text-xs leading-none text-zinc-600">
              前鏡頭
            </span>
            <div className="flex flex-col rounded-xl border border-zinc-200/80 bg-white p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 text-xl font-medium">ViViD 駕駛違規偵測</div>
              <div className="space-y-2.5">
                {vivid.map((key, i) => (
                  <div key={i} className="text-sm text-zinc-700">
                    {key}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col rounded-xl border border-zinc-200/80 bg-white p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 text-xl font-medium">
                OmniGuard 駕駛危險預警
              </div>
              <div className="space-y-2.5">
                {omniGuard.map((key, i) => (
                  <div key={i} className="text-sm text-zinc-700">
                    {key}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative col-span-1 grid grid-cols-1 gap-8 rounded-xl border border-dashed border-zinc-300 px-4 pb-4 pt-6">
            <span className="absolute -top-[6px] left-3 bg-background px-1.5 text-xs leading-none text-zinc-600">
              內鏡頭
            </span>
            <div className="flex flex-col rounded-xl border border-zinc-200/80 bg-white p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 text-xl font-medium">
                DriverCare 不當行為偵測
              </div>
              <div className="space-y-2.5">
                {driverCare.map((key, i) => (
                  <div key={i} className="text-sm text-zinc-700">
                    {key}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
}
