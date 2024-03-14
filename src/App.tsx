import { Router } from '@solidjs/router';
import { ROUTES } from '@/routes';
function App() {
  return (
    <Router>{ROUTES}</Router>
  );
}

export default App;
