import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {NewText, Wrapper} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useStore} from '../../store/RootStore';
import {AppBar} from '@react-native-material/core';
import {Picker} from '@react-native-picker/picker';

const NewNote = () => {
  const {noteStore} = useStore();
  const [title, setTitle] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [selectedFolder, setSelectedFolder] = useState<string>(
    noteStore.defaultId,
  );

  const [isVisibleNewNoteModal, setIsVisibleNewNoteModal] =
    useState<boolean>(false);

  const openNewNoteModal = () => {
    setIsVisibleNewNoteModal(true);
  };

  const closeNewNoteModal = () => {
    setIsVisibleNewNoteModal(false);
  };

  const handlePressNewNoteConfirmBtn = () => {
    noteStore.addNote({
      title: title,
      link: link,
      body: body,
      folderId: selectedFolder,
    });
    closeNewNoteModal();
  };

  const handlePressNewNoteBtn = () => {
    openNewNoteModal();
  };

  return (
    <>
      <TouchableOpacity onPress={handlePressNewNoteBtn}>
        <Wrapper>
          <Icon name="plus" size={24} />
          <NewText>New Folder</NewText>
        </Wrapper>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={false}
        visible={isVisibleNewNoteModal}
        onRequestClose={() => closeNewNoteModal()}>
        <AppBar
          title="Link Note"
          trailing={
            <TouchableOpacity onPress={handlePressNewNoteConfirmBtn}>
              <View>
                <Text style={{color: 'white'}}>저장</Text>
              </View>
            </TouchableOpacity>
          }
        />
        <Picker
          selectedValue={selectedFolder}
          onValueChange={itemValue => {
            setSelectedFolder(itemValue);
          }}>
          {noteStore.folders.map(folder => {
            return (
              <Picker.Item
                key={folder.id}
                label={folder.name}
                value={folder.id}
              />
            );
          })}
        </Picker>
        <CenteredNoteView>
          <StyledTextInput
            value={title}
            autoFocus={true}
            placeholder="title"
            onChangeText={(text: string) => setTitle(text)}
          />
          <StyledTextInput
            value={link}
            autoFocus={false}
            placeholder="link"
            onChangeText={(text: string) => setLink(text)}
          />
          <BodyContentInput
            value={body}
            autoFocus={false}
            placeholder="body"
            onChangeText={(text: string) => setBody(text)}
          />
        </CenteredNoteView>
      </Modal>
    </>
  );
};

const CenteredNoteView = styled.View`
  flex: 1;
  align-items: center;
`;

const StyledTextInput = styled.TextInput`
  width: 280px;
  height: 50px;
  border: solid 1px;
  border-radius: 15px;
  margin: 10px 0 0 0;
`;

const BodyContentInput = styled.TextInput`
  width: 280px;
  height: 500px;
  border: solid 1px;
  border-radius: 15px;
  margin: 10px 0 0 0;
`;

export default NewNote;
