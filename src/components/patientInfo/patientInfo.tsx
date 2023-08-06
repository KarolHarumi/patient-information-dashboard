import { useListPatients } from '@/hooks/queries/patients';
import { useErrorFetch } from '@/hooks/useErrorFetch'

export function PatientInfo() {
    const { isLoading, data, isError, error } = useListPatients();
    useErrorFetch(isError, error?.message);

    if (isLoading) {
       return <p className="text-sm leading-6 text-gray-800">Loading...</p>;
    }

    return (
      <div className="grid grid-cols-2 gap-6">
        {data && data.map((patient) => (
          <div key={patient.id} className="shadow bg-white rounded-lg p-5">
            <h2 className="text-lg font-semibold leading-6 text-gray-800">{patient.name}</h2>
            <p className="mt-1 truncate text-sm leading-5 text-gray-500">Age: {patient.age}</p>
            <p className="mt-1 truncate text-sm leading-5 text-gray-500">Gender: {patient.gender}</p>
          </div>
        ))}
      </div>
    ) 
  }