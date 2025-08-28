'use client'
import { FeaturesData } from '@/data/FeatureData';
import Image from 'next/image';
import React from 'react'

export default function Features() {
  return (
    <section id="features" className="max-w-6xl mx-auto pt-10 sm:pt-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block px-4 py-6 sm:py-2 bg-[#00BCD4]/10 text-cyan-500 rounded-full text-sm font-medium">
            Platform Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 py-6 sm:py-0">
            Everything You Need to
            <span className="text-cyan-500"> Succeed</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {`Our comprehensive suite of tools and features is designed to help businesses
            connect, collaborate, and grow together in today's interconnected world.
          `}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {FeaturesData.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition duration-300 cursor-pointer border border-gray-100 hover:bg-cyan-50"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6 ">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  className="w-14 h-14 object-contain border-2 border-zinc-900 p-2 mix-blend-multiply rounded-2xl"
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-cyan-500 mb-3 ">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>


        {/* Bottom CTA */}
        <div className="text-center mt-16 mb-6">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <span>Want to see more features?</span>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-[#00BCD4] font-medium hover:underline"
            >
              Contact our team
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
