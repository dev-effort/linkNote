import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';
import {AppBar, IconButton} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import NewNote from './NewNote';
import Folder from './Folder';
import {useStore} from '../store/RootStore';
import {observer} from 'mobx-react-lite';

const Home = () => {
  const {noteStore} = useStore();

  useEffect(() => {
    const init = async () => {
      await noteStore.init();
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <AppBar
        leading={<IconButton icon={<Icon name="menu" size={24} />} />}
        title="Link Note"
      />
      <ScrollView>
        <NewNoteWapper>
          <NewNote />
        </NewNoteWapper>
        <GroupWrapper>
          <Folder isNew={true} />
          {noteStore.folders?.map(folder => {
            console.log('folders1', folder);
            return (
              <Folder
                key={folder.id}
                isNew={false}
                folderName={folder.name}
                id={folder.id}
              />
            );
          })}
        </GroupWrapper>
      </ScrollView>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  background-color: #6f27db;
  height: 100%;
`;

const NewNoteWapper = styled.View`
  align-items: center;
  margin: 30px;
`;

const GroupWrapper = styled.View`
  flex-direction: row;
  height: 250px;
  width: 300px;
  background-color: #a5db27;
  margin: auto;
  border-radius: 10px;
  padding: 15px;
`;

export default observer(Home);
