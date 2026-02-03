import { initialState, reducers } from "../authLogic";

test("ควรเก็บ Token เมื่อสั่ง setToken", ()=> {
    const state = {...initialState};
    const action = {
        payload: "TOKENT-123",
        createdAt: "2026-01-31"
    };

    reducers.setToken(state, action);

    expect(state.userToken).toBe("TOKENT-123");
    expect(state.createdAt).toBe("2026-01-31");
})