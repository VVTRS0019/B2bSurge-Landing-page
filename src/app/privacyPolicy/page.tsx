import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { generalTerms, permissionSection, privacyPolicyIntro, securityanduserrestriction, useofdis, useofinfo, userInformation } from '@/data/PrivacyPolicy'
import React from 'react'

export default function Page() {
    return (
        <section>
            <Navbar />
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                <h5>Last updated: January 15, 2025</h5>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* Introduction */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-cyan-400">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Welcome to B2B Surge
                    </h2>
                    <div className="space-y-4">
                        {privacyPolicyIntro.map((data, index) => (
                            <p
                                key={index}
                                className="text-gray-600 leading-relaxed tracking-wide"
                            >
                                {data}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-600">Mobile Application Permission Section </h1>
                    {permissionSection.map((item, index) => (
                        <div key={index} className='leading-relaxed tracking-wide py-2' >
                            <h3 className="font-semibold">{item.title}</h3>
                            <p className="text-gray-600">{item.Desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-600">User Information </h1>
                    {userInformation.map((data, index) => (
                        <p key={index} className='leading-relaxed tracking-wide py-2'>{data}</p>
                    ))}
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-600">Use of Information and Disclosure</h1>
                    <p className='leading-relaxed tracking-wide py-2'>
                        The User Information is primarily used by Techriigour to facilitate a better, customized and convenient use of The Application services. The User Information is used by Techriigour inter alia to
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {useofinfo.map((data, index) => (
                            <li key={index} className='leading-relaxed tracking-wide py-2'>{data}</li>

                        ))}
                    </ul>

                    <p className='leading-relaxed tracking-wide py-2 text-gray-600'>
                        User Information is used and disclosed if required to do so by the governing law or in the good faith and belief that such disclosure is reasonably necessary to respond to notices, court orders, or other legal process. Techriigour may disclose the User Information to law enforcement firms/officers, third party rights owners, or other that is in its opinion reasonably necessary to enforce The Application’s Terms of Use, this Policy and Terms and Conditions of specific Brand/s. Techriigour will share some or all of the User Information with another entity should Techriigour merge with, or be acquired by that entity or receive investments from that entity, or moves in partnership with that entity.
                    </p>

                    <p className='leading-relaxed tracking-wide py-2 text-gray-600'>
                        Techriigour may disclose aggregated information about the use of The Application, but it will never contain User Information that will identify a single user. Techriigour does not trade or sell User Information in any manner, except as specified in this Policy or if express consent is sought from the user. Techriigour understands that the User Information is very crucial and is important for the user. The user agrees and acknowledges that the User Information is disclosed or shared with :
                    </p>

                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {useofdis.map((data, index) => (
                            <li key={index} className='leading-relaxed tracking-wide py-2'>{data}
                            </li>
                        ))}
                    </ul>

                    <p className='leading-relaxed tracking-wide py-2 text-gray-600'>
                        Techriigour may, if the user so chooses, send direct advertisement mailers to the user at the Email ID given by the user. The user has the option to opt-out of this direct mailer by clicking at the Unsubscribe link provided in the email. Techriigour respects the user’s privacy and if the user does not want to receive email or other communications from Techriigour, user may inform the same to our Customer Care service or do so through The Application.
                    </p>

                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-8 ">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-600">Security and User Restriction </h1>
                    {securityanduserrestriction.map((data, index) => (
                        <p className='leading-relaxed tracking-wide py-2 text-gray-600' key={index}>{data}</p>
                    ))}
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold mb-4 text-cyan-600">General Terms </h1>
                    {generalTerms.map((data, index) => (
                        <p className='leading-relaxed tracking-wide py-2 text-gray-600' key={index}>
                            {data}
                        </p>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-lg p-8 mt-12 border border-cyan-200">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                        <span className="w-10 h-10 bg-cyan-400 text-white rounded-full flex items-center justify-center text-lg mr-4">📞</span>
                        Questions About These Policies?
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        {"If you have any questions about these Privacy and Policy, please don't hesitate to contact us. We're here to help clarify any concerns you may have."}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-center text-gray-700">
                            <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm mr-3">✉️</span>
                            <div>
                                <p className="font-semibold">Email</p>
                                <p>support@techriigour.com </p>
                            </div>
                        </div>
                        <div className="flex items-center text-gray-700">
                            <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm mr-3">📞</span>
                            <div>
                                <p className="font-semibold">Phone No</p>
                                <p>+91 2066664346</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-gray-700 leading-relaxed my-6">
                    This Policy shall be governed by Indian Law and the courts in Pune shall only have exclusive jurisdiction to resolve any disputes.
                </p>
            </div>
            <Footer />
        </section>

    )
}
