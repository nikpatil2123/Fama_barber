# Fama Barber Shop & Beauty Salon

A modern, production-ready website for a barber shop and beauty salon, built with React, Vite, and Tailwind CSS.
Showcases services, gallery, testimonials, and contact information with a beautiful, responsive design.

## Features

- ⚡ **Fast & Optimized**: Built with Vite for lightning-fast performance and optimized loading.
- 🎨 **Beautiful UI**: Custom design using Tailwind CSS and Lucide React icons.
- 📱 **Responsive**: Looks great on all devices.
- 🖼️ **Gallery**: High-quality, relevant images with lazy loading.
- ⭐ **Testimonials**: Real client feedback with ratings.
- 📅 **Booking**: Easy appointment booking section.
- 🏆 **SEO Friendly**: Optimized for search engines and accessibility.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone nikpatil2123
   cd Fama_barber
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) to view the site.

### Building for Production

```bash
npm run build
```
The optimized site will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable React components
│   ├── sections/          # Page sections (Hero, Gallery, Services, etc.)
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Tailwind CSS styles
├── index.html             # Main HTML file
├── tailwind.config.js     # Tailwind CSS config
├── vite.config.ts         # Vite config
└── README.md
```

## Customization

- **Gallery Images:**  
  Update `src/sections/Gallery.tsx` to change gallery images and alt text.
- **Services, Testimonials, Contact Info:**  
  Edit the respective files in `src/sections/`.

## Dependencies

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)

## License

This project is for demonstration and educational purposes.  
For commercial use, please ensure you have the rights to all images and content. 
