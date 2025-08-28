"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  // Smooth scrolling for anchor navigation links only
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const href = (e.target as HTMLAnchorElement).getAttribute('href')
        // Only process if it's actually an anchor link (starts with #)
        if (href && href.startsWith('#')) {
          const target = document.querySelector(href)
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }
      })
    })

    // Add scroll effect to navbar
    const handleScroll = () => {
      const navbar = document.querySelector('nav')
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('shadow-lg')
        } else {
          navbar.classList.remove('shadow-lg')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center -my-8">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="NOVUS Education" 
                className="h-32 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-4 items-center -ml-32">
              <a href="#apps" className="text-gray-700 hover:text-indigo-600 font-medium">Our Apps</a>
              <a href="#books" className="text-gray-700 hover:text-indigo-600 font-medium">GP Resource Library</a>
              <a href="#tutors" className="text-gray-700 hover:text-indigo-600 font-medium">Meet Our Tutors</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
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
              <a 
                href="#apps" 
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Apps
              </a>
              <a 
                href="#books" 
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                GP Resource Library
              </a>
              <a 
                href="#tutors" 
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Meet Our Tutors
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
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
      <section className="gradient-bg pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Master General Paper<br />
              <span className="text-yellow-300">Like Never Before</span>
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Join Singapore's top JC students who trust NOVUS Education for GP excellence. Our expert tutors from NUS and elite institutions deliver personalized learning through cutting-edge apps and curated resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://calendly.com/scholarlyprep/joshua-novus" target="_blank" rel="noopener noreferrer" className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center">
                <i className="fas fa-calendar-check mr-2"></i>
                Book Free Consultation
              </a>
              <Link href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition inline-flex items-center justify-center">
                <i className="fas fa-graduation-cap mr-2"></i>
                Enroll A Level Program
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Apps Section */}
      <section id="apps" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Learning Apps</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary learning tools designed specifically for GP Paper 1 and Paper 2 success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12">
            {/* KnowledgeBank */}
            <div className="card-hover bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <i className="fas fa-database"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">KnowledgeBank</h3>
                  <p className="text-blue-600 font-medium">GP Paper 1 Mastery</p>
                </div>
              </div>
              
              <div className="rounded-xl mb-6 overflow-hidden">
                <iframe
                  width="100%"
                  height="192"
                  src="https://www.youtube.com/embed/jppXw_nZy6k"
                  title="KnowledgeBank Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  Comprehensive essay frameworks and structures
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  Current affairs database with analysis
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  AI-powered essay feedback and scoring
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  Practice questions with model answers
                </li>
              </ul>
              
              <a 
                href="https://knowledgebank.novuseducationsg.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition block text-center"
              >
                Access KnowledgeBank
              </a>
            </div>

            {/* CompreAce */}
            <div className="card-hover bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                  <i className="fas fa-brain"></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">CompreAce</h3>
                  <p className="text-purple-600 font-medium">GP Paper 2 Excellence</p>
                </div>
              </div>
              
              <div className="rounded-xl mb-6 overflow-hidden">
                <iframe
                  width="100%"
                  height="192"
                  src="https://www.youtube.com/embed/eukNLYbuFBg"
                  title="CompreAce Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  Advanced comprehension strategies and techniques
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  Timed practice sessions with real exam conditions
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  Detailed answer explanations and mark schemes
                </li>
                <li className="flex items-center text-gray-700">
                  <i className="fas fa-check-circle text-green-500 mr-3"></i>
                  Progress tracking and performance analytics
                </li>
              </ul>
              
              <a 
                href="https://compreace.novuseducationsg.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-purple-600 text-white py-4 rounded-xl font-semibold hover:bg-purple-700 transition block text-center"
              >
                Access CompreAce
              </a>
            </div>




          </div>
        </div>
      </section>

      {/* Wall of Books Section */}
      <section id="books" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">GP Resource Library</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive collection of GP study guides, essay templates, and exam strategies designed to boost your performance from mid-band to Band 1
            </p>
          </div>

          <div className="carousel-container">
            <div className="carousel-track" style={{width: '200%'}}>
              {/* First set of GP resources */}
              <div className="flex space-x-6 mr-6">
                <div className="book-cover rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://img.notionusercontent.com/s3/prod-files-secure%2F0e28e540-810b-4715-b51f-c1ec5f175ba5%2F9a8cb61a-58f0-40bf-9c28-c8ce980616e6%2FChatGPT_Image_Jul_29_2025_04_24_27_PM.png/size/w=380?exp=1755681809&sig=O24pl0syt8TMwEKV5cxmalzokDxrrA93ySaaJDTDjtQ&id=23f0d3e2-bb6d-806f-b98c-dd8d108cc53e&table=block"
                    alt="Top 20 Cambridge GP Topics"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="book-cover rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://img.notionusercontent.com/s3/prod-files-secure%2F0e28e540-810b-4715-b51f-c1ec5f175ba5%2Fe5ce3328-eeb9-41ae-8242-85b7e843ef4d%2FChatGPT_Image_Jul_29_2025_04_29_52_PM.png/size/w=380?exp=1755681812&sig=FtiJpLEKsQI8gmgcLrZvkqb2lh0JyagpFOORrfiuHEM&id=23f0d3e2-bb6d-807e-8e07-cfb0cc66ae7c&table=block"
                    alt="Mid Band to Band 1 Essay Samples"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="book-cover rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://img.notionusercontent.com/s3/prod-files-secure%2F0e28e540-810b-4715-b51f-c1ec5f175ba5%2F72dde876-3f68-4e00-adab-7410deaa0537%2FChatGPT_Image_Jul_29_2025_04_36_18_PM.png/size/w=380?exp=1755681817&sig=kRGsQGvLJghgIv0Dgl5WsY-lT70_xiypN762CyeI4Ag&id=23f0d3e2-bb6d-809f-84fb-f55fccfad48a&table=block"
                    alt="Score Booster Phrases for GP Essays"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="book-cover rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://img.notionusercontent.com/s3/prod-files-secure%2F0e28e540-810b-4715-b51f-c1ec5f175ba5%2Ff265c776-1e1b-4139-858d-df581765e7fe%2FChatGPT_Image_Jul_29_2025_04_38_16_PM.png/size/w=380?exp=1755681819&sig=vC6RgdxTDJFTYLXJs2XqqevTffltJAZuEQsCtqLMkhk&id=23f0d3e2-bb6d-808f-8087-e39f413b47d5&table=block"
                    alt="15 Arguments Templates for Any Essay Question"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="book-cover rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://img.notionusercontent.com/s3/prod-files-secure%2F0e28e540-810b-4715-b51f-c1ec5f175ba5%2F8d4e3e7a-7548-43ae-b89c-ae7f3c3ca991%2FChatGPT_Image_Jul_29_2025_04_40_06_PM.png/size/w=380?exp=1755681821&sig=Tv_-zq20CfGsMD1uJZTt_mor3KySha0WU0r1kDVyxCs&id=23f0d3e2-bb6d-809c-b004-f23c0e075675&table=block"
                    alt="How to Score 45/50 for GP Essay"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="book-cover rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://img.notionusercontent.com/s3/prod-files-secure%2F0e28e540-810b-4715-b51f-c1ec5f175ba5%2Fc6396b73-d53f-4639-96a7-c588bcb1d92c%2FChatGPT_Image_Jul_29_2025_04_41_44_PM.png/size/w=380?exp=1755681823&sig=JVWB69t9HYZT2OTUF7rumemCy4wGbG_jUewy9P9chk4&id=23f0d3e2-bb6d-802e-916f-c0af7f96a9b3&table=block"
                    alt="Top 20 GP Topics 2025 Edition"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="book-cover rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://img.notionusercontent.com/s3/prod-files-secure%2F0e28e540-810b-4715-b51f-c1ec5f175ba5%2F5a199368-35b1-4dfd-8221-bdfc60b9d81e%2FChatGPT_Image_Jul_29_2025_04_43_32_PM.png/size/w=380?exp=1755681826&sig=_yXyuyXYxgbeNERjSCBRjty65f3bQOjsDRUtgxVhaIc&id=23f0d3e2-bb6d-8069-afb3-cf04648f37b5&table=block"
                    alt="GP Paper 2 Quick Revision Tool Kit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="book-cover rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://img.notionusercontent.com/s3/prod-files-secure%2F0e28e540-810b-4715-b51f-c1ec5f175ba5%2F8caad618-ddf0-47ff-964b-965d520612eb%2FChatGPT_Image_Jul_29_2025_04_45_27_PM.png/size/w=380?exp=1755681828&sig=1NYd6WE2bgk-vdalVZVaQ2kKNjZMFFon4rZ4YJp-FUo&id=23f0d3e2-bb6d-80d4-aec6-ce458e2fe53a&table=block"
                    alt="Model Essays - Climate, AI, Inequality"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Second set of GP resources */}
              <div className="flex space-x-6">
                <div className="book-cover rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://img.notionusercontent.com/s3/prod-files-secure%2F0e28e540-810b-4715-b51f-c1ec5f175ba5%2Fa6a285c4-63c6-412c-9971-d6b5a58a1e7d%2FChatGPT_Image_Jul_29_2025_04_51_41_PM.png/size/w=380?exp=1755681830&sig=cc2aa0sbgyop0kfL1kodV0o6_scePtd1P2ZyF2LXLbc&id=23f0d3e2-bb6d-807d-bef3-f13dcbf9303a&table=block"
                    alt="Top 50 Vocabulary in Context Questions"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="book-cover rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://img.notionusercontent.com/s3/prod-files-secure%2F0e28e540-810b-4715-b51f-c1ec5f175ba5%2F927890c1-5f4a-4873-8044-9338fc6f349b%2FChatGPT_Image_Jul_29_2025_04_53_48_PM.png/size/w=380?exp=1755681834&sig=SV7HuzZNwjumkLlyPlU303jS7nH8jm2utucmUWoA1ec&id=23f0d3e2-bb6d-8071-b059-c008bb3050a5&table=block"
                    alt="50 Comprehension Traps and How to Outsmart Them"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="book-cover rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://img.notionusercontent.com/s3/prod-files-secure%2F0e28e540-810b-4715-b51f-c1ec5f175ba5%2F50781a62-873e-4cc5-8483-ddb49628e67e%2FChatGPT_Image_Jul_29_2025_04_57_12_PM.png/size/w=380?exp=1755681836&sig=fyBmI57blKd4eYhGf6FlCR4tcQ_vdGK8PdwvzcalAIk&id=23f0d3e2-bb6d-8000-8305-f78338fd749b&table=block"
                    alt="Score Fast Think Deep - High Stress Tool Kit"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="book-cover rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://img.notionusercontent.com/s3/prod-files-secure%2F0e28e540-810b-4715-b51f-c1ec5f175ba5%2F73af11eb-45f2-40e7-82ef-4292c13e8e4f%2FChatGPT_Image_Jul_30_2025_09_45_34_AM.png/size/w=380?exp=1755681838&sig=-AXjMKuezJFxxV_FiSdG79V-SVUTP-RfkCnZ3ISMXrc&id=2400d3e2-bb6d-80ec-9671-cf875631e53a&table=block"
                    alt="Score 27+ GP Reading Comprehension"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="book-cover rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://img.notionusercontent.com/s3/prod-files-secure%2F0e28e540-810b-4715-b51f-c1ec5f175ba5%2F02e766ba-bdc1-482d-9e3b-738553eb24a6%2FChatGPT_Image_Jul_30_2025_10_33_42_AM.png/size/w=380?exp=1755681842&sig=RD8FYTOyq096bnCVGtGWUuEkHQ6L-zFd5wdCs14i9Y8&id=2400d3e2-bb6d-8008-b6d8-e24a4f694c5b&table=block"
                    alt="Break the 30 Mark Barrier - GP Paper 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="book-cover rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://img.notionusercontent.com/s3/prod-files-secure%2F0e28e540-810b-4715-b51f-c1ec5f175ba5%2Ff2a2db7b-445b-4e1a-a205-c66a7a9871e9%2FChatGPT_Image_Jul_30_2025_10_38_40_AM.png/size/w=380?exp=1755681843&sig=M_UIEbo6st21-JQEcsJKCramrGJRIR41dZr6hN5M6gA&id=2400d3e2-bb6d-80cd-aaf6-ec9c2b545c6b&table=block"
                    alt="Common Mistakes in GP Comprehension"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="book-cover rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://img.notionusercontent.com/s3/prod-files-secure%2F0e28e540-810b-4715-b51f-c1ec5f175ba5%2F4a96255d-4363-4680-8b3d-a97cdaab988f%2FChatGPT_Image_Jul_30_2025_10_41_28_AM.png/size/w=380?exp=1755681845&sig=71Ib_PT7NV2KInQzw3zXpTie_PzImVindhtLJabmwgw&id=2400d3e2-bb6d-80a5-a316-f47b6cb96aa5&table=block"
                    alt="7 Must Know GP Essay Topics"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="book-cover rounded-lg shadow-md overflow-hidden">
                  <img 
                    src="https://img.notionusercontent.com/s3/prod-files-secure%2F0e28e540-810b-4715-b51f-c1ec5f175ba5%2F9df74a64-fec8-4bd7-b125-0fdaa466a54f%2FChatGPT_Image_Jul_31_2025_12_20_31_PM.png/size/w=380?exp=1755681848&sig=maRD9fpA_euQQ1V-YvkOB_tK_2oZB4YCOuudEwKzab4&id=2410d3e2-bb6d-80a7-a62c-dee396d3643e&table=block"
                    alt="Score Booster Phrases for A Level GP Essays"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
        </div>

          <div className="text-center mt-12">
            <Link href="/resources" className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition inline-block">
              Access All Resources
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Tutors Section */}
      <section id="tutors" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Tutors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from Singapore's finest GP educators, all graduates from NUS and alumni of top institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Adam Anwar */}
            <div className="card-hover bg-white rounded-2xl p-8 border border-gray-200 text-center">
              <div className="tutor-avatar rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="/adam.jpeg" 
                  alt="Adam Anwar - NOVUS Education Tutor"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Adam Anwar</h3>
              <div className="space-y-1 mb-4">
                <p className="text-indigo-600 font-medium">NUS Law</p>
                <p className="text-gray-600">Raffles Institution</p>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Specializes in essay writing techniques and argumentation strategies. Known for helping students achieve A grades through structured analytical frameworks.
              </p>
            </div>

            {/* Joshua Lim */}
            <div className="card-hover bg-white rounded-2xl p-8 border border-gray-200 text-center">
              <div className="tutor-avatar rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="/josh.jpeg" 
                  alt="Joshua Lim - NOVUS Education Tutor"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Joshua Lim</h3>
              <div className="space-y-1 mb-4">
                <p className="text-indigo-600 font-medium">NUS Business</p>
                <p className="text-gray-600">Raffles Institution</p>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Expert in current affairs and global perspectives. Passionate about connecting real-world events to GP themes for deeper understanding.
              </p>
            </div>

            {/* Megan Ng */}
            <div className="card-hover bg-white rounded-2xl p-8 border border-gray-200 text-center">
              <div className="tutor-avatar rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="/megan.jpeg" 
                  alt="Megan Ng - NOVUS Education Tutor"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Megan Ng</h3>
              <div className="space-y-1 mb-4">
                <p className="text-indigo-600 font-medium">NUS Law</p>
                <p className="text-gray-600">Eunoia JC</p>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Focuses on comprehension skills and critical thinking. Experienced in breaking down complex passages and developing analytical mindsets.
              </p>
            </div>

            {/* Sherlyn Tan */}
            <div className="card-hover bg-white rounded-2xl p-8 border border-gray-200 text-center">
              <div className="tutor-avatar rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="/sherlyn-tan.jpeg" 
                  alt="Sherlyn Tan - NOVUS Education Tutor"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sherlyn Tan</h3>
              <div className="space-y-1 mb-4">
                <p className="text-indigo-600 font-medium">NUS Business</p>
                <p className="text-gray-600">Eunoia JC</p>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Specializes in exam strategies and time management. Helps students optimize their performance under exam conditions with proven techniques.
              </p>
            </div>

            {/* Mae Sann Choo */}
            <div className="card-hover bg-white rounded-2xl p-8 border border-gray-200 text-center lg:col-start-2">
              <div className="tutor-avatar rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="/mae sann.jpeg" 
                  alt="Mae Sann Choo - NOVUS Education Tutor"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mae Sann Choo</h3>
              <div className="space-y-1 mb-4">
                <p className="text-indigo-600 font-medium">NUS Law</p>
                <p className="text-gray-600">ACS (I)</p>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Expert in cross-cultural perspectives and global issues. Brings international experience to help students develop nuanced worldviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Excel in General Paper?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of successful JC students who have transformed their GP performance with NOVUS Education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition inline-flex items-center justify-center">
              Start Your Free Trial
            </Link>
            <Link href="#contact" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition inline-flex items-center justify-center">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <img 
                src="/logo.png" 
                alt="NOVUS Education" 
                className="h-32 w-auto mb-4 filter invert"
              />
              <p className="text-gray-300 mb-6 max-w-md">
                Empowering JC students to achieve GP excellence through innovative learning technology and expert guidance from Singapore's top educators.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#apps" className="text-gray-300 hover:text-white transition">Our Apps</a></li>
                <li><a href="#books" className="text-gray-300 hover:text-white transition">GP Resource Library</a></li>
                <li><a href="#tutors" className="text-gray-300 hover:text-white transition">Meet Our Tutors</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-2"></i>
                  <a href="mailto:josh@novuseducationsg.com" className="hover:text-white transition">
                    josh@novuseducationsg.com
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fab fa-whatsapp mr-2"></i>
                  <a href="https://wa.me/6591805377" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    +65 91805377
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fab fa-instagram mr-2"></i>
                  <a href="https://instagram.com/Novus_ed" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    @Novus_ed
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="fab fa-telegram mr-2"></i>
                  <a href="https://t.me/NOVUSeducation" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                    NOVUSeducation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NOVUS Education. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        body {
          font-family: 'Inter', sans-serif;
        }
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .carousel-container {
          overflow: hidden;
        }
        .carousel-track {
          display: flex;
          animation: scroll 20s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .book-cover {
          width: 120px;
          height: 180px;
          background: linear-gradient(45deg, #f3f4f6, #e5e7eb);
          border: 2px solid #d1d5db;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          color: #6b7280;
          text-align: center;
          padding: 8px;
          position: relative;
        }
        .book-cover img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 6px;
        }
        .video-placeholder {
          background: linear-gradient(45deg, #1f2937, #374151);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
        }
        .tutor-avatar {
          width: 120px;
          height: 120px;
          background: linear-gradient(45deg, #e0e7ff, #c7d2fe);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          color: #6366f1;
        }
      `}</style>
    </div>
  )
}
