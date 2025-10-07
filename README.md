# TransportMan App Distribution

A simple, mobile-friendly landing page for distributing the TransportMan Android app.

## Features

- 🎨 Modern, responsive design optimized for mobile devices
- 📱 Mobile-first approach with touch-friendly interface
- 🚀 Fast loading with optimized assets
- 📦 Direct APK download functionality
- 🔒 Security headers and best practices
- ⚡ Hosted on Vercel for global CDN distribution

## Project Structure

```
├── index.html          # Main landing page
├── styles.css          # Responsive CSS styles
├── TransportMan.apk    # Android app file
├── vercel.json         # Vercel deployment configuration
├── package.json        # Project metadata
└── README.md          # This file
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy from the project directory:
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Vercel
3. Vercel will automatically deploy your site

### Option 3: Drag & Drop Deployment

1. Go to [vercel.com](https://vercel.com)
2. Drag and drop your project folder to the deployment area
3. Your site will be live in seconds

## Customization

### Updating App Information

Edit `index.html` to customize:
- App name and description
- Features and benefits
- Brand colors and styling
- Contact information

### Styling Changes

Modify `styles.css` to:
- Change colors and fonts
- Adjust layout and spacing
- Add animations or effects
- Customize mobile responsiveness

### Adding Analytics

Add your analytics tracking code to the `<head>` section of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Security Features

The site includes several security headers configured in `vercel.json`:
- Content-Type protection
- XSS protection
- Frame options to prevent clickjacking

## Browser Support

- ✅ Chrome (mobile & desktop)
- ✅ Safari (mobile & desktop)
- ✅ Firefox (mobile & desktop)
- ✅ Edge (mobile & desktop)
- ✅ Samsung Internet

## Performance

- Optimized for Core Web Vitals
- Mobile-first responsive design
- Fast loading with minimal dependencies
- Global CDN distribution via Vercel

## License

MIT License - feel free to use this template for your own app distribution needs.
