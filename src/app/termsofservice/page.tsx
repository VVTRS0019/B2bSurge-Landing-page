"use client"
import React, { useState } from 'react'
import { generalTerms, License, pricing, restrictions, Definitions, CancellationandRefundPolicy, YourSuggestions, YourConsent, LinkstoOtherWebsites, ChangesToOurTermsConditions, ModificationstoOurapp, UpdatestoOurapp, ThirdPartyServices, CopyrightInfringementNotice, Indemnification, NoWarranties, LimitationofLiability, Severability, Waiver, UpdatestoOurTerms, IntellectualProperty, AgreementtoArbitrate, NoticeofDispute, BindingArbitration, SubmissionsandPrivacy, Promotions, TypographicalErrors, Miscellaneous, Disclaimer } from "@/data/TermsOfService"

export default function page() {
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section: any) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <section>
            <div className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                <h5>Last updated: January 15, 2025</h5>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-12">
                {/* Introduction */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border-l-4 border-cyan-400">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to B2B Surge</h2>
                    <p className="text-gray-600 leading-relaxed">
                        These Terms and Conditions ("Terms") govern your use of B2B Surge platform and services.
                        By accessing or using our platform, you agree to be bound by these Terms. If you do not
                        agree to these Terms, please do not use our services.
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Section 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('acceptance')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                                    General Terms
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'acceptance' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "acceptance" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {generalTerms.map((dataC, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {dataC}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>

                    {/* Section 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('license')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                                    License
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'license' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "license" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {License.map((license, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {license}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('definitions')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                                    Definitions
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'definitions' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "definitions" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {Definitions.map((define, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {define}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 4 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('restrictions')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                                    Restrictions
                                    <span className="text-[10px] px-2" >
                                        (You agree not to, and you will not permit others to)
                                    </span>
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'restrictions' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "restrictions" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {restrictions.map((restrict, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {restrict}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 5 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('price')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                                    Pricing
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'price' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "price" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {pricing.map((price, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {price}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 6 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('cancel')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                                    Cancellation and Refund Policy
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'cancel' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "cancel" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {CancellationandRefundPolicy.map((cancel, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {cancel}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 7 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('suggust')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                                    Your Suggestions
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'suggust' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "suggust" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {YourSuggestions.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 8*/}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('consent')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">8</span>
                                    Your Consent
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'consent' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "consent" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {YourConsent.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 9 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('links')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">9</span>
                                    Links to Other Websites
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'links' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "links" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {LinkstoOtherWebsites.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 10 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('changeTo')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">10</span>
                                    Changes To Our Terms & Conditions
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'changeTo' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "changeTo" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {ChangesToOurTermsConditions.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 11 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('modification')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">11</span>
                                    Modifications to Our app
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'modification' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "modification" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {ModificationstoOurapp.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 12 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('third')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">12</span>
                                    Third-Party Services
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'third' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "third" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {ThirdPartyServices.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 13 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('copy')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">13</span>
                                    Copyright Infringement Notice
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'copy' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "copy" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {CopyrightInfringementNotice.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 14 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('Indemnification')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">14</span>
                                    Indemnification
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'Indemnification' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "Indemnification" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {Indemnification.map((price, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {price}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 15 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('NoWarranties')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">15</span>
                                    No Warranties
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'NoWarranties' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "NoWarranties" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {NoWarranties.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 16 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('LimitationofLiability')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">16</span>
                                    Limitation of Liability
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'LimitationofLiability' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "LimitationofLiability" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {LimitationofLiability.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 17 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('severability')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">17</span>
                                    Severability
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'severability' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "severability" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {Severability.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 18 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('waiver')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">18</span>
                                    Waiver
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'waiver' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "waiver" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {Waiver.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>


                    {/* Section 19 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('UpdatestoOurTerms')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">19</span>
                                    Updates to Our Terms
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'UpdatestoOurTerms' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "UpdatestoOurTerms" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {UpdatestoOurTerms.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 20 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('IntellectualProperty')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">20</span>
                                    Intellectual Property
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'IntellectualProperty' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "IntellectualProperty" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {IntellectualProperty.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 21 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('AgreementtoArbitrate')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">21</span>
                                    Agreement to Arbitrate
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'AgreementtoArbitrate' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "AgreementtoArbitrate" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {AgreementtoArbitrate.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 22 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('NoticeofDispute')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">22</span>
                                    Notice of Dispute
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'NoticeofDispute' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "NoticeofDispute" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {NoticeofDispute.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 23 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('BindingArbitration')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">23</span>
                                    Binding Arbitration
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'BindingArbitration' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "BindingArbitration" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {BindingArbitration.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 24 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('SubmissionsandPrivacy')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">24</span>
                                    Submissions and Privacy
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'SubmissionsandPrivacy' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "SubmissionsandPrivacy" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {SubmissionsandPrivacy.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 25 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('Promotions')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">25</span>
                                    Promotions
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'Promotions' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "Promotions" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {Promotions.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 26 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('TypographicalErrors')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">26</span>
                                    Typographical Errors
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'TypographicalErrors' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "TypographicalErrors" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {TypographicalErrors.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 27 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('Miscellaneous')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">27</span>
                                    Miscellaneous
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'Miscellaneous' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "Miscellaneous" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {Miscellaneous.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 28 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('Disclaimer')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">28</span>
                                    Disclaimer
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'Disclaimer' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "Disclaimer" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {Disclaimer.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Section 29 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <button
                            onClick={() => toggleSection('UpdatestoOurapp')}
                            className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                                    <span className="w-8 h-8 bg-cyan-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">29</span>
                                    Updates to Our App
                                </h3>
                                <span className={`text-cyan-400 transform transition-transform ${activeSection === 'UpdatestoOurapp' ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </div>
                        </button>
                        {activeSection === "UpdatestoOurapp" && (
                            <div className="px-8 pb-6 border-t border-gray-100">
                                <div className=" text-gray-600 space-y-4">
                                    {UpdatestoOurapp.map((data, index) => (
                                        <p key={index} className=" leading-relaxed">
                                            {data}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-lg p-8 mt-12 border border-cyan-200">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
                        <span className="w-10 h-10 bg-cyan-400 text-white rounded-full flex items-center justify-center text-lg mr-4">📞</span>
                        Questions About These Terms?
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                        If you have any questions about these Terms and Conditions, please don't hesitate to contact us.
                        We're here to help clarify any concerns you may have.
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

            </div>
        </section>
    )
}
