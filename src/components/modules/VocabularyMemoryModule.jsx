import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import './MemoryMatchGame.css';

// Pares de vocabulario
const vocabPairs = [
  { id: 1, en: 'apple', es: 'manzana' },
  { id: 2, en: 'house', es: 'casa' },
  { id: 3, en: 'dog', es: 'perro' },
];

const generateCards = (pairs) => {
  const flat = pairs.flatMap(pair => [
    { id: `${pair.id}-en`, pairId: pair.id, text: pair.en },
    { id: `${pair.id}-es`, pairId: pair.id, text: pair.es },
  ]);
  return flat.sort(() => Math.random() - 0.5);
};

const MemoryMatchGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [wrongPair, setWrongPair] = useState([]);

  const resetGame = () => {
    setCards(generateCards(vocabPairs));
    setFlipped([]);
    setMatched([]);
    setLives(3);
    setWrongPair([]);
    setGameOver(false);
  };

  useEffect(() => {
    resetGame();
  }, []);

  const handleClick = (card) => {
    if (flipped.length === 2 || flipped.includes(card.id) || gameOver) return;

    const newFlipped = [...flipped, card.id];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped.map(id => cards.find(c => c.id === id));
      if (first.pairId === second.pairId) {
        setMatched(prev => [...prev, first.pairId]);
      } else {
        setWrongPair([first.id, second.id]);
        if (lives - 1 === 0) {
          setGameOver(true);
          setTimeout(() => resetGame(), 2000);
        } else {
          setLives(l => l - 1);
        }
      }

      setTimeout(() => {
        setFlipped([]);
        setWrongPair([]);
      }, 1000);
    }
  };

  const allMatched = matched.length === vocabPairs.length;

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">🧠 Match the Vocabulary</h2>
      <div className="text-center mb-3">
        <h5>Lives: {lives} ❤️</h5>
      </div>

      {gameOver && (
        <Alert variant="danger" className="text-center">
          ❌ Game Over! Restarting...
        </Alert>
      )}

      {allMatched && !gameOver && (
        <Alert variant="success" className="text-center">
          🎉 Congratulations! You matched all pairs!
          <div className="mt-2">
            <Button onClick={resetGame}>Play Again</Button>
          </div>
        </Alert>
      )}

      <Row xs={2} sm={3} md={4} className="g-3 justify-content-center">
        {cards.map(card => {
          const isFlipped = flipped.includes(card.id) || matched.includes(card.pairId);
          const isWrong = wrongPair.includes(card.id);

          return (
            <Col key={card.id}>
              <div className="flip-card" onClick={() => handleClick(card)}>
                <motion.div
                  className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flip-card-front">
                    <Card className="h-100 text-center bg-light text-dark">
                      <Card.Body className="d-flex align-items-center justify-content-center">
                        <span style={{ fontSize: '18px' }}>❓</span>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className="flip-card-back">
                    <Card className={`h-100 text-center ${isWrong ? 'bg-danger' : 'bg-success'} text-white`}>
                      <Card.Body className="d-flex align-items-center justify-content-center">
                        <span style={{ fontSize: '18px' }}>{card.text}</span>
                      </Card.Body>
                    </Card>
                  </div>
                </motion.div>
              </div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default MemoryMatchGame;

