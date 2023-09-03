export interface UsersSlice {
  searchResults: User[];
  selectedUser: undefined | number;
  selectedUserMuteStatus: undefined | boolean;
  isBlockModalClicked: boolean;
  isMuteModalClicked: boolean;
  lastUpdatedTime: undefined | string;
  handleBlockModal: () => void;
  handleMuteModal: () => void;
  handleSelectUser: (id: number) => void;
  blockUser: (id: number) => void;
  muteUser: (id: number, duration: string) => void;
  unblockUser: (id: number) => void;
  unmuteUser: (id: number) => void;
  handleTotalUsersSearch: (searchValue: string) => void;
  handleOnlineUsersSearch: (searchValue: string) => void;
  handleMutedUsersSearch: (searchValue: string) => void;
  handleBlockedUsersSearch: (searchValue: string) => void;
}

export interface SidebarSlice {
  isExpand: boolean;
}

export interface KeluarModalSlice {
  isKeluarModalClicked: boolean;
  setIsKeluarModalClicked: () => void;
}

export interface Report {}

export type StateFromFunctions<T extends [...any]> = T extends [
  infer F,
  ...infer R,
]
  ? F extends (...args: any) => object
    ? StateFromFunctions<R> & ReturnType<F>
    : unknown
  : unknown;
