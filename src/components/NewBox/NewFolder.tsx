import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Modal, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import {CenteredView, NewText, Wrapper} from './styles';
import {useStore} from '../../store/RootStore';

const NewFolder = () => {
  const {noteStore} = useStore();
  const [folderName, setFolderName] = useState<string>('');
  const [isVisibleNewFolderModal, setIsVisibleNewFolderModal] =
    useState<boolean>(false);

  const openNewFolderModal = () => {
    setIsVisibleNewFolderModal(true);
  };

  const closeNewFolderModal = () => {
    setIsVisibleNewFolderModal(false);
  };

  const handlePressNewFolderBtn = () => {
    openNewFolderModal();
  };

  const handlePressNewFolderConfirmBtn = async () => {
    await noteStore.addFolder(folderName);
    setFolderName('');
    closeNewFolderModal();
  };

  return (
    <>
      <TouchableOpacity onPress={handlePressNewFolderBtn}>
        <Wrapper>
          <Icon name="folder-plus" size={24} />
          <NewText>New Folder</NewText>
        </Wrapper>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisibleNewFolderModal}
        onRequestClose={() => closeNewFolderModal()}>
        <CenteredView>
          <NewFolderWrapper>
            <StyledTextInput
              value={folderName}
              autoFocus={true}
              placeholder="folder name"
              onChangeText={(text: string) => setFolderName(text)}
            />
            <NewFolderBtnWrapper>
              <NewFolderBtn onPress={() => closeNewFolderModal()}>
                <Text>취소</Text>
              </NewFolderBtn>
              <NewFolderBtn onPress={() => handlePressNewFolderConfirmBtn()}>
                <Text>확인</Text>
              </NewFolderBtn>
            </NewFolderBtnWrapper>
          </NewFolderWrapper>
        </CenteredView>
      </Modal>
    </>
  );
};

const NewFolderWrapper = styled.View`
  width: 300px;
  height: 135px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
`;

const StyledTextInput = styled.TextInput`
  width: 280px;
  height: 50px;
  border: solid 1px;
  border-radius: 15px;
  margin: 10px 0 0 0;
`;

const NewFolderBtnWrapper = styled.View`
  flex-direction: row;
  padding: 10px;
  margin: auto;
`;

const NewFolderBtn = styled.TouchableOpacity`
  width: 70px;
  height: 50px;
  background-color: yellow;
  margin: 0 20px 0 20px;
`;

export default NewFolder;
