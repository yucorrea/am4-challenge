import React, {useMemo, useEffect, useState} from 'react';
import {Animated} from "react-native";

import AntDesign from "react-native-vector-icons/AntDesign";
import {useRoute} from "@react-navigation/native";

import FloatActionButton from "../../components/FloatActionButton";

import Rating from "../../components/Rating";

import { colors } from "../../constraints";

import {
   Container,
   DetailHeader,
   BookName,
   BookImage,
   BookContainer,
   Title,
   BookTitle,
   BookGenre,
   BookAuthor,
   BookSource,
   BookDownload,
   BookDownloadText,
   DetailContent,
   Description,
   Content,
   BuyContainer,
   Money,
   Price,
   Debit,
   BuyBook,
   BuyBookText
  } from './styles';


interface ParamsProps {
  book: {
    name: string;
    rating: number;
    details: {
      image: any,
      title_original: string,
      genre: string,
      author: string,
      source: string,
      description: string,
      preview: string,
      price: number
    };
  }
};


const StoreDetail: React.FC = () => {

  const [moveXBookImage] = useState(new Animated.Value(-200));
  const [moveXBookContainer] = useState(new Animated.Value(200));
  const [moveYDetailContent] = useState(new Animated.Value(200));

  const [opacity] = useState(new Animated.Value(0));

  const {params} = useRoute();

  const { book: { details, name, rating } } = params as ParamsProps;

  const price = useMemo(() => {
    return details.price.toFixed(2)
  },[]);


  useEffect(() => {

   Animated.parallel([
    Animated.timing(moveXBookImage, {
      toValue: 10,
      duration: 500,
      useNativeDriver: true
    }),
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }),
   ]).start();

   Animated.timing(moveXBookContainer, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true
  }).start();


  Animated.parallel([
    Animated.timing(moveYDetailContent, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true
    }),
   ]).start();

  },[])

  return (
    <>
    <Container showsVerticalScrollIndicator={false}>
      <BookName>{name}</BookName>
      <DetailHeader>
        <Animated.View style={{
          opacity: opacity,
          transform: [{
          translateX: moveXBookImage
        }]}}>
          <BookImage source={details.image} resizeMode="cover" />
        </Animated.View>
        <Animated.View style={{
          transform: [{
          translateX: moveXBookContainer
        }]}}>

        <BookContainer>
          <Title>Título Original</Title>
          <BookTitle>{details.title_original}</BookTitle>

          <Title>Gênero</Title>
          <BookGenre>{details.genre}</BookGenre>

          <Title>Autor</Title>
          <BookAuthor>{details.author}</BookAuthor>

          <Title>Origem</Title>
          <BookSource>{details.source}</BookSource>

          <Rating rating={rating}/>
        </BookContainer>
        </Animated.View>
      </DetailHeader>
      <Animated.View style={{
          transform: [{
          translateY: moveYDetailContent
        }]}}>
      <DetailContent>

          <Content>
            <Title>Descrição</Title>
            <Description>
              {details.description}
            </Description>
          </Content>

          <Content>
            <Title>Prévia</Title>
            <Description>
              {details.preview}
            </Description>

            <BookDownload>
              <AntDesign name="download" size={16} color={colors.primary}/>
              <BookDownloadText>Download Prévia</BookDownloadText>
            </BookDownload>
          </Content>

          <Content>
            <Title>E-book Kindle</Title>

            <BuyContainer>
              <Money>R$</Money>
              <Price>{price}</Price>
            </BuyContainer>

            <Debit>Comprar no débito</Debit>

            <BuyBook>
              <AntDesign name="shoppingcart" size={16} color={colors.black}/>
              <BuyBookText>Comprar Agora</BuyBookText>
            </BuyBook>

          </Content>
        </DetailContent>
      </Animated.View>
    </Container>
    <FloatActionButton />
    </>
  )
}

export default StoreDetail;
