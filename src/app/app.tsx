import React from 'react'
import { AppLayout } from './components/app-layout/app-layout'
import { Routes } from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppLayout>
        <Routes />
      </AppLayout>
    </QueryClientProvider>
  )
}
