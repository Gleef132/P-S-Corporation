import { AppDispatch, RootState } from "@/store/store";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

