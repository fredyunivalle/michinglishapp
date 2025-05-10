export const fetchDataHelper = async (dispatch, setLoading, setData, setError, endpoint) => {
    try {
      dispatch(setLoading(true));
      const response = await fetch(`${endpoint}/index.json`);
      const data = await response.json();
      const { folders } = data
      const promises = folders.map(folder =>
        fetch(`${endpoint}/${folder}/info.json`).then(res => res.json())
      );
      const results = await Promise.all(promises);
      dispatch(setData(results));
    } catch (error) {
      dispatch(setError(error.toString()));
    } finally {
      dispatch(setLoading(false));
    }
  };

  export const fetchVocabularyData = async (dispatch,setLoadingVocabulary,setDataVocabulary,setErrorVocabulary,basePath) => {
  try {
    dispatch(setLoadingVocabulary(true));
    const res = await fetch(`${basePath}vocabulary/index.json`);
    const { folders } = await res.json();

    const result = {};

    for (const category of folders) {
      const categoryIndexRes = await fetch(`${basePath}vocabulary/${category}/index.json`);
      const { folders: studentFolders } = await categoryIndexRes.json();

      const studentData = [];

      for (const studentFolder of studentFolders) {
        const infoPath = `${basePath}vocabulary/${category}/${studentFolder}/info.json`;
        try {
          const infoRes = await fetch(infoPath);
          const info = await infoRes.json();
          studentData.push(info);
        } catch (e) {
          console.warn(`Error loading ${infoPath}`, e);
        }
      }

      result[category] = studentData;
    }

    dispatch(setDataVocabulary(result));
  } catch (err) {
    dispatch(setErrorVocabulary(err.toString()));
  } finally {
    dispatch(setLoadingVocabulary(false));
  }
};
