import React from 'react';
import { AppLayout } from "./components/app-layout/app-layout";
import { Routes } from "./routes";

export const App: React.FC = () => <AppLayout>
  <Routes />
</AppLayout>;
