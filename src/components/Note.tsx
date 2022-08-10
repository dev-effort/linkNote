import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import NoteModel from '../models/NoteModel';

interface Props {
  note: NoteModel;
}

const Note = ({note}: Props) => {
  return (
    <TouchableOpacity>
      <Wrapper>
        <NameText>{note.title}</NameText>
      </Wrapper>
    </TouchableOpacity>
  );
};

const Wrapper = styled.View`
  width: 320px;
  height: 35px;
  background-color: #dbdb27;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const NameText = styled.Text`
  text-align: center;
  font-size: 15px;
`;

export default Note;
