import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

function AskForQuotation() {
  return (
    <div className="w-full bg-blue-400 py-32 text-center text-white">
      <div className="text-3xl font-bold">Interested in POC and Pricings?</div>
      <p>
        Share a few details about your fleet management needs and we’ll send you
        a custom quote.
      </p>
      <Button>Request a Quote</Button>
    </div>
  );
}

function CallToAction() {
  return (
    <div className="w-full bg-blue-400 py-32 text-center text-white">
      <div className="text-3xl font-bold">透過 AI，提升您的車隊安全與效率</div>
      <p>
        Share a few details about your fleet management needs and we’ll send you
        a custom quote.
      </p>
      <Button>安排 Demo</Button>
    </div>
  );
}

function TopCallToAction({ className }: { className?: string }) {
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
        <h2 className="text-2xl font-bold">透過 AI，提升您的車隊安全與效率</h2>
        <p>
          Share a few details about your fleet management needs and we’ll send
          you a custom quote.
        </p>
        <Button>安排 Demo</Button>
      </div>
    </div>
  );
}

export { TopCallToAction, CallToAction, AskForQuotation };
