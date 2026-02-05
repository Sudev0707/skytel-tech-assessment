
# Tech Blogs App

## Features
- SEO optimized using react-helmet-async
- Structured Data
- 10 blogs fetched from API
- Search across title, description and content
- Category filter
- Fully responsive UI


## Lighthouse Audit Screenshots
Below are the Lighthouse audit results for Performance, Accessibility, Best Practices, and SEO:

![Lighthouse Audit](screenshots/Screenshot%202026-02-06%20020420.png)

## SEO Strategy
### Meta Tags Implemented
- **Title and Description**: Dynamic meta tags for title and description using react-helmet to provide unique content for each page.
- **Open Graph and Twitter Cards**: Implemented og:title, og:description, og:type, og:url, og:image for better social media sharing, along with Twitter-specific meta tags for enhanced visibility on Twitter.
- **Canonical URLs**: Added canonical links to prevent duplicate content issues.
- **Keywords and Author**: Included relevant keywords and author information for better search engine indexing.

### HTML Semantic Structure
- Used semantic HTML elements such as `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>` to improve accessibility and SEO.
- Structured the content with proper headings hierarchy (h1, h2, etc.) for better content organization and readability.

### Image Optimization
- Added `loading="lazy"` and `decoding="async"` attributes to images for improved performance.
- Specified `width` and `height` attributes to prevent layout shifts.
- Used Unsplash API with query parameters for optimized image delivery.

### Performance Optimizations
- Implemented lazy loading for routes using React's `Suspense` and `lazy`.
- Added preload and dns-prefetch links in the HTML head for critical resources.
- Used Tailwind CSS for efficient styling with minimal CSS output.

## Search and Filter Implementation
The search and filter functionality is implemented using React state management:
- **Search**: A text input that filters blogs by matching the search term against title, description, and content_text fields.
- **Category Filter**: Buttons for each unique category (including "All") that filter the displayed blogs.

## Challenges Faced
- **Dynamic SEO**: Ensuring proper meta tags and structured data for client-side rendered content required careful implementation with react-helmet.
- **Responsive Design**: Balancing the layout across different screen sizes, especially for the search bar and blog grid.

## Technologies Used
- **Frontend Framework**: React, TypeScript
- **Styling**: Tailwind CSS 
- **Routing**: React Router DOM 
- **SEO**: React Helmet for managing document head


## Accessibility Note
- where to include Keyboard Navigation (Tab, Enter, ESC)
- WCAG AA Color Contrast