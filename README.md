# Roam & Relax - Travel Planning Application

A modern, interactive travel planning application built with Next.js, featuring user authentication, trip planning, and beautiful UI components.

## ✨ Features

- **User Authentication**: Sign up, login, and user management
- **Interactive UI**: Smooth animations, hover effects, and responsive design
- **Trip Planning**: Search destinations, set preferences, and plan itineraries
- **Dashboard**: Personalized user dashboard with trip management
- **Modern Design**: Glass morphism, gradients, and beautiful visual effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trip-planner-roam-and-relax-
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔐 Authentication System

### Demo Account
You can test the application using the pre-created demo account:
- **Email**: demo@example.com
- **Password**: demo123

### Creating New Accounts
1. Click "Sign Up" on the homepage
2. Fill in your details (full name, email, password)
3. Submit the form to create your account
4. You'll be redirected to the dashboard

### Logging In
1. Click "Login" on the homepage
2. Enter your credentials
3. Use the demo account or your created account
4. Access your personalized dashboard

## 🎨 Interactive Features

- **Floating Animations**: Hero text and search form gently float
- **Hover Effects**: Cards scale up and show enhanced shadows
- **Smooth Transitions**: All interactions have 300-500ms smooth animations
- **Glass Morphism**: Modern backdrop blur effects
- **Responsive Design**: Mobile-friendly interactive elements

## 🏗️ Project Structure

```
app/
├── page.js              # Homepage with search form
├── signup/              # User registration
├── login/               # User authentication
├── dashboard/           # User dashboard
├── globals.css          # Global styles and animations
└── layout.js            # Root layout
lib/
├── auth.js              # Authentication utilities
└── utils.js             # Helper functions
components/
└── ui/                  # Reusable UI components
```

## 🔧 Technical Details

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom animations
- **State Management**: React hooks and local storage
- **Authentication**: Local storage-based (demo purposes)
- **Icons**: Lucide React icons
- **UI Components**: Custom component library

## 🎯 Usage Examples

### Testing Authentication
1. **Sign Up Flow**:
   - Navigate to `/signup`
   - Fill out the form with valid information
   - Submit and verify redirection to dashboard

2. **Login Flow**:
   - Navigate to `/login`
   - Use demo credentials or your account
   - Verify successful authentication

3. **Dashboard Access**:
   - After login, access personalized dashboard
   - View trip statistics and quick actions
   - Test logout functionality

### Interactive Elements
- **Search Form**: Hover over form fields to see animations
- **Quick Actions**: Click on action cards to navigate
- **Floating Button**: Use the circular plane button for quick access
- **Navigation**: Test signup/login button interactions

## 🚧 Development Notes

- **Local Storage**: User data is stored in browser localStorage
- **Demo Mode**: Pre-configured demo account for testing
- **Responsive**: Test on different screen sizes
- **Animations**: Custom CSS animations for enhanced UX

## 🔮 Future Enhancements

- [ ] Backend API integration
- [ ] Real user authentication (NextAuth.js)
- [ ] Database integration
- [ ] Trip saving and management
- [ ] Social features and sharing
- [ ] Mobile app version

## 📝 License

This project is for demonstration purposes. Feel free to use and modify as needed.

---

**Happy Travel Planning! ✈️🌍**
