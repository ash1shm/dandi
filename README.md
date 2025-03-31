# API Key Management Dashboard

A secure and user-friendly dashboard for managing API keys, built with Next.js and Supabase.

## Features

- 🔐 Secure authentication with Supabase
- 🔑 Create, read, update, and delete API keys
- 🔍 Search and filter functionality
- 🌓 Dark mode support
- 📱 Responsive design
- 📋 Copy-to-clipboard functionality
- 🔄 Real-time updates

## Tech Stack

- Next.js 14
- React
- Tailwind CSS
- Supabase
- Heroicons

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/api-key-manager.git
   cd api-key-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Supabase credentials:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
dandi/
├── app/
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React contexts
│   ├── lib/           # Utility functions and configurations
│   ├── services/      # API services
│   └── pages/         # Next.js pages
├── public/            # Static assets
└── supabase/         # Database migrations
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
