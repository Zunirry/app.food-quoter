import './App.css';

function App() {
  return (
    <>
      <button
        onClick={async () => {
          const response = await fetch('/api');
          const data = await response.text();
          return data;
        }}
      >
        Test backend
      </button>
    </>
  );
}

export default App;
