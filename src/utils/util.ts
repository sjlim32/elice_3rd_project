import auth from '@/components/common/auth';

export const getUserInfo = () => {
  const user = auth.currentUser;

  const email = user?.email;
  const nickname = user?.displayName;

  return { email, nickname };
};
