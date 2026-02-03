import uppercaseMiddleware from '../upperCaseMiddleware'

describe('uppercaseMiddleware', () => {
  let store;
  let next;
  let invoke;

  beforeEach(() => {
    store = { getState: jest.fn(), dispatch: jest.fn() };
    next = jest.fn();
    // Helper function สำหรับเรียก middleware
    invoke = (action) => uppercaseMiddleware(store)(next)(action);
  });

  it('ควรเปลี่ยน payload เป็นตัวพิมพ์ใหญ่ เมื่อ action type คือ auth/setToken', () => {
    const action = { type: 'auth/setToken', payload: 'hello' };
    
    invoke(action);

    // เช็คว่า next ถูกเรียกพร้อม action ที่ถูกแก้ไขแล้ว
    expect(next).toHaveBeenCalledWith({
      type: 'auth/setToken',
      payload: 'HELLO',
    });
  });

  it('ไม่ควรเปลี่ยน payload ถ้า action type ไม่ใช่ auth/setToken', () => {
    const action = { type: 'other/action', payload: 'hello' };

    invoke(action);

    // เช็คว่า payload ยังเป็นเหมือนเดิม
    expect(next).toHaveBeenCalledWith(action);
  });

  it('ไม่ควรพังถ้า payload ไม่ใช่ string', () => {
    const action = { type: 'auth/setToken', payload: 123 };

    invoke(action);

    expect(next).toHaveBeenCalledWith(action);
  });
});