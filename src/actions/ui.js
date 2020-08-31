import { types } from "../types/types";


export const setError = ( msgError ) => ({
    type: types.uiSetError,
    payload: msgError
})


export const clearError = () => ({
    type: types.uiClearError
})


export const StartLoading = () => ({
    type: types.uiStartLoading
})


export const FinishLoading = () => ({
    type: types.uiFinishLoading
})