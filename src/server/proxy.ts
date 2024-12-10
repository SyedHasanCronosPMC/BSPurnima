import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cookieParser());

// Configure proxy middleware
const calendlyProxy = createProxyMiddleware({
  target: 'https://calendly.com',
  changeOrigin: true,
  pathRewrite: {
    '^/api/calendly': '',
  },
  onProxyRes: (proxyRes, req, res) => {
    // Set security headers
    proxyRes.headers['cross-origin-embedder-policy'] = 'credentialless';
    
    // Handle cookies
    if (proxyRes.headers['set-cookie']) {
      const cookies = proxyRes.headers['set-cookie'].map(cookie =>
        cookie
          .replace(/; Secure/gi, '')
          .replace(/; SameSite=None/gi, '')
          .replace(/; Domain=\.calendly\.com/gi, '')
          + '; SameSite=Lax; Secure'
      );
      proxyRes.headers['set-cookie'] = cookies;
    }
  },
  cookieDomainRewrite: {
    '.calendly.com': '',
  },
  headers: {
    'Cross-Origin-Embedder-Policy': 'credentialless'
  }
});

// Add security headers middleware
app.use((req, res, next) => {
  res.setHeader('Cross-Origin-Embedder-Policy', 'credentialless');
  next();
});

app.use('/api/calendly', calendlyProxy);

export { app as proxyServer };