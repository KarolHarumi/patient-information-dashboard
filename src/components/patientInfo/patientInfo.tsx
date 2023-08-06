export function PatientInfo() {
  
    // TODO: call fetch
    const patients = [
      { 
          "id": 1, 
          "name": "Patient 1", 
          "age": "22", 
          "gender": "Female", 
          "videoUploadStatus": 1, 
          "scoliosisPredictionStatus": 1, 
          "pointCloudData": "" 
      },
      { 
          "id": 2, 
          "name": "Patient 2", 
          "age": "67", 
          "gender": "Male", 
          "videoUploadStatus": 1, 
          "scoliosisPredictionStatus": 1, 
          "pointCloudData": "" 
      }
    ]
  
    return (
      <div className="grid grid-cols-2 gap-6">
        {patients.map((patient) => (
          <div key={patient.id} className="shadow bg-white rounded-lg p-5">
            <h2 className="text-lg font-semibold leading-6 text-gray-800">{patient.name}</h2>
            <p className="mt-1 truncate text-sm leading-5 text-gray-500">Age: {patient.age}</p>
            <p className="mt-1 truncate text-sm leading-5 text-gray-500">Gender: {patient.gender}</p>
          </div>
        ))}
      </div>
    ) 
  }