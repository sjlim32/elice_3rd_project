import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import auth from '@/components/common/auth';

const baseURL = process.env.NEXT_PUBLIC_AXIOS_BASE_URL;

const user = auth.currentUser;

interface CustomAxiosResponse<T> extends AxiosResponse<T> {
  error?: string | null;
}

async function request<T>(
  config: AxiosRequestConfig
): Promise<CustomAxiosResponse<T>> {
  const {
    method,
    url: endpointUrl,
    data,
    headers = {},
    ...restConfig
  } = config;

  console.log(`${method} 요청: ${endpointUrl}`);

  try {
    if (user) {
      const idToken = await user.getIdToken();
      if (!headers['Authorization']) {
        headers['Authorization'] = `Bearer ${idToken}`;
      }
    }

    const response = await axios.request<T>({
      method,
      url: endpointUrl,
      baseURL,
      headers,
      data,
      ...restConfig,
    });

    return response;
  } catch (error) {
    console.error(`${method} 요청 ERROR`, error);
    throw error;
  }
}

type AxiosRequestConfigWithoutMethodAndUrl = Omit<
  AxiosRequestConfig,
  'method' | 'url'
>;

function get<T>(
  endpoint: string,
  options?: AxiosRequestConfigWithoutMethodAndUrl
): Promise<CustomAxiosResponse<T>> {
  return request<T>({ method: 'GET', url: endpoint, ...options });
}

function post<T>(
  endpoint: string,
  data: unknown,
  options?: AxiosRequestConfigWithoutMethodAndUrl
): Promise<CustomAxiosResponse<T>> {
  return request<T>({ method: 'POST', url: endpoint, data, ...options });
}

function patch<T>(
  endpoint: string,
  data: unknown,
  options?: AxiosRequestConfigWithoutMethodAndUrl
): Promise<CustomAxiosResponse<T>> {
  return request<T>({ method: 'PATCH', url: endpoint, data, ...options });
}

function del<T>(
  endpoint: string,
  options?: AxiosRequestConfigWithoutMethodAndUrl
): Promise<CustomAxiosResponse<T>> {
  return request<T>({ method: 'DELETE', url: endpoint, ...options });
}

export { get, post, patch, del as delete };
