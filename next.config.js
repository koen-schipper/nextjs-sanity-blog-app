/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    images: {
        domains: ["koenschipper.com"]
    }
}

module.exports = nextConfig
