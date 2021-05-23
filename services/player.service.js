const getItems = async (urls) => {
  //   return await Promise.all(urls)
  //     .then((resp) => {
  //       console.log(resp.length);
  //       return resp.map((page) => page.items);
  //     })
  //     .catch((err) => {
  //       console.log("ERR", err);
  //     });
  return itemsDummy();
};

const itemsDummy = () => {
  return [
    {
      name: "Cristiano Ronaldo",
      position: "ST",
      nation: "Portugal",
      club: { abbrName: "Real Madrid" },
    },
    {
      name: "Messi",
      position: "MC",
      nation: "Argentina",
      club: { abbrName: "Fc Barcelona" },
    },
    {
      name: "Mark",
      position: "Goal keeper",
      nation: "Poland",
      club: { abbrName: "Bayern Munich" },
    },
    {
      name: "Christian Bale",
      position: "ST",
      nation: "England",
      club: { abbrName: "Real Madrid" },
    },
    {
      name: "Daniel",
      position: "ST",
      nation: "Poland",
      club: { abbrName: "Benfica" },
    },
    {
      name: "Ferdinand",
      position: "ST",
      nation: "England",
      club: { abbrName: "Bayern Munich" },
    },
    {
      name: "1",
      position: "ST",
      nation: "Portugal",
      club: { abbrName: "Real Madrid" },
    },
    {
      name: "2",
      position: "MC",
      nation: "Argentina",
      club: { abbrName: "Real Madrid" },
    },
    {
      name: "3",
      position: "Goal keeper",
      nation: "Poland",
      club: { abbrName: "Real Madrid" },
    },
    {
      name: "4",
      position: "ST",
      nation: "England",
      club: { abbrName: "Real Madrid" },
    },
    {
      name: "5",
      position: "ST",
      nation: "Poland",
      club: { abbrName: "Real Madrid" },
    },
    {
      name: "6",
      position: "ST",
      nation: "England",
      club: { abbrName: "Real Madrid" },
    },
    {
      name: "7",
      position: "ST",
      nation: "Portugal",
      club: { abbrName: "Real Madrid" },
    },
    {
      name: "8",
      position: "MC",
      nation: "Argentina",
      club: { abbrName: "Real Madrid" },
    },
    {
      name: "9",
      position: "Goal keeper",
      nation: "Poland",
      club: { abbrName: "Real Madrid" },
    },
    {
      name: "10",
      position: "ST",
      nation: "England",
      club: { abbrName: "Real Madrid" },
    },
    {
      name: "11",
      position: "ST",
      nation: "Poland",
      club: { abbrName: "Real Madrid" },
    },
    {
      name: "12",
      position: "ST",
      nation: "England",
      club: { abbrName: "Real Madrid" },
    },
    {
      name: "Cristiano Ronaldo",
      position: "ST",
      nation: "Portugal",
      club: { abbrName: "Real Madrid" },
    },
    {
      name: "Messi",
      position: "MC",
      nation: "Argentina",
      club: { abbrName: "Fc Barcelona" },
    },
    {
      name: "Mark",
      position: "Goal keeper",
      nation: "Poland",
      club: { abbrName: "Bayern Munich" },
    },
    {
      name: "Christian Bale",
      position: "ST",
      nation: "England",
      club: { abbrName: "Real Madrid" },
    },
    {
      name: "Daniel",
      position: "ST",
      nation: "Poland",
      club: { abbrName: "Benfica" },
    },
    {
      name: "aa",
      position: "ST",
      nation: "England",
      club: { abbrName: "Bayern Munich" },
    },
    {
      name: "ab",
      position: "ST",
      nation: "England",
      club: { abbrName: "Bayern Munich" },
    },
    {
      name: "zz",
      position: "ST",
      nation: "England",
      club: { abbrName: "Bayern Munich" },
    },
    
  ];
};

module.exports = getItems;
