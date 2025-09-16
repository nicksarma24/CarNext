/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [{
            source: "/embed",
            headers: [{
                key: "Content-Security-Policy",
                value: "frame-ancestors 'self' https://car-marketplace-waitlist-fo-489.created.app"
            }]
        }]
    }
};

export default nextConfig;