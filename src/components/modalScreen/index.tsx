import { IPatient } from '@/interfaces/patients'
import { PointCloudVisualization } from '@/components/pointCloudVisualization';

interface IModalScreen {
    patient: IPatient;
    visible: boolean;
    setVisible: (visible: boolean) => void;
}

export function ModalScreen({ patient, visible, setVisible }: IModalScreen) {
    const handleVisible = () => {
        setVisible(false)
    }

    if (!visible) {
        return <></>;
    }

    return (
        <div className="fixed left-0 top-0 z-[1055] h-full w-full bg-black/[.6] p-5">
            <div data-te-modal-dialog-ref className="pointer-events-none relative w-auto translate-y-[30%] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                    <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                        <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                            3D Point Cloud Visualization - {patient.name}
                        </h5>
                        <button onClick={handleVisible} className="box-content rounded-none border-none" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="relative flex-auto p-4" data-te-modal-body-ref>
                        <PointCloudVisualization />
                    </div>

                    <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                        <button onClick={handleVisible} className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase">Close</button>
                    </div>
                </div>
            </div>
        </div>
    ) 
}