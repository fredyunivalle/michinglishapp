import { configureStore } from "@reduxjs/toolkit";

import { dataSlice } from "./data";
import { linkwordsSlice } from "./linkwords";
import { verbsSlice } from "./verbs";
import { adjectivesSlice } from "./adjectives";
import { firstconditionalSlice } from "./firstconditional";
import { mixedconditionalSlice } from "./mixedconditional";
import { zeroconditionalSlice } from "./zeroconditional";
import { thirdconditionalSlice } from "./thirdconditional";
import { adverbsSlice } from "./adverbs";
import { modalsdeductionSlice } from "./modalsdeduction";
import { modalspossibilitySlice } from "./modalspossibility";
//import { zeroconditional } from "./zeroconditional";

export const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    linkwords: linkwordsSlice.reducer,
    verbs: verbsSlice.reducer,
    adjectives: adjectivesSlice.reducer,
    firstconditional: firstconditionalSlice.reducer,
    mixedconditional: mixedconditionalSlice.reducer,
    zeroconditional: zeroconditionalSlice.reducer,
    thirdconditional: thirdconditionalSlice.reducer,
    adverbs: adverbsSlice.reducer,
    modalsdeduction: modalsdeductionSlice.reducer,
    modalspossibility: modalspossibilitySlice.reducer,
    //zeroconditional: zeroconditional.reducer,
  },
});
