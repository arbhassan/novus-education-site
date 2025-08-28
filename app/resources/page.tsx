"use client"

import { useState } from "react"
import Link from "next/link"
import PDFSlideshow from "../components/PDFSlideshow"

export default function ResourcesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedPDF, setSelectedPDF] = useState<{url: string, title: string} | null>(null)
  const [preloadedPDFs, setPreloadedPDFs] = useState<Set<string>>(new Set())

  // Array of all book resources with their details
  const books = [
    {
      id: 1,
      title: "Top 20 Cambridge GP Topics",
      image: "https://file.notion.so/f/f/0e28e540-810b-4715-b51f-c1ec5f175ba5/9a8cb61a-58f0-40bf-9c28-c8ce980616e6/ChatGPT_Image_Jul_29_2025_04_24_27_PM.png?table=block&id=23f0d3e2-bb6d-806f-b98c-dd8d108cc53e&spaceId=0e28e540-810b-4715-b51f-c1ec5f175ba5&expirationTimestamp=1756440000000&signature=aUM3GQsv6CWnNy0UwbdiCDJCDWA_6lJDei9PmYWZrVQ&downloadName=ChatGPT+Image+Jul+29%2C+2025%2C+04_24_27+PM.png" ,
      category: "Essay Topics",
      pdfUrl: "https://tcsuimqcjsqbfjnoxlxo.supabase.co/storage/v1/object/public/Books%20Novus%20Education/Top%2020%20Cambridge%20GP%20topics.pdf"
    },
    {
      id: 2,
      title: "Mid Band to Band 1 Essay Samples",
      image: "https://file.notion.so/f/f/0e28e540-810b-4715-b51f-c1ec5f175ba5/e5ce3328-eeb9-41ae-8242-85b7e843ef4d/ChatGPT_Image_Jul_29_2025_04_29_52_PM.png?table=block&id=23f0d3e2-bb6d-807e-8e07-cfb0cc66ae7c&spaceId=0e28e540-810b-4715-b51f-c1ec5f175ba5&expirationTimestamp=1756440000000&signature=_NYlbjeBTO_Mzza-DqLjhqTauLT8PC2CXZBdiMtF8sU&downloadName=ChatGPT+Image+Jul+29%2C+2025%2C+04_29_52+PM.png",
      category: "Essay Samples",
      pdfUrl: "https://tcsuimqcjsqbfjnoxlxo.supabase.co/storage/v1/object/public/Books%20Novus%20Education/A%20level%20general%20paper%20(GP)%20from%20mid%20Band%20to%20Band%201%20before%20and%20after%20essay%20samples%20.pdf"
    },
    {
      id: 3,
      title: "Score Booster Phrases for GP Essays",
      image: "https://file.notion.so/f/f/0e28e540-810b-4715-b51f-c1ec5f175ba5/72dde876-3f68-4e00-adab-7410deaa0537/ChatGPT_Image_Jul_29_2025_04_36_18_PM.png?table=block&id=23f0d3e2-bb6d-809f-84fb-f55fccfad48a&spaceId=0e28e540-810b-4715-b51f-c1ec5f175ba5&expirationTimestamp=1756440000000&signature=B1SBC2Qu-8sTqknm96xXqp1-qRuES_lu4cjLpTXdwPY&downloadName=ChatGPT+Image+Jul+29%2C+2025%2C+04_36_18+PM.png",
      category: "Essay Writing",
      pdfUrl: "https://tcsuimqcjsqbfjnoxlxo.supabase.co/storage/v1/object/public/Books%20Novus%20Education/Score%20booster%20phrases%20for%20GP%20essays.pdf"
    },
    {
      id: 4,
      title: "15 Arguments Templates for Any Essay Question",
      image: "https://file.notion.so/f/f/0e28e540-810b-4715-b51f-c1ec5f175ba5/f265c776-1e1b-4139-858d-df581765e7fe/ChatGPT_Image_Jul_29_2025_04_38_16_PM.png?table=block&id=23f0d3e2-bb6d-808f-8087-e39f413b47d5&spaceId=0e28e540-810b-4715-b51f-c1ec5f175ba5&expirationTimestamp=1756440000000&signature=_ZKOAf_2uGufKaI6arYkrPTljys5a6KFj5anrlzi6pM&downloadName=ChatGPT+Image+Jul+29%2C+2025%2C+04_38_16+PM.png",
      category: "Essay Templates",
      pdfUrl: "https://tcsuimqcjsqbfjnoxlxo.supabase.co/storage/v1/object/public/Books%20Novus%20Education/15%20arguments%20templates%20for%20any%20essay%20question.pdf"
    },
    {
      id: 5,
      title: "A Level Score-Boosting Phrases for GP Essays",
      image: "https://file.notion.so/f/f/0e28e540-810b-4715-b51f-c1ec5f175ba5/8d4e3e7a-7548-43ae-b89c-ae7f3c3ca991/ChatGPT_Image_Jul_29_2025_04_40_06_PM.png?table=block&id=23f0d3e2-bb6d-809c-b004-f23c0e075675&spaceId=0e28e540-810b-4715-b51f-c1ec5f175ba5&expirationTimestamp=1756440000000&signature=JTM4QPxjH628JJMoac-yQONBxRV_u-ov1nVyqaCsi8I&downloadName=ChatGPT+Image+Jul+29%2C+2025%2C+04_40_06+PM.png",
      category: "Essay Scoring",
      pdfUrl: "https://tcsuimqcjsqbfjnoxlxo.supabase.co/storage/v1/object/public/Books%20Novus%20Education/A%20level%20score%20boosting%20phrases%20for%20GP%20essays.pdf"
    },
    {
      id: 6,
      title: "How to score 45/50 for GP Essay",
      image: "https://file.notion.so/f/f/0e28e540-810b-4715-b51f-c1ec5f175ba5/c6396b73-d53f-4639-96a7-c588bcb1d92c/ChatGPT_Image_Jul_29_2025_04_41_44_PM.png?table=block&id=23f0d3e2-bb6d-802e-916f-c0af7f96a9b3&spaceId=0e28e540-810b-4715-b51f-c1ec5f175ba5&expirationTimestamp=1756440000000&signature=kVr_-nadTXX6VVSO3IlYLDOAnWUFzJLVInaO3gqtyPs&downloadName=ChatGPT+Image+Jul+29%2C+2025%2C+04_41_44+PM.png",
      category: "Essay Topics",
      pdfUrl: "https://tcsuimqcjsqbfjnoxlxo.supabase.co/storage/v1/object/public/Books%20Novus%20Education/How%20to%20score%2045_50%20for%20GP%20essay%20.pdf"
    },
    {
      id: 7,
      title: "Top 20 GP Topics 2025 Edition",
      image: "https://file.notion.so/f/f/0e28e540-810b-4715-b51f-c1ec5f175ba5/5a199368-35b1-4dfd-8221-bdfc60b9d81e/ChatGPT_Image_Jul_29_2025_04_43_32_PM.png?table=block&id=23f0d3e2-bb6d-8069-afb3-cf04648f37b5&spaceId=0e28e540-810b-4715-b51f-c1ec5f175ba5&expirationTimestamp=1756440000000&signature=s9k7AYM1XjRdO-Ols62W7LOkexU91nG-Eg1NlslpaN4&downloadName=ChatGPT+Image+Jul+29%2C+2025%2C+04_43_32+PM.png",
      category: "Revision Tools",
      pdfUrl: "https://tcsuimqcjsqbfjnoxlxo.supabase.co/storage/v1/object/public/Books%20Novus%20Education/Top%2020%20GP%20topics%202025%20edition.pdf"
    },
    {
      id: 8,
      title: "GP Paper 2 Quick Revision Tool Kit",
      image: "https://file.notion.so/f/f/0e28e540-810b-4715-b51f-c1ec5f175ba5/8caad618-ddf0-47ff-964b-965d520612eb/ChatGPT_Image_Jul_29_2025_04_45_27_PM.png?table=block&id=23f0d3e2-bb6d-80d4-aec6-ce458e2fe53a&spaceId=0e28e540-810b-4715-b51f-c1ec5f175ba5&expirationTimestamp=1756440000000&signature=joVXXAqVFtyAT2tRB8ZxlgGJ6lDafF2UqQgAOnXtUW8&downloadName=ChatGPT+Image+Jul+29%2C+2025%2C+04_45_27+PM.png",
      category: "Model Essays",
      pdfUrl: "https://tcsuimqcjsqbfjnoxlxo.supabase.co/storage/v1/object/public/Books%20Novus%20Education/GP%20paper%202%20quick%20revision%20tool%20kit.pdf"
    },
    {
      id: 9,
      title: "Model Essays for Climate Change, AI, and Inequality",
      image: "https://file.notion.so/f/f/0e28e540-810b-4715-b51f-c1ec5f175ba5/a6a285c4-63c6-412c-9971-d6b5a58a1e7d/ChatGPT_Image_Jul_29_2025_04_51_41_PM.png?table=block&id=23f0d3e2-bb6d-807d-bef3-f13dcbf9303a&spaceId=0e28e540-810b-4715-b51f-c1ec5f175ba5&expirationTimestamp=1756440000000&signature=phXQBW8sqweh5TrpLglue7YvqhvF5p7D6Tb0VRU4doE&downloadName=ChatGPT+Image+Jul+29%2C+2025%2C+04_51_41+PM.png",
      category: "Vocabulary",
      pdfUrl: "https://tcsuimqcjsqbfjnoxlxo.supabase.co/storage/v1/object/public/Books%20Novus%20Education/Model%20essays%20for%20climate%20change,%20AI%20and%20inequality%20-%20updated%20for%202025%20topics.pdf"
    },
    {
      id: 10,
      title: "Top 50 Vocabulary in Context Questions",
      image: "https://file.notion.so/f/f/0e28e540-810b-4715-b51f-c1ec5f175ba5/927890c1-5f4a-4873-8044-9338fc6f349b/ChatGPT_Image_Jul_29_2025_04_53_48_PM.png?table=block&id=23f0d3e2-bb6d-8071-b059-c008bb3050a5&spaceId=0e28e540-810b-4715-b51f-c1ec5f175ba5&expirationTimestamp=1756440000000&signature=gdqpDEZ9zUnZVwPhZoj1TxRs-Vj1vy6mpeuotvbpx6A&downloadName=ChatGPT+Image+Jul+29%2C+2025%2C+04_53_48+PM.png",
      category: "Comprehension",
      pdfUrl: "https://tcsuimqcjsqbfjnoxlxo.supabase.co/storage/v1/object/public/Books%20Novus%20Education/Top%2050%20vocabulary%20in%20context%20questions.pdf"
    },
    {
      id: 11,
      title: "50 Comprehension Traps and How to Outsmart Them",
      image: "https://file.notion.so/f/f/0e28e540-810b-4715-b51f-c1ec5f175ba5/50781a62-873e-4cc5-8483-ddb49628e67e/ChatGPT_Image_Jul_29_2025_04_57_12_PM.png?table=block&id=23f0d3e2-bb6d-8000-8305-f78338fd749b&spaceId=0e28e540-810b-4715-b51f-c1ec5f175ba5&expirationTimestamp=1756440000000&signature=fDqLcrVOn0-u9VZP77uvh5PmOmc78FEml1ENRR7hkUw&downloadName=ChatGPT+Image+Jul+29%2C+2025%2C+04_57_12+PM.png",
      category: "Exam Strategies",
     pdfUrl: "https://tcsuimqcjsqbfjnoxlxo.supabase.co/storage/v1/object/public/Books%20Novus%20Education/50%20comprehension%20traps%20and%20how%20to%20outsmart%20them.pdf" 
      
    },
    {
      id: 12,
      title: "Score Fast Think Deep - High Stress Tool Kit",
      image: "https://file.notion.so/f/f/0e28e540-810b-4715-b51f-c1ec5f175ba5/73af11eb-45f2-40e7-82ef-4292c13e8e4f/ChatGPT_Image_Jul_30_2025_09_45_34_AM.png?table=block&id=2400d3e2-bb6d-80ec-9671-cf875631e53a&spaceId=0e28e540-810b-4715-b51f-c1ec5f175ba5&expirationTimestamp=1756440000000&signature=UbdxoOcn8u4EPLqYQp7NPwHheW4JyFkWJNpr-IJBrbw&downloadName=ChatGPT+Image+Jul+30%2C+2025%2C+09_45_34+AM.png",
      category: "Comprehension",
      pdfUrl: "https://tcsuimqcjsqbfjnoxlxo.supabase.co/storage/v1/object/public/Books%20Novus%20Education/Score%20fast.%20think%20deep%20a%20tool%20kid%20for%20high%20stress%20GP%20paper%202%20situations.pdf"
    },
    {
      id: 13,
      title: "Score 27+ GP Reading Comprehension",
      image: "https://file.notion.so/f/f/0e28e540-810b-4715-b51f-c1ec5f175ba5/02e766ba-bdc1-482d-9e3b-738553eb24a6/ChatGPT_Image_Jul_30_2025_10_33_42_AM.png?table=block&id=2400d3e2-bb6d-8008-b6d8-e24a4f694c5b&spaceId=0e28e540-810b-4715-b51f-c1ec5f175ba5&expirationTimestamp=1756440000000&signature=4Crc_HXsXjaLDCoWbRJN3dotigzJeGzE-7bjL9_92g0&downloadName=ChatGPT+Image+Jul+30%2C+2025%2C+10_33_42+AM.png" ,
      category: "Paper 2",
      pdfUrl: "https://tcsuimqcjsqbfjnoxlxo.supabase.co/storage/v1/object/public/Books%20Novus%20Education/Score%2027+%20GP%20reading%20comprehension.pdf"
    },
    {
      id: 14,
      title: "Break the 30 Mark Barrier",
      image: "https://file.notion.so/f/f/0e28e540-810b-4715-b51f-c1ec5f175ba5/f2a2db7b-445b-4e1a-a205-c66a7a9871e9/ChatGPT_Image_Jul_30_2025_10_38_40_AM.png?table=block&id=2400d3e2-bb6d-80cd-aaf6-ec9c2b545c6b&spaceId=0e28e540-810b-4715-b51f-c1ec5f175ba5&expirationTimestamp=1756440000000&signature=xke1UVgGcWeUSwaunhV2JhzRc5NZ-FZdI83eyvZTpK0&downloadName=ChatGPT+Image+Jul+30%2C+2025%2C+10_38_40+AM.png",
      category: "Comprehension",
      pdfUrl: "https://tcsuimqcjsqbfjnoxlxo.supabase.co/storage/v1/object/public/Books%20Novus%20Education/Break%20the%2030%20mark%20barrier,%20your%20first%20big%20win%20in%20GP%20paper%202.pdf"
    },
    {
      id: 15,
      title: "The Big List of Common Mistakes in GP Comprehension",
      image: "https://file.notion.so/f/f/0e28e540-810b-4715-b51f-c1ec5f175ba5/4a96255d-4363-4680-8b3d-a97cdaab988f/ChatGPT_Image_Jul_30_2025_10_41_28_AM.png?table=block&id=2400d3e2-bb6d-80a5-a316-f47b6cb96aa5&spaceId=0e28e540-810b-4715-b51f-c1ec5f175ba5&expirationTimestamp=1756440000000&signature=dz-rf13L9krQ_Jl2U8t7m6Ee6OYeW4_xR4pPg-IQFjM&downloadName=ChatGPT+Image+Jul+30%2C+2025%2C+10_41_28+AM.png",
      category: "Essay Topics",
      pdfUrl: "https://tcsuimqcjsqbfjnoxlxo.supabase.co/storage/v1/object/public/Books%20Novus%20Education/The%20big%20list%20of%20common%20mistakes%20in%20GP%20comprehension.pdf"
    },
    {
      id: 16,
      title: "7 Must Know GP Essay Topics",
      image: "https://file.notion.so/f/f/0e28e540-810b-4715-b51f-c1ec5f175ba5/9df74a64-fec8-4bd7-b125-0fdaa466a54f/ChatGPT_Image_Jul_31_2025_12_20_31_PM.png?table=block&id=2410d3e2-bb6d-80a7-a62c-dee396d3643e&spaceId=0e28e540-810b-4715-b51f-c1ec5f175ba5&expirationTimestamp=1756440000000&signature=9nrBUrmqYcESOaL3v7DVHbkQ3gHv7tNBshkdhxoqmTY&downloadName=ChatGPT+Image+Jul+31%2C+2025%2C+12_20_31+PM.png",
      category: "Essay Writing",
      pdfUrl: "https://tcsuimqcjsqbfjnoxlxo.supabase.co/storage/v1/object/public/Books%20Novus%20Education/7%20Must%20Know%20GP%20Essay%20Topics.pdf"
    }
  ]

  // Get unique categories for filtering
  const categories = ["All", ...Array.from(new Set(books.map(book => book.category)))]
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Filter books based on selected category
  const filteredBooks = selectedCategory === "All" 
    ? books 
    : books.filter(book => book.category === selectedCategory)

  // Handle opening PDF slideshow
  const handleOpenPDF = (book: any) => {
    if (book.pdfUrl) {
      setSelectedPDF({ url: book.pdfUrl, title: book.title })
    }
  }

  // Handle closing PDF slideshow
  const handleClosePDF = () => {
    setSelectedPDF(null)
  }

  // Preload PDF when hovering over book card
  const handlePreloadPDF = (pdfUrl: string) => {
    if (!pdfUrl || preloadedPDFs.has(pdfUrl)) return
    
    // Create a hidden link to trigger browser preloading
    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = pdfUrl
    document.head.appendChild(link)
    
    // Mark as preloaded
    setPreloadedPDFs(prev => new Set(prev).add(pdfUrl))
    
    // Clean up the link after a short delay
    setTimeout(() => {
      document.head.removeChild(link)
    }, 1000)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center -my-8">
            <div className="flex items-center">
              <Link href="/">
                <img 
                  src="/logo.png" 
                  alt="NOVUS Education" 
                  className="h-32 w-auto cursor-pointer"
                />
              </Link>
            </div>
            <div className="hidden md:flex space-x-4 items-center -ml-32">
              <Link href="/#apps" className="text-gray-700 hover:text-indigo-600 font-medium">Our Apps</Link>
              <Link href="/#books" className="text-gray-700 hover:text-indigo-600 font-medium">GP Resource Library</Link>
              <Link href="/#tutors" className="text-gray-700 hover:text-indigo-600 font-medium">Meet Our Tutors</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</Link>
              <a href="https://calendly.com/scholarlyprep/joshua-novus" target="_blank" rel="noopener noreferrer" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">Book Consultation</a>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link 
                href="/#apps" 
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Apps
              </Link>
              <Link 
                href="/#books" 
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                GP Resource Library
              </Link>
              <Link 
                href="/#tutors" 
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Meet Our Tutors
              </Link>
              <Link 
                href="/#contact" 
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="https://calendly.com/scholarlyprep/joshua-novus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-center font-medium mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Consultation
              </a>
            </div>
          </div>
        )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gradient-bg pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              GP Resource Library
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Access our comprehensive collection of GP study guides, essay templates, and exam strategies designed to boost your performance from mid-band to Band 1
            </p>

          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
            {filteredBooks.map((book) => (
              <div key={book.id} className="group">
                <div 
                  className={`book-card bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                    book.pdfUrl ? 'cursor-pointer' : ''
                  }`}
                  onClick={() => handleOpenPDF(book)}
                  onMouseEnter={() => book.pdfUrl && handlePreloadPDF(book.pdfUrl)}
                >
                  <div className="book-cover rounded-lg overflow-hidden mb-4">
                    <img 
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <div className="text-xs text-indigo-600 font-medium mb-2 uppercase tracking-wide">
                      {book.category}
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-3">
                      {book.title}
                    </h3>
                    {book.pdfUrl && (
                      <div className="mt-2 text-xs text-gray-500 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                        </svg>
                        Click to view
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <i className="fas fa-search text-4xl text-gray-400 mb-4"></i>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No resources found</h3>
              <p className="text-gray-600">Try selecting a different category to see more resources.</p>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Excel in General Paper?</h3>
            <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">
              Access all these resources and more with our comprehensive GP learning platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/scholarlyprep/joshua-novus" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition">
                Book Free Consultation
              </a>
              <Link href="/#apps" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
                Explore Our Apps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Slideshow Modal */}
      {selectedPDF && (
        <PDFSlideshow
          pdfUrl={selectedPDF.url}
          title={selectedPDF.title}
          isOpen={true}
          onClose={handleClosePDF}
        />
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .book-card {
          height: 100%;
        }
        .book-cover {
          width: 100%;
          height: 200px;
          background: linear-gradient(45deg, #f3f4f6, #e5e7eb);
          border: 2px solid #d1d5db;
        }
        .book-cover img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (max-width: 640px) {
          .book-cover {
            height: 160px;
          }
        }
      `}</style>
    </div>
  )
}
