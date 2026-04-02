import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid3X3, LayoutGrid } from 'lucide-react';
import { useSiteData } from '../context/SiteContext';

export default function Gallery() {
    const { siteData } = useSiteData();
    const galleryData = siteData.galleryImages;
    const dynamicCategories = ["All", ...(siteData.galleryCategories || ["Events", "Dining", "Venues"])];

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const [viewMode, setViewMode] = useState<'masonry' | 'grid'>('masonry');

    const filteredGallery = selectedCategory === "All"
        ? galleryData
        : galleryData.filter(item => item.category === selectedCategory);

    // Category counts
    const categoryCounts = dynamicCategories.reduce((acc, cat) => {
        acc[cat] = cat === "All" ? galleryData.length : galleryData.filter(i => i.category === cat).length;
        return acc;
    }, {} as Record<string, number>);

    // Lightbox keyboard navigation
    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const goNext = useCallback(() => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }, [lightboxIndex, filteredGallery.length]);

    const goPrev = useCallback(() => {
        if (lightboxIndex === null) return;
        setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }, [lightboxIndex, filteredGallery.length]);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (lightboxIndex === null) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') goNext();
            if (e.key === 'ArrowLeft') goPrev();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [lightboxIndex, goNext, goPrev]);

    // Disable body scroll when lightbox is open
    useEffect(() => {
        if (lightboxIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [lightboxIndex]);

    const lightboxItem = lightboxIndex !== null ? filteredGallery[lightboxIndex] : null;

    // Masonry size patterns
    const getSizeClass = (index: number) => {
        const pattern = index % 8;
        if (pattern === 0) return 'md:col-span-2 md:row-span-2';
        if (pattern === 3) return 'md:col-span-2';
        if (pattern === 5) return 'md:row-span-2';
        return '';
    };

    return (
        <div className="min-h-screen bg-[#ffffff]">
            {/* Hero Banner */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-[#19355e]">
                {galleryData.length > 0 && (
                    <div className="absolute inset-0 grid grid-cols-4 gap-1 opacity-25">
                        {galleryData.slice(0, 8).map((img, i) => (
                            <div key={i} className="overflow-hidden">
                                <img src={img.src} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-[#19355e]/60 via-[#19355e]/80 to-[#19355e]" />

                <div className="relative z-10 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-xs uppercase tracking-[0.3em] font-medium text-[#ffda8d] mb-4">Portfolio</p>
                        <h1 className="text-6xl md:text-8xl font-serif font-light mb-4 text-[#ffffff] leading-none">
                            Our <span className="italic">Gallery</span>
                        </h1>
                        <p className="text-base md:text-lg text-[#ffffff]/60 font-light max-w-xl mx-auto">
                            A visual journey through our curated experiences, premium venues, and unforgettable moments.
                        </p>
                        <div className="mt-8 flex items-center justify-center space-x-6 text-[#ffffff]/40 text-sm font-light">
                            <span><strong className="text-[#ffffff]/80 font-medium">{galleryData.length}</strong> Photos</span>
                            <span className="w-1 h-1 rounded-full bg-[#ffffff]/30" />
                            <span><strong className="text-[#ffffff]/80 font-medium">{dynamicCategories.length - 1}</strong> Categories</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Controls Bar */}
            <div className="sticky top-0 z-40 bg-[#ffffff]/95 backdrop-blur-lg border-b border-[#19355e]/10 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Filter pills */}
                    <div className="flex flex-wrap gap-2">
                        {dynamicCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-5 py-2 rounded-full text-xs tracking-widest uppercase transition-all duration-300 flex items-center space-x-2 ${selectedCategory === category
                                        ? "bg-[#19355e] text-white shadow-md"
                                        : "bg-white text-[#19355e]/70 border border-[#19355e]/10 hover:border-[#19355e]/40 hover:text-[#19355e]"
                                    }`}
                            >
                                <span>{category}</span>
                                <span className={`text-[10px] font-bold ${selectedCategory === category ? 'text-white/50' : 'text-[#19355e]/30'}`}>
                                    {categoryCounts[category]}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* View Toggle */}
                    <div className="flex items-center bg-white rounded-lg border border-[#19355e]/10 p-1">
                        <button onClick={() => setViewMode('masonry')} className={`p-2 rounded transition-colors ${viewMode === 'masonry' ? 'bg-[#19355e] text-white' : 'text-[#19355e]/40 hover:text-[#19355e]'}`}>
                            <LayoutGrid className="w-4 h-4" />
                        </button>
                        <button onClick={() => setViewMode('grid')} className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-[#19355e] text-white' : 'text-[#19355e]/40 hover:text-[#19355e]'}`}>
                            <Grid3X3 className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Gallery Grid */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                {filteredGallery.length === 0 ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-32">
                        <div className="w-20 h-20 rounded-full bg-[#19355e]/5 flex items-center justify-center mx-auto mb-6">
                            <ZoomIn className="w-8 h-8 text-[#19355e]/20" />
                        </div>
                        <p className="text-lg text-[#19355e]/50 font-light">No photos in this category yet.</p>
                        <button onClick={() => setSelectedCategory('All')} className="mt-4 text-sm text-[#ffda8d] underline underline-offset-4 hover:text-[#19355e] transition-colors">
                            View all photos
                        </button>
                    </motion.div>
                ) : (
                    <motion.div
                        layout
                        className={
                            viewMode === 'masonry'
                                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-3"
                                : "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
                        }
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredGallery.map((item, index) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.35, delay: index * 0.03 }}
                                    key={item.id}
                                    className={`relative group overflow-hidden rounded-xl cursor-pointer ${viewMode === 'masonry' ? getSizeClass(index) : 'aspect-square'
                                        }`}
                                    onClick={() => openLightbox(index)}
                                >
                                    <img
                                        src={item.src}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#19355e]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                                    {/* Zoom icon */}
                                    <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                        <ZoomIn className="w-4 h-4 text-white" />
                                    </div>

                                    {/* Info overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                        <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-white/60 mb-1 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                                            {item.category}
                                        </span>
                                        <h3 className="text-white text-base md:text-lg font-serif translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                            {item.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxItem && lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[100] bg-[#0a0a0a]/97 backdrop-blur-xl flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        {/* Close button */}
                        <button className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 hover:text-white transition-all" onClick={closeLightbox}>
                            <X className="w-5 h-5" />
                        </button>

                        {/* Counter */}
                        <div className="absolute top-7 left-6 text-white/40 text-sm font-light tracking-wider">
                            <span className="text-white/80 font-medium">{lightboxIndex + 1}</span> / {filteredGallery.length}
                        </div>

                        {/* Prev button */}
                        <button
                            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Main image */}
                        <motion.div
                            key={lightboxIndex}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="max-w-[85vw] max-h-[80vh] flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={lightboxItem.src}
                                alt={lightboxItem.title}
                                className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl"
                            />
                            <div className="mt-6 text-center">
                                <p className="text-white/40 text-[10px] uppercase tracking-[0.25em] mb-1">{lightboxItem.category}</p>
                                <h3 className="text-white text-xl font-serif">{lightboxItem.title}</h3>
                            </div>
                        </motion.div>

                        {/* Next button */}
                        <button
                            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Thumbnail strip */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-2 max-w-[80vw] overflow-x-auto py-2 px-4">
                            {filteredGallery.map((img, i) => (
                                <button
                                    key={img.id}
                                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                                    className={`shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${i === lightboxIndex
                                            ? 'border-white/80 scale-110 shadow-lg'
                                            : 'border-transparent opacity-40 hover:opacity-80'
                                        }`}
                                >
                                    <img src={img.src} alt="" className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
