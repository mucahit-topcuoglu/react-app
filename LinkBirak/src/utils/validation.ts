// E-posta doğrulama
export function validateEmail(email: string): boolean {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i;
  return re.test(email);
}

// Şifre doğrulama
export function validatePassword(password: string): boolean {
  // En az 6 karakter, en az bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;
  return re.test(password);
}
