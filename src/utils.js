import { v4 as uuidv4 } from "uuid";

const utils = () => {
  // We are just returning one object, so no need of parenthesis.
  return [
    {
      name: "Cascade",
      artist: "Knowmadic",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#E1B43A", "#84D9AB"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13091",
    },
    {
      name: "Splendour",
      artist: "Aari God",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#A8BD74", "#491A18"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13010",
    },
    {
      name: "Directions",
      artist: "Blue Wednesday",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#A7A7E0", "#CD8AB6"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11224",
    },
    {
      name: "Belly Breathing",
      artist: "Birocratic",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#DF8D8F", "#7C98BD"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=2060",
    },
    {
      name: "Sugarless",
      artist: "The Field Tapes",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#E3C47D", "#7A8D7B"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11236",
    },
  ];
};

export default utils;

// Knoyxx is a badass name, grab it before someone else does.
