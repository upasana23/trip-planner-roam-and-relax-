// Simple authentication utility for demo purposes
// In a real app, you'd use proper authentication libraries like NextAuth.js

export const auth = {
  // Simulate user storage
  users: [
    {
      id: 1,
      fullName: "Demo User",
      email: "demo@example.com",
      password: "demo123" // In real app, this would be hashed
    }
  ],

  // Check if user exists
  checkUser: (email, password) => {
    const user = auth.users.find(u => u.email === email && u.password === password);
    return user ? { ...user, password: undefined } : null;
  },

  // Create new user
  createUser: (userData) => {
    const existingUser = auth.users.find(u => u.email === userData.email);
    if (existingUser) {
      return { success: false, error: "User already exists" };
    }

    const newUser = {
      id: auth.users.length + 1,
      ...userData,
      password: userData.password // In real app, hash this password
    };

    auth.users.push(newUser);
    return { success: true, user: { ...newUser, password: undefined } };
  },

  // Get user by ID
  getUserById: (id) => {
    const user = auth.users.find(u => u.id === id);
    return user ? { ...user, password: undefined } : null;
  },

  // Get all users (for demo purposes)
  getAllUsers: () => {
    return auth.users.map(user => ({ ...user, password: undefined }));
  },

  // Check if email is already taken
  isEmailTaken: (email) => {
    return auth.users.some(u => u.email === email);
  }
};

// Local storage keys
export const AUTH_KEYS = {
  USER: 'roam-relax-user',
  TOKEN: 'roam-relax-token'
};

// Local storage helpers
export const storage = {
  setUser: (user) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(AUTH_KEYS.USER, JSON.stringify(user));
    }
  },

  getUser: () => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem(AUTH_KEYS.USER);
      return user ? JSON.parse(user) : null;
    }
    return null;
  },

  clearUser: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(AUTH_KEYS.USER);
    }
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return storage.getUser() !== null;
  }
};

// Utility functions
export const authUtils = {
  // Validate email format
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validate password strength
  isStrongPassword: (password) => {
    return password.length >= 6;
  },

  // Generate demo user data
  generateDemoUser: () => {
    return {
      id: 1,
      fullName: "Demo User",
      email: "demo@example.com",
      password: "demo123"
    };
  }
};
