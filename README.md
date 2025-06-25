# Purple Haze BBQ - Catering Website

Premium BBQ catering service website for the DMV (DC, Maryland, Virginia) area.

## 🌐 Live Site
Visit our website: [Purple Haze BBQ](https://atomicdsolutions.github.io/bbq-catering/)

## 📋 Project Overview
A modern, responsive website showcasing Purple Haze BBQ's premium catering services, featuring:
- Custom menu options
- Event packages
- Online consultation booking
- Professional food photography
- Brand storytelling

## 🛠 Development Setup

### Prerequisites
- Git
- Web browser
- Basic text editor or IDE

### Local Development
1. Clone the repository:
   ```bash
   git clone https://github.com/atomicdsolutions/bbq-catering.git
   cd bbq-catering
   ```

2. Development Structure
   ```
   bbq-catering/
   ├── assets/          # Images, logos, and other media
   ├── css/            # Stylesheets
   ├── images/         # Content images
   └── index.html      # Main HTML file
   ```

3. Start a local server:
   ```bash
   # Using Python (Python 3)
   python -m http.server 8000

   # Using PHP
   php -S localhost:8000

   # Using Node.js (with http-server)
   npx http-server
   ```

4. View the site at `http://localhost:8000`

## 🚀 Deployment
The site automatically deploys to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment
1. Ensure your changes are committed
2. Push to the main branch:
   ```bash
   git push origin main
   ```
3. GitHub Actions will automatically:
   - Build the site
   - Deploy to GitHub Pages
   - Make it available at the live URL

## 🧱 Development Workflow

### Branch Strategy
- `main`: Production-ready code
- `feature/*`: New features
- `bugfix/*`: Bug fixes
- `hotfix/*`: Urgent production fixes

### Creating New Features
1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

3. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```

4. Create a Pull Request on GitHub

## 🎨 Brand Guidelines
- Colors: See `BRAND_STYLE_GUIDE.md`
- Typography: Montserrat (headings) & Inter (body)
- Design: Modern, premium, approachable

## 📝 Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Create a Pull Request

## 📄 License
All rights reserved. Contact for usage permissions.

## 👥 Contact
For questions or support, contact:
- Website: [purplehaze-bbq.com](https://purplehaze-bbq.com)
- Email: info@purplehaze-bbq.com