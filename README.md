# FixIt Local - Local Service Complaint Marketplace

A front-end web project by **Team Binary Brains** (CSE326 Project, Section K3P26YK). FixIt Local connects neighborhood residents with public and private service providers to report issues, monitor response times, and compare provider ratings.

Try it out now:- https://fixit-local-tau.vercel.app
---

## File Structure & Explanations

### `index.html`
The main homepage featuring a corporate hero banner, an about section with sample complaint metrics, a 3-step workflow guide, community statistics, and an inline SVG complaints-by-category bar chart. It serves as the primary gateway for residents to discover platform features and navigate to active directories.

### `providers.html`
The service provider directory page containing a searchable data table comparing five essential municipal and domestic service providers. It showcases ratings, complaint counts, resolution percentages using the HTML `<meter>` element, and average response times.

### `complaints.html`
The community complaint feed showcasing recent resident complaints formatted as semantic articles with status badges, metadata lists, photo evidence, and official provider responses. It includes a tips and moderation policy sidebar to guide residents on filing effective tickets.

### `file-complaint.html`
The resident complaint submission page featuring a structured form organized into semantic fieldsets for incident details and verification evidence. When submitted, client-side JavaScript validates inputs, displays an alert, and renders a new pending moderation ticket card directly on the page.

### `style.css`
The single shared external stylesheet implementing a corporate navy and orange-red design system inspired by enterprise business templates. It achieves responsive multi-column layouts using standard `display: inline-block` and percentage sizing without relying on flexbox, grid, floats, positioning, or media queries.

### `script.js`
The shared vanilla JavaScript file powering client-side interactivity using beginner-friendly standard functions and DOM manipulation. It implements real-time keyword search filtering for the provider table and handles new complaint form submissions by rendering dynamic pending-moderation cards.

### `images/`
The local asset directory containing optimized, royalty-free JPEG images under 120 KB each for hero banners, community team overviews, and resident complaint evidence. All images are referenced with relative paths, meaningful alt text, and explicit dimensional attributes.
