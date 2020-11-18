import styled from 'styled-components/native';
import {colors} from "../../constraints";

export const Container = styled.TouchableOpacity`
  height: 54px;
  width: 54px;
  border-radius: 27px;
  background-color: ${colors.black};

  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 10;
`;
