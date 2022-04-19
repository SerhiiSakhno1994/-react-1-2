import PaitList from './components/PaitList';
import Section from './components/Section';
import paintings from './paintings.json';

export default function App() {
  return (
    <div>
      <Section title="Top SUper">
        <PaitList items={paintings} />
      </Section>
      <Section />
    </div>
  );
}
