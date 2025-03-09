# Sử dụng Node.js 16 (hoặc mới hơn)
FROM node:16

# Thiết lập thư mục làm việc
WORKDIR /app

# Copy package.json và cài đặt dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy toàn bộ source code
COPY . .

# Expose cổng chạy API (3000)
EXPOSE 3001

# Khởi chạy ứng dụng
CMD ["node", "server.js"]
