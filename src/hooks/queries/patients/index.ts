import { useQuery } from 'react-query'
import { axiosConfig } from '@/config/axios'
import { IPatient } from '@/interfaces/patients'
import { IError } from '@/interfaces/error'

const onError = (error: IError) => console.error(error.message)

/**
 * /patients
 * @param 
 * @returns
 */
const fetchListPatients = () => axiosConfig.get(`/patients`).then((res) => res.data)

export const useListPatients = () => {
  return useQuery(['list-patients'], () => fetchListPatients(), {
    refetchOnWindowFocus: false,
    onError,
    select: (result: Array<IPatient>) => result,
  })
}