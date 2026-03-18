# Backend Java Developer Portfolio

A fully responsive, modular React.js portfolio website built for a Backend Java Developer. Features dark mode design, smooth animations, and modern UI components.

## 🚀 Features

- **Fully Responsive**: Works flawlessly on mobile (320px+), tablet (768px+), and desktop (1440px+)
- **Modern React Architecture**: Modular component structure with separate CSS files
- **Dark Mode Design**: Professional dark theme with electric teal accents
- **Interactive Animations**: 
  - Typing effect in hero section
  - Scroll-triggered reveal animations
  - Counter animations for statistics
  - Smooth hover effects
- **Sections**:
  - Fixed/sticky navigation with active link highlighting
  - Hero section with animated typing effect
  - About section with skills grid and animated stats
  - Projects section with filterable cards
  - Contact form with validation
  - Footer with social links
- **Performance Optimized**: Intersection Observer API for efficient animations
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation support

## 📁 Project Structure

```
react-portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── ScrollToTop.jsx
│   │   └── ScrollToTop.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps to Run

1. **Navigate to the project directory**:
   ```bash
   cd react-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The build folder will contain the optimized files ready for deployment.

## 🎨 Design System

### Colors
- **Background**: Deep charcoal/navy (#0a0e27)
- **Accent**: Electric teal (#00D4AA)
- **Text**: Off-white (#e4e7f1) with various opacity levels

### Typography
- **Display/Headings**: JetBrains Mono (monospace)
- **Body**: DM Sans (sans-serif)

### Key Features
- Frosted glass cards with backdrop blur
- Gradient accent lines
- Smooth scroll behavior
- Consistent border-radius (12-16px)
- Box shadows with accent color tint

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🧩 Components

### Navbar
- Fixed/sticky navigation
- Active link highlighting on scroll
- Mobile hamburger menu with slide-in drawer

### Hero
- Full-viewport hero section
- Animated typing effect cycling through titles
- CTA buttons and social links
- Animated gradient background

### About
- Profile section with custom avatar
- Skills grid (16 technologies)
- Animated counter statistics
- Responsive two-column layout

### Projects
- Filterable project cards
- 6 sample projects with realistic data
- Tech stack badges
- GitHub and demo links

### Contact
- Form with floating labels
- Real-time validation
- Loading state animation
- Contact information card

### Footer
- Quick navigation links
- Social media icons
- Auto-generated copyright year

### ScrollToTop
- Floating button appears after 300px scroll
- Smooth scroll to top functionality

## 🔧 Customization

### Update Personal Information
Edit the following files to customize content:

- `Hero.jsx`: Name, title, tagline
- `About.jsx`: Bio, skills, statistics
- `Projects.jsx`: Project data
- `Contact.jsx`: Contact information

### Change Colors
Modify CSS variables in `src/index.css`:

```css
:root {
    --accent: #00D4AA;  /* Change accent color */
    --bg-primary: #0a0e27;  /* Change background */
    /* ... other variables */
}
```

### Add New Sections
1. Create component file in `src/components/`
2. Create corresponding CSS file
3. Import and add to `App.js`

## 📦 Technologies Used

- React 18.2
- Create React App
- CSS3 (CSS Grid, Flexbox)
- Google Fonts (JetBrains Mono, DM Sans)
- Intersection Observer API

## 🌟 Key Features Implementation

- **Typing Effect**: Custom React hook with useState and useEffect
- **Scroll Animations**: Intersection Observer API
- **Form Validation**: Controlled components with validation logic
- **Counter Animation**: SetInterval-based animation with smooth transitions
- **Mobile Menu**: State-based slide-in drawer with overlay

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📧 Contact

For questions or suggestions, reach out at veerajayanth07@gmail.com

---

**Note**: This is a modular React application separate from the original single-file HTML version. The original `index.html` file in the parent directory remains untouched.
