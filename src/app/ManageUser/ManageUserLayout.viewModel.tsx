import { FormikValues, useFormik } from 'formik';
import useStore from '@/store/client/store';
import { User } from '../../../types';

const ManageUserViewModel = () => {
  const blockedUsers = useStore
    .getState()
    .users.filter((user: User) => user.block_status).length;

  const mutedUsers = useStore
    .getState()
    .users.filter((user: User) => user.mute_status).length;

  const onlineUsers = useStore
    .getState()
    .users.filter(
      (user: User) => user.online_status && !user.block_status,
    ).length;

  const totalUsers = useStore
    .getState()
    .users.filter((user: User) => !user.block_status).length;

  const formik = useFormik({
    initialValues: {
      searchValue: '',
    },
    onSubmit: (values: FormikValues) => {
      if (currentPageLocation === '/manage-user/total') {
        handleTotalUsersSearch(values.searchValue);
      }
      if (currentPageLocation === '/manage-user/online') {
        handleOnlineUsersSearch(values.searchValue);
      }
      if (currentPageLocation === '/manage-user/muted') {
        handleMutedUsersSearch(values.searchValue);
      }
      if (currentPageLocation === '/manage-user/blocked') {
        handleBlockedUsersSearch(values.searchValue);
      }

      setSearchHistory(values.searchValue);
    },
  });

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      formik.handleSubmit();
    }
  };

  const handleDelete = () => {
    useStore.getState().deleteSearchHistory();
  };

  const handleClickSearchHistory = (searchValue: string) => {
    formik.setFieldValue('searchValue', searchValue);
  };

  const handleOnFocus = () => {
    useStore.getState().handleFocus();
  };

  const handleOnBlur = () => {
    useStore.getState().handleBlur();
  };

  return {
    getUsers,
    formik,
    isExpand,
    isFocused,
    handleKeyPress,
    blockedUsers,
    mutedUsers,
    onlineUsers,
    totalUsers,
    searchHistory,
    handleDelete,
    setLocation,
    emptySearchResults,
    handleClickSearchHistory,
    currentPageLocation,
    handleOnFocus,
    handleOnBlur,
    lastUpdatedTime,
  };
};

export default ManageUserViewModel;
