"use client";
import clsx from "clsx";
import React from "react";
import { Link } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { UserOutlined, ShoppingCartOutlined, CloseOutlined, LeftOutlined, RightOutlined, MenuOutlined, CopyOutlined, BorderInnerOutlined, SortAscendingOutlined, BgColorsOutlined } from "@ant-design/icons";
import styleHeader from "@/scss/header.module.scss";
import styles from "@/scss/homepage.module.scss";
import { produce } from "immer";
type IBanner = {
  img: string;
  active: boolean;
};
type INumber = {
  a: number;
  b: number;
};
const HomePage = () => {
  const t = useTranslations("page_translate");
  const bannerRef = React.useRef<HTMLDivElement | null>(null);
  const [directionSlider, setDirectionSlider] = React.useState<string>("next");
  const [banners, setBanners] = React.useState<IBanner[]>([
    { img: "banner-1.jpg", active: true },
    { img: "banner-2.jpg", active: false },
    { img: "banner-3.jpg", active: false },
    { img: "banner-4.jpg", active: false },
    { img: "banner-5.jpg", active: false }
  ]);
  const handleSliderChange = (direction: string) => () => {
    const nextState: IBanner[] = produce(banners, (draft) => {
      for (var i = 0; i < draft.length; i++) {
        if (draft[i].active === true) {
          draft[i].active = false;
          if (direction === "next") {
            if (i + 1 < draft.length) {
              draft[i + 1].active = true;
              break;
            } else {
              draft[0].active = true;
              break;
            }
          } else {
            if (i - 1 >= 0) {
              draft[i - 1].active = true;
              break;
            } else {
              draft[draft.length - 1].active = true;
              break;
            }
          }
        }
      }
    });
    setBanners(nextState);
    setDirectionSlider(direction);
  };
  return (
    <React.Fragment>
      <header className={clsx(["bg-orange-400", "pl-45", "pr-45", "max-md:pl-10", "max-md:pr-10", "max-md:pt-2", "max-md:pb-2", "flex", "justify-between", "items-center"])}>
        <div>
          <div className={clsx(["text-white", "text-center", "font-bold", "max-md:text-sm", "text-2xl", "font-(family-name:--font-jost)"])}>GÀ RÁN</div>
          <div className={clsx(["text-white", "font-bold", "max-md:text-sm", "text-2xl", "font-(family-name:--font-jost)"])}>POPEYES</div>
        </div>
        <ul className={clsx(["flex", "max-md:hidden", "gap-x-3", "h-full", styleHeader.headerList])}>
          <li>
            <Link href={{ pathname: "/" }} className={clsx(["no-underline", "uppercase", "font-bold", "text-white", "block"])}>
              {t("Promotions")}
            </Link>
          </li>
          <li>
            <Link href={{ pathname: "/" }} className={clsx(["no-underline", "uppercase", "font-bold", "text-white", "block"])}>
              {t("Menu")}
            </Link>
          </li>
          <li>
            <Link href={{ pathname: "/" }} className={clsx(["no-underline", "uppercase", "font-bold", "text-white", "block"])}>
              {t("Our stores")}
            </Link>
          </li>
          <li>
            <Link href={{ pathname: "/" }} className={clsx(["no-underline", "uppercase", "font-bold", "text-white", "block"])}>
              {t("Order tracking")}
            </Link>
          </li>
          <li>
            <Link href={{ pathname: "/" }} className={clsx(["no-underline", "uppercase", "font-bold", "text-white", "block"])}>
              {t("Party")}
            </Link>
          </li>
        </ul>
        <div className={clsx(["flex", "gap-x-5", "text-white", "items-center", "max-md:hidden"])}>
          <div className={clsx(["text-2xl"])}>VI</div>
          <Link href={{ pathname: "/" }} className={clsx(["text-3xl"])}>
            <UserOutlined />
          </Link>
          <Link href={{ pathname: "/" }} className={clsx(["text-3xl"])}>
            <ShoppingCartOutlined />
          </Link>
        </div>
        <ul className={clsx(["hidden", "max-md:flex", "grow", "gap-x-10", "text-white", "text-3xl", "max-w-sm"])}>
          <li className={clsx(["grow"])}>
            <Link href={{ pathname: "/" }}>
              <ShoppingCartOutlined />
            </Link>
          </li>
          <li className={clsx(["grow"])}>
            <Link href={{ pathname: "/" }}>
              <SortAscendingOutlined />
            </Link>
          </li>
          <li className={clsx(["grow"])}>
            <Link href={{ pathname: "/" }}>
              <BorderInnerOutlined />
            </Link>
          </li>
          <li className={clsx(["grow"])}>
            <Link href={{ pathname: "/" }}>
              <BgColorsOutlined />
            </Link>
          </li>
          <li className={clsx(["grow"])}>
            <Link href={{ pathname: "/" }}>
              <UserOutlined />
            </Link>
          </li>
        </ul>
      </header>
      {banners && (
        <div className={clsx(["max-w-640", "h-180", "max-lg:h-90", "max-md:h-50", "relative", styles.sliders])}>
          <div className={clsx(["relative", "w-full", "h-full", "z-1", styles.banners])}>
            {banners.map((item: IBanner, idx: number) => {
              return (
                <div key={`banner-slide-${idx}`} style={{ zIndex: item.active ? 99 : idx }} className={clsx(["absolute", "w-full", "h-full", "top-0", "left-0", styles.slide, item.active === true ? "opacity-100" : "opacity-0", item.active && directionSlider === "prev" && styles.activeSliderPrev, item.active && directionSlider === "next" && styles.activeSliderNext])}>
                  <Image alt="Website" width={1700} height={717} src={`/${item.img}`} className={clsx(["h-full", "w-full", "ml-auto", "mr-auto"])} />
                  <div className={clsx(["absolute", "top-0", "left-0", "w-full", "h-full", "shadow-md", item.active && styles.mask])}></div>
                </div>
              );
            })}
          </div>
          <div className={clsx(["absolute", "top-0", "left-0", "w-20", "h-full", "flex", "justify-center", "items-center", "z-2"])}>
            <button className={clsx(["w-10", "h-10", "flex", "justify-center", "items-center", "rounded-3xl", "border-2", "border-white", "cursor-pointer", "text-white", "font-bold"])} onClick={handleSliderChange("prev")}>
              <LeftOutlined />
            </button>
          </div>
          <div className={clsx(["absolute", "top-0", "right-0", "w-20", "h-full", "flex", "justify-center", "items-center", "z-3"])}>
            <button className={clsx(["w-10", "h-10", "flex", "justify-center", "items-center", "rounded-3xl", "border-2", "border-white", "cursor-pointer", "text-white", "font-bold"])} onClick={handleSliderChange("next")}>
              <RightOutlined />
            </button>
          </div>
        </div>
      )}
      <div className={clsx(["max-w-3xl", "mt-3", "ml-auto", "mr-auto"])}>
        <div className={clsx(["flex", "justify-center", "gap-x-5"])}>
          <div className={clsx(["bg-orange-400", "rounded-t-xl", "font-bold", "text-white", "text-lg", "pt-1", "pb-1", "pl-5", "pr-5"])}>{t("Delivery")}</div>
          <div className={clsx(["bg-gray-300", "rounded-t-xl", "font-bold", "text-white", "text-lg", "pt-1", "pb-1", "pl-5", "pr-5"])}>{t("Pickup")}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
