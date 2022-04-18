import PaitList from './components/PaitList';
import paintings from './paintings.json';

export default function App() {
    return (
        <div>
            <PaitList items={paintings} />
        </div>
    );
};