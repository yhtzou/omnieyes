import { TopCallToAction } from "@/components/call-to-action";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { homePage } from "@/content.json";

function Block({
  imageSrc,
  title,
  content,
}: {
  imageSrc: string;
  title: string;
  content: string;
}) {
  return (
    <div className="flex h-full max-w-60 flex-col items-center space-y-2 rounded-3xl border border-zinc-100 bg-white p-5">
      <Image
        className="dark:invert"
        src={imageSrc}
        alt={title}
        width={100}
        height={100}
      />
      <div>{title}</div>
      <p className="text-sm text-zinc-600">{content}</p>
    </div>
  );
}

function ReasonBlock({
  title,
  content,
  imageSrc,
}: {
  title: string;
  content: string;
  imageSrc: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <Image
        className="dark:invert"
        src={imageSrc}
        alt={title}
        width={80}
        height={80}
      />
      <div>
        <h3 className="mb-2 font-bold text-blue-500">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{content}</p>
      </div>
    </div>
  );
}

function SectionHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("mb-8 text-2xl font-bold", className)}>{children}</h2>
  );
}

function ProductBlock({
  href,
  text,
  features,
}: {
  href: string;
  text: string;
  features?: string[];
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-zinc-200/80 bg-white p-6 transition-shadow hover:border-zinc-700 hover:shadow-md"
    >
      <div className="mb-4 flex flex-row items-center justify-between">
        <div className="text-lg font-medium">{text}</div>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
      {features && (
        <div className="space-y-2.5">
          {features.map((key, i) => (
            <div key={i} className="text-sm text-zinc-700">
              {key}
            </div>
          ))}
        </div>
      )}
    </Link>
  );
}

export default function HomePage() {
  const t = useTranslations("HomePage");
  const logos = [
    "EPD.png",
    "DHL.webp",
    "MOM.png",
    "UBK.png",
    "FPG.png",
    "ALY.png",
    "SLT.png",
    "XNT.jpg",
  ];
  const esg = [1, 2, 3] as const;
  const reasons = [1, 2, 3, 4, 5] as const;
  const products = homePage.products;
  const painpoints = homePage.painpoints;

  return (
    <div className="flex flex-col">
      {/* main section */}
      <div className="relative flex select-none flex-row">
        <Image
          className="ml-auto w-2/3 dark:invert"
          src={t("main.image")}
          alt={t("main.title")}
          width={2892}
          height={1588}
          priority
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 20%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 20%)",
          }}
        />
        <div className="absolute bottom-40 left-20">
          <p className="text-4xl font-extrabold">
            {t.rich("main.slogan", {
              highlight: (chunks) => (
                <span className="text-blue-500">{chunks}</span>
              ),
              br: () => <br />,
            })}
          </p>
          <p className="mt-2 text-xl">
            台灣領先的 Edge-AI 車隊管理與駕駛安全解決方案
          </p>
        </div>
      </div>

      {/* customers logo */}
      <div className="flex flex-col items-center space-y-12 py-8">
        <h2 className="text-2xl font-medium">為眾多客戶信任</h2>
        <div className="container mx-auto flex flex-row gap-8">
          {logos.map((key, index) => {
            return (
              <div key={index} className="relative h-10 w-40">
                <Image
                  className="dark:invert"
                  src={`/logo/${key}`}
                  alt={key}
                  fill
                  sizes="200px"
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Pain Points */}
      <Image
        className="h-full w-full dark:invert"
        src="/HomePage/home-painpoints.png"
        alt="pain points"
        width={2744}
        height={1210}
        priority
        style={{
          objectFit: "contain",
        }}
      />
      <div className="hidden">
        <div className="relative flex flex-col items-center space-y-12">
          <Image
            className="ml-auto w-full px-32 dark:invert"
            src={t("section_2.image")}
            alt={t("section_2.title")}
            width={3552 / 4}
            height={1804 / 4}
          />
          <div className="absolute flex flex-col items-center">
            <h2
              className="mb-2 text-2xl font-bold"
              dangerouslySetInnerHTML={{ __html: t.raw("section_2.title") }}
            />
          </div>
          <div>
            {painpoints.map((key, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <h3 className="text-2xl font-bold">{key.name}</h3>
                <p>{key.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-zinc-50">
        <TopCallToAction className="container mx-auto" />
      </div>

      {/* Product Ecosystem */}
      <div className="w-full space-y-12 bg-[#fcfcfc] py-28">
        <div className="container mx-auto">
          <h2 className="mb-2 text-4xl font-semibold">完善的產品體系</h2>
          <p>description</p>
        </div>
        <div className="container mx-auto grid grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductBlock
              key={index}
              href={product.href}
              text={product.text}
              features={product.features}
            />
          ))}
        </div>
      </div>

      {/* Why Fleet Management? */}
      <div className="flex flex-col items-center space-y-12 py-24">
        <div className="flex w-1/2 flex-col items-center">
          <h2
            className="mb-2 text-2xl font-bold"
            dangerouslySetInnerHTML={{ __html: t.raw("section_1.title") }}
          />
          <p
            className=""
            dangerouslySetInnerHTML={{ __html: t.raw("section_1.content") }}
          />
        </div>
        <Image
          className="dark:invert"
          src={t("section_1.image")}
          alt={t("section_1.title")}
          width={3552 / 4}
          height={1804 / 4}
        />
        <div className="grid grid-cols-3 gap-16">
          {esg.map((key, index) => (
            <Block
              key={index}
              title={t(`section_1.blocks.block_${key}.title`)}
              content={t(`section_1.blocks.block_${key}.content`)}
              imageSrc={t(`section_1.blocks.block_${key}.image`)}
            />
          ))}
        </div>
      </div>

      {/* Why OmniEyes? */}
      <div className="container mx-auto py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <h2 className="mb-8 text-2xl font-bold lg:mb-0">
            {t("section_3.title")}
          </h2>

          <div className="col-span-1 flex flex-col gap-8 lg:col-span-2">
            {reasons.map((key, index) => (
              <ReasonBlock
                key={index}
                title={t(`section_3.blocks.block_${key}.title`)}
                content={t(`section_3.blocks.block_${key}.content`)}
                imageSrc={t(`section_3.blocks.block_${key}.image`)}
              />
            ))}
          </div>
        </div>
      </div>

      <Image
        className="h-full w-full dark:invert"
        src="/HomePage/home-news.png"
        alt="news"
        width={2744}
        height={1210}
        priority
        style={{
          objectFit: "contain",
        }}
      />
      <Image
        className="h-full w-full dark:invert"
        src="/HomePage/home-customers.png"
        alt="our customers"
        width={2744}
        height={1210}
        priority
        style={{
          objectFit: "contain",
        }}
      />

      <div className="hidden">
        {/* section_4 Let's get onboard!*/}
        <div className="relative flex flex-col items-center space-y-12">
          <Image
            className="h-[500px] w-full dark:invert"
            src={t("section_4.image")}
            alt={t("section_4.title")}
            width={5028 / 4}
            height={2412 / 4}
            priority
            style={{
              objectFit: "contain",
              objectPosition: "left",
              maskImage: "linear-gradient(to left, transparent 0%, black 40%)",
              WebkitMaskImage:
                "linear-gradient(to left, transparent 0%, black 40%)",
            }}
          />

          <div className="absolute right-0 top-1/3">
            <SectionHeading>{t("section_4.title")}</SectionHeading>
          </div>
        </div>

        {/* section_5 News Media */}
        <div className="flex flex-col items-center space-y-12">
          <div className="flex flex-col items-center">
            <SectionHeading>{t("section_5.title")}</SectionHeading>
          </div>
          <div className="h-80 w-full bg-zinc-100"></div>
        </div>

        {/* section_6 Partners */}
        <div className="flex flex-col items-center space-y-12">
          <div className="flex flex-col items-center">
            <SectionHeading>{t("section_6.title")}</SectionHeading>
          </div>
          <div className="h-80 w-full bg-zinc-100"></div>
        </div>
      </div>
      <div className="hidden">
        <ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="rounded bg-black/[.05] px-1 py-0.5 font-semibold dark:bg-white/[.06]">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            className="flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent bg-foreground px-4 text-sm text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:h-12 sm:px-5 sm:text-base"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="flex h-10 items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm transition-colors hover:border-transparent hover:bg-[#f2f2f2] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:h-12 sm:min-w-44 sm:px-5 sm:text-base"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </div>
    </div>
  );
}
