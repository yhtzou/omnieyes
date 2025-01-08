import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

function AskForQuotation() {
  const t = useTranslations("CTA-Quote");

  return (
    <div className="w-full bg-blue-400 py-32 text-center text-white">
      <div className="text-3xl font-bold">{t("title")}</div>
      <p>{t("content")}</p>
      <Button>{t("button")}</Button>
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
      <div className="">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-[400px] w-full bg-zinc-100"
        >
          {/* <video autoPlay muted loop playsInline className="h-auto h-[400px] w-full bg-zinc-100"> */}
          {/* <source src="/闖紅燈Red Light Running.webm" type="video/webm" /> */}
          Your browser does not support the video tag.
        </video>
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
