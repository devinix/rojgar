import Image from 'next/image';

export default function Partners() {
    return (
        <section className="py-12 bg-[#F9FAFB] text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <p className="text-slate-500 font-bold text-xs tracking-widest uppercase">Trusted By Leading Enterprises</p>
                </div>

                <div className="relative w-full overflow-hidden">
                    <div className="flex w-max animate-scroll gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-300 pause-on-hover">
                        {/* First Set of Logos */}
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div key={`set1-${num}`} className="relative h-12 w-32 shrink-0">
                                <Image
                                    src={num === 1 ? "/Partner_logo_1.png" : `/Image (Partner logo ${num}).png`}
                                    alt={`Partner Logo ${num}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}

                        {/* Second Set of Logos (Duplicate) */}
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div key={`set2-${num}`} className="relative h-12 w-32 shrink-0">
                                <Image
                                    src={num === 1 ? "/Partner_logo_1.png" : `/Image (Partner logo ${num}).png`}
                                    alt={`Partner Logo ${num}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                        {/* Third Set of Logos (Triplicate for wide screens) */}
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div key={`set3-${num}`} className="relative h-12 w-32 shrink-0">
                                <Image
                                    src={num === 1 ? "/Partner_logo_1.png" : `/Image (Partner logo ${num}).png`}
                                    alt={`Partner Logo ${num}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    {/* Gradient Masks for smooth edges */}
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10"></div>
                </div>
            </div>
        </section>
    );
}
