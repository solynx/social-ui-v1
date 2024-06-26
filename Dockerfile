FROM node:20-alpine as nodebuilder

# Cài đặt các gói cần thiết
RUN apk add --no-cache python3 make g++ linux-headers libusb-dev eudev-dev

WORKDIR /app
COPY package.json .
COPY yarn.lock .

# Thiết lập biến môi trường để chỉ đường dẫn tới Python 3
ENV PYTHON /usr/bin/python3

# Cài đặt các dependencies
RUN yarn install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Xây dựng ứng dụng
RUN yarn build

FROM node:20-alpine as bin
COPY --from=nodebuilder /app/.output ./.output
CMD ["node", ".output/server/index.mjs"]
