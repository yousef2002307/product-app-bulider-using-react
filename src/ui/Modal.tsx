import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState ,ReactNode} from 'react'
import { DialogBackdrop } from '@headlessui/react'
interface IProps {
    isOpen : boolean,
    close : () => void,
    title ?: string,
    children : ReactNode
}
export default function Modal({isOpen,close,title,children}:IProps) {


  return (
    <>
      {/* <Button
        onClick={open}
        className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Open dialog
      </Button> */}

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none text-black " onClose={close}>
      <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-md bg-white/30"  />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="  w-full max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
             { title && <DialogTitle as="h3" className="text-base/7 font-medium text-gray-900">
                {title}
              </DialogTitle>}
              
              {children}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

