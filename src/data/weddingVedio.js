import MoneyEnevDetail from "../view/moneyEnvelop/MoneyEnevDetail";
import WeddingCrest from "../view/moneyEnvelop/WeddingCrest";
import Page3 from "../view/weddingInvVideo/Page3";

export const WeddingVideoData = [
  {
    id: "wv1",
    title: "Custom text",

    content: () => <MoneyEnevDetail />,
  },
  { id: "wv2", title: "+ Wedding Crest", content: () => <WeddingCrest /> },
  {
    id: "wv3",
    title: "+ Digital Illustration",
    content: () => <MoneyEnevDetail />,
  },
  {
    id: "wv4",
    title: "+ Page 3",
    content: () => <Page3 />,
  },
  {
    id: "wv5",
    title: "+ Page 4",
    content: () => <MoneyEnevDetail />,
  },
];

export const page3data = [
  {
    id: "pg1",
    imgSrc:
      "https://ospreyinvites.com/cdn/shop/files/1_9c3cf000-6a63-416c-b607-d5c28435c26e.jpg?v=1698241348&width=360",
  },
  {
    id: "pg2",
    imgSrc:
      "https://ospreyinvites.com/cdn/shop/files/03_a814e091-70dd-4b8d-94e9-9870367dd38f.jpg?v=1698242166&width=360",
  },
  {
    id: "pg3",
    imgSrc:
      "https://ospreyinvites.com/cdn/shop/files/02_d385bb99-65d1-44df-975f-53a44db6f00f.jpg?v=1698242175&width=360",
  },
  {
    id: "pg4",
    imgSrc:
      "https://ospreyinvites.com/cdn/shop/files/03_a814e091-70dd-4b8d-94e9-9870367dd38f.jpg?v=1698242166&width=360",
  },
  {
    id: "pg5",
    imgSrc:
      "https://ospreyinvites.com/cdn/shop/files/W23_01_f6f97c79-9280-4206-8088-c9d795a96332.jpg?v=1695636355&width=360",
  },
  {
    id: "pg6",
    imgSrc:
      "https://ospreyinvites.com/cdn/shop/files/W21_04.jpg?v=1695635233&width=360",
  },
];
