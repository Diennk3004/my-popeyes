"use client";
import clsx from "clsx";
import React from "react";
import { Link } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Switch } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { UserOutlined, ShoppingCartOutlined, CloseOutlined, LeftOutlined, RightOutlined, MenuOutlined, CopyOutlined, BorderInnerOutlined, SortAscendingOutlined, BgColorsOutlined } from "@ant-design/icons";
import styleHeader from "@/scss/header.module.scss";
import stylesModalDialog from "@/scss/modal-dialog.module.scss";
import styles from "@/scss/homepage.module.scss";
import { produce } from "immer";
import { Logo } from "@/components";
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
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  const [isOpenMenuMobile, setOpenMenuMobile] = React.useState<boolean>(false);
  const [directionSlider, setDirectionSlider] = React.useState<string>("next");
  const [isOpenModal, setOpenModal] = React.useState<boolean>(false);
  const [banners, setBanners] = React.useState<IBanner[]>([{ img: "banner-homepage-khang-dien-3.png", active: true }]);
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
  const handleOpenModal = (val: boolean) => () => {
    setOpenModal(val);
    if (modalRef && modalRef.current) {
      if (isOpenModal === true) {
        modalRef.current.style.display = "hidden";
        modalRef.current.style.opacity = "0";
        modalRef.current.style.zIndex = "-1";
      } else {
        modalRef.current.style.display = "block";
        modalRef.current.style.opacity = "1";
        modalRef.current.style.zIndex = "1";
      }
    }
  };
  return (
    <React.Fragment>
      <header className={clsx(["bg-white", "pl-5", "pr-5", "pt-8", "pb-8", "max-lg:pt-3", "max-lg:pb-3", "flex", "justify-between", "items-center"])}>
        <div className={clsx(["w-[30%]"])}>
          <Link href={{ pathname: "/" }} className={clsx(["max-lg:hidden", "font-bold", "text-3xl", "font-(family-name:--font-jost)"])}>
            <Logo />
          </Link>
          <button role="button" className={clsx(["hidden", "max-lg:block", "cursor-pointer", "text-xl"])} onClick={handleOpenModal(true)}>
            <MenuOutlined />
          </button>
        </div>
        <div className={clsx(["grow", "flex", "justify-center"])}>
          <Link href={{ pathname: "/" }} className={clsx(["hidden", "max-lg:block", "font-bold", "text-3xl"])}>
            <Logo />
          </Link>
          <ul className={clsx(["max-lg:hidden", "flex", "gap-x-3", "h-full", styleHeader.headerList])}>
            <li>
              <Link href={{ pathname: "/" }} className={clsx(["no-underline", "capitalize", "font-bold", "text-black", "block"])}>
                Mua
              </Link>
              <ul className={clsx(["hidden"])}>
                <li>
                  <Link href={{ pathname: "/" }}>Nhà mặt tiền</Link>
                </li>
                <li>
                  <Link href={{ pathname: "/" }}>Nhà hẻm</Link>
                </li>
                <li>
                  <Link href={{ pathname: "/" }}>Căn hộ chung cư</Link>
                </li>
                <li>
                  <Link href={{ pathname: "/" }}>Đất</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={{ pathname: "/" }} className={clsx(["no-underline", "capitalize", "font-bold", "text-black", "block"])}>
                Thuê
              </Link>
              <ul className={clsx(["hidden"])}>
                <li>
                  <Link href={{ pathname: "/" }}>Nhà</Link>
                </li>
                <li>
                  <Link href={{ pathname: "/" }}>Căn hộ chung cư</Link>
                </li>
                <li>
                  <Link href={{ pathname: "/" }}>Phòng trọ</Link>
                </li>
                <li>
                  <Link href={{ pathname: "/" }}>Đất</Link>
                </li>
                <li>
                  <Link href={{ pathname: "/" }}>Mặt bằng</Link>
                </li>
                <li>
                  <Link href={{ pathname: "/" }}>Văn phòng</Link>
                </li>
                <li>
                  <Link href={{ pathname: "/" }}>Kho, nhà xưởng</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={{ pathname: "/" }} className={clsx(["no-underline", "capitalize", "font-bold", "text-black", "block"])}>
                Kho dự án
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }} className={clsx(["no-underline", "capitalize", "font-bold", "text-black", "block"])}>
                Vay thế chấp
              </Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }} className={clsx(["no-underline", "capitalize", "font-bold", "text-black", "block"])}>
                Đối tác
              </Link>
            </li>
          </ul>
        </div>
        <div className={clsx(["w-[30%]", "flex", "gap-x-3", "items-center", "justify-end"])}>
          <div className={clsx(["text-lg", "max-lg:hidden"])}>Địa chỉ mới</div>
          <div className={clsx(["max-lg:hidden"])}>
            <Switch defaultChecked className={clsx(["max-lg:hidden"])} />
          </div>
          <button type="button" className={clsx(["max-lg:hidden", "bg-orange-400", "text-white", "font-bold", "pl-4", "pr-4", "pt-2", "pb-2", "rounded-lg", "cursor-pointer"])}>
            Đăng tin
          </button>
          <div className={clsx(["border", "border-gray-300", "rounded-full", "w-10", "h-10", "flex", "justify-center", "items-center", "cursor-pointer", "text-gray-300"])}>
            <UserOutlined />
          </div>
        </div>
      </header>
      <div className={clsx(["fixed", "top-0", "left-0", "h-screen", "w-screen", "z-4", styles.maskModal])}>
        <div className={clsx(["w-80", "h-screen", "bg-white", "px-6", "py-3"])}>
          <div className={clsx(["flex", "items-center", "justify-between"])}>
            <div className={clsx(["text-2xl", "font-bold"])}>
              <Logo />
            </div>
            <button role="button" className={clsx(["cursor-pointer", "text-xl"])}>
              <CloseOutlined />
            </button>
          </div>
          <button type="button" className={clsx(["bg-orange-400", "w-full", "mt-5", "text-white", "font-bold", "pl-4", "pr-4", "pt-3", "pb-3", "rounded-lg", "cursor-pointer"])}>
            Đăng tin
          </button>
          <ul className={clsx(["mt-5", styles.menuSidebar])}>
            <li>
              <Link href={{ pathname: "/" }}>Mua</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Thuê</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Kho dự án</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Vay thế chấp</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Đối tác</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Địa chỉ mới</Link>
            </li>
          </ul>
        </div>
      </div>
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
    </React.Fragment>
  );
};

export default HomePage;
