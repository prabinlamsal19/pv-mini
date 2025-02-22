import axios from "axios";

export class DolbyService {
  private static readonly baseUrl = "http://nest-app:3000";

  static async get<T = any>(endpoint: string): Promise<T> {
    try {
      const response = await axios.get<T>(`${this.baseUrl}${endpoint}`);
      return response.data;
    } catch (error) {
      const e = error as Error;
      throw new Error(`Error calling node-app: ${e.message}`);
    }
  }

  static async post<T = any>(endpoint: string, data: any): Promise<T> {
    try {
      const response = await axios.post<T>(`${this.baseUrl}${endpoint}`, data.toJson());
      return response.data;
    } catch (error) {
      const e = error as Error;
      throw new Error(`Error calling node-app: ${e.message}`);
    }
  }
}
