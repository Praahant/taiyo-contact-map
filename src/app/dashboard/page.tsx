'use client'
import React from 'react';
import LineGraph from '../component/LineGraph';
import Map from '../component/Map';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

const DashboardPage: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>

    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">COVID-19 Dashboard</h1><p>Click on country then on circle to view details  </p>
      {/* <LineGraph /> */}
      <Map />
    </div>
    </QueryClientProvider>
  );
};

export default DashboardPage;
