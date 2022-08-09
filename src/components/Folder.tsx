import React, {useState} from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native';
import {useStore} from '../store/RootStore';

interface Props {
  isNew: boolean;
  folderName?: string;
  id?: string;
}

const Folder = ({isNew, folderName, id}: Props) => {
  const {noteStore} = useStore();
  const [folderId] = useState(id);

  const handlePressFolder = async () => {
    console.log(folderId);
    if (isNew) {
      console.log('press');
      await noteStore.addFolder('hello');
    }
  };

  return (
    <TouchableOpacity onPress={handlePressFolder}>
      <Wrapper>
        {isNew ? (
          <>
            <Icon name="plus" size={50} />
            <NameText>New Group</NameText>
          </>
        ) : (
          <NameText>{folderName}</NameText>
        )}
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
