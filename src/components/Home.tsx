import React from 'react';
import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import {AppBar, IconButton} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NewBox from './NewBox';
import Folder from './Folder';
import {useStore} from '../store/RootStore';
import {observer} from 'mobx-react-lite';

const Home = () => {
  const {noteStore} = useStore();

  const handlePressAppBar = async () => {
    await noteStore.deleteAllFolders();
  };

  return (
    <Wrapper>
      <AppBar
        leading={
          <IconButton
            icon={<Icon name="menu" size={24} onPress={handlePressAppBar} />}
          />
        }
        title="Link Note"
      />
      <NewWapper>
        <NewBox type="FOLDER" />
      </NewWapper>
      <FolderWrapper>
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
      </FolderWrapper>
      <NewWapper>
        <NewBox type="NOTE" />
      </NewWapper>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: #6f27db;
  height: 100%;
`;

const NewWapper = styled.View`
  align-items: center;
  margin: 30px auto 0 auto;
`;

const FolderWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  height: 140px;
  width: 350px;
  background-color: #a5db27;
  margin: 10px auto;
  border-radius: 10px;
  padding: 15px;
`;

const FolderStyle = styled.View`
  flex-basis: auto;
  margin: 7px 0 0 7px;
`;

export default observer(Home);
