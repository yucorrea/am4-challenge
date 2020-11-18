import harryPotter from "../assets/HP.png";
import cidadeDosOssos from "../assets/cidade-dos-ossos.png";

export const books = [
  {
    id: 0,
    name: "Harry Potter e a Criança Amaldiçoada",
    genre: "Infanto Juvenil",
    year: "12",
    rating: 5,
    image: harryPotter,
    details: {
      image: harryPotter,
      title_original: "Harry Potter and The Cursed Child",
      genre: "Infanto Juvenil",
      author: "J.K ROWLING",
      source: "Inglaterra",
      description: "Sempre foi difícil ser Harry Potter e não é mais fácil agora que ele é um sobrecarregado funcionário do Ministério da Magia, marido e pai de três crianças em idade escolar. Enquanto Harry lida com um passado que se recusa a ficar para trás, seu filho mais novo,  Alvo deve lutar com o peso de um legado de família que ele nunca quis.À medida que passado e presente se fundem de forma ameaçadora, ambos, pai e filho, aprendem uma incômoda verdade: às vezes as trevas vêm de lugares inesperados.",
      preview: "Tenha acesso ao primeiro capítulo do livro por tempo determinado e aproveite sua experiência.",
      price: 25.90
    }
  },
  {
    id: 1,
    name: "Cidade dos Ossos",
    genre: "Fantasia/Aventura",
    year: "16",
    rating: 4,
    image: cidadeDosOssos,
    details: {
      image: cidadeDosOssos,
      title_original: "",
      genre: "",
      author: "",
      source: "",
      description: "",
      preview: "",
      price: 0.0
    }
  },
  {
    id: 2,
    name: "Harry Potter e a Criança Amaldiçoada",
    genre: "Infanto Juvenil",
    year: "12",
    rating: 5,
    image: harryPotter,
    details: {
      image: harryPotter,
      title_original: "Harry Potter and The Cursed Child",
      genre: "Infanto Juvenil",
      author: "J.K ROWLING",
      source: "Inglaterra",
      description: "",
      preview: "",
      price: 25.90
    }
  },
  {
    id: 3,
    name: "Cidade dos Ossos",
    genre: "Fantasia/Aventura",
    year: "16",
    rating: 4,
    image: cidadeDosOssos,
    details: {
      image: cidadeDosOssos,
      title_original: "",
      genre: "",
      author: "",
      source: "",
      description: "",
      preview: "",
      price: 0.0
    }
  },
]


export type IBook = typeof books;
