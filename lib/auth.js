// Deprecated demo auth. Replaced by NextAuth + Prisma.
export const auth = {};
export const AUTH_KEYS = { USER: 'roam-relax-user', TOKEN: 'roam-relax-token' };
export const storage = { setUser: () => {}, getUser: () => null, clearUser: () => {}, isAuthenticated: () => false };
export const authUtils = {
  isValidEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  isStrongPassword: (password) => password.length >= 6,
  generateDemoUser: () => ({ id: 1, fullName: "Demo User", email: "demo@example.com", password: "demo123" })
};
