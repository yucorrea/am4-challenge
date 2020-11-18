import styled from 'styled-components/native';

import { colors, fonts } from "../../constraints";

export const Container = styled.View`
  border-radius: 8px;
  flex-direction: row;
  margin: 16px 0px;
`;


export const BookImage = styled.Image`
  width: 179px;
  height: 279px;
  margin-right: 16px;
  border-radius: 5px;
`

export const BookContainer = styled.View`
  flex: 1;
  padding: 16px 0px;
`
export const BookTitle = styled.Text`
  height: 65px;
  font-family: ${fonts.RubikMedium};
  font-size: 14px;
`

export const BookGenre = styled.Text`
  font-family: ${fonts.RubikRegular};
  font-size: 12px;
  text-transform: uppercase;
`
export const BookAge = styled.Text`
  font-family: ${fonts.RubikRegular};
  font-size: 12px;
  text-transform: uppercase;
`
export const BookStars = styled.Text`
`
export const BookDownload = styled.TouchableOpacity`
  width: 100%;
  padding: 8px;
  border-radius: 27px;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.primary};
  align-items: center;
  flex-direction: row;
  margin-top: 32px;

`
export const BookDownloadText = styled.Text`
  font-family: ${fonts.RubikMedium};
  font-size: 12px;
  text-transform: uppercase;
  color: ${colors.primary};
  margin-left: 8px;

`
