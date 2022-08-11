import React from 'react';
import styled from 'styled-components/native';
import {FlatList, Text} from 'react-native';
import {AppBar, IconButton} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Folder from './Folder';
import {useStore} from '../store/RootStore';
import {observer} from 'mobx-react-lite';
import Note from './Note';
import NewFolder from './NewBox/NewFolder';
import NewNote from './NewBox/NewNote';

const Home = () => {
  const {noteStore} = useStore();

  const handlePressAppBar = async () => {
    await noteStore.deleteAllFolders();
  };

  return (
    <Wrapper>
      <AppBar
        color="black"
        leading={
          <IconButton
            icon={<Icon name="menu" size={24} onPress={handlePressAppBar} />}
          />
        }
        title="Link Note"
      />
      <NewWapper>
        <NewFolder />
        <NewNote />
      </NewWapper>
      <FoldersWrapper>
        <FolderWrapperTop>
          <NameText>All Folders</NameText>
        </FolderWrapperTop>
        <FoldersWrapperBody>
          <FlatList
            horizontal={true}
            data={noteStore.folders}
            renderItem={item => (
              <FolderStyle>
                <Folder
                  id={item.item.id}
                  key={item.item.id}
                  folderName={item.item.name}
                />
              </FolderStyle>
            )}
          />
        </FoldersWrapperBody>
      </FoldersWrapper>
      <NotesWrapper>
        <NoteWrapperTop>
          <NameText>All Notes</NameText>
        </NoteWrapperTop>
        <FlatList
          data={noteStore?.notesInDefault}
          renderItem={item => (
            <NoteStyle>
              <Note note={item.item} />
            </NoteStyle>
          )}
        />
      </NotesWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  height: 100%;
`;

const NewWapper = styled.View`
  align-items: center;
  margin: 20px auto 0 auto;
  flex-direction: row;
`;

const FoldersWrapper = styled.View`
  flex-direction: column;
  flex-wrap: wrap;
  height: 140px;
  width: 350px;
  margin: 20px auto;
  border: 1px solid;
`;

const FolderWrapperTop = styled.View`
  background-color: #e0e0e0;
  height: 35px;
  width: 348px;
`;

const NameText = styled.Text`
  font-size: 15px;
  margin: auto 0 auto 15px;
`;

const FoldersWrapperBody = styled.View`
  flex-direction: row;
`;

const NotesWrapper = styled.View`
  flex-direction: column;
  flex-wrap: wrap;
  height: 300px;
  width: 350px;
  margin: 10px auto;
  border: 1px solid;
`;

const NoteWrapperTop = styled.View`
  background-color: #e0e0e0;
  height: 35px;
  width: 348px;
`;

const FolderStyle = styled.View`
  flex-basis: auto;
  margin: 10px 5px 5px 7px;
`;

const NoteStyle = styled.View`
  flex-basis: auto;
  margin: 12px auto 0 auto;
`;

export default observer(Home);
