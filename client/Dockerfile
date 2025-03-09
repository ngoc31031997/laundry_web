# Dùng Nginx làm web server
FROM nginx:alpine

# Copy toàn bộ frontend vào thư mục gốc của Nginx
COPY . /usr/share/nginx/html

# Expose cổng HTTP
EXPOSE 80

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]
