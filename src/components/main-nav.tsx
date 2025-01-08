"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Icons } from "./icons";
import LocaleSwitcher from "./locale-switcher";
import { useTranslations } from "next-intl";

export function MainNav() {
  const t = useTranslations("MainNav");
  const products = [
    "productItems.myFleet",
    "productItems.aiCopilot",
    // "productItems.hardware",
    // "productItems.apiService",
  ] as const;
  const solutions = [1, 2, 3];
  // const resources = [1, 2];

  return (
    <div className="mx-8 hidden w-full md:flex md:justify-between">
      <div className="flex flex-row">
        <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
          <Icons.logo className="h-8" />
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                {t("products")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {products?.map((key) => (
                    <ListItem
                      key={t(`${key}.name`)}
                      title={t(`${key}.name`)}
                      href={t(`${key}.href`)}
                      label={t(`${key}.label`)}
                    >
                      {t(`${key}.description`)}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                {t("solutions")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {solutions?.map((_, index) => (
                    <ListItem
                      key={t(`solutionsItems.item_${index + 1}.name`)}
                      title={t(`solutionsItems.item_${index + 1}.name`)}
                      href={t(`solutionsItems.item_${index + 1}.href`)}
                    >
                      {t(`solutionsItems.item_${index + 1}.description`)}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">
                {t("resource")}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {resources?.map((_, index) => (
                    <ListItem
                      key={t(`resourceItems.item_${index + 1}.name`)}
                      title={t(`resourceItems.item_${index + 1}.name`)}
                      href={t(`resourceItems.item_${index + 1}.href`)}
                    >
                      {t(`resourceItems.item_${index + 1}.description`)}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
                >
                  {t("about")}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <LocaleSwitcher />
    </div>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  label?: string;
  title: string;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, label, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="flex flex-row items-center">
              {label && (
                <span
                  className={`mr-2 flex h-4 w-7 items-center justify-center rounded-sm bg-blue-500 text-[10px] font-medium leading-none text-white`}
                >
                  {label}
                </span>
              )}
              <div className="text-sm font-medium leading-none">{title}</div>
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
