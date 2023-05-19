import auth from '@/components/common/auth';

export const getUserInfo = async () => {
  return new Promise(resolve => {
    const user = auth.currentUser;
    if (user) {
      resolve({
        email: user.email || '',
        nickname: user.displayName || '',
      });
    } else {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          resolve({
            email: user.email || '',
            nickname: user.displayName || '',
          });
          unsubscribe(); // 사용자 정보가 얻어진 후에는 이벤트 리스너 해제
        }
      });
    }
  });
};
