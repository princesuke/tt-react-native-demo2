import {render, fireEvent} from "@testing-library/react-native"
import { MyButton } from "../MyButton"

describe("MyButton Unit Test",()=>{

    it("หน้าจอต้องไม่เพี๊ยน (snapshot)", ()=> {
        const { toJSON } = render(<MyButton title="ปุ่มกด" />);
        expect(toJSON()).toMatchSnapshot();
    })

    it("พอกดปุ่ม onPress ต้องทำถูกเรียกทำงาน", ()=>{
        const mockOnPress = jest.fn();

        const { getByText } = render(<MyButton title="ปุ่มกด" onPress={mockOnPress} />);
        const button = getByText("ปุ่มกด");
        fireEvent.press(button);

        expect(mockOnPress).toHaveBeenCalledTimes(1);
    })

});