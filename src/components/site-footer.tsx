import Link from "next/link";
import { Icons } from "./icons";
import { useTranslations } from "next-intl";

export default function SiteFooter() {
  const t = useTranslations("Footer");

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
              {/* Products */}
              <div className="flex flex-col gap-3">
                <div className="text-zinc-400">
                  {t("categories.products.title")}
                </div>
                <Link
                  href="/products/myfleet"
                  className="text-zinc-600 hover:text-black"
                >
                  {t("categories.products.items.myfleet")}
                </Link>
                <Link
                  href="/products/ai-copilot"
                  className="text-zinc-600 hover:text-black"
                >
                  {t("categories.products.items.aiCopilot")}
                </Link>
                {/* Commented items can be uncommented when needed
                <Link
                  href="/products/hardware"
                  className="text-zinc-600 hover:text-black"
                >
                  {t("categories.products.items.hardware")}
                </Link>
                <Link
                  href="/products/api-service"
                  className="text-zinc-600 hover:text-black"
                >
                  {t("categories.products.items.apiService")}
                </Link>
                */}
              </div>

              {/* Solutions */}
              <div className="flex flex-col gap-3">
                <div className="text-zinc-400">
                  {t("categories.solutions.title")}
                </div>
                <Link
                  href="/solutions/bus"
                  className="text-zinc-600 hover:text-black"
                >
                  {t("categories.solutions.items.bus")}
                </Link>
                <Link
                  href="/solutions/heavy-truck"
                  className="text-zinc-600 hover:text-black"
                >
                  {t("categories.solutions.items.heavyTruck")}
                </Link>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-3">
                <div className="text-zinc-400">
                  {t("categories.company.title")}
                </div>
                <Link href="/about" className="text-zinc-600 hover:text-black">
                  {t("categories.company.items.about")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
