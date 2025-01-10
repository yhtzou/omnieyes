import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

function AskForQuotation() {
  const t = useTranslations("CTA-Quote");

  return (
    <div className={cn("grid w-full grid-cols-2 gap-8 py-4")}>
      <div className="flex h-[400px] w-full flex-col justify-center gap-2 bg-zinc-100 p-6">
        <p>
          場景：在一個車隊管理中心，車管螢幕上顯示著 MyFleet 的車輛行駛數據與 AI
          事件。窗外可以看到車輛在路上運行，背景有數據流動的效果，象徵著即時監控和智能管理。
        </p>
        <p>關鍵詞：車隊中心、MyFleet 平台、AI 事件、即時監控</p>
      </div>
      <div>
        <div className="text-3xl font-bold">{t("title")}</div>
        <p>{t("content")}</p>
        <Button>{t("button")}</Button>
      </div>
    </div>
  );
}

function CallToAction() {
  const t = useTranslations("CTA");
  return (
    <div className="w-full bg-blue-400 py-32 text-center text-white">
      <div className="text-3xl font-bold">{t("title")}</div>
      <p>{t("content")}</p>
      <Button>{t("button")}</Button>
    </div>
  );
}

function TopCallToAction({ className }: { className?: string }) {
  const t = useTranslations("CTA-Video");
  return (
    <div className={cn("grid w-full grid-cols-2 gap-8 py-4", className)}>
      <div className="flex h-[400px] w-full flex-col justify-center gap-2 bg-zinc-100 p-6">
        <p>
          場景：一輛車在城市道路上行駛，前方遇到潛在事故，周圍有數據流動的視覺效果，象徵
          AI 的即時分析。
        </p>
        <p>關鍵詞：城市、街道、車輛、事故、數據、AI</p>
      </div>
      {/* <iframe
        width="560"
        height="400"
        src="https://www.youtube.com/embed/wifjyexAPhU"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      /> */}
      <div className="">
        <h2 className="text-2xl font-bold">{t("title")}</h2>
        <p>{t("content")}</p>
        <Button>{t("button")}</Button>
      </div>
    </div>
  );
}

export { TopCallToAction, CallToAction, AskForQuotation };
