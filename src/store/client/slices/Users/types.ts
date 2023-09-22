interface User {
  name: string;
  email: string;
  block_status: boolean;
  mute_duration: string;
  mute_status: boolean;
  online_status: boolean;
  img_url: string;
  id: string;
}

export default interface UsersSlice {
  searchResults: User[];
  selectedUser: null | string;
  selectedUserMuteStatus: boolean;
  isBlockModalClicked: boolean;
  isMuteModalClicked: boolean;
  lastUpdatedTime: null | string;
  handleBlockModal: () => void;
  handleMuteModal: () => void;
}
