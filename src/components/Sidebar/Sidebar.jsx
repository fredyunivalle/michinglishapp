import { Offcanvas, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = ({ show, onClose }) => {
  const categories = useSelector((state) => state.vocabularypuzzle.categories);

  return (
    <Offcanvas show={show} onHide={onClose} placement="start">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>General English</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <p className="text-muted">English Challenges</p>
        <ListGroup variant="flush">
          {/* Rutas antiguas */}
          <ListGroup.Item><Link to="/michinglishapp/verbs" onClick={onClose} className="text-decoration-none">Verbs</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/michinglishapp/adjectives" onClick={onClose} className="text-decoration-none">Adjectives</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/michinglishapp/linking-words" onClick={onClose} className="text-decoration-none">Linking Words</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/michinglishapp/adverbs" onClick={onClose} className="text-decoration-none">Adverbs</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/michinglishapp/modals-of-possibility" onClick={onClose} className="text-decoration-none">Modals of Possibility</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/michinglishapp/modals-of-deduction" onClick={onClose} className="text-decoration-none">Modals of Deduction</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/michinglishapp/zero-conditionals" onClick={onClose} className="text-decoration-none">Zero Conditionals</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/michinglishapp/first-conditionals" onClick={onClose} className="text-decoration-none">First Conditionals</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/michinglishapp/second-conditionals" onClick={onClose} className="text-decoration-none">Second Conditionals</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/michinglishapp/third-conditionals" onClick={onClose} className="text-decoration-none">Third Conditionals</Link></ListGroup.Item>
          <ListGroup.Item><Link to="/michinglishapp/mixed_conditionals" onClick={onClose} className="text-decoration-none">Mixed Conditionals</Link></ListGroup.Item>

          {/* Separador visual */}
          <hr />

          {/* Sección de puzzles */}
          <ListGroup.Item className="bg-warning fw-bold text-dark">
            🧩 Vocabulary Puzzle
          </ListGroup.Item>

          {Object.keys(categories).map((category) => (
            <ListGroup.Item key={category}>
              <Link
                to={`/michinglishapp/vocabularypuzzel/${category}`}
                onClick={onClose}
                className="text-decoration-none"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default Sidebar;


