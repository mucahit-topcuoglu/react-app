import { ApiService } from './api';
import type { ILink } from '../interfaces';
import type { CreateLinkData } from '../interfaces';

export class LinkService {
  static async getLinks(): Promise<ILink[]> {
    return ApiService.get<ILink[]>('/links');
  }

  static async createLink(linkData: CreateLinkData): Promise<ILink> {
    return ApiService.post<ILink>('/links', linkData);
  }

  // Link silme metodu
  static async deleteLink(id: number): Promise<void> {
    return ApiService.delete(`/links/${id}`);
  }
} 