import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { AppLayout } from './components/AppLayout';
import { ApiTestPage } from './pages/ApiTestPage';
import { NotFoundPage } from './components/NotFoundPage';
import { RecipeListPage } from './pages/RecipeListPage';
import { RecipeDetailPage } from './pages/RecipeDetailPage';

import { SideDish } from './pages/SideDish';
import { EditPage } from './pages/EditPage';
import { AddRecipe } from './pages/AddPage';

export function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <AppLayout>
          <Routes>
            <Route path="/" element={<RecipeListPage />} />
            <Route path="/recept/:slug" element={<RecipeDetailPage />} />
            <Route path="/api-test" element={<ApiTestPage />} />
            <Route path="/addPage" element={<AddRecipe />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/sideDish" element={<SideDish />} />
            <Route path="/edit/:slug" element={<EditPage />} />
          </Routes>
        </AppLayout>
      </ChakraProvider>
    </BrowserRouter>
  );
}
