
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { UIProvider } from './context/UIContext';
import { ToastProvider } from './context/ToastContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { QueuePage } from './pages/QueuePage';
import { ArticlePage } from './pages/ArticlePage';

export default function App() {
  return (
    <UIProvider>
      <ToastProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="queue" element={<QueuePage />} />
              <Route path="article/:id" element={<ArticlePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </HashRouter>
      </ToastProvider>
    </UIProvider>
  );
}
