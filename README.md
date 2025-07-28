# Anant Gupta - Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/           # Layout components
│   │   ├── Header.tsx    # Navigation header
│   │   ├── Footer.tsx    # Site footer
│   │   └── ThemeToggle.tsx # Dark/light theme toggle
│   ├── sections/         # Main content sections
│   │   ├── LandingHero.tsx      # Hero section
│   │   ├── AboutSection.tsx     # About me section
│   │   ├── ExperienceSection.tsx # Work experience
│   │   ├── ProjectsSection.tsx   # Featured projects
│   │   ├── SkillsSection.tsx     # Technical skills
│   │   ├── EducationSection.tsx  # Education timeline
│   │   └── ContactSection.tsx    # Contact information
│   └── ui/              # Essential UI components only
│       ├── button.tsx    # Button component
│       ├── card.tsx      # Card component
│       ├── toast.tsx     # Toast notifications
│       ├── toaster.tsx   # Toast container
│       ├── tooltip.tsx   # Tooltip component
│       ├── sonner.tsx    # Sonner toast
│       └── use-toast.ts  # Toast hook
├── data/                # JSON data files
│   ├── experience.json  # Work experience data
│   ├── projects.json    # Project information
│   ├── skills.json      # Technical skills data
│   └── education.json   # Education timeline data
├── hooks/               # Custom React hooks
│   ├── useScrollAnimation.tsx # Scroll animation hook
│   └── use-toast.ts     # Toast notification hook
├── lib/                 # Utility libraries
│   └── utils.ts         # Utility functions
├── pages/               # Page components
│   ├── Index.tsx        # Main portfolio page
│   └── NotFound.tsx     # 404 error page
├── styles/              # CSS styles
│   └── index.css        # Main stylesheet
├── assets/              # Static assets (empty)
├── App.tsx              # Main app component
└── main.tsx             # Application entry point
```

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Dark/Light Theme**: Toggle between themes
- **Smooth Animations**: Scroll-triggered animations
- **Modern UI**: Clean, professional design
- **Fast Performance**: Optimized for speed
- **SEO Friendly**: Proper meta tags and structure
- **Clean Codebase**: Well-organized, maintainable code

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **React Router** - Navigation

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd anant-gupta-portfolio-verse-1

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎨 Customization

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import it in `src/pages/Index.tsx`
3. Add the section to the main content area

### Updating Content
- **Experience**: Edit `src/data/experience.json`
- **Projects**: Edit `src/data/projects.json`
- **Skills**: Edit `src/data/skills.json`
- **Education**: Edit `src/data/education.json`

### Styling
- Main styles: `src/styles/index.css`
- Component-specific styles: Inline Tailwind classes
- Theme variables: Defined in CSS custom properties

## 🧹 Code Organization

### What Was Cleaned Up:
- ✅ **Removed unused UI components** (40+ unused shadcn/ui components)
- ✅ **Deleted unused assets** (hero-bg.jpg, font zip files)
- ✅ **Removed unused CSS** (App.css)
- ✅ **Organized components** into logical directories
- ✅ **Fixed all import paths** to work with new structure
- ✅ **Verified build process** works correctly

### Benefits:
- **Smaller bundle size** - Removed 40+ unused components
- **Faster build times** - Less code to process
- **Better maintainability** - Clear organization
- **Easier navigation** - Logical file structure
- **Reduced complexity** - Only essential components

## 🚀 Deployment

The project is ready for deployment on platforms like:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Anant Gupta**
- GitHub: [@anantgupta001](https://github.com/anantgupta001)
- LinkedIn: [@anantgupta001](https://www.linkedin.com/in/anantgupta001/)
- Email: anantagarwal4946@gmail.com
