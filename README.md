# Pure Services Website

A modern, clean website for Pure Services building contractors built with Next.js, TypeScript, and TailwindCSS.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js app directory with pages and layout
- `components/` - Reusable React components (Header, Footer)
- `app/page.tsx` - Home page
- `app/services/page.tsx` - Services page
- `app/contact/page.tsx` - Contact page

## Customization

### Replacing Text Content

All text content is easy to replace:
- Edit the page files in `app/` directory
- Update contact information in `app/contact/page.tsx`
- Modify service descriptions in `app/services/page.tsx`

### Replacing Images

- Hero image: Update the `src` attribute in `app/page.tsx` (currently using Unsplash placeholder)
- Replace `[Your Phone Number]`, `[Your Email]`, `[Your WhatsApp Number]`, and `[Your Service Areas]` placeholders in the contact page

### Styling

- Colors can be adjusted in `tailwind.config.ts` (beige accent colors)
- Fonts are configured in `app/layout.tsx` (Inter for sans-serif, Playfair Display for serif)

## Build for Production

```bash
npm run build
npm start
```

