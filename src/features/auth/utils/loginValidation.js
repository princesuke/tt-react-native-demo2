export const validateLogin = (values) => {
    const errors = {}

    if(!values.email) {
        errors.email = "กรุณากรอกอีเมล";
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "รูปแบบอีเมลไม่ถูกต้อง"
    }

    if(!values.password) {
        errors.password = "กรุณากรอกรหัสผ่าน"
    } else if(values.password.length < 6) {
        errors.password = "รหัสผ่านต้องมีอย่างน้อย 6 ตัว"
    }

    return errors;
}