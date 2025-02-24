import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SyncService {
  private readonly baseUrl = 'http://node-app:4000';

  async get<T = any>(endpoint: string): Promise<T> {
    try {
      const response = await axios.get<T>(`${this.baseUrl}${endpoint}`);
      return response.data;
    } catch (error) {
      const e = error as Error;
      throw new Error(`Error calling node-app: ${e.message}`);
    }
  }

  async post<T = any>(endpoint: string, data: any): Promise<T> {
    try {
      const response = await axios.post<T>(`${this.baseUrl}${endpoint}`, data);
      return response.data;
    } catch (error) {
      const e = error as Error;
      throw new Error(`Error calling node-app: ${e.message}`);
    }
  }
}
