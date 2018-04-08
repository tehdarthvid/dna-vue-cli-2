const testCardList = [
  // childhood
  {
    title: "Star Wars",
    bgImageURL:
      "https://33hpwq10j9luq8gl43e62q4e-wpengine.netdna-ssl.com/wp-content/uploads/2017/04/1jw_tyZoU5qoOrOOOvQlBLg.jpeg",
    date: "25 May 1977"
  },

  {
    title: "超時空要塞 マクロス",
    bgImageURL: "http://otalab.net/img2/120106-9l.jpg",
    date: "3 Oct 1982 – 26 Jun 1983"
  },
  {
    title: "Super Mario Bros.",
    bgImageURL: "http://www.retrogames.cz/games/005/NES_00.gif",
    date: "13 Sep 1985"
  },
  {
    title: "The Uncanny X-Men",
    bgImageURL:
      "http://geekleagueofamerica.com/wp-content/uploads/2013/09/xmen1.jpg",
    date: "10 Sep 1963"
  },
  // high-school

  {
    title: "Nevermind",
    bgImageURL:
      "https://images.genius.com/24be3cd0b550d14375035de8c9c4c74c.1000x1000x1.jpg",
    date: "24 Sep 1991"
  },
  {
    title: "Super Street Fighter II X: Grand Master Challenge",
    bgImageURL:
      "https://steamuserimages-a.akamaihd.net/ugc/543003889249989774/5AAD2D518617DBB02B61EACECFEDC2BF336C9F6E/",
    date: "23 Feb 1994"
  },
  {
    title: "ドラゴンボールZ",
    //bgImageURL	: "https://vignette.wikia.nocookie.net/dragonball/images/3/37/TheZFighters03.png/revision/latest/scale-to-width-down/1000?cb=20150621010223",
    bgImageURL: "https://i.ytimg.com/vi/ISBe8FcWCXI/maxresdefault.jpg",
    date: "26 Apr 1989 – 31 Jan 1996"
  },
  {
    title: "らんま 1/2",
    bgImageURL:
      "https://s3-ap-northeast-1.amazonaws.com/sk2q169cx9pfoawet3et/ditim/1987.09+%E3%80%8C%E3%82%89%E3%82%93%E3%81%BE+1_2%E3%80%8D+%E9%80%B1%E5%88%8A%E5%B0%91%E5%B9%B4%E3%82%B5%E3%83%B3%E3%83%87%E3%83%BC+36+9478482851_04bd05ff94_b.jpg",
    date: "Sep 1987 – Mar 1996"
  },
  {
    title: "Batman: The Animated Series",
    bgImageURL:
      "https://vignette1.wikia.nocookie.net/batman/images/2/24/BTASposter.png",
    date: "5 Sep 1992 – 15 Sep 1995"
  },
  {
    title: "新世紀 エヴァンゲリオン",
    bgImageURL:
      "https://ia.media-imdb.com/images/M/MV5BYjY1Y2ZmNDctZWQ3Yy00MTE3LTk2M2QtMjQ0MDA5ODVjMDEyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
    //bgImageURL:"https://i.pinimg.com/originals/4d/67/a0/4d67a0fe6038e3d5dbb151edfe76f78e.jpg",
    //bgImageURL: "https://s3-ap-northeast-1.amazonaws.com/sk2q169cx9pfoawet3et/ditim/1995.10.04+%E3%80%8C%E6%96%B0%E4%B8%96%E7%B4%80%E3%82%A8%E3%83%B4%E3%82%A1%E3%83%B3%E3%82%B2%E3%83%AA%E3%82%AA%E3%83%B3%E3%80%8D+75442l.jpg",
    //bgImageURL: "https://wallup.net/wp-content/uploads/2016/05/14/24082-Neon_Genesis_Evangelion-Ayanami_Rei-Ikari_Shinji-Asuka_Langley_Soryu-EVA_Unit_02-anime-Gendo_Ikari-EVA_Unit_00-EVA_Unit_01-748x1068.jpg",
    date: "4 Oct 1995 – 27 Mar 1996"
  },
  // college
  {
    title: "悪魔城 ドラキュラＸ 月下の夜想曲",
    bgImageURL:
      "http://neoapo.com/images/game/183/f847d2c227c9d186fef99e3cbdabeef0.jpg",
    date: "20 Mar 1997"
  },
  {
    title: "Starcraft",
    bgImageURL:
      "https://s3-ap-northeast-1.amazonaws.com/sk2q169cx9pfoawet3et/ditim/1998.03.31StarCraft-Box-807x1024.jpg",
    date: "3 Mar 1998"
  },
  // first job

  {
    title: "K&R C",
    bgImageURL:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/The_C_Programming_Language%2C_First_Edition_Cover_%282%29.svg",
    date: "22 Feb 1978"
  },
  // between jobs
  {
    title: "Die Siedler von Catan",
    bgImageURL:
      "http://old.e-s-g.eu/Images/Spiele/Themen/SdJ/Siedler%20von%20Catan%20Franckh%20Kosmos%20Erstausgabe.jpg",
    date: "Oct 1995"
  },
  {
    title: "Team Fortress 2",
    bgImageURL: "https://images6.alphacoders.com/749/thumb-1920-749217.jpg",
    date: "10 Oct 2007"
  },
  {
    title: "Hyperion",
    bgImageURL:
      "https://s3-ap-northeast-1.amazonaws.com/sk2q169cx9pfoawet3et/ditim/1989+81i8IM58zLL.jpg",
    date: "26 May 1989"
  },
  // second job
  {
    title: "Gamers With Jobs Conference Call",
    bgImageURL: "https://secureimg.stitcher.com/feedimagesplain328/6637.jpg",
    date: "2 Aug 2006"
  },
  {
    title: "K-On!",
    bgImageURL: "https://img.fireden.net/a/image/1462/76/1462760342445.jpg",
    date: "3 Apr 2009 - 26 Jun 2009"
  },
  {
    title: "サマーウォーズ",
    bgImageURL: "http://livedoor.blogimg.jp/acideigakan/imgs/0/7/07f820a0.jpg",
    date: "1 Aug 2009"
  },
  {
    title: "Redline",
    bgImageURL: "https://av.watch.impress.co.jp/img/avw/docs/441/654/tc04.jpg",
    date: "14 Aug 2009"
  },
  // dark period
  {
    title: "化物語",
    bgImageURL:
      "https://media.senscritique.com/media/000016835992/source_big/Bakemonogatari.jpg",
    date: "3 Jul 2009 - 25 Jun 2010"
  },
  {
    title: "魔法少女まどか ☆マギカ",
    bgImageURL:
      "https://s3-ap-northeast-1.amazonaws.com/sk2q169cx9pfoawet3et/ditim/2011.01.07+%E3%80%8C%E9%AD%94%E6%B3%95%E5%B0%91%E5%A5%B3%E3%81%BE%E3%81%A9%E3%81%8B%E2%98%86%E3%83%9E%E3%82%AE%E3%82%AB%E3%80%8D+4744f30136df1ad1e6c012b5a1cda5ea.jpg",
    date: "7 Jan 2011 - 21 Apr 2011"
  },
  {
    title: "The Binding of Isaac",
    bgImageURL:
      "https://playindiegames.files.wordpress.com/2011/09/the-binding-of-isaac.jpg",
    date: "28 Sep 2011"
  },
  {
    title: "The iDOLM@STER",
    bgImageURL: "https://frozenmyst.files.wordpress.com/2011/12/826377.jpg",
    date: "8 Jul 2011 - 23 Dec 2011"
  },
  {
    title: "キルラキル",
    bgImageURL:
      "https://s3-ap-northeast-1.amazonaws.com/sk2q169cx9pfoawet3et/ditim/2013.10.04+%E3%80%8C%E3%82%AD%E3%83%AB%E3%83%A9%E3%82%AD%E3%83%AB%E3%80%8D+100051.jpg",
    date: "4 Oct 2013 - 28 Mar 2014"
  },
  {
    title: "月刊少女野崎くん",
    bgImageURL: "https://planetdp.org//covers/big/dp16553.jpg",
    date: "7 Jul 2014 - 22 Sep 2014"
  },
  // current
  {
    title: "Every Frame a Painting",
    bgImageURL:
      "https://yt3.ggpht.com/-idi8PvE0BEI/AAAAAAAAAAI/AAAAAAAAAAA/RIWRHpkQspo/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg",
    date: "16 Apr 2014 Apr - 2 Dec 2017"
  },
  {
    title: "Mad Max: Fury Road",
    bgImageURL:
      "https://s3-ap-northeast-1.amazonaws.com/sk2q169cx9pfoawet3et/ditim/2015.05.07+Mad+Max+Fury+Road+11110866_658246694280855_1682386295316885693_o.jpg",
    date: "7 May 2015"
  },
  {
    title: "Overwatch",
    bgImageURL:
      "http://www.mobygames.com/images/covers/l/340275-overwatch-origins-edition-playstation-4-front-cover.jpg",
    date: "24 May 2016"
  },
  {
    title: "君の名は。",
    bgImageURL:
      "https://iwiz-movies.c.yimg.jp/c/movies/pict/p/p/32/91/169395_02.jpg",
    date: "3 Jul 2016"
  },
  {
    title: "The Fifth Season",
    bgImageURL:
      "https://i2.wp.com/www.rantingdragon.com/anticipation/books2014/big/05.jpg",
    date: "4 Aug 2015"
  }
];

/*
const testCardList2 = testCardList.map(elem => {
  return { key: elem.title, ...elem };
});
*/
export default testCardList;
