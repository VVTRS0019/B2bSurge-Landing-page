import { ImageWithFallback } from '@/utils/ImageWithFallback'
import React from 'react'

export default function Hero() {
  return (
      <section id="home" className=" pt-4 min-h-screen flex items-center ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 sm:py-20 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight">
                Connect Your 
                <span className="text-cyan-500"> Business</span> 
                <br />
                With The World
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                The all-in-one platform that brings multiple businesses together, 
                streamlining collaboration, communication, and growth opportunities 
                in one seamless ecosystem.
              </p>
            </div>

            {/* Stats */}
            {/* <div className="flex flex-wrap gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-500">10,000+</div>
                <div className="text-sm text-gray-600">Active Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-500">500M+</div>
                <div className="text-sm text-gray-600">Connections Made</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-cyan-500">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div> */}

            {/* Demo and platstore link */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button
                // onClick={handleGetStarted}
                size="lg"
                className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-3 text-lg group transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                onClick={handleLearnMore}
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-700 hover:border-[#00BCD4] hover:text-[#00BCD4] px-8 py-3 text-lg group transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button> */}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl group mix-blend-multiply">
              <ImageWithFallback
                src="https://velocittdev.s3.ap-south-1.amazonaws.com/product_images/82dea7fd-98a6-4133-a7a9-52aced2969f0_shared%20image-min.png"
                alt="Business collaboration platform interface"
                className="w-full h-fit group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00BCD4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-white font-bold text-lg">B2B</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <div className="w-8 h-8 bg-cyan-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
