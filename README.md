# YouCux

YouCux is a web application built with [Next.js](https://nextjs.org) that allows users to extract titles, descriptions, and other metadata from YouTube videos easily. This project is designed to provide a user-friendly interface for accessing YouTube video information without the need for complex setups or additional software.

## Table of Contents

- [YouCux](#youcux)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Development Server](#running-the-development-server)
  - [Features](#features)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Technologies Used](#technologies-used)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Getting Started

To get started with YouCux, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or later)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/youcux.git
   cd youcux
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Features

- **YouTube Video Metadata Extraction**: Easily extract titles, descriptions, view counts, like counts, and comment counts from YouTube videos.
- **User-Friendly Interface**: A clean and modern interface that allows users to paste YouTube URLs and retrieve information quickly.
- **Clipboard Support**: Users can paste URLs directly from their clipboard.
- **Responsive Design**: The application is designed to work seamlessly on both desktop and mobile devices.
- **Dark Mode Support**: Users can toggle between light and dark themes for better accessibility.

## Usage

1. Paste the YouTube video URL into the input field.
2. Click the search icon or press Enter to extract the video information.
3. View the extracted title, description, and other metadata.
4. Use the provided buttons to copy the title, description, or download the video thumbnail.

## Project Structure

The project is structured as follows:

```
youcux/
├── app/
│   ├── components/        # Reusable components
│   ├── layout.tsx         # Main layout for the application
│   ├── page.tsx           # Main page of the application
│   └── ...                # Other pages and components
├── public/                # Static assets
├── styles/                # Global styles
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

## Technologies Used

- **Next.js**: A React framework for building server-side rendered applications.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vercel**: The platform for deploying Next.js applications.

## Contributing

Contributions are welcome! If you have suggestions for improvements or want to report a bug, please open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the creators of [Next.js](https://nextjs.org) for providing such a powerful framework.
- Special thanks to the open-source community for their contributions and support.

```

```
