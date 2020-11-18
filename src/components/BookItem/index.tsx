import React from 'react';


import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "../../constraints";
import Rating from "../../components/Rating";


import {
   Container,
   BookImage,
   BookContainer,
   BookTitle,
   BookGenre,
   BookAge,
   BookStars,
   BookDownload,
   BookDownloadText
  } from './styles';

interface IBook {
  name: string;
  genre: string;
  year: string;
  rating: number;
  image: any;
}

interface IBookItemProps {
  book: IBook;
}

const BookItem: React.FC<IBookItemProps> = ({book}) => {
  return (
    <Container>
      <BookImage source={book.image} resizeMode="cover" />

      <BookContainer>
      <BookTitle>{book.name}</BookTitle>
        <BookGenre>{book.genre}</BookGenre>
        <BookAge>{book.year} anos</BookAge>
        <Rating rating={book.rating}/>
        <BookDownload>
          <AntDesign name="download" size={16} color={colors.primary}/>
          <BookDownloadText>Download Prévia</BookDownloadText>
        </BookDownload>
      </BookContainer>
    </Container>
  )
}

export default BookItem;
