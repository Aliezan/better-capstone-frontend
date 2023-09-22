import { useSession, signOut } from 'next-auth/react';

const NavbarViewModel = () => {
  const { data: session } = useSession();

  const handleSignOut = () => {
    signOut();
  };

  if (session) {
    return {
      name: session?.user?.name,
      image: session?.user?.image,
      handleSignOut,
    };
  }

  return {
    handleSignOut,
  };
};

export default NavbarViewModel;
