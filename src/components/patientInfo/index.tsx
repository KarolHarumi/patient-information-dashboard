import { useListPatients } from '@/hooks/queries/patients';
import { useErrorFetch } from '@/hooks/useErrorFetch'
import { IPatient } from '@/interfaces/patients'

interface IPatientInfo {
  setVisible: (visible: boolean) => void;
  setPatient: (patient: IPatient) => void;
}

export function PatientInfo({setVisible, setPatient}: IPatientInfo) {
    const { isLoading, data, isError, error } = useListPatients();
    useErrorFetch(isError, error?.message);

    if (isLoading) {
       return <p className="text-sm leading-6 text-gray-800">Loading...</p>;
    }

    const handleVisible = (patient: IPatient) => {
      setVisible(true)
      setPatient(patient)
    }

    return (
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data && data.map((patient) => (
          <div key={patient.id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 18">
                <path stroke="currentColor" d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
              </svg>
              <h2 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{patient.name}</h2>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{patient.age} years - {patient.gender}</p>
              <button onClick={() => handleVisible(patient)} className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded">See patient</button>
          </div>
        ))}
      </div>
    ) 
  }