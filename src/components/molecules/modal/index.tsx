import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { useClickOutside } from '@/hooks/useClickOutSide'
import { Fragment, MouseEvent, useRef } from 'react'

type ModalProps = {
  isOpen: boolean
  title?: string
  content: React.ReactNode
  onClose: () => void
}

export const Modal = ({ isOpen, title, content, onClose }: ModalProps) => {
  const modalRef = useRef(null)

  const handleCloseModal = (e: MouseEvent) => {
    e.stopPropagation()
    onClose()
  }

  useClickOutside(modalRef, onClose)

  return (
    <Fragment>
      {isOpen && (
        <Container className="fixed z-10 inset-0 overflow-y-auto">
          <Container className="flex items-center justify-center min-h-screen px-4 text-center">
            <Container
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <Container className="absolute inset-0 bg-gray-500 opacity-75"></Container>
            </Container>
            <div
              ref={modalRef}
              className="inline-block align-bottom bg-white rounded-md text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <Container className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <Container className="">
                  <Container className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    {title && (
                      <Text
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        {title}
                      </Text>
                    )}
                    <Container className="mt-2">{content}</Container>
                  </Container>
                </Container>
              </Container>
              <Container className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                  onClick={(e) => handleCloseModal(e)}
                >
                  Close
                </button>
              </Container>
            </div>
          </Container>
        </Container>
      )}
    </Fragment>
  )
}
