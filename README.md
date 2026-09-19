# BitString IT Services - Corporate Website

![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-Library-blue?style=for-the-badge&logo=react)
![Status](https://img.shields.io/badge/Status-Active_Development-success?style=for-the-badge)

A modern, high-performance corporate website for **BitString IT Services Pvt Ltd**, a consultancy specializing in ServiceNow implementation, ITOM, ITSM, and HRSD (ServiceOps).

This project is built on top of the [Counsolve Consulting React Next.js Template](https://elements.envato.com/counsolve-consulting-react-next-js-template-9FSHFBZ) from Envato Elements, heavily customized and refactored to align with BitString's corporate identity and rigorous performance standards.

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed on your local environment:
- **Node.js** (v18.x or higher recommended)
- **npm** (v9.x or higher)

### Installation

1. Clone the repository and navigate into the project directory.
2. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

To create an optimized production build:
```bash
npm run build
```
To start the production server after building:
```bash
npm run start
```

## 🏗️ Architecture & Structure

This project utilizes the **Next.js App Router** for optimized routing and layout nesting.

- **`app/`**: Contains the core routing logic, page components, and global layouts.
- **`components/`**: Reusable UI architecture, broken down into modular directories (`layout`, `slider`, `elements`).
- **`lib/`**: Core utilities and configuration (e.g., global typography loaded via `next/font/google` using the Figtree font).
- **`public/`**: Static assets including branding, imagery, and base CSS stylesheets.
- **`business_data/`**: Centralized mapping logic for business content, extracting hardcoded text out of components into manageable datasets.

## 🎨 Design & Content Philosophy

- **Typography**: Uses **Figtree** system-wide for a clean, modern, and highly legible corporate aesthetic.
- **Tone**: Content is engineered to be action-oriented, practical, and devoid of AI-generated fluff. Em-dashes are strictly prohibited in the copy structure.
- **Performance**: Optimized asset loading, statically generated pages where applicable, and dynamic routing mapped securely to business data.
