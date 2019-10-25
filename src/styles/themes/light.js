const light = {};

light.colors = {
  japaneseIndigo: "#273E47",
  bDazzledBlue: "#30638E",
  metallicSeaweed: "#00798C",
  darkTerraCotta: "#D1495B",
  maximumYellowRed: "#EDAE49"
};

const {
  japaneseIndigo,
  bDazzledBlue,
  metallicSeaweed,
  darkTerraCotta,
  maximumYellowRed
} = light.colors;

light.elements = {
  button: {
    bg: "transparent",
    border: maximumYellowRed,
    color: maximumYellowRed
  },
  toolBar: {
    bg: japaneseIndigo
  },
  arrayElement: {
    bg: metallicSeaweed
  }
};

export default light;
