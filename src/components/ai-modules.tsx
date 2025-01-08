import { useTranslations } from "next-intl";

export default function AiModules() {
  const t = useTranslations("AI-Modules");
  const vivid = [
    "function_1",
    "function_2",
    "function_3",
    "function_4",
    "function_5",
    "function_6",
    "function_7",
  ] as const;
  const omniGuard = [
    "function_1",
    "function_2",
    "function_3",
    "function_4",
    "function_5",
    "function_6",
  ] as const;
  const driverCare = [
    "function_1",
    "function_2",
    "function_3",
    "function_4",
  ] as const;

  return (
    <div className="container mx-auto grid grid-cols-3 gap-4">
      <div className="relative col-span-2 grid grid-cols-2 gap-4 rounded-xl border border-dashed border-zinc-300 px-4 pb-4 pt-6">
        <span className="absolute -top-[6px] left-3 bg-background px-1.5 text-xs leading-none text-zinc-600">
          {t("SFC")}
        </span>
        <div className="flex flex-col rounded-xl border border-zinc-200/80 bg-white p-6 transition-shadow hover:shadow-md">
          <div className="mb-4 text-xl font-medium">{t("module_1.title")}</div>
          <div className="space-y-2.5">
            {vivid?.map((key, i) => (
              <div key={i} className="text-sm text-zinc-700">
                {t(`module_1.` + key)}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col rounded-xl border border-zinc-200/80 bg-white p-6 transition-shadow hover:shadow-md">
          <div className="mb-4 text-xl font-medium">{t("module_2.title")}</div>
          <div className="space-y-2.5">
            {omniGuard?.map((key, i) => (
              <div key={i} className="text-sm text-zinc-700">
                {t(`module_2.` + key)}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative col-span-1 grid grid-cols-1 gap-8 rounded-xl border border-dashed border-zinc-300 px-4 pb-4 pt-6">
        <span className="absolute -top-[6px] left-3 bg-background px-1.5 text-xs leading-none text-zinc-600">
        {t("DFC")}
        </span>
        <div className="flex flex-col rounded-xl border border-zinc-200/80 bg-white p-6 transition-shadow hover:shadow-md">
          <div className="mb-4 text-xl font-medium">{t("module_3.title")}</div>
          <div className="space-y-2.5">
            {driverCare?.map((key, i) => (
              <div key={i} className="text-sm text-zinc-700">
                {t(`module_3.` + key)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
