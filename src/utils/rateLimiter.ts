import Redis from 'ioredis';
import { RateLimiterRedis } from 'rate-limiter-flexible';

const redisClient = new Redis({ enableOfflineQueue: false });

redisClient.on('error', (err: any) => {
  console.error('Redis error:', err);
});

const authRateLimiterOpts = {
  storeClient: redisClient,
  points: 3,
  duration: 60*15, // 15 minutes in seconds  
  keyPrefix: 'rlflx',
};

const verificationEmailRateLimiterOpts = {
  storeClient: redisClient,
  points: 3,
  duration: 60*60*24, // 24 hours in seconds
  keyPrefix: 'rlflx',
};

const forgotPasswordRateLimiterOpts = {
    storeClient: redisClient,
    points: 1,
    duration: 60, // 15 minutes in seconds
    keyPrefix: 'rlflx',
};

const authRateLimiter = new RateLimiterRedis(authRateLimiterOpts);
const verificationEmailRateLimiter = new RateLimiterRedis(verificationEmailRateLimiterOpts);
const forgotPasswordRateLimiter = new RateLimiterRedis(forgotPasswordRateLimiterOpts);

export { authRateLimiter, verificationEmailRateLimiter, forgotPasswordRateLimiter };