import styled from 'styled-components/native';
import { colors, fonts } from "../../constraints";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;

export const DetailHeader = styled.View`
  flex-direction: row;
`;

export const BookName = styled.Text`
  max-width: 340px;
  text-align: center;
  font-family: ${fonts.RubikMedium};
  font-size: 18px;
  color: ${colors.primary};
  margin-bottom: 16px;
`

export const BookImage = styled.Image`
  width: 179px;
  height: 279px;
  margin-right: 16px;
  border-radius: 5px;
`

export const BookContainer = styled.View`
  flex: 1;
`
export const Title = styled.Text`
  font-family: ${fonts.RubikMedium};
  font-size: 14px;
  margin: 8px 0px;
`

export const BookTitle = styled.Text`
  font-family: ${fonts.RubikRegular};
  font-size: 14px;
`

export const BookGenre = styled.Text`
  font-family: ${fonts.RubikRegular};
  font-size: 12px;
  text-transform: uppercase;
`

export const BookAuthor = styled.Text`
  font-family: ${fonts.RubikRegular};
  font-size: 12px;
  text-transform: uppercase;
`

export const BookSource = styled.Text`
  font-family: ${fonts.RubikRegular};
  font-size: 12px;
  text-transform: uppercase;
`

export const BookDownload = styled.TouchableOpacity`
  width: 239px;
  padding: 8px;
  border-radius: 27px;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.primary};
  align-items: center;
  flex-direction: row;
  margin-top: 32px;
  margin-bottom: 32px;
  align-self: center;
`
export const BookDownloadText = styled.Text`
  font-family: ${fonts.RubikMedium};
  font-size: 12px;
  text-transform: uppercase;
  color: ${colors.primary};
  margin-left: 8px;

`

export const DetailContent = styled.View`
margin-top: 32px;
`

export const Description = styled.Text`
  padding: 8px;
  font-family: ${fonts.RubikRegular};
  line-height: 18px;
`

export const Content = styled.View`
  flex: 1;
`

export const BuyContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const Money = styled.Text`
  font-family: ${fonts.RubikMedium};
  font-size: 14px;
  text-transform: uppercase;
  color: ${colors.black};
`

export const Price = styled.Text`
  font-family: ${fonts.RubikMedium};
  font-size: 28px;
  text-transform: uppercase;
  color: ${colors.black};
  margin-left: 8px;
`

export const Debit = styled.Text`
  font-family: ${fonts.RubikRegular};
  font-size: 12px;
  text-transform: uppercase;
  color: ${colors.black};
  text-align:center;
`
export const BuyBook = styled.TouchableOpacity`
  width: 239px;
  padding: 8px;
  border-radius: 27px;
  justify-content: center;
  align-items: center;
  background:  ${colors.primary};
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
  margin-bottom: 32px;
  align-self: center;
`

export const BuyBookText = styled.Text`
  font-family: ${fonts.RubikMedium};
  font-size: 12px;
  text-transform: uppercase;
  color: ${colors.black};
  margin-left: 8px;
`


