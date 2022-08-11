import React, {useState} from 'react';
import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';
import {useStore} from '../store/RootStore';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  folderName?: string;
  id?: string;
}

const Folder = ({folderName, id}: Props) => {
  const {noteStore} = useStore();
  const [folderId] = useState(id);

  return (
    <TouchableOpacity>
      <Wrapper>
        <Icon name="folder" size={50} />
        <NameText>{folderName}</NameText>
      </Wrapper>
    </TouchableOpacity>
  );
};

const Wrapper = styled.View`
  width: 80px;
  height: 80px;
  background-color: #f7f087;
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
