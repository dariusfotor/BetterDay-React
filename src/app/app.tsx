import React from 'react'
import { AppLayout } from './components/app-layout/app-layout'
import { Routes } from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'

export const App: React.FC = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <Routes />
      </AppLayout>
    </QueryClientProvider>
  )
}
