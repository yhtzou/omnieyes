import Link from "next/link";
import { Icons } from "./icons";

export default function SiteFooter() {
  return (
    <>
      <footer className="border-grid border-t pb-24 pt-6 md:px-8">
        <div className="container-wrapper">
          <div className="container flex flex-row py-4 text-sm">
            <Link
              href="/"
              className="col-span-2 mr-4 flex w-1/4 items-center gap-2 lg:mr-6"
            >
              <Icons.logo className="h-8" />
            </Link>
            <div className="grid w-full grid-cols-6 gap-10">
              <div className="flex flex-col gap-3">
                <div className="text-zinc-400">產品</div>
                <Link
                  href={"/products/myfleet"}
                  className="text-zinc-600 hover:text-black"
                >
                  MyFleet
                </Link>
                <Link
                  href={"/products/ai-copilot"}
                  className="text-zinc-600 hover:text-black"
                >
                  AI Copilot
                </Link>
                {/* <Link
                  href={"/products/hardware"}
                  className="text-zinc-600 hover:text-black"
                >
                  硬體
                </Link>
                <Link
                  href={"/products/api-service"}
                  className="text-zinc-600 hover:text-black"
                >
                  API 服務
                </Link> */}
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-zinc-400">解決方案</div>

                <Link
                  href={"/solutions/bus"}
                  className="text-zinc-600 hover:text-black"
                >
                  校車
                </Link>
                <Link
                  href={"/solutions/heavy-truck"}
                  className="text-zinc-600 hover:text-black"
                >
                  達富重車
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <div className="text-zinc-400">動見科技</div>
                <Link
                  href={"/about"}
                  className="text-zinc-600 hover:text-black"
                >
                  關於我們
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
