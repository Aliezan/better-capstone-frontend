// import axios from 'axios';
// import { StateCreator } from 'zustand';
// import { UsersSlice } from '../../../types';

// const createUsersSlice: StateCreator<UsersSlice> = (set, get) => ({
//   searchResults: [],
//   selectedUser: undefined,
//   selectedUserMuteStatus: undefined,
//   isBlockModalClicked: false,
//   isMuteModalClicked: false,
//   lastUpdatedTime: undefined,
//   handleBlockModal: () =>
//     set((state) => ({
//       isBlockModalClicked: !state.isBlockModalClicked,
//     })),
//   handleMuteModal: () =>
//     set((state) => ({
//       isMuteModalClicked: !state.isMuteModalClicked,
//     })),
//   handleSelectUser: (id) => {
//     const { users } = get();
//     if (users) {
//       const selectedUser = users.find((user) => user.id === id);

//       if (selectedUser) {
//         set({
//           selectedUser: id,
//           selectedUserMuteStatus: selectedUser.mute_status,
//         });
//       }
//     }
//   },
//   blockUser: async (id) => {
//     try {
//       const response = await axios.put(`${baseURL}/${id}`, {
//         block_status: true,
//       });

//       if (response.status === 200) {
//         get().getUsers();
//         set({
//           isBlockModalClicked: false,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   },
//   muteUser: async (id, duration) => {
//     try {
//       const response = await axios.put(`${baseURL}/${id}`, {
//         mute_duration: duration,
//         mute_status: true,
//       });

//       if (response.status === 200) {
//         get().getUsers();
//         set({
//           isMuteModalClicked: false,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   },
//   unblockUser: async (id) => {
//     try {
//       const response = await axios.put(`${baseURL}/${id}`, {
//         block_status: false,
//       });

//       if (response.status === 200) {
//         get().getUsers();
//         set({
//           isBlockModalClicked: false,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   },
//   unmuteUser: async (id) => {
//     try {
//       const response = await axios.put(`${baseURL}/${id}`, {
//         mute_duration: '',
//         mute_status: false,
//       });

//       if (response.status === 200) {
//         get().getUsers();
//         set({
//           isMuteModalClicked: false,
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   },
//   emptySearchResults: () =>
//     set(() => ({
//       searchResults: [],
//     })),
//   handleTotalUsersSearch: (searchValue) => {
//     const filteredResults = get().users.filter(
//       (user: { name: string; block_status: boolean }) =>
//         user.name.toLowerCase().includes(searchValue.toLowerCase()) &&
//         !user.block_status,
//     );

//     set({ searchResults: filteredResults });
//   },
//   handleOnlineUsersSearch: (searchValue) => {
//     const filteredResults = get().users.filter(
//       (user) =>
//         user.name.toLowerCase().includes(searchValue.toLowerCase()) &&
//         user.online_status &&
//         !user.block_status,
//     );

//     set({ searchResults: filteredResults });
//   },
//   handleMutedUsersSearch: (searchValue) => {
//     const filteredResults = get().users.filter(
//       (user) =>
//         user.name.toLowerCase().includes(searchValue.toLowerCase()) &&
//         user.mute_status,
//     );

//     set({ searchResults: filteredResults });
//   },
//   handleBlockedUsersSearch: (searchValue) => {
//     const filteredResults = get().users.filter(
//       (user) =>
//         user.name.toLowerCase().includes(searchValue.toLowerCase()) &&
//         user.block_status,
//     );

//     set({ searchResults: filteredResults });
//   },
// });

// export default createUsersSlice;
