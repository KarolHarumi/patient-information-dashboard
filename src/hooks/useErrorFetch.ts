import { useEffect } from 'react'

export const useErrorFetch = (isError: boolean, message: string | undefined) => {
    // TODO: implement a toast
    return useEffect(() => {
        if (isError) {
            console.error(message);
        }
    }, [isError])
}
