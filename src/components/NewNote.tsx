import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NewNote = () => {
  return (
    <TouchableOpacity>
      <Wrapper>
        <Icon name="plus" size={24} />
        <NewText>New Link Note</NewText>
      </Wrapper>
    </TouchableOpacity>
  );
};

const Wrapper = styled.View`
  width: 300px;
  height: 60px;
  background-color: #a5db27;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const NewText = styled.Text`
  text-align: center;
  font-size: 20px;
  margin: 0 0 0 15px;
`;

export default NewNote;
