FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
RUN npm i ffprobe --save
RUN apk add --no-cache ffmpeg
CMD ["node", "app.js"]
EXPOSE 3000