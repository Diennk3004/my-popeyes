"use client";
import clsx from "clsx";
import React, { ReactNode } from "react";
import { Link } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Switch } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import { UserOutlined, ShoppingCartOutlined, CloseOutlined, FacebookOutlined, CaretDownOutlined, PhoneOutlined, EnvironmentOutlined, LeftOutlined, YoutubeOutlined, TwitterOutlined, LinkedinOutlined, TikTokOutlined, RightOutlined, MenuOutlined, CopyOutlined, BorderInnerOutlined, SortAscendingOutlined, BgColorsOutlined } from "@ant-design/icons";
import styleHeader from "@/scss/header.module.scss";
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
  const dialogRef = React.useRef<HTMLDivElement | null>(null);
  const maskRef = React.useRef<HTMLDivElement | null>(null);
  const menuSidebarRef = React.useRef<HTMLUListElement | null>(null);
  const arrowBuyRef = React.useRef<HTMLSpanElement | null>(null);
  const arrowRentRef = React.useRef<HTMLSpanElement | null>(null);
  const menuBuyRef = React.useRef<HTMLUListElement | null>(null);
  const menuRentRef = React.useRef<HTMLUListElement | null>(null);
  const arrowSidebarRef = React.useRef<HTMLButtonElement | null>(null);
  const [isMenuBuyActive, setMenuBuyActive] = React.useState<boolean>(false);
  const [isMenuRentActive, setMenuRentActive] = React.useState<boolean>(false);
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
    if (modalRef && modalRef.current && dialogRef && dialogRef.current && maskRef && maskRef.current) {
      if (isOpenModal === true) {
        modalRef.current.classList.remove(styles.active);
        maskRef.current.classList.remove(styles.active);
        dialogRef.current.classList.remove(styles.active);
      } else {
        modalRef.current.classList.add(styles.active);
        maskRef.current.classList.add(styles.active);
        dialogRef.current.classList.add(styles.active);
      }
    }
  };
  const handleMenuBuyDown = () => {
    if (arrowBuyRef && arrowBuyRef.current && menuBuyRef && menuBuyRef.current && menuRentRef && menuRentRef.current && arrowRentRef && arrowRentRef.current) {
      if (isMenuBuyActive) {
        arrowBuyRef.current.classList.add(styles.arrowUp);
        arrowBuyRef.current.classList.remove(styles.arrowDown);
        menuBuyRef.current.classList.add(styles.active);
        menuRentRef.current.classList.remove(styles.active);
        arrowRentRef.current.classList.remove(styles.arrowUp);
        arrowRentRef.current.classList.add(styles.arrowDown);
      } else {
        arrowBuyRef.current.classList.add(styles.arrowDown);
        arrowBuyRef.current.classList.remove(styles.arrowUp);
        menuBuyRef.current.classList.remove(styles.active);
      }
      setMenuBuyActive(!isMenuBuyActive);
    }
  };
  const handleMenuRentDown = () => {
    if (arrowRentRef && arrowRentRef.current && menuRentRef && menuRentRef.current && menuBuyRef && menuBuyRef.current && arrowBuyRef && arrowBuyRef.current) {
      if (isMenuRentActive) {
        arrowRentRef.current.classList.add(styles.arrowUp);
        arrowRentRef.current.classList.remove(styles.arrowDown);
        menuRentRef.current.classList.add(styles.active);
        menuBuyRef.current.classList.remove(styles.active);
        arrowBuyRef.current.classList.remove(styles.arrowUp);
        arrowBuyRef.current.classList.add(styles.arrowDown);
      } else {
        arrowRentRef.current.classList.add(styles.arrowDown);
        arrowRentRef.current.classList.remove(styles.arrowUp);
        menuRentRef.current.classList.remove(styles.active);
      }
      setMenuRentActive(!isMenuRentActive);
    }
  };
  const handleSidebarButtonClick = (e: any) => {
    console.log("e = ", e);
  };
  /* React.useEffect(() => {
    if (menuSidebarRef && menuSidebarRef.current) {
      let li: NodeList = menuSidebarRef.current.childNodes;
      li.forEach((val: any) => {
        let button = val.getElementsByClassName(styles.sidebarButton);
        button.addEventListener("click", (e: any) => {
          console.log("e = ", e);
        });
      });
    }
  }, []); */
  /* React.useEffect(() => {
    if (arrowSidebarRef && arrowSidebarRef.current) {
      const arrowSidebarElmt = arrowSidebarRef.current;
      arrowSidebarElmt.addEventListener("click", handleSidebarButtonClick);
    }
  }, []); */
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
      <div className={clsx(["fixed", "top-0", "left-0", "h-screen", "w-screen", styles.modal])} ref={modalRef}>
        <div className={clsx(["absolute", "top-0", "left-0", "w-screen", "h-screen", styles.maskModal])} ref={maskRef}></div>
        <div className={clsx(["absolute", "top-0", "left-0", "w-80", "h-screen", "bg-white", "px-6", "py-3", styles.dialog])} ref={dialogRef}>
          <div className={clsx(["flex", "items-center", "justify-between"])}>
            <div className={clsx(["text-2xl", "font-bold"])}>
              <Logo />
            </div>
            <button role="button" className={clsx(["cursor-pointer", "text-xl"])} onClick={handleOpenModal(false)}>
              <CloseOutlined />
            </button>
          </div>
          <button type="button" className={clsx(["bg-orange-400", "w-full", "mt-5", "text-white", "font-bold", "pl-4", "pr-4", "pt-3", "pb-3", "rounded-lg", "cursor-pointer"])}>
            Đăng tin
          </button>
          <ul className={clsx(["mt-5", styles.menuSidebar])} ref={menuSidebarRef}>
            <li>
              <span className={clsx(["block", "flex", "justify-between", "items-center"])}>
                <Link href={{ pathname: "/" }}>Mua</Link>
                <button type="button" className={clsx(["cursor-pointer", styles.sidebarButton])} onClick={handleMenuBuyDown}>
                  <span className={clsx([styles.arrowDown])} ref={arrowBuyRef}>
                    &nbsp;
                  </span>
                </button>
              </span>
              <ul ref={menuBuyRef}>
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
              <span className={clsx(["block", "flex", "justify-between", "items-center"])}>
                <Link href={{ pathname: "/" }}>Thuê</Link>
                <button type="button" className={clsx(["cursor-pointer", styles.sidebarButton])} onClick={handleMenuRentDown}>
                  <span className={clsx([styles.arrowDown])} ref={arrowRentRef}>
                    &nbsp;
                  </span>
                </button>
              </span>
              <ul ref={menuRentRef}>
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
              <Link href={{ pathname: "/" }}>Kho dự án</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Vay thế chấp</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Đối tá</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Địa chỉ mới</Link>
            </li>
          </ul>
        </div>
      </div>
      {banners && (
        <div className={clsx(["h-180", "max-lg:h-90", "max-md:h-50", "relative", styles.sliders])}>
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
      <div className={clsx([styles.sectionIntro, "relative", "mt-10"])}>
        <div className={clsx(["max-w-6xl", "ml-auto", "mr-auto", "relative", "px-4"])}>
          <h3 className={clsx(["text-gray-700", "text-2xl"])}>Bất động sản dành cho bạn</h3>
          <div className={clsx(["grid", "grid-cols-4", "max-lg:grid-cols-2", "gap-8", "mt-5"])}>
            {Array.from(Array(8), () => Math.floor(Math.random() * 100) + 1).map((elmt: number, idx: number) => {
              return (
                <div key={`idx-${idx}`} className={clsx([])}>
                  <Image alt="Website" src="/moto.jpg" width={100} height={100} className={clsx(["w-full", "ml-auto", "mr-auto"])} />
                  <div className={clsx(["shadow-md", "px-4", "py-4"])}>
                    <div className={clsx(["text-red-700", "text-sm"])}>Gia đình tôi cần cho thuê căn hộ 2PN2WC tại Sun Grand City Thụy Khuê giá 24tr/tháng, LH</div>
                    <div className={clsx(["flex", "justify-start", "gap-x-5", "mt-2", "text-sm"])}>
                      <div>Giá thỏa thuận</div>
                      <div>90m2</div>
                    </div>
                    <div className={clsx(["mt-2", "text-sm"])}>
                      <div>Tây Hồ, Hà Nội</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <h3 className={clsx(["text-gray-700", "text-2xl", "mt-10"])}>Bất động sản theo địa điểm</h3>
          <div className={clsx(["flex", "max-sm:block", "mt-5", "gap-x-6"])}>
            <div className={clsx(["w-full", "relative"])}>
              <Image src="/HCM-web-1.jpg" alt="Website" width={300} height={300} className={clsx([["w-full"]])} />
              <div className={clsx(["absolute", "top-0", "left-0", "w-full", "h-full", styles.bgDiem])}></div>
              <div className={clsx(["absolute", "top-0", "left-0", "text-white", "w-full", "py-5", "px-5"])}>
                <h3>
                  <Link href={{ pathname: "/" }}>TP. Hồ Chí Minh</Link>
                </h3>
                <div>70.980 tin đăng</div>
              </div>
            </div>
            <div className={clsx(["w-full", "grid", "grid-cols-2", "gap-6", "max-sm:mt-5"])}>
              {Array.from(Array(4), () => Math.floor(Math.random() * 100) + 1).map((elmt: number, idx: number) => {
                return (
                  <div key={`idx-${idx}`} className={clsx(["relative", "w-full", "h-full"])}>
                    <Image src="/HN-web-1.jpg" width={300} height={300} className={clsx([["w-full", "h-full"]])} alt="Website" />
                    <div className={clsx(["absolute", "top-0", "left-0", "w-full", "h-full", styles.bgDiem])}></div>
                    <div className={clsx(["absolute", "top-0", "left-0", "text-white", "w-full", "py-5", "px-5"])}>
                      <h3>
                        <Link href={{ pathname: "/" }}>TP. Hồ Chí Minh</Link>
                      </h3>
                      <div>70.980 tin đăng</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={clsx(["mt-10", "mb-10", "max-lg:mt-0", "ml-auto", "mr-auto", "max-w-6xl", "px-4", "gap-x-4", "grid", "grid-cols-4", "max-lg:grid-cols-2"])}>
        <div className={clsx(["max-lg:mt-10"])}>
          <div className={clsx(["text-left"])}>
            <Link href={{ pathname: "/" }} className={clsx(["font-bold", "text-3xl", "font-(family-name:--font-jost)"])}>
              <Logo />
            </Link>
          </div>
          <div className={clsx(["mt-3"])}>Tìm Nhà Thấy Địa Chỉ Và Giá</div>
          <div className={clsx(["mt-3", "font-bold"])}>CÔNG TY TNHH ĐỊA ỐC MOSNO</div>
          <div className={clsx(["mt-3"])}>
            <EnvironmentOutlined />
            &nbsp;
            <span>29 Hoàng Việt, phường Tân Sơn Nhất, TP.HCM</span>
          </div>
          <div className={clsx(["mt-3"])}>
            &nbsp;
            <PhoneOutlined /> <span>1900 252 307</span>
          </div>
        </div>
        <div className={clsx(["max-lg:mt-10"])}>
          <h3 className={clsx(["relative", styles.footerTitle])}>Về MOSNO</h3>
          <ul className={clsx([styles.footerMenu])}>
            <li>
              <Link href={{ pathname: "/" }}>Giới thiệu</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Tuyển dụng</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Tin tức BĐS</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Tử vi phong thủy</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Quyền lợi người mua - thuê</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Quyền lợi môi giới</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Quyền lợi chủ nhà</Link>
            </li>
          </ul>
        </div>
        <div className={clsx(["max-lg:mt-10"])}>
          <h3 className={clsx(["relative", styles.footerTitle])}>Cộng đồng</h3>
          <ul className={clsx([styles.footerMenu])}>
            <li>
              <Link href={{ pathname: "/" }}>Tiếp nhận phản ánh</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Danh sách phản ánh</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Cơ chế giải quyết tranh chấp</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Cộng đồng môi giới</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Quy chế hoạt động</Link>
            </li>
            <li>
              <Link href={{ pathname: "/" }}>Chính sách bảo mật</Link>
            </li>
          </ul>
        </div>
        <div className={clsx(["max-lg:mt-10"])}>
          <h3 className={clsx(["relative", styles.footerTitle])}>Hỗ trợ khách hàng</h3>
          <div className={clsx(["flex", "gap-x-4", "text-2xl"])}>
            <FacebookOutlined />
            <YoutubeOutlined />
            <TikTokOutlined />
            <LinkedinOutlined />
            <TwitterOutlined />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
