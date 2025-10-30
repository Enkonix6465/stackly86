# Construction Firm Project

A modern, responsive construction firm website built with React, HTML, CSS, and JavaScript.

## Features

- 🏗️ Modern and responsive design
- ⚡ Built with React for optimal performance
- 📱 Mobile-friendly navigation
- 🎨 Custom CSS styling with CSS variables
- 📧 Contact form with state management
- 🖼️ Project gallery showcase
- 📋 Service listings
- 🔗 Smooth scrolling navigation

## Project Structure

```
Construction-firm-project/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── assets/
│   │   └── images/         # Image assets
│   ├── components/
│   │   ├── Header.js       # Navigation header
│   │   ├── Hero.js         # Hero section
│   │   ├── About.js        # About section
│   │   ├── Services.js     # Services section
│   │   ├── Projects.js     # Projects gallery
│   │   ├── Contact.js      # Contact form
│   │   └── Footer.js       # Footer section
│   ├── styles/
│   │   ├── index.css       # Global styles
│   │   ├── App.css         # App styles
│   │   ├── Header.css      # Header styles
│   │   ├── Hero.css        # Hero styles
│   │   ├── About.css       # About styles
│   │   ├── Services.css    # Services styles
│   │   ├── Projects.css    # Projects styles
│   │   ├── Contact.css     # Contact styles
│   │   └── Footer.css      # Footer styles
│   ├── App.js              # Main App component
│   └── index.js            # Entry point
├── package.json            # Dependencies and scripts
├── .gitignore             # Git ignore file
└── README.md              # Project documentation

```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **HTML5** - Markup language
- **CSS3** - Styling with modern features (Grid, Flexbox, Variables)
- **JavaScript (ES6+)** - Programming language

## Customization

### Colors
Edit CSS variables in `src/styles/index.css`:
```css
:root {
  --primary-color: #ff6b35;
  --secondary-color: #004e89;
  --dark-color: #1a1a1a;
  --light-color: #f4f4f4;
}
```

### Content
- Update company information in component files
- Replace placeholder images with your own
- Modify services and projects in respective component files

## License

This project is open source and available under the MIT License.
