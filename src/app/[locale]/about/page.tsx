import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

function PeopleBlock({
  name,
  image,
  description,
  title,
}: {
  name: string;
  image: string;
  description?: string;
  title?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <Image
        className="h-40 w-40 rounded-full"
        src={image}
        alt={name}
        width={160}
        height={160}
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      {title && <div>{title}</div>}
      {description && <p>{description}</p>}
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: t("main.title"),
    description: t("main.description"),
  };
}

export default function About() {
  const t = useTranslations("AboutPage");
  const founderSection = useTranslations("AboutPage.founderSection");
  const boardSection = useTranslations("AboutPage.boardSection");
  const management = [1, 2, 3, 4, 5];
  const boardMembers = [1, 2, 3, 4];

  return (
    <div className="flex flex-col items-center">
      {/* main_section */}
      <div className="relative w-full scroll-m-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className={cn("mb-2 text-5xl font-bold tracking-tight")}>
            {t("main.title")}
          </h1>
          <p className="text-lg">{t("main.description")}</p>
        </div>
        {t("main.image") ? (
          <Image
            className={cn("h-[400px] w-full dark:invert")}
            src={t("main.image")}
            alt={t("main.title")}
            width={1024}
            height={768}
            style={{
              objectFit: "cover",
            }}
            priority
          />
        ) : (
          <div className="h-[400px] w-full bg-zinc-50" />
        )}
      </div>

      {/* section 1: key benefits */}
      <div className="flex flex-col items-center space-y-12 border-y">
        <div className="container mx-auto grid grid-cols-2 gap-16">
          {t("introSection.image") ? (
            <Image
              className="h-full w-full dark:invert"
              src={t("introSection.image")}
              alt={t("introSection.title")}
              width={500}
              height={325}
            />
          ) : (
            <div className="h-[400px] w-full bg-zinc-50" />
          )}

          <p className="self-center">{t("introSection.content")}</p>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-12 border-y">
        <div className="grid grid-cols-3 gap-16">
          {/* {benefits?.map((key, index) => (
            <Block
              key={index}
              title={t(`benefitSection.benefits.benefit_${key}.title`)}
              content={t(`benefitSection.benefits.benefit_${key}.content`)}
              iconSrc={t(`benefitSection.benefits.benefit_${key}.icon`)}
            />
          ))} */}
        </div>
      </div>

      {/* 企業文化 */}
      <div className="w-full space-y-12 py-28">
        <div className="container mx-auto">
          <h2 className="mb-2 text-4xl font-semibold">企業文化</h2>
          <p>description</p>
        </div>
        <div className="container mx-auto">
          <div className="relative h-full w-full">
            <Image
              className={cn("h-full w-full dark:invert")}
              src="/about-page/culture.jpg"
              alt="企業文化"
              width={1024}
              height={768}
              style={{
                objectFit: "cover",
              }}
              priority
            />
            <div className="absolute left-0 top-0 grid h-full w-full grid-cols-5 grid-rows-3 border text-center">
              <div className="grid h-full w-full" />
              <div className="grid h-full w-full" />
              <div className="grid h-full w-full">
                彈性
                <p>
                  要求全體同仁具備持續學習的意願和能力，針對快速變化的市場，隨時準備投入並接受挑戰。
                </p>
              </div>
              <div className="grid h-full w-full" />
              <div className="grid h-full w-full" />
              <div className="grid h-full w-full" />
              <div className="grid h-full w-full">
                透明
                <p>
                  OmniEyes
                  對工作計劃和公司運作皆保持開放和誠實，無論員工彼此之間或是與客戶和夥伴之合作，都採取同樣的態度。
                </p>
              </div>
              <div className="grid h-full w-full" />
              <div className="grid h-full w-full">
                連結
                <p>
                  秉持one-team工作準則，與客戶及合作夥伴持續保持同步和即時互動。
                </p>
              </div>
              <div className="grid h-full w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* 經營團隊 */}
      <div className="w-full space-y-12 py-28">
        <div className="container mx-auto">
          <h2 className="mb-2 text-4xl font-semibold">
            {t("founderSection.title")}
          </h2>
          <p>{t("founderSection.subtitle")}</p>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-16">
            {management?.map((_, index) => (
              <PeopleBlock
                key={index}
                name={founderSection(`team.person_${index + 1}.name`)}
                title={founderSection(`team.person_${index + 1}.title`)}
                image={founderSection(`team.person_${index + 1}.image`)}
                description={founderSection(
                  `team.person_${index + 1}.description`,
                )}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 董事 */}
      <div className="w-full space-y-12 py-28">
        <div className="container mx-auto">
          <h2 className="mb-2 text-4xl font-semibold">
            {t("boardSection.title")}
          </h2>
          <p>{t("boardSection.subtitle")}</p>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-16">
            {boardMembers?.map((_, index) => (
              <PeopleBlock
                key={index}
                name={boardSection(`directors.person_${index + 1}.name`)}
                image={boardSection(`directors.person_${index + 1}.image`)}
                description={boardSection(
                  `directors.person_${index + 1}.description`,
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
