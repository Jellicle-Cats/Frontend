# Builder stage
FROM node:18.17.1-alpine as builder

WORKDIR /app

COPY package*.json ./

# Install Python and build tools
RUN apk add --no-cache python3 make g++

# Install node modules, including those with native dependencies
RUN npm install --only=production

COPY . .

RUN npm run build

# Production stage
FROM node:18.17.1-alpine

WORKDIR /app

# Copy compiled next.js build and production node_modules from builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Your environment variables
ENV NEXT_PUBLIC_USER_SERVICE_ENDPOINT=""
ENV NEXT_PUBLIC_USER_SERVICE_GOOGLE_ID=""
ENV NEXT_PUBLIC_USER_SERVICE_GOOGLE_REDIRECT=""
ENV NEXT_PUBLIC_SEAT_SERVICE_ENDPOINT=""
ENV NEXT_PUBLIC_ATTENDANCE_SERVICE_ENDPOINT=""

EXPOSE 3000

CMD ["npm", "start"]