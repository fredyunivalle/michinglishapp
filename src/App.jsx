import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import catTeacher from './assets/cat-teacher.png';
import { setData as setDataData, setLoading as setLoadingData, setError as setErrorData } from './store/data';
import { setData as setDataLinkwords, setLoading as setLoadingLinkwords, setError as setErrorLinkwords } from "./store/linkwords";
import { setData as setDataVerbs, setLoading as setLoadingVerbs, setError as setErrorVerbs } from "./store/verbs";
import { setData as setDataAdjectives, setLoading as setLoadingAdjectives, setError as setErrorAdjectives } from "./store/adjectives";
import { setData as setDataAdverbs, setLoading as setLoadingAdverbs, setError as setErrorAdverbs } from './store/adverbs';
import { setData as setDataFirstConditional, setLoading as setLoadingFirstConditional, setError as setErrorFirstConditional } from "./store/firstconditional";
import { setData as setDataZeroConditional, setLoading as setLoadingZeroConditional, setError as setErrorZeroConditional } from "./store/zeroconditional";
import { setData as setDataThirdConditional, setLoading as setLoadingThirdConditional, setError as setErrorThirdConditional } from "./store/thirdconditional";
import { setData as setDataMixedConditional, setLoading as setLoadingMixedConditional, setError as setErrorMixedConditional } from "./store/mixedconditional";
import { setData as setDataModalsDeduction, setLoading as setLoadingModalsDeduction, setError as setErrorModalsDeduction } from "./store/modalsdeduction";
import { setData as setDataModalsPossibility, setLoading as setLoadingModalsPossibility, setError as setErrorModalsPossibility } from "./store/modalspossibility";
import { setData as setDataVocabulary, setLoading as setLoadingVocabulary, setError as setErrorVocabulary } from "./store/vocabulary";

import AppNavbar from './components/Navbar/AppNavbar';
import Sidebar from './components/Sidebar/Sidebar';
import { fetchDataHelper } from "./helpers/fetchDataHelper";
import { fetchVocabularyData } from "./helpers/fetchDataHelper"
import { AppRouter } from './router/AppRouter';




function App() {
  const dispatch = useDispatch();
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    fetchDataHelper(
      dispatch,
      setLoadingData,
      setDataData,
      setErrorData,
      `${import.meta.env.BASE_URL}data`
    );

    // Fetch for `linkwords`
    fetchDataHelper(
      dispatch,
      setLoadingLinkwords,
      setDataLinkwords,
      setErrorLinkwords,
      `${import.meta.env.BASE_URL}linkwords`
    );

    // Fetch for `Verbs`
    fetchDataHelper(
      dispatch,
      setLoadingVerbs,
      setDataVerbs,
      setErrorVerbs,
      `${import.meta.env.BASE_URL}verbs`
    );

    // Fetch for `Adjectives`
    fetchDataHelper(
      dispatch,
      setLoadingAdjectives,
      setDataAdjectives,
      setErrorAdjectives,
      `${import.meta.env.BASE_URL}adjectives`
    );

    // Fetch for `First Conditional`
    fetchDataHelper(
      dispatch,
      setLoadingFirstConditional,
      setDataFirstConditional,
      setErrorFirstConditional,
      `${import.meta.env.BASE_URL}firstconditional`
    );

    // Fetch for `Zero Conditional`
    fetchDataHelper(
      dispatch,
      setLoadingZeroConditional,
      setDataZeroConditional,
      setErrorZeroConditional,
      `${import.meta.env.BASE_URL}zeroconditional`
    );

    // Fetch for `Third Conditional`
    fetchDataHelper(
      dispatch,
      setLoadingThirdConditional,
      setDataThirdConditional,
      setErrorThirdConditional,
      `${import.meta.env.BASE_URL}thirdconditional`
    );

    // Fetch for `adverbs`
    fetchDataHelper(
      dispatch,
      setLoadingAdverbs,
      setDataAdverbs,
      setErrorAdverbs,
      `${import.meta.env.BASE_URL}adverbs`
    ); 

  // Fetch for `modalspossibility`
    fetchDataHelper(
      dispatch,
      setLoadingModalsPossibility,
      setDataModalsPossibility,
      setErrorModalsPossibility,
      `${import.meta.env.BASE_URL}modalspossibility`
    );  
    
    // Fetch for `Mixed Conditional`
    fetchDataHelper(
      dispatch,
      setLoadingMixedConditional,
      setDataMixedConditional,
      setErrorMixedConditional,
      `${import.meta.env.BASE_URL}mixedconditional`
    );
    
    // Fetch for `Modals Deduction`
    fetchDataHelper(
      dispatch,
      setLoadingModalsDeduction,
      setDataModalsDeduction,
      setErrorModalsDeduction,
      `${import.meta.env.BASE_URL}modalsdeduction`
    )
    
    // Fetch for `Vocabulary Puzzle`
    fetchVocabularyData(
      dispatch,
      setLoadingVocabulary,
      setDataVocabulary, 
      setErrorVocabulary,
      `${import.meta.env.BASE_URL}`

    )
  }, [dispatch]);

  const toggleSidebar = () => setShowSidebar(!showSidebar);
  console.log(location.pathname)
  return (
    <>
      <AppNavbar onToggleSidebar={toggleSidebar} />
      <Sidebar show={showSidebar} onClose={toggleSidebar} />
     
      <div className="mt-5 text-center">
          {location.pathname === '/michinglishapp/' && (
        <>
          <img 
            src={catTeacher} 
            alt="Michinglish teacher cat" 
            width="300" 
            height="auto" 
            style={{ maxWidth: '90%', height: 'auto' }}
          />
          <h2 className="mt-3">Welcome to MichinglishAPP!</h2>
          <p>Learn English through games, quizzes, and... cats!</p>
        </>
      )}
     
        <AppRouter />


      </div>
    </>
  );
}

export default App;

