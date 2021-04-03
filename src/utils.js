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
      color: ["#d57ed6", "#060d29"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14980",
    },
    {
      name: "Leaves covered by snow",
      artist: "No Spirit",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/4b06cedf68f3f842d3a0fc13ae62564dec6056c8-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#CA6379", "#3F598A"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14981",
    },
    {
      name: "Directions",
      artist: "Blue Wednesday",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#A7A7E0", "#CD8AB6"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14982",
    },
    {
      name: "Cabin In the Woods",
      artist: "Jim Spendlove",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#814F38", "#DB8463"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14983",
    },
    {
      name: "Wanderlust",
      artist: "Knoyxx",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#75AC85", "#CC8C61"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14984",
    },
  ];
};

export default utils;
