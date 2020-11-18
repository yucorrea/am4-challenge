import React from 'react';
import AntDesign from "react-native-vector-icons/AntDesign";

import {colors} from "../../constraints";

import { Container } from './styles';

const FloatActionButton: React.FC = () => {
  return (
    <Container>
      <AntDesign name="like2" size={24} color={colors.primary}/>
    </Container>
  )
}

export default FloatActionButton;
