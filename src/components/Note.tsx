import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Linking, Modal, Text, TouchableOpacity, View} from 'react-native';
import NoteModel from '../models/NoteModel';
import {AppBar} from '@react-native-material/core';

interface Props {
  note: NoteModel;
}

const Note = ({note}: Props) => {
  const [isVisibleNoteDetail, setIsVisibleNoteDetail] =
    useState<boolean>(false);

  const openNoteDetail = () => {
    setIsVisibleNoteDetail(true);
  };

  const closeNoteDetail = () => {
    setIsVisibleNoteDetail(false);
  };

  return (
    <>
      <TouchableOpacity onPress={openNoteDetail}>
        <Wrapper>
          <NameText>{note.title}</NameText>
        </Wrapper>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isVisibleNoteDetail}
        onRequestClose={() => closeNoteDetail()}>
        <AppBar title={note.title} />
        <CenteredNoteView>
          <View>
            <Text
              style={{color: 'blue'}}
              onPress={() => Linking.openURL(`${note.link}`)}>
              {note.link}
            </Text>
            <Text>{note.main}</Text>
          </View>
        </CenteredNoteView>
      </Modal>
    </>
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

const CenteredNoteView = styled.View`
  flex: 1;
`;

export default Note;
