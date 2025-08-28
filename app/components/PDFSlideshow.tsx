"use client"

import React from 'react'

interface PDFSlideshowProps {
  pdfUrl: string
  isOpen: boolean
  onClose: () => void
  title?: string
}

export default function PDFSlideshow({ pdfUrl, isOpen, onClose, title }: PDFSlideshowProps) {
  if (!isOpen) return null

  // Create PDF URL with clean viewing parameters
  const pdfWithParams = `${pdfUrl}#zoom=page-fit&toolbar=1&navpanes=0`

  // Handle click outside to close modal
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-7xl h-[90vh] w-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 truncate">
            {title || 'PDF Slideshow'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* PDF Viewer */}
        <div className="flex-1">
          <iframe
            src={pdfWithParams}
            width="100%"
            height="100%"
            className="border-none rounded-b-lg"
            style={{ minHeight: '700px' }}
            title="PDF Viewer"
          />
        </div>
      </div>
    </div>
  )
}