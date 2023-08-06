"use client";
import { useState } from 'react'
import { PatientInfo } from '@/components/patientInfo';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ModalScreen } from '@/components/modalScreen';
import { Header } from '@/components/header';

const queryClient = new QueryClient();

export default function Home() {
  const [visible, setVisible] = useState(false);
  const [patient, setPatient] = useState({id: "", name: "", age: "", gender: "", videoUploadStatus: 0, scoliosisPredictionStatus: 0, pointCloudData: ""});

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-full">
        <Header />        
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 px-5">
            <PatientInfo setVisible={setVisible} setPatient={setPatient} />
            <ModalScreen patient={patient} visible={visible} setVisible={setVisible} />
          </div>
        </main>
      </div>
    </QueryClientProvider>
  )
}