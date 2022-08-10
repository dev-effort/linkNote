import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {useStore} from '../store/RootStore';

interface Props {
  folderName?: string;
  id?: string;
}

const Folder = ({folderName, id}: Props) => {
  const {noteStore, uiStore} = useStore();
  const [folderId] = useState(id);

  return (
    <TouchableOpacity>
      <Wrapper>
        <NameText>{folderName}</NameText>
      </Wrapper>
    </TouchableOpacity>
  );
};

const Wrapper = styled.View`
  width: 90px;
  height: 90px;
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

export default Folder;
