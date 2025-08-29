export function validateEmail(email: string): boolean {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i;
  return re.test(email);
}

export function validatePassword(password: string): boolean {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;
  return re.test(password);
}
