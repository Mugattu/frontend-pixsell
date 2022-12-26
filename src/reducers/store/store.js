import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../Slice/basketSlice";
import gameSlice from "../Slice/GamesList";
import vacancySlice from "../Slice/vacancySlice";
import registration from "../Slice/registrationSlice"
import promoSclice from "../Slice/PromoSlice";
import responseSlice from "../Slice/responseSlice";


export const store = configureStore({
  reducer: {
   gameReducer: gameSlice,
   promoReducer:  promoSclice,
   registrationReducer: registration,
   basketReducer: basketSlice,
   vacancySlice,
   responseReducer: responseSlice,
  },
});

