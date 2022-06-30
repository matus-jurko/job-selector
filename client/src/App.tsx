import { Routes, Route } from 'react-router-dom';

import ModalProvider from './context/modal/ModalProvider';
import AlertProvider from './context/alert/AlertProvider';
import AppProvider from './context/app/AppProvider';

import ManagedModal from './components/modal/ManagedModal';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Alert from './components/alert/Alert';

import NotFound from './components/pages/NotFound';
import Result from './components/pages/Result';
import Admin from './components/pages/Admin';
import Home from './components/pages/Home';

import './styles/index.css';

const App = () => {
  return (
    <AppProvider>
      <AlertProvider>
        <ModalProvider>
          <Container className="flex flex-col min-h-screen">
            <div className="flex flex-col justify-center flex-grow pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<Result />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Alert />
            <ManagedModal />
            <Footer />
          </Container>
        </ModalProvider>
      </AlertProvider>
    </AppProvider>
  );
};

export default App;
