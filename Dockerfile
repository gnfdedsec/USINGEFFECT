# ใช้ระบบปฏิบัติการขั้นพื้นฐานของ Node.js
FROM node:16

# ตั้งค่าไดเรกทอรีการทำงานของแอปพลิเคชัน
WORKDIR /app

# คัดลอก package.json และ package-lock.json เข้าสู่ที่ทำงาน
COPY package*.json ./

# ติดตั้ง dependencies โดยใช้ npm
RUN npm install --force 

# คัดลอกไฟล์ทั้งหมดไปยังที่ทำงาน
COPY . .

# สร้างไฟล์สร้างขึ้นสำหรับ SSG
RUN npm run build

# กำหนดพอร์ตที่แอปพลิเคชันจะทำงานอยู่ (ถ้าจำเป็น)
EXPOSE 3000

# รันคำสั่งเริ่มต้นเมื่อ Docker container ถูกสร้างขึ้น
CMD [ "npx", "next", "start" ]


