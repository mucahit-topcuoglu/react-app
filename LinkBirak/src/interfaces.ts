export interface ILink {
  id: number;
  url: string;
  title: string;
  description: string;
  userId: number;
  createdAt: Date;
  tags?: ITag[];
}

export interface CreateLinkData {
  url: string;
  title: string;
  description: string;
  tags?: string[];
}

export interface ITag {
  id: number;
  name: string;
}

export interface IUser {
  id: number;
  email: string;
  username: string;
  fullName?: string;
  createdAt: Date;
}
