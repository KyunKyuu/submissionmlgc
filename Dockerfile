# Gunakan base image Node.js berbasis Alpine untuk ukuran lebih kecil
FROM node:18.16-alpine

# Set working directory di dalam container
WORKDIR /app

# Salin file package.json dan package-lock.json (jika ada)
COPY package*.json ./

# Install dependencies (hanya untuk production)
RUN npm install

# Salin seluruh kode aplikasi ke dalam container
COPY . .

# Ekspos port yang akan digunakan oleh aplikasi
EXPOSE 3000

# Set environment variable untuk Google Cloud Run


# Jalankan aplikasi
CMD ["npm", "start"]