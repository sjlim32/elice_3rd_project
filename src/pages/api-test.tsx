import * as API from '@/utils/api';
import axios from 'axios';

const apiTest = () => {
  interface jsonType {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const apiTest = async (): Promise<jsonType> => {
    // const response = await API.get<jsonType>('/posts');
    const response = await axios.get('http://3.39.79.138/api/v1/posts');
    return response.data;
  };
  const testAPI = async () => {
    const result = await apiTest();
    console.log('test', result, typeof result);
  };

  return (
    <>
      <div>
        <button type="button" onClick={testAPI}>
          {' '}
          test api
        </button>
      </div>
    </>
  );
};

export default apiTest;
