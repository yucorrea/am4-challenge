import harryPotter from "../assets/HP.png";
import cidadeDosOssos from "../assets/cidade-dos-ossos.png";
import got from "../assets/got.jpg";
import banana from "../assets/banana.jpg";

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
      title_original: "City of Bones",
      genre: "Fantasia/Aventura",
      author: "Cassandra Clare",
      source: "Estados Unidos",
      description: "A história, narrada em terceira pessoa, se passa em uma Manhattan contemporânea. O livro é dividido em vinte e três capítulos e a protagonista é Clairy Fray, uma menina ruiva, baixinha e com sardas, de quinze anos, aparentemente normal, nascida e criada no Brooklyn. A garota vive com a mãe, Jocelyn Fray, uma jovem e talentosa artista viúva, e tem Simon como melhor amigo de infância.",
      preview: "Tenha acesso ao primeiro capítulo do livro por tempo determinado e aproveite sua experiência.",
      price: 35.89
    }
  },
  {
    id: 2,
    name: "A Guerra dos Tronos",
    genre: "Fantasia",
    year: "24",
    rating: 5,
    image: got,
    details: {
      image: got,
      title_original: "A Game Of Thrones",
      genre: "Fantasia",
      author: "George R. R. Martin",
      source: "Estados Unidos",
      description: "Nas florestas ao norte de Winterfell, forças sobrenaturais se espalham por trás da Muralha que protege a região. E, nas Cidades Livres, o jovem Rei Dragão exilado na Rebelião de Robert planeja sua vingança e deseja recuperar sua herança de família: o Trono de Ferro de Westeros.",
      preview: "Tenha acesso ao primeiro capítulo do livro por tempo determinado e aproveite sua experiência.",
      price: 42.00
    }
  },
  {
    id: 3,
    name: "Diário de um Banana",
    genre: "Ficção Científica",
    year: "13",
    rating: 2,
    image: banana,
    details: {
      image: banana,
      title_original: "Diary of a Wimpy Kid",
      genre: "Ficção Científica",
      author: "Jeff Kinney",
      source: "Estados Unidos",
      description: "A série conta a história de Greg Heffley, um garoto da sexta série que ganha um diário de sua mãe e começa a relatar os seus dias e suas aventuras.",
      preview: "Tenha acesso ao primeiro capítulo do livro por tempo determinado e aproveite sua experiência.",
      price: 19.90
    }
  },
]


export type IBook = typeof books;
