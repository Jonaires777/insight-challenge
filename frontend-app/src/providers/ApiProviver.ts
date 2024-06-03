import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "@/src/utils/constants"

class ApiProvider {
  private instance;

  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
    });
  }

  async get<T>(path: string, options?: AxiosRequestConfig): Promise<T> {
    try {
      const response = await this.instance.get<T>(path, options);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async post<T, D>(
    path: string,
    data?: D,
    options?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.instance.post<T>(path, data, options);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async put<T, D>(
    path: string,
    data?: D,
    options?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.instance.put<T>(path, data, options);

      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete<T>(
    path: string,
    data?: string,
    options?: AxiosRequestConfig
  ): Promise<T> {
    try {
      const response = await this.instance.delete<T>(path, options);

      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

const apiProvider = new ApiProvider();

export default apiProvider;
