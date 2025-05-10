import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import MemoryMatchGame from '../components/modules/VocabularyMemoryModule';
import { Container, Form } from 'react-bootstrap';

const VocabularyPuzzlePage = () => {
  const { category } = useParams();
  const data = useSelector((state) => state.vocabularypuzzle.categories[category] || []);
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!data.length) {
    return <Container className="py-4">⚠️ No data found for category `{category}`</Container>;
  }

  const selected = data[selectedIndex];

  return (
    <Container className="py-4">
      <h2 className="mb-3 text-capitalize">🧩 {category} Puzzle</h2>

      {/* Selector de estudiante */}
      {data.length > 1 && (
        <Form.Group className="mb-4">
          <Form.Label>Choose a contributor:</Form.Label>
          <Form.Select value={selectedIndex} onChange={(e) => setSelectedIndex(Number(e.target.value))}>
            {data.map((entry, index) => (
              <option key={index} value={index}>
                {entry.user?.username || `Student ${index + 1}`}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      )}

      <MemoryMatchGame user={selected.user} vocabPairs={selected.words} />
    </Container>
  );
};

export default VocabularyPuzzlePage;
