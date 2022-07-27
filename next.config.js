/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  reactStrictMode:true,
  env: {
    NEXT_PUBLIC_GRAPHCMS_URL:process.env.NEXT_PUBLIC_GRAPHCMS_URL,
  }
}
