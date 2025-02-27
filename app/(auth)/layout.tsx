import { Metadata } from "next";
import React, { ReactNode } from "react";
import Link from 'next/link';
import Video from "@/components/Video";

export const metadata: Metadata = {
  title: "BharatBaithak - Connect Better",
  description: "A video calling app designed for seamless conversations across India",
  icons: {
    icon: "/icons/favicon.svg",
  },
};

const AuthLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-200">
      {/* Navigation Bar */}
      <nav className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-indigo-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">BB</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">BharatBaithak</h1>
        </div>
        <div className="flex items-center space-x-6">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            <Link href={`#signin-section`}>
            Sign In
            </Link>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Connect with India, <br />
            <span className="text-indigo-600">one baithak at a time</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Premium video meetings for everyone. Secure, simple, and designed for meaningful conversations across the nation.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium">
            <Link href={`#signin-section`}>
            Get Started
            </Link>
            
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Video/>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16 bg-gradient-to-br from-orange-200 via-white to-blue-300 rounded-t-3xl shadow-sm">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Why choose BharatBaithak</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-blue-50 rounded-lg transition-transform hover:scale-105">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-800">Secure Meetings</h4>
            <p className="text-gray-600">End-to-end encryption ensures your conversations stay private and secure.</p>
          </div>
          
          <div className="p-6 bg-purple-50 rounded-lg transition-transform hover:scale-105">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-800">Regional Support</h4>
            <p className="text-gray-600">Multiple Indian language support for truly inclusive conversations.</p>
          </div>
          
          <div className="p-6 bg-indigo-50 rounded-lg transition-transform hover:scale-105">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-800">Crystal Clear</h4>
            <p className="text-gray-600">Optimized for Indian networks, ensuring clear video even with limited bandwidth.</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div id="howto" className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">How BharatBaithak Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-indigo-600 font-bold text-xl">1</span>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-800">Create Meeting</h4>
            <p className="text-gray-600">Start a new meeting with just one click, no downloads required.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-indigo-600 font-bold text-xl">2</span>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-800">Share Link</h4>
            <p className="text-gray-600">Invite others by sharing a simple meeting link via any platform.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-indigo-600 font-bold text-xl">3</span>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-800">Join In</h4>
            <p className="text-gray-600">Connect instantly on any device - mobile, tablet, or desktop.</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-indigo-600 font-bold text-xl">4</span>
            </div>
            <h4 className="text-xl font-semibold mb-2 text-gray-800">Collaborate</h4>
            <p className="text-gray-600">Share screens, chat, and collaborate in real-time.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-indigo-50 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">What People Are Saying</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h5 className="font-semibold">Rajesh Kumar</h5>
                  <p className="text-sm text-gray-500">Small Business Owner, Mumbai</p>
                </div>
              </div>
              <p className="text-gray-600">&quot;BharatBaithak has transformed how I connect with clients across India. The regional language support is a game-changer!&quot;</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h5 className="font-semibold">Priya Sharma</h5>
                  <p className="text-sm text-gray-500">Teacher, Bangalore</p>
                </div>
              </div>
              <p className="text-gray-600">&quot;My online classes run smoothly even in areas with limited connectivity. The low-bandwidth optimization really works!&quot;</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h5 className="font-semibold">Amit Patel</h5>
                  <p className="text-sm text-gray-500">IT Manager, Delhi</p>
                </div>
              </div>
              <p className="text-gray-600">&quot;The security features give our team confidence when discussing sensitive projects. It&apos;s reliable, fast, and simple to use.&quot;</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-br from-green-200 via-white to-blue-200 py-16">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-black mb-6">Ready to bring India closer?</h3>
          <p className="text-black mb-8 max-w-2xl mx-auto">Join thousands of businesses, educators, and families who connect daily with BharatBaithak.</p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-md hover:bg-indigo-50 transition-colors font-medium">
            <Link href="#signin-section">
              Get Started for Free
            </Link>
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div id="faq" className="container mx-auto px-6 py-16 border border-gray-200 rounded-b-3xl bg-white mt-20">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h3>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h4 className="text-xl font-semibold mb-2">Is BharatBaithak really free to use?</h4>
            <p className="text-gray-600">Yes, our Basic plan is completely free with no hidden charges. It includes all essential features for personal use.</p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h4 className="text-xl font-semibold mb-2">How many people can join a BharatBaithak meeting?</h4>
            <p className="text-gray-600">Our free Basic plan supports up to 100 participants, Business plan supports up to 250, and Enterprise plan supports up to 500 participants.</p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h4 className="text-xl font-semibold mb-2">What languages does BharatBaithak support?</h4>
            <p className="text-gray-600">BharatBaithak supports multiple Indian languages including Hindi, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, Punjabi, and more.</p>
          </div>
          <div className="border-b border-gray-200 pb-4">
            <h4 className="text-xl font-semibold mb-2">Do I need to download any software to use BharatBaithak?</h4>
            <p className="text-gray-600">No, BharatBaithak works directly in your web browser with no downloads required. We also offer mobile apps for Android and iOS for on-the-go access.</p>
          </div>
        </div>
      </div>


      {/* Auth Content */}
      <div id="signin-section" className="w-full">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;