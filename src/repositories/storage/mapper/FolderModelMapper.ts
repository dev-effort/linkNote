import {StorageMapper} from '../StorageMapper';
import FolderModel from '../../../models/FolderModel';

class FolderModelMapper implements StorageMapper<FolderModel> {
  fromJson(json: any): FolderModel {
    const folder = JSON.parse(json);
    return new FolderModel(folder._name, folder._id, folder._notes);
  }
}

export default new FolderModelMapper();
