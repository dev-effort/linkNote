import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Modal, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NewType} from './types';
import {useStore} from '../store/RootStore';
import {observer} from 'mobx-react-lite';

interface Props {
  type: NewType;
}

const NewBox = ({type}: Props) => {
  const {noteStore, uiStore} = useStore();
  const [newFolderName, setNewFolderName] = useState<string>('');

  const newContent = () => {
    if (type == 'FOLDER') {
      return 'New Folder';
    } else if (type == 'NOTE') {
      return 'New Link Note';
    } else {
      throw Error('choose type NOTE, FOLDER');
    }
  };

  const handlePressNewBox = () => {
    if (type == 'FOLDER') {
      uiStore.openNewFolderModal();
    }
  };

  const handlePressNewFolderConfirmBtn = async () => {
    await noteStore.addFolder(newFolderName);
    setNewFolderName('');
    uiStore.closeNewFolderModal();
  };

  return (
    <>
      <TouchableOpacity onPress={handlePressNewBox}>
        <Wrapper>
          <Icon name="plus" size={24} />
          <NewText>{newContent()}</NewText>
        </Wrapper>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={uiStore.isVisibleNewFolderModal}
        onRequestClose={() => uiStore.closeNewFolderModal()}>
        <CenteredView>
          <NewFolderWrapper>
            <NewFolderNameTextInput
              value={newFolderName}
              autoFocus={true}
              placeholder="folder name"
              onChangeText={(text: string) => setNewFolderName(text)}
            />
            <NewFolderBtnWrapper>
              <NewFolderBtn onPress={() => uiStore.closeNewFolderModal()}>
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

const Wrapper = styled.View`
  width: 350px;
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

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const NewFolderWrapper = styled.View`
  width: 300px;
  height: 135px;
  background-color: white;
  border-radius: 10px;
  align-items: center;
`;

const NewFolderNameTextInput = styled.TextInput`
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

export default observer(NewBox);
