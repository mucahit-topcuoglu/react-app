export interface Link {
  id: string;
  url: string;
  title: string;
  description: string;
  tags: string[];
  createdAt: Date;
}

export interface LinkFormData {
  url: string;
  title: string;
  description: string;
  tags: string[];
}
