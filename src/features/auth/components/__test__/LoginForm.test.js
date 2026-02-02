import { render, fireEvent, waitFor } from "@testing-library/react-native";
import LoginForm from "../LoginForm";

test("ต้องโชว์ข้อความแจ้งเตือนเมื่อ User กด Login โดยไม่กรอกข้อมูล", async()=> {
    const mockLoginSucess = jest.fn();
    const { getByText } = render(<LoginForm onLoginSuccess={mockLoginSucess}/>)

    const loginButton = getByText("เข้าสู่ระบบ");
    fireEvent.press(loginButton);

    await waitFor(()=> {
        expect(getByText("กรุณากรอกอีเมล")).toBeTruthy(); 
        expect(getByText("กรุณากรอกรหัสผ่าน")).toBeTruthy();
    })

    expect(mockLoginSucess).not.toHaveBeenCalled();
});

test("เมื่อกรอกข้อมูลครบถ้วน ข้อความ Error ต้องหายไป", async ()=> {
    const mockLoginSucess = jest.fn();
    const { getByPlaceholderText, queryByText, getByText } = render(<LoginForm onLoginSuccess={mockLoginSucess} />)

    const emailInput = getByPlaceholderText("example@gmail.com");
    const passwordInput = getByPlaceholderText("ระบุรหัสผ่านของคุณ");
    const loginButton = getByText("เข้าสู่ระบบ");

    fireEvent.changeText(emailInput, "test@gmail.com");
    fireEvent.changeText(passwordInput, "123456");

    fireEvent.press(loginButton);

    await waitFor(()=> {
        expect(queryByText("กรุณากรอกอีเมล")).toBeNull();
        expect(queryByText("กรุณากรอกรหัสผ่าน")).toBeNull();
    })

    expect(mockLoginSucess).toHaveBeenCalled();
});
