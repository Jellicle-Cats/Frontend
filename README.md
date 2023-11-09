# Frontend
Port 3000
## How to start
1. copy .env.example มาสร้าง .env แล้วใส่ NEXT_PUBLIC_USER_SERVICE_GOOGLE_ID ตาม GOOGLE_OAUTH_CLIENT_ID ใน user-service
2. Run command
```
docker build -t grpc-web-react .
docker run -d --name grpc-web-react -p 8085:8085 -p 9901:9901 grpc-web-react

npm i
npm run dev
```