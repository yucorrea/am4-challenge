import React, {useCallback, useState} from 'react';
import { FlatList, TouchableOpacity, RefreshControl } from "react-native";

import { useNavigation } from "@react-navigation/native";

import {books} from "../../mock/data";
import { Container, Title } from './styles';

import {colors} from "../../constraints";

import BookItem from "../../components/BookItem";

const Store: React.FC = () => {
  const { navigate } = useNavigation();

  const [refreshing, setRefreshing] = useState(false);

  const wait = (timeout: number) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const navigateToDetail = useCallback((book) => {
    navigate("Detail", { book })
  },[])
  return (


    <Container>
      <Title>Popular</Title>
      <FlatList
        data={books}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigateToDetail(item)}>
            <BookItem book={item} />
          </TouchableOpacity>
        )}
        refreshControl={
          <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[colors.primary]}
          />
        }
      />
    </Container>
  )
}

export default Store;
