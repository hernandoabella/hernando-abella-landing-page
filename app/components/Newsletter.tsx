"use client";

import Script from "next/script";

export default function NewsletterForm() {
    return (
        <>
            {/* 1. Optimized Script Loading */}
            <Script
                id="mailerlite-universal"
                strategy="afterInteractive"
            >
                {`
          (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '2055858');
        `}
            </Script>

            {/* 2. Centered Section with Dark BG */}
            <section className="w-full flex flex-col items-center justify-center py-24 px-6 bg-[#050505] overflow-hidden">
                <div className="max-w-3xl w-full">
                    
                    

                    {/* MailerLite Container */}
                    <div className="w-full max-w-xl mx-auto">
                        <div
                            className="ml-embedded"
                            data-form="ssdC9s"
                        ></div>
                    </div>

                </div>
            </section>

            {/* 3. Global Styles - Dark Theme Optimization */}
            <style jsx global>{`
        /* Prevents the "ugly" horizontal scrollbar */
        body {
          overflow-x: hidden !important;
        }

        .ml-embedded, 
        .ml-subscribe-form, 
        .ml-form-embedBody {
          width: 100% !important;
          max-width: 100% !important;
          margin: 0 auto !important;
          background: transparent !important;
        }

        /* Input Styling - Dark Mode Style */
        .ml-form-embedBody .ml-form-fieldRow input {
          font-size: 1.25rem !important; 
          padding: 1.5rem !important;
          border-radius: 99px !important;
          border: 2px solid rgba(255,255,255,0.1) !important;
          text-align: center !important;
          background-color: rgba(255,255,255,0.05) !important;
          color: #ffffff !important;
          transition: all 0.3s ease !important;
        }

        .ml-form-embedBody .ml-form-fieldRow input:focus {
          border-color: #0B8288 !important;
          background-color: rgba(255,255,255,0.1) !important;
          outline: none !important;
        }

        /* Button Styling - Awesome Brand Colors */
        .ml-form-embedBody .ml-form-embedSubmit button {
          font-size: 1.25rem !important;
          font-weight: 800 !important;
          padding: 1.25rem !important;
          height: auto !important;
          border-radius: 99px !important;
          background-color: #0B8288 !important; /* Medical Teal */
          color: white !important;
          transition: all 0.3s ease !important;
          border: none !important;
          cursor: pointer !important;
          margin-top: 10px !important;
        }

        .ml-form-embedBody .ml-form-embedSubmit button:hover {
          background-color: #096d72 !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 10px 20px -10px rgba(11, 130, 136, 0.5) !important;
        }

        /* Success Message Styling - White Text for Dark BG */
        .ml-form-successBody h4 {
          font-size: 2rem !important;
          font-weight: 900 !important;
          color: #ffffff !important;
        }
        
        .ml-form-successBody p {
          color: #9ca3af !important; /* slate-400 */
          font-size: 1.1rem !important;
        }
      `}</style>
        </>
    );
}