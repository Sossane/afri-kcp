/* eslint-disable-next-line @typescript-eslint/no-unused-vars */

export default function Partners() {
  const partners = [
    { logo: '/partners/dell.png' },
    { logo: '/partners/hp.png' },
    { logo: '/partners/lenovo.png' },
    { logo: '/partners/ibm.png' },
    { logo: '/partners/oracle.png' },
    { logo: '/partners/fortinet.png' },
    { logo: '/partners/kaspersky.png' },
    { logo: '/partners/sophos.png' },
    { logo: '/partners/cisco.png' },
    { logo: '/partners/tplink.png' },
    { logo: '/partners/neoledge.png' },
    { logo: '/partners/delta.png' },
    { logo: '/partners/apc.png' },
    { logo: '/partners/logitech.png' },
    { logo: '/partners/polycom.png' },
    { logo: '/partners/poly.png' },
    { logo: '/partners/hikvision.png' },
    { logo: '/partners/ubiquiti.png' },
    { logo: '/partners/paloalto.png' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[rgb(39,40,91)] to-[rgba(144,36,53,0.898)] bg-clip-text text-transparent">
          Nos Partenaires
        </h2>

        <div className="relative overflow-hidden mt-8">
          <div className="flex space-x-12 animate-scroll py-8">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="group flex-shrink-0 flex flex-col items-center justify-center w-48 h-48 p-6 
                         rounded-3xl bg-white shadow-lg hover:shadow-xl border border-gray-100 
                         transform hover:-translate-y-2 transition-all duration-500"
              >
                <img
                  src={partner.logo}
                  alt="Partner logo"
                  className="max-w-[140px] max-h-[90px] object-contain transition-all duration-300
                           group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
