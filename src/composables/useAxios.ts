import { ref } from 'vue';
import axios, { AxiosRequestConfig } from 'axios';

const useAxios = (url: string, config: AxiosRequestConfig = {}, skip = false) => {
  const data = ref<object | null>(null);
  const response = ref<object | null>(null);
  const error = ref<any>(null);
  const loading = ref(false);

  const makeRequest = async () => {
    loading.value = true;
    try {
      const result = await axios.request({
        url,
        ...config,
      });
      response.value = result;
      data.value = result.data;
    } catch (exception: any) {
      error.value = exception;
    } finally {
      loading.value = false;
    }
  };

  if (skip === false) {
    makeRequest();
  }

  return {
    response,
    error,
    data,
    loading,
    makeRequest,
  };
};

export default useAxios;
