import React, {useMemo} from 'react';

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { Container } from './styles';

import {colors} from "../../constraints";

interface IRating {
  rating: number;
}

const Rating: React.FC<IRating> = ({ rating }) => {

  const ratingComponents: string[] = [];

  if(rating < 1 ) {
    for(let i = 0; i < 5; i++) {
      ratingComponents.push('star-outline')
    }
  }

  if(rating >= 1 && rating < 2) {
    for(let i = 0; i < 1; i++) {
      ratingComponents.push('star')
    }
    for(let i = 0; i < 4; i++) {
      ratingComponents.push('star-outline')
    }
  }

  if(rating >= 2 && rating < 3) {
    for(let i = 0; i < 2; i++) {
      ratingComponents.push('star')
    }
    for(let i = 0; i < 3; i++) {
      ratingComponents.push('star-outline')
    }
  }

  if(rating >= 3 && rating < 4) {
    for(let i = 0; i < 3; i++) {
      ratingComponents.push('star')
    }
    for(let i = 0; i < 2; i++) {
      ratingComponents.push('star-outline')
    }
  }

  if(rating >= 4 && rating < 5) {
    for(let i = 0; i < 4; i++) {
      ratingComponents.push('star')
    }
    for(let i = 0; i < 1; i++) {
      ratingComponents.push('star-outline')
    }
  }

  if(rating >= 5) {
    for(let i = 0; i < 5; i++) {
      ratingComponents.push('star')
    }
    for(let i = 0; i < 0; i++) {
      ratingComponents.push('star-outline')
    }
  }
  return (
    <Container>
      {ratingComponents.map((value, index) => <MaterialIcons name={value} key={index} size={24} color={colors.primary}/>)}
    </Container>
  )
}

export default Rating;
