"use client";
import styles from "@/scss/mate.module.scss";
import { Link } from "@/utils";
import { MenuOutlined, CloseOutlined, CaretDownOutlined, MinusOutlined, ArrowLeftOutlined, LeftOutlined, RightOutlined, ArrowUpOutlined } from "@ant-design/icons";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { produce } from "immer";
type IPolicy = {
  title: string;
  img: string;
};
type IFaq = {
  title: string;
  content: string;
  expanded: boolean;
};
type IAnimal = {
  title: string;
  content: string;
  img: string;
};
type IBanner = {
  img: string;
  active: boolean;
};
const Home = () => {
  const products: string[] = ["modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg", "modamate-1.jpg"];
  const policies: IPolicy[] = [
    { title: "Documentation", img: "policy-1.png" },
    { title: "License Policy", img: "policy-2.png" },
    { title: "Refund Policy", img: "policy-3.png" },
    { title: "Our Porfolio", img: "policy-4.png" },
    { title: "Full Theme Features", img: "policy-5.png" }
  ];
  const animals: IAnimal[] = [
    { title: "Clay Toy", content: "Eu feugiat pretium nibh ipsum sed augue lacus", img: "animal-1.jpg" },
    { title: "Running Horse", content: "Donec sodales sagittis magna sed consequat", img: "animal-2.jpg" },
    { title: "Bird Nest", content: "Curabitur ullamcorper ultricies nisi nam eget", img: "animal-3.jpg" },
    { title: "Wooden Toy", content: "Maecenas nec odio et ante tincidunt tempus", img: "animal-4.jpg" },
    { title: "Elephant", content: "Donec mollis hendrerit risus phasellus nec", img: "animal-5.jpg" }
  ];
  const [faqs, setFaqs] = React.useState<IFaq[]>([
    { title: "I bought the wrong theme, can I get a refund?", content: "When purchasing the wrong theme, please do not download it and immediately submit a refund request. We will check the theme status, if you haven’t downloaded the theme we will refund you. If you have downloaded the theme, you will not receive a refund. Even if we agree to refund you and during that time you download the theme, the refund decision will be reversed.", expanded: false },
    { title: "What Is The Support Time?", content: "All of your emails will be reviewed and checked manually carefully. However, based on the number support tickets and the nature of the request itself, the response time can be up to 12 – 24 hours (Monday to Friday)", expanded: false },
    { title: "After installing the theme, will my site be installed with sample data?", content: "Images used and included in this theme are for demo purpose only. COMMERCIAL USAGE IS NOT ALLOWED AND IS AT YOUR OWN RISK.", expanded: false },
    { title: "Why am I not getting a response after sending support?", content: "Normally we never respond more than 12 - 24 hours after you submit a support request (Except Saturday and Sunday). However, there are some cases where we have responded but customers reflect in the comment that they have not received any emails. Please check some issues:", expanded: false },
    { title: "Is the license I bought used forever or has a monthly fee ?", content: "You only need to pay once, no monthly payments", expanded: false },
    { title: "Do I have to pay for any apps you integrate in the theme?", content: "Save $3200+ with our built-in theme features for Free.You don’t need to pay more for additional Apps", expanded: false }
  ]);
  const productItemRef = React.useRef<HTMLDivElement | null>(null);
  const labelRef = React.useRef<HTMLDivElement | null>(null);
  const ulRef = React.useRef<HTMLUListElement>(null);
  const bannerRef = React.useRef<HTMLDivElement | null>(null);
  const headerRef = React.useRef<HTMLDivElement | null>(null);
  const menuMobileRef = React.useRef<HTMLDivElement | null>(null);
  const animalsRef = React.useRef<HTMLDivElement | null>(null);
  const box1Ref = React.useRef<HTMLDivElement | null>(null);
  const box2Ref = React.useRef<HTMLDivElement | null>(null);
  const box3Ref = React.useRef<HTMLDivElement | null>(null);
  const box4Ref = React.useRef<HTMLDivElement | null>(null);
  const box5Ref = React.useRef<HTMLDivElement | null>(null);
  const [banners, setBanners] = React.useState<IBanner[]>([
    { img: "banner-1.jpg", active: true },
    { img: "banner-2.jpg", active: false },
    { img: "banner-3.jpg", active: false },
    { img: "banner-4.jpg", active: false },
    { img: "banner-5.jpg", active: false }
  ]);
  const [isOpenMenuMobile, setOpenMenuMobile] = React.useState<boolean>(false);
  const [directionSlider, setDirectionSlider] = React.useState<string>("next");
  React.useEffect(() => {
    let offsetView: number = window.scrollY + window.innerHeight;
    let childNodes = null;
    let elmt: HTMLElement | null = null;
    let elmtOffsetTop: number = 0;
    if (productItemRef && productItemRef.current) {
      childNodes = productItemRef.current.children;
      if (childNodes) {
        for (let i = 0; i < childNodes.length; i++) {
          elmt = childNodes.item(i) as HTMLElement | null;
          if (elmt) {
            elmtOffsetTop = elmt.offsetTop;
            if (offsetView >= elmtOffsetTop) {
              elmt.classList.add(styles.productOnScroll);
            }
          }
        }
      }
    }
    if (labelRef && labelRef.current) {
      if (offsetView >= labelRef.current.offsetTop) {
        labelRef.current.classList.add(styles.sloganOnScroll);
      }
    }
    if (ulRef && ulRef.current) {
      if (offsetView >= ulRef.current.offsetTop) {
        ulRef.current.classList.add(styles.ulOnScroll);
      }
    }
    if (bannerRef && bannerRef.current) {
      if (offsetView >= bannerRef.current.offsetTop) {
        bannerRef.current.classList.add(styles.bannerOnScroll);
      }
    }
    if (box1Ref && box1Ref.current) {
      if (offsetView >= box1Ref.current.offsetTop) {
        box1Ref.current.classList.add(styles.box1);
      }
    }
    if (box2Ref && box2Ref.current) {
      if (offsetView >= box2Ref.current.offsetTop) {
        box2Ref.current.classList.add(styles.box2);
      }
    }
    if (box2Ref && box3Ref.current) {
      if (offsetView >= box3Ref.current.offsetTop) {
        box3Ref.current.classList.add(styles.box3);
      }
    }
    if (box2Ref && box4Ref.current) {
      if (offsetView >= box4Ref.current.offsetTop) {
        box4Ref.current.classList.add(styles.box4);
      }
    }
    if (box2Ref && box5Ref.current) {
      if (offsetView >= box5Ref.current.offsetTop) {
        box5Ref.current.classList.add(styles.box5);
      }
    }
    if (animalsRef && animalsRef.current) {
      if (offsetView >= animalsRef.current.offsetTop) {
        animalsRef.current.classList.add(styles.animalsOnScroll);
      }
    }
    const onScroll = () => {
      offsetView = window.scrollY + window.innerHeight;
      if (productItemRef && productItemRef.current) {
        childNodes = productItemRef.current.children;
        if (childNodes) {
          for (let i = 0; i < childNodes.length; i++) {
            elmt = childNodes.item(i) as HTMLElement | null;
            if (elmt) {
              elmtOffsetTop = elmt.offsetTop;
              if (offsetView >= elmtOffsetTop) {
                elmt.classList.add(styles.productOnScroll);
              }
            }
          }
        }
      }
      if (headerRef && headerRef.current) {
        if (headerRef.current.children) {
          let headerChild: HTMLElement | null = headerRef.current.children.item(0) as HTMLElement | null;
          let headerChildWidth: number = 0;
          if (window.scrollY > headerRef.current.clientHeight) {
            if (headerChild) {
              headerChildWidth = headerChild.clientWidth;
              headerChild.classList.remove("pt-10", "pb-10");
              headerChild.classList.add("bg-linear-to-r", "from-sky-900", "to-sky-400", "shadow-2xl", "border-b", "border-sky-400", "pt-5", "pb-5");
              headerChild.style.width = `${headerChildWidth}px`;
            }
            headerRef.current.classList.add("fixed", "w-full", "z-9000", "flex", "justify-center", "left-0", "top-0");
          } else {
            headerRef.current.classList.remove("fixed", "w-full", "z-9000", "flex", "justify-center", "left-0", "top-0");
            if (headerChild) {
              headerChildWidth = headerChild.clientWidth;
              headerChild.classList.remove("bg-linear-to-r", "from-sky-900", "to-sky-400", "shadow-2xl", "border-b", "border-sky-400", "pt-5", "pb-5");
              headerChild.classList.add("pt-10", "pb-10");
              headerChild.style.width = "100%";
            }
          }
        }
      }
      if (box1Ref && box1Ref.current) {
        if (offsetView >= box1Ref.current.offsetTop) {
          box1Ref.current.classList.add(styles.box1);
        }
      }
      if (box2Ref && box2Ref.current) {
        if (offsetView >= box2Ref.current.offsetTop) {
          box2Ref.current.classList.add(styles.box2);
        }
      }
      if (box2Ref && box3Ref.current) {
        if (offsetView >= box3Ref.current.offsetTop) {
          box3Ref.current.classList.add(styles.box3);
        }
      }
      if (box2Ref && box4Ref.current) {
        if (offsetView >= box4Ref.current.offsetTop) {
          box4Ref.current.classList.add(styles.box4);
        }
      }
      if (box2Ref && box5Ref.current) {
        if (offsetView >= box5Ref.current.offsetTop) {
          box5Ref.current.classList.add(styles.box5);
        }
      }
      if (animalsRef && animalsRef.current) {
        if (offsetView >= animalsRef.current.offsetTop) {
          animalsRef.current.classList.add(styles.animalsOnScroll);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const handleOpenMenuMobile = () => {
    setOpenMenuMobile(!isOpenMenuMobile);
    if (menuMobileRef && menuMobileRef.current) {
      if (isOpenMenuMobile) {
        menuMobileRef.current.classList.remove(styles.active);
      } else {
        menuMobileRef.current.classList.add(styles.active);
      }
    }
  };
  const handleFaqClick = (idx: number) => () => {
    const nextState: IFaq[] = produce(faqs, (draft) => {
      draft.forEach((elmt: IFaq, i: number) => {
        if (idx === i) {
          draft[idx].expanded = !draft[idx].expanded;
        } else {
          elmt.expanded = false;
        }
      });
    });
    setFaqs(nextState);
  };
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
  const handleScrollToBottom = () => {
    if (animalsRef && animalsRef.current) {
      animalsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <React.Fragment>
      <header className={clsx(["h-screen", "bg-linear-to-br", "from-sky-900", "to-sky-400"])}>
        <div ref={headerRef}>
          <div className={clsx(["flex", "gap-x-50", "max-xl:gap-x-10", "pt-10", "pb-10", "pl-20", "pr-20"])}>
            <div className={clsx(["w-31", "max-md:w-full", "max-md:flex", "max-md:justify-center"])}>
              <Link href={{ pathname: "/" }}>
                <Image src="/logo.png" alt="My website" width={123} height={24} />
              </Link>
            </div>
            <ul className={clsx(["flex", "max-md:hidden", "items-center", "gap-x-5", "text-xs", "text-white", "font-bold", "cursor-pointer"])}>
              <li>
                <Link href={{ pathname: "/" }} className={clsx(["hover:text-sky-400"])}>
                  Demos
                </Link>
              </li>
              <li>
                <button className={clsx(["hover:text-sky-400", "cursor-pointer"])} onClick={handleScrollToBottom}>
                  Collection Pages
                </button>
              </li>
              <li>
                <Link href={{ pathname: "/" }} className={clsx(["hover:text-sky-400"])}>
                  Product Pages
                </Link>
              </li>
              <li>
                <Link href={{ pathname: "/" }} className={clsx(["hover:text-sky-400"])}>
                  Responsive Layout
                </Link>
              </li>
              <li>
                <Link href={{ pathname: "/" }} className={clsx(["hover:text-sky-400"])}>
                  Features
                </Link>
              </li>
              <li>
                <Link href={{ pathname: "/" }} className={clsx(["hover:text-sky-400"])}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href={{ pathname: "/" }} className={clsx(["hover:text-sky-400"])}>
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={clsx(["w-full", "pl-20", "pr-20", "max-md:pl-4", "max-md:pr-4", "mt-20", "flex", "max-md:block"])}>
          <div className={clsx(["w-150", "max-md:w-full"])}>
            <div ref={labelRef}>
              <div className={clsx(["text-white", "font-bold", "text-2xl"])}>The Multipurpose</div>
              <div className={clsx(["text-white", "font-bold", "text-2xl"])}>Premium Shopify Theme</div>
            </div>
            <ul className={clsx(["mt-10", "font-bold", "text-sm", styles.introduce])} ref={ulRef}>
              <li>Shopify OS 2.0</li>
              <li>NO coding knowledge required</li>
              <li>NO Monthly charge</li>
              <li>High Converting Shopify Theme</li>
              <li>Maximum Customizability</li>
              <li>Premium Support</li>
            </ul>
          </div>
          <div className={clsx(["grow", "flex", "justify-end", "max-md:justify-center"])} ref={bannerRef}>
            <Image src="/slide1-2.png" alt="Website" width={864} height={644} />
          </div>
        </div>
      </header>
      {/* Begin Menu Mobile */}
      <div className={clsx(["hidden", "max-md:block", "fixed", "top-0", "left-0", "z-9001", "w-full", "h-screen", "bg-sky-800", "text-white", styles.menuMobile])} ref={menuMobileRef}>
        <div className={clsx(["flex", "justify-center", "mt-20", "mb-10"])}>
          <Link href={{ pathname: "/" }}>
            <Image src="/logo.png" alt="My website" width={123} height={24} className={clsx(["w-30"])} />
          </Link>
        </div>
        <ul>
          <li className={clsx(["font-bold", "text-md"])}>
            <Link href={{ pathname: "/" }}>Demos</Link>
          </li>
          <li className={clsx(["font-bold", "text-md"])}>
            <Link href={{ pathname: "/" }}>Collection Pages</Link>
          </li>
          <li className={clsx(["font-bold", "text-md"])}>
            <Link href={{ pathname: "/" }}>Product Pages</Link>
          </li>
          <li className={clsx(["font-bold", "text-md"])}>
            <Link href={{ pathname: "/" }}>Responsive Layout</Link>
          </li>
          <li className={clsx(["font-bold", "text-md"])}>
            <Link href={{ pathname: "/" }}>Features</Link>
          </li>
          <li className={clsx(["font-bold", "text-md"])}>
            <Link href={{ pathname: "/" }}>FAQs</Link>
          </li>
          <li className={clsx(["font-bold", "text-md"])}>
            <Link href={{ pathname: "/" }}>Documentation</Link>
          </li>
        </ul>
      </div>
      {isOpenMenuMobile ? (
        <button role="button" className={clsx(["hidden", "max-md:block", "fixed", "top-3", "right-3", "z-9001", "text-2xl", "text-white"])} onClick={handleOpenMenuMobile}>
          <CloseOutlined />
        </button>
      ) : (
        <button role="button" className={clsx(["hidden", "max-md:block", "fixed", "top-3", "right-3", "z-9001", "text-2xl", "text-white"])} onClick={handleOpenMenuMobile}>
          <MenuOutlined />
        </button>
      )}
      {/* End Menu Mobile */}
      <div className={clsx(["bg-gray-100", "pt-20", "pb-20", "pl-4", "pr-4"])}>
        {products.length > 0 && (
          <div className={clsx(["max-w-7xl", "ml-auto", "mr-auto", "grid", "grid-cols-3", "max-md:grid-cols-2", "gap-x-7", "gap-y-30"])} ref={productItemRef}>
            {products.map((item: string, idx: number) => {
              return (
                <div key={`product-${idx}`} className={clsx(["bg-white", "block", "pl-4", "pr-4", "pt-4", "pb-4", "rounded-xl", "shadow-2xl", styles.productItem])}>
                  <Link href={{ pathname: "/" }}>
                    <Image src={`/${item}`} alt="Website" width={440} height={540} />
                    <h3 className={clsx(["mt-8", "font-bold", "text-sm"])}>ModaMate - Home 1</h3>
                    <div className={clsx(["mt-4", "text-xs", "text-gray-600"])}>Clothes and Fashion Shopify Theme</div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className={clsx(["pl-4", "pr-4", "pt-20", "pb-20"])}>
        {policies.length > 0 && (
          <div className={clsx(["max-w-7xl", "ml-auto", "mr-auto", "grid", "grid-cols-5", "max-lg:grid-cols-3", "max-md:grid-cols-2", "gap-x-10", "gap-y-10", "justify-center"])}>
            <div className={clsx(["bg-gray-100", "pt-15", "pb-7", "flex", "flex-col", "justify-center", "items-center", "gap-y-8", "rounded-2xl", styles.box])} ref={box1Ref}>
              <div className={clsx([styles.img])}>
                <Link href={{ pathname: "/" }}>
                  <Image src="/policy-1.png" alt="Website" width={80} height={80} />
                </Link>
              </div>
              <h3 className={clsx(["font-bold", "text-sm"])}>Documentation</h3>
            </div>
            <div className={clsx(["bg-gray-100", "pt-15", "pb-7", "flex", "flex-col", "justify-center", "items-center", "gap-y-8", "rounded-2xl", styles.box])} ref={box2Ref}>
              <div className={clsx([styles.img])}>
                <Link href={{ pathname: "/" }}>
                  <Image src="/policy-2.png" alt="Website" width={80} height={80} />
                </Link>
              </div>
              <h3 className={clsx(["font-bold", "text-sm"])}>License Policy</h3>
            </div>
            <div className={clsx(["bg-gray-100", "pt-15", "pb-7", "flex", "flex-col", "justify-center", "items-center", "gap-y-8", "rounded-2xl", styles.box])} ref={box3Ref}>
              <div className={clsx([styles.img])}>
                <Link href={{ pathname: "/" }}>
                  <Image src="/policy-3.png" alt="Website" width={80} height={80} />
                </Link>
              </div>
              <h3 className={clsx(["font-bold", "text-sm"])}>Refund Policy</h3>
            </div>
            <div className={clsx(["bg-gray-100", "pt-15", "pb-7", "flex", "flex-col", "justify-center", "items-center", "gap-y-8", "rounded-2xl", styles.box])} ref={box4Ref}>
              <div className={clsx([styles.img])}>
                <Link href={{ pathname: "/" }}>
                  <Image src="/policy-4.png" alt="Website" width={80} height={80} />
                </Link>
              </div>
              <h3 className={clsx(["font-bold", "text-sm"])}>Our Portfolio</h3>
            </div>
            <div className={clsx(["bg-gray-100", "pt-15", "pb-7", "flex", "flex-col", "justify-center", "items-center", "gap-y-8", "rounded-2xl", styles.box])} ref={box5Ref}>
              <div className={clsx([styles.img])}>
                <Link href={{ pathname: "/" }}>
                  <Image src="/policy-5.png" alt="Website" width={80} height={80} />
                </Link>
              </div>
              <h3 className={clsx(["font-bold", "text-sm"])}>Full Theme Features</h3>
            </div>
          </div>
        )}
        {faqs.length > 0 && (
          <div className={clsx(["max-w-7xl", "ml-auto", "mr-auto", "mt-20", styles.faqs])}>
            {faqs.map((item: IFaq, idx: number) => {
              return (
                <div key={`faq-${idx}`} className={clsx(["border-t", "border-gray-200", "pt-6", "pb-6", "relative", styles.faqItem])}>
                  <div className={clsx([item.expanded === true ? "relative" : "absolute", "top-0", "left-0", "h-full", "flex", "items-center"])}>
                    <button className={clsx(["cursor-pointer", "font-bold", "h-full", "text-left"])} onClick={handleFaqClick(idx)}>
                      {item.title}
                    </button>
                  </div>
                  <div className={clsx(["mt-3", "pr-5", "overflow-y-hidden", styles.faqContent, item.expanded === true && styles.active])}>{item.expanded && item.content}</div>
                  <button className={clsx(["absolute", "top-0", "right-0", "h-full", "flex", item.expanded ? "items-start" : "items-center", "cursor-pointer", "pl-2", item.expanded && "pt-2"])} onClick={handleFaqClick(idx)}>
                    {item.expanded === false ? <CaretDownOutlined /> : <MinusOutlined />}
                  </button>
                  <div className={clsx(["absolute", "bottom-0", "left-0", "bg-gray-950", styles.line])}></div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {banners && (
        <div className={clsx(["max-w-640", "h-180", "max-lg:h-90", "max-md:h-50", "mb-20", "relative", styles.sliders])}>
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
      <div className={clsx(["pl-4", "pr-4", "pb-20"])}>
        {animals.length > 0 && (
          <div className={clsx(["max-w-470", "grid", "ml-auto", "mr-auto", "grid-cols-5", "max-lg:grid-cols-3", "max-md:grid-cols-2", "justify-center", styles.animals])} ref={animalsRef}>
            {animals.map((item: IAnimal, idx: number) => {
              return (
                <div key={`animal-${idx}`} className={clsx(["relative", "cursor-pointer", styles.item])}>
                  <div className={clsx(["flex", "justify-center"])}>
                    <Image src={`/${item.img}`} alt="Website" width={375} height={444} />
                  </div>
                  <div className={clsx(["absolute", "top-0", "left-0", "h-full", styles.mask])}></div>
                  <div className={clsx(["absolute", "bottom-0", "left-0", "w-full", "pl-5", "pr-5", "pb-10"])}>
                    <h3 className={clsx([idx % 2 === 0 ? "text-white" : "text-gray-950", "text-center", "uppercase", "font-bold", "text-2xl"])}>{item.title}</h3>
                    <h4 className={clsx([idx % 2 === 0 ? "text-white" : "text-gray-950", "text-center", "mt-4"])}>{item.content}</h4>
                    <div className={clsx(["flex", "justify-center", "mt-5"])}>
                      <div className={clsx(["border-2", "border-cyan-300", "rounded-3xl", "pt-2", "pb-2", "pl-5", "pr-5", "text-center", "relative", styles.showNow])}>
                        <div className={clsx(["bg-cyan-300", "absolute", "top-0", "left-0", "h-full", "rounded-3xl", styles.expanded])}></div>
                        <Link href={{ pathname: "/" }} className={clsx([idx % 2 === 0 ? "text-white" : "text-gray-950", "relative"])}>
                          Shop Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <button className={clsx(["fixed", "bottom-10", "right-20", "text-white", "bg-sky-600", "w-10", "h-10", "rounded-3xl", "cursor-pointer"])} onClick={handleScrollTop}>
        <ArrowUpOutlined />
      </button>
    </React.Fragment>
  );
};
export default Home;
