import PaitList from './components/PaitList';
import Section from './components/Section';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Alert from './components/Alert/Alert';
import Conteiner from './components/Conteiner/Conteiner';
import paintings from './paintings.json';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export default function App() {
  return (
    <Conteiner>
      <Alert text="Начальнік все пропало!" type="success" />
      <Alert text="Начальнік все пропало!" type="warning" />
      <Alert text="Начальнік все пропало!" type="error" />
      <ColorPicker options={colorPickerOptions} />
      <Section title="Top SUper">
        <PaitList items={paintings} />
      </Section>
      <Section />
    </Conteiner>
  );
}
