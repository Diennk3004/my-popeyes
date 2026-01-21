"use client";
import clsx from "clsx";
import React from "react";
import { Link } from "@/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { UserOutlined, ShoppingCartOutlined, CloseOutlined, MenuOutlined } from "@ant-design/icons";
import styleHeader from "@/scss/header.module.scss";
const HomePage = () => {
  const t = useTranslations("page_translate");
  return (
    <React.Fragment>
      <header className={clsx(["bg-orange-400", "pl-45", "pr-45", "max-md:pt-2", "max-md:pb-2", "flex", "justify-between", "items-center"])}>
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
        <div className={clsx(["flex", "gap-x-5", "text-white", "items-center"])}>
          <div>VI</div>
          <ShoppingCartOutlined className={clsx(["max-md:text-2xl", "text-4xl"])} />
          <UserOutlined className={clsx(["max-md:text-2xl", "text-4xl"])} />
          <ShoppingCartOutlined className={clsx(["max-md:hidden", "text-4xl"])} />
        </div>
      </header>
    </React.Fragment>
  );
};

export default HomePage;
