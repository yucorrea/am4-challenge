import styled from 'styled-components/native';
import {colors, fonts} from "../../constraints";

export const Container = styled.View`
  background: ${colors.bg};
  padding: 16px;
`;

export const Title = styled.Text`
  color: ${colors.primary};
  font-family: ${fonts.RubikMedium};
  font-size: 18px;
  text-align: center;
  padding: 8px 0px;
`;

