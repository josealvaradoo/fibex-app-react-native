import React, {FC} from 'react';
import {ChevronDownIcon, HStack, Pressable, Text, View} from 'native-base';

type Props = {
  contract: string;
  onOpen: () => void;
};

const Card: FC<Props> = ({contract, onOpen}) => {
  return (
    <View
      bg="white"
      width="94%"
      position="relative"
      display="flex"
      flexDir="row"
      alignItems="center"
      top={-60}
      mx="3%"
      padding={6}
      borderRadius={10}
      shadow={3}>
      <View flex={3}>
        <Text color="black" fontSize="xl">
          Saldo Actual
        </Text>
        <Text fontSize="xl" color="danger.500">
          $ 60.00
        </Text>
      </View>
      <Pressable
        onPress={onOpen}
        borderRadius={10}
        paddingX={4}
        height={12}
        background="blue.100">
        <HStack
          flex={1}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          space={1}>
          <Text>{contract}</Text>
          <ChevronDownIcon />
        </HStack>
      </Pressable>
    </View>
  );
};

export default Card;
