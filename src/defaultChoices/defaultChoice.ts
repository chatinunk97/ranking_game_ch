import { ChoiceType } from "@/lib/types";

const liella: ChoiceType[] = [
  {
    choiceName: "Date Sayuri",
    img: "https://lovelive-petitsoku.com/wp-content/uploads/2021/05/E0tWqlyUcAYQRlG.jpg",
  },
  { choiceName: "Liyuu", img: "https://ddnavi.com/uploads/2021/05/1188.jpg" },
  {
    choiceName: "Payton Naomi",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRzarLXaPXw0nrGPMdXRcy8_opa-dUHpki-_tbzbvL0PaZ8ECxLJLWt-kwA8VcumcXqDTpWYEiryvPd69zaHNDUvQ",
  },
  {
    choiceName: "Misaki Nako",
    img: "https://di1w2o32ai2v6.cloudfront.net/images/detailed/8/MAINMISAKI_c_j7qt-06.jpg",
  },
  {
    choiceName: "Aoyama Nagisa",
    img: "https://aoyamanagisa.jp/assets/img/top/aoyamanagisa_top.jpg?1733482220",
  },
];

const jband: ChoiceType[] = [
  {
    choiceName: "YOASOBI",
    img: "https://i.scdn.co/image/ab6761610000e5ebbfdd8a29d0c6bc6950055234",
  },
  {
    choiceName: "YORUSHIKA",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Yorushika_Logo.jpg",
  },
  {
    choiceName: "UVERworld",
    img: "https://s3-ap-northeast-1.amazonaws.com/ticket-trade.emtg.jp/production/assets/img/artist/uverworld/pc-20240917170713.jpg",
  },
  {
    choiceName: "Lust Queen",
    img: "https://pbs.twimg.com/media/GNiCbN2bIAAYMwU?format=jpg&name=large",
  },
  {
    choiceName: "SCANDAL",
    img: "https://topmusic.jp/artists/2584/main/main.jpg",
  },
];

const stardew: ChoiceType[] = [
  {
    choiceName: "Shane",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/8b/Shane.png",
  },
  {
    choiceName: "Emily",
    img: "https://stardewvalleywiki.com/mediawiki/images/2/28/Emily.png",
  },
  {
    choiceName: "Alex",
    img: "https://stardewvalleywiki.com/mediawiki/images/0/04/Alex.png",
  },
  {
    choiceName: "Haley",
    img: "https://stardewvalleywiki.com/mediawiki/images/1/1b/Haley.png",
  },
  {
    choiceName: "Maru",
    img: "https://stardewvalleywiki.com/mediawiki/images/f/f8/Maru.png",
  },
  {
    choiceName: "Elliott",
    img: "https://stardewvalleywiki.com/mediawiki/images/b/bd/Elliott.png",
  },
  {
    choiceName: "Harvey",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/95/Harvey.png",
  },
  {
    choiceName: "Sam",
    img: "https://stardewvalleywiki.com/mediawiki/images/9/94/Sam.png",
  },
  {
    choiceName: "Sebastian",
    img: "https://stardewvalleywiki.com/mediawiki/images/a/a8/Sebastian.png",
  },
  {
    choiceName: "Abigail",
    img: "https://stardewvalleywiki.com/mediawiki/images/8/88/Abigail.png",
  },
  {
    choiceName: "Leah",
    img: "https://stardewvalleywiki.com/mediawiki/images/e/e6/Leah.png",
  },
  {
    choiceName: "Penny",
    img: "https://stardewvalleywiki.com/mediawiki/images/a/ab/Penny.png",
  },
];

const defaultChoice = {
  liella: liella,
  stardew: stardew,
  jband: jband,
};

export enum TemplateChoices {
  "liella" = "liella",
  "stardew" = "stardew",
  "jband" = "jband",
}

export default defaultChoice;
