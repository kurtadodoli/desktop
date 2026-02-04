# Portfolio Website - React + Vite

A modern, responsive portfolio website built with React and Vite, featuring a beautiful gradient background and clean design inspired by contemporary web design trends.

## Features

- 🎨 **Beautiful Design**: Modern gradient background with smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Vite for lightning-fast development and builds
- 🎭 **Interactive**: Smooth hover effects and animations
- ♿ **Accessible**: Semantic HTML and proper ARIA labels

## Design Elements

- Hero section with animated star icon
- Clean typography with Inter font family
- Navigation icons for different portfolio sections
- Social media links in the footer
- Glassmorphism design elements with backdrop blur effects

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Hero.jsx          # Main hero section
│   ├── Hero.css          # Hero component styles
│   ├── Navigation.jsx    # Navigation component
│   └── Navigation.css    # Navigation styles
├── App.jsx               # Main App component
├── App.css               # Global app styles
├── index.css             # Base styles and fonts
└── main.jsx              # App entry point
```

## Customization

### Colors
The color scheme uses a blue gradient theme with orange accents. You can customize the colors in the CSS files:
- Primary gradient: `#74b9ff` to `#0984e3`
- Accent color: `#ff9800`

### Fonts
The project uses Inter font family from Google Fonts. You can change this in `src/index.css`.

### Content
Update the hero section text and navigation items in their respective component files.

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and development server

- **Google Fonts** - Inter font family




