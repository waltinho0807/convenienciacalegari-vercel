const baseUrl = process.env.NODE_ENV === "production" 
? 'convenienciacalegari-vercel.vercel.app'
: 'http://localhost:3000';

export default baseUrl;