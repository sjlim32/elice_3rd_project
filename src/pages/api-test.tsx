import * as API from '@/utils/api';
import { useEffect, useState } from 'react';
import { getUserInfo } from '@/utils/util';
import auth from '@/components/common/auth';
import { onAuthStateChanged, signOut } from 'firebase/auth';


const apiTest = () => {
  const [post, setPost] = useState<string>("")

  interface jsonType {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  interface catType {
    id: number,
    name: string
  }

  const apiTest = async (): Promise<string> => {
    // const response = await API.get<jsonType>('/posts');

    const response = await API.get<string>('/posts/10',);
    return response;
  };

 const getCategories = async (): Promise<catType> => {

    const response = await API.get<catType>('/categories');
    return response
  }

  const testAPI = async () => {
    const result = await apiTest();
    console.log('test', result, typeof result);
    // setPost(result.data.content)
  };

 
// export const getUserInfo = () => {
//   const user = auth.currentUser;

//   const email = user?.email;
//   const nickname = user?.displayName;

//   return { email, nickname };
// };

  // useEffect(()=>{
  //   const response = getCategories()
  //   console.log('cate' , response)
  // },[])
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const localToken = async() => {
  //   const unsubscribe = onAuthStateChanged(auth, user => {
  //     if (user) {
  //       return user
  //     }
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }

  useEffect(()=>{
    const user = localStorage.getItem('token')
    console.log('userinfo',user)
    testAPI()
  },[])


  let [currentUser, setUser] = useState(null);
  
  useEffect(() => {
     
    }),[];



  return (
    <>
      <div>
        <button type="button" onClick={testAPI}>
          test api
        </button>
        <div dangerouslySetInnerHTML={{ __html: post }} />
      </div>
    </>
  );
};

export default apiTest;
