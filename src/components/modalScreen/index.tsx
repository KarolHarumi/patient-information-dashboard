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
        <div className="fixed left-0 top-0 z-[1055] h-full w-full overflow-y-auto overflow-x-hidden outline-none" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div data-te-modal-dialog-ref className="pointer-events-none relative w-auto translate-y-[20%] transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]">
                <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                    <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                        <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200" id="exampleModalLabel">
                            3D Point Cloud Visualization - {patient.name}
                        </h5>
                        <button type="button" onClick={handleVisible} className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none" data-te-modal-dismiss aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="relative flex-auto p-4" data-te-modal-body-ref>
                        <PointCloudVisualization />
                    </div>

                    <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                        <button onClick={handleVisible} className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200" data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">Close</button>
                    </div>
                </div>
            </div>
        </div>
    ) 
}