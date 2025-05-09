import { configureStore } from "@reduxjs/toolkit";

import { dataSlice } from "./data";
import { linkwordsSlice } from "./linkwords";
import { verbsSlice } from "./verbs";
import { adjectivesSlice } from "./adjectives";
import { firstconditionalSlice } from "./firstconditional";
import { zeroconditionalSlice } from "./zeroconditional";
import { thirdconditionalSlice } from "./thirdconditional";
//import { mixedconditional } from "./mixedconditional";
//import { modalsdeduction } from "./modalsdeduction";
import { modalspossibilitySlice } from "./modalspossibility";
//import { adverbs } from "./adverbs";
//import { zeroconditional } from "./zeroconditional";
export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    linkwords: linkwordsSlice.reducer,
    verbs: verbsSlice.reducer,
    adjectives: adjectivesSlice.reducer,
    firstconditional: firstconditionalSlice.reducer,
    zeroconditional: zeroconditionalSlice.reducer,
    thirdconditional: thirdconditionalSlice.reducer,
    //thirdconditional: thirdconditionalSlice.reducer,
    //modalsdeduction: modalsdeduction.reducer,
    modalspossibility: modalspossibilitySlice.reducer,
    //adverbs: adverbs.reducer,
    //zeroconditional: zeroconditional.reducer,
  },
});
