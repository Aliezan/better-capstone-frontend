import { StateCreator } from 'zustand';
import UsersSlice from './types';

const createUsersSlice: StateCreator<UsersSlice> = (set, get) => ({
  searchResults: [],
  selectedUser: null,
  selectedUserMuteStatus: false,
  isBlockModalClicked: false,
  isMuteModalClicked: false,
  lastUpdatedTime: null,
  handleBlockModal: () =>
    set((state) => ({
      isBlockModalClicked: !state.isBlockModalClicked,
    })),
  handleMuteModal: () =>
    set((state) => ({
      isMuteModalClicked: !state.isMuteModalClicked,
    })),
  handleSelectUser: (id) => {
    const { users } = get();
    if (users) {
      const selectedUser = users.find((user) => user.id === id);

      if (selectedUser) {
        set({
          selectedUser: id,
          selectedUserMuteStatus: selectedUser.mute_status,
        });
      }
    }
  },
  emptySearchResults: () =>
    set(() => ({
      searchResults: [],
    })),
  handleTotalUsersSearch: (searchValue) => {
    const filteredResults = get().users.filter(
      (user: { name: string; block_status: boolean }) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        !user.block_status,
    );

    set({ searchResults: filteredResults });
  },
  handleOnlineUsersSearch: (searchValue) => {
    const filteredResults = get().users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        user.online_status &&
        !user.block_status,
    );

    set({ searchResults: filteredResults });
  },
  handleMutedUsersSearch: (searchValue) => {
    const filteredResults = get().users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        user.mute_status,
    );

    set({ searchResults: filteredResults });
  },
  handleBlockedUsersSearch: (searchValue) => {
    const filteredResults = get().users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchValue.toLowerCase()) &&
        user.block_status,
    );

    set({ searchResults: filteredResults });
  },
});

export default createUsersSlice;
