import axios, { AxiosResponse } from 'axios';
import auth from '@/components/common/auth';

const baseURL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL;

const user = auth.currentUser;

async function request<T>(
  method: string,
  endpoint: string,
  data?: unknown
): Promise<AxiosResponse<T>> {
  console.log(`${method} 요청: ${endpoint}`);

  try {
    let headers = {};

    if (user) {
      const idToken = await user.getIdToken();
      headers = {
        Authorization: `Bearer ${idToken}`,
      };
    }

    const response = await axios.request<T>({
      method,
      url: endpoint,
      baseURL,
      headers,
      data,
    });

    return response;
  } catch (error) {
    console.error(`${method} 요청 ERROR`, error);
    throw error;
  }
}

function get<T>(endpoint: string): Promise<AxiosResponse<T>> {
  return request<T>('GET', endpoint);
}

function post<T>(endpoint: string, data: unknown): Promise<AxiosResponse<T>> {
  return request<T>('POST', endpoint, data);
}

function patch<T>(endpoint: string, data: unknown): Promise<AxiosResponse<T>> {
  return request<T>('PATCH', endpoint, data);
}

function del<T>(endpoint: string): Promise<AxiosResponse<T>> {
  return request<T>('DELETE', endpoint);
}

export { get, post, patch, del as delete };
