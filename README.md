# Flowrity React

> **Automating the future of business with AI**

Flowrity is a modern React application that showcases AI-powered business automation solutions. Built with cutting-edge technologies, it provides a beautiful, responsive interface for demonstrating AI agents, process automation, and intelligent workflows.

## 🚀 Features

- **AI-Powered Agents**: Instant customer support on WhatsApp, Instagram, and Messenger
- **Process Automation**: Streamline business workflows with intelligent automation
- **Lead Generation**: Advanced AI-driven lead capture and nurturing
- **Scheduling Integration**: Seamless calendar and appointment management
- **Multi-language Support**: English and Spanish localization
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Beautiful animations and interactive components
- **Contact Integration**: Multiple communication channels and contact forms

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Latest React with concurrent features
- **React DOM 19.1.1** - React DOM rendering
- **TypeScript 5.8.3** - Type-safe development
- **Vite 7.1.2** - Fast build tool and dev server
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Smooth animations and transitions
- **Motion 12.23.12** - Additional motion utilities

### UI Components
- **Heroicons 2.2.0** - Beautiful SVG icons
- **Custom Components** - Reusable UI components
- **Magic UI** - Advanced UI components (Marquee, Floating Sparkles)
- **Svelte Motion 0.12.2** - Motion components
- **Tailwind Merge 3.3.1** - Tailwind class merging utility
- **CLSX 2.1.1** - Conditional class name utility

### Internationalization
- **react-i18next 15.7.2** - Internationalization framework
- **Language Context** - React context for language management

### Routing & Navigation
- **React Router DOM 7.8.2** - Client-side routing
- **Responsive Navigation** - Mobile-friendly navigation

### Email & Communication
- **EmailJS 3.2.0** - Client-side email service
- **Axios 1.11.0** - HTTP client for API requests

### Visualization & Maps
- **Cobe 0.6.4** - 3D globe visualization
- **Dotted Map 2.2.3** - Interactive map components

### Development Tools
- **ESLint 9.33.0** - Code linting
- **ESLint JS 9.33.0** - ESLint JavaScript rules
- **TypeScript ESLint 8.39.1** - TypeScript ESLint rules
- **ESLint React Hooks 5.2.0** - React hooks linting
- **ESLint React Refresh 0.4.20** - React refresh linting
- **Globals 16.3.0** - Global variables for ESLint
- **Vite React Plugin 5.0.0** - Vite React integration
- **Autoprefixer 10.4.21** - CSS vendor prefixing
- **PostCSS 8.5.6** - CSS processing
- **Type Definitions**:
  - **@types/react 19.1.10** - React TypeScript definitions
  - **@types/react-dom 19.1.7** - React DOM TypeScript definitions

## 📁 Project Structure

```
flowrity-react/
├── public/
│   ├── documents/          # PDF documents (FAQs, Privacy, Terms)
│   ├── picture/           # Static images
│   ├── svg/              # SVG icons and graphics
│   └── video/            # Video assets
├── src/
│   ├── components/       # Reusable React components
│   │   ├── ui/          # UI components (Magic UI)
│   │   └── magicui/     # Custom UI components
│   ├── context/         # React contexts
│   ├── data/           # JSON data files
│   ├── i18n/           # Internationalization files
│   ├── lib/            # Utility functions
│   ├── pages/          # Page components
│   └── styles/         # Global styles
├── .env                 # Environment variables
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind configuration
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher) - Required for React 19.1.1
- **npm** or **yarn** - Package manager
- **Git** - Version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd flowrity-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file with your configuration:
   ```env
   # Application Configuration
   VITE_APP_NAME=Flowrity
   VITE_APP_VERSION=1.0.0
   
   # Email Service Configuration (EmailJS)
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   
   # Contact Configuration
   VITE_CONTACT_EMAIL=contact@flowrity.com
   VITE_SUPPORT_EMAIL=support@flowrity.com
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📜 Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build
- **`npm run lint`** - Run ESLint

## 🌐 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_APP_NAME` | Application name | No |
| `VITE_APP_VERSION` | Application version | No |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID | Yes (for contact form) |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID | Yes (for contact form) |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key | Yes (for contact form) |
| `VITE_CONTACT_EMAIL` | Contact email address | No |
| `VITE_SUPPORT_EMAIL` | Support email address | No |
| `VITE_GOOGLE_ANALYTICS_ID` | Google Analytics ID | No |
| `VITE_FACEBOOK_URL` | Facebook page URL | No |
| `VITE_INSTAGRAM_URL` | Instagram profile URL | No |
| `VITE_LINKEDIN_URL` | LinkedIn company URL | No |
| `VITE_WHATSAPP_URL` | WhatsApp contact URL | No |

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/styles/global.css` for global styles
- Customize component styles in individual component files

### Content
- Update `src/data/` JSON files for content changes
- Modify `src/i18n/` files for translations
- Replace assets in `public/` directory

### Components
- Add new components in `src/components/`
- Create new pages in `src/pages/`
- Extend UI components in `src/components/ui/`

## 🌍 Internationalization

The application supports multiple languages:

- **English** (default)
- **Spanish**

To add a new language:

1. Create a new JSON file in `src/i18n/`
2. Add translations for all keys
3. Update `src/i18n/index.ts` to include the new language
4. Add language option to the language switcher

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Configuration

### Vite Configuration
The `vite.config.ts` includes:
- React plugin
- Path aliases (`@` for `src/`)
- Development server settings

### Tailwind Configuration
The `tailwind.config.js` includes:
- Custom color palette
- Extended spacing and typography
- Component-specific utilities

### TypeScript Configuration
Strict TypeScript configuration with:
- Path mapping
- Strict type checking
- Modern ES features

## 📦 Build & Deployment

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deployment Options
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **AWS S3**: Upload the `dist` folder
- **GitHub Pages**: Use GitHub Actions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- **Email**: support@flowrity.com
- **Website**: [flowrity.com](https://flowrity.com)
- **Documentation**: Check the `public/documents/` folder

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the fast build tool
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Heroicons** - For beautiful icons

---

**Made with ❤️ by the Flowrity Team**