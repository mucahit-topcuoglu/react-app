import { ApiService } from "./api";
import type { ILink } from "../interfaces";
import type { CreateLinkData } from "../interfaces";

export interface UpdateLinkData {
  url?: string;
  title?: string;
  description?: string;
  tags?: string[];
}

export class LinkService {
  static async getLinks(): Promise<ILink[]> {
    return ApiService.get<ILink[]>("/links");
  }

  static async getLink(id: number): Promise<ILink> {
    return ApiService.get<ILink>(`/links/${id}`);
  }

  static async createLink(linkData: CreateLinkData): Promise<ILink> {
    return ApiService.post<ILink>("/links", linkData);
  }

  static async updateLink(id: number, linkData: UpdateLinkData): Promise<ILink> {
    return ApiService.patch<ILink>(`/links/${id}`, linkData);
  }

  static async deleteLink(id: number): Promise<void> {
    return ApiService.delete(`/links/${id}`);
  }
}
