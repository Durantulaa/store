import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },

  {
    id: 2,
    text: "about",
    url: "/about",
  },

  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "In St. Marys, we believe that empowering our young members is crucial for fostering a strong, vibrant future for our church and society. Our programs and activities are designed to engage young minds and hearts, helping them to grow in their faith, embrace their heritage, and develop their unique talents and abilities.",
  },

  {
    id: 2,
    icon: <GiStabbedNote />,
    title: "history",
    text: "St. Mary Coptic Church, while deeply rooted in the ancient traditions of Coptic Orthodoxy, holds a set of core beliefs that guide its spiritual and communal life. Central to these beliefs is the adherence to the teachings of Jesus Christ as passed down through the Apostolic Tradition.",
  },

  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "core beliefs",
    text: "The church not only serves as a place of worship but also as a cultural hub where members celebrate their Coptic heritage through festivals, music, and traditional cuisine. Strong emphasis is placed on family values, youth engagement, and the education of children in the faith. ",
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
