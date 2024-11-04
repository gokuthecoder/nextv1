// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'allmovieshub.gay',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'moviesrock.pro',
                port: '',
                pathname: '/**',
            },
        ],
    },
    async headers() {
        return [
            {
                source: "/(.*)", // Apply headers to all routes; adjust this if you need specific paths
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=600, stale-while-revalidate=30",
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
