// src/store/middleware/timestampMiddleware.js

const timestampMiddleware = (store) => (next) => (action) => {
  if (action.type === 'auth/setToken') {
    // 🔑 ทำการ "เสริมพลัง" ให้ action โดยเพิ่มข้อมูลเวลาเข้าไป
    action.createdAt = new Date().toLocaleString("th-TH")
    
    console.log("🕒 เติมเวลาให้ Action แล้ว:", action.payload);
  }

  return next(action); // ส่ง action ที่ "อัปเกรดแล้ว" ไปให้ด่านต่อไป
};

export default timestampMiddleware; 

