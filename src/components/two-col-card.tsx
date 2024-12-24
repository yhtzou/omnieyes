import { cn } from "@/lib/utils";
import Image from "next/image";

export default function TwoColsCard({
  title,
  content,
  imageSrc,
  imagePosition,
  className,
}: {
  title: string;
  content: string;
  imageSrc: string;
  imagePosition: "left" | "right";
  className?: string;
}) {
  return (
    <div
      className={cn(`my-8 grid min-h-48 w-full grid-cols-2 gap-16`, className)}
    >
      {imageSrc ? (
        <Image
          className={cn(
            "h-full w-full dark:invert",
            imagePosition == "left" ? "order-1" : "order-2",
          )}
          src={imageSrc}
          alt={title}
          width={450}
          height={300}
        />
      ) : (
        <div
          className={cn(
            "h-full w-full bg-zinc-100",
            imagePosition == "left" ? "order-1" : "order-2",
          )}
        />
      )}
      <div
        className={cn(
          "flex flex-col justify-center",
          imagePosition == "right" ? "order-1" : "order-2",
        )}
      >
        <h2 className="mb-4 text-xl font-bold tracking-tight text-blue-500">
          {title}
        </h2>
        <p className="">{content}</p>
      </div>
    </div>
  );
}
