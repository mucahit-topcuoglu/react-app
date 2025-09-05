import ApiService from "./api";

const API_BASE_URL = "http://localhost:3000";

export interface UpdatePasswordData {
  currentPassword: string;
  newPassword: string;
}

export interface UpdateProfileData {
  username?: string;
  email?: string;
  fullName?: string;
}

class UserService {
  // Şifre güncelleme metodu
  static async updatePassword(id: number, passwordData: UpdatePasswordData): Promise<{ message: string }> {
    return ApiService.patch(`/users/${id}/password`, passwordData);
  }

  // Profil güncelleme metodu
  static async updateProfile(id: number, profileData: UpdateProfileData): Promise<{ message: string }> {
    return ApiService.patch(`/users/${id}/profile`, profileData);
  }

  // Kullanıcı bilgilerini getirme metodu
  static async getUser(id: number): Promise<any> {
    return ApiService.get(`/users/${id}`);
  }
}

export default UserService;
