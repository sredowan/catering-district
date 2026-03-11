import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSiteData } from '../../context/SiteContext';
import type { SiteData } from '../../context/SiteContext';
import { Save, LogOut, Check, Image as ImageIcon, Briefcase, Phone, Plus, Trash2, Upload, LayoutDashboard, Type, GripVertical, Eye, X, ChevronUp, ChevronDown, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Compress image via canvas to fit within localStorage limits
function compressImage(file: File, maxWidth = 800, quality = 0.7): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => {
            const img = new Image();
            img.onerror = reject;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let w = img.width;
                let h = img.height;
                if (w > maxWidth) {
                    h = Math.round((h * maxWidth) / w);
                    w = maxWidth;
                }
                canvas.width = w;
                canvas.height = h;
                const ctx = canvas.getContext('2d')!;
                ctx.drawImage(img, 0, 0, w, h);
                resolve(canvas.toDataURL('image/jpeg', quality));
            };
            img.src = reader.result as string;
        };
        reader.readAsDataURL(file);
    });
}

type TabType = 'overview' | 'hero' | 'about' | 'gallery' | 'services' | 'contact';

export default function AdminDashboard() {
    const navigate = useNavigate();
    const { siteData, updateSiteData } = useSiteData();
    const [activeTab, setActiveTab] = useState<TabType>('overview');
    const [isSaving, setIsSaving] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [saveError, setSaveError] = useState('');
    const galleryUploadRef = useRef<HTMLInputElement>(null);
    const heroUploadRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState<SiteData>(siteData);

    useEffect(() => {
        if (localStorage.getItem('isAdmin') !== 'true') {
            navigate('/admin/login');
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/admin/login');
    };

    const handleSave = () => {
        setIsSaving(true);
        setSaveError('');
        try {
            updateSiteData(formData);
            // Verify localStorage didn't silently fail
            const verify = localStorage.getItem('catering-site-data');
            if (!verify) throw new Error('Save failed');
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        } catch (err: any) {
            setSaveError('Storage limit reached! Try removing some images first.');
            setTimeout(() => setSaveError(''), 5000);
        }
        setIsSaving(false);
    };

    const handleChange = (section: keyof SiteData, field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...(prev[section] as any),
                [field]: value
            }
        }));
    };

    // --- Gallery Upload (compressed) ---
    const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;
        const newImages = await Promise.all(
            Array.from(files).map(async (file, i) => ({
                id: Date.now() + i,
                src: await compressImage(file),
                category: formData.galleryCategories?.[0] || 'Events',
                title: file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ')
            }))
        );
        setFormData(prev => ({
            ...prev,
            galleryImages: [...prev.galleryImages, ...newImages]
        }));
        if (galleryUploadRef.current) galleryUploadRef.current.value = '';
    };

    // --- Hero image upload (compressed) ---
    const handleHeroUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;
        const newSrcs = await Promise.all(Array.from(files).map(f => compressImage(f)));
        setFormData(prev => ({
            ...prev,
            hero: { ...prev.hero, images: [...prev.hero.images, ...newSrcs] }
        }));
        if (heroUploadRef.current) heroUploadRef.current.value = '';
    };

    // --- Gallery reorder ---
    const moveGalleryItem = (index: number, direction: 'up' | 'down') => {
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex < 0 || newIndex >= formData.galleryImages.length) return;
        const newImages = [...formData.galleryImages];
        [newImages[index], newImages[newIndex]] = [newImages[newIndex], newImages[index]];
        setFormData({ ...formData, galleryImages: newImages });
    };

    // --- Service reorder ---
    const moveServiceItem = (index: number, direction: 'up' | 'down') => {
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex < 0 || newIndex >= formData.services.length) return;
        const newServices = [...formData.services];
        [newServices[index], newServices[newIndex]] = [newServices[newIndex], newServices[index]];
        setFormData({ ...formData, services: newServices });
    };

    const tabs: { id: TabType; label: string; icon: React.ReactNode }[] = [
        { id: 'overview', label: 'Dashboard', icon: <LayoutDashboard className="w-4 h-4" /> },
        { id: 'hero', label: 'Hero Section', icon: <Type className="w-4 h-4" /> },
        { id: 'about', label: 'About Section', icon: <Eye className="w-4 h-4" /> },
        { id: 'gallery', label: 'Gallery Photos', icon: <ImageIcon className="w-4 h-4" /> },
        { id: 'services', label: 'Services', icon: <Briefcase className="w-4 h-4" /> },
        { id: 'contact', label: 'Contact & Socials', icon: <Phone className="w-4 h-4" /> },
    ];

    return (
        <div className="min-h-screen bg-[#f5f2ed]">
            {/* Top Navbar */}
            <nav className="bg-[#1a1a1a] text-white px-6 py-4 sticky top-0 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-[#5A5A40] rounded-lg flex items-center justify-center text-white font-serif text-sm font-bold">CD</div>
                        <span className="font-serif text-lg tracking-wide">Admin Portal</span>
                    </div>
                    <div className="flex items-center space-x-3">
                        <AnimatePresence>
                            {showSuccess && (
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="flex items-center space-x-2 text-green-400 text-sm bg-green-400/10 px-3 py-1.5 rounded-full">
                                    <Check className="w-3.5 h-3.5" />
                                    <span>Saved!</span>
                                </motion.div>
                            )}
                            {saveError && (
                                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="flex items-center space-x-2 text-red-400 text-sm bg-red-400/10 px-3 py-1.5 rounded-full">
                                    <AlertTriangle className="w-3.5 h-3.5" />
                                    <span>{saveError}</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        <button onClick={handleSave} disabled={isSaving} className="bg-[#5A5A40] text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center space-x-2 hover:bg-[#6b6b4d] transition-colors disabled:opacity-50">
                            <Save className="w-4 h-4" />
                            <span>{isSaving ? 'Saving...' : 'Save All'}</span>
                        </button>
                        <a href="/" target="_blank" className="text-white/50 hover:text-white transition-colors p-2" title="View Site">
                            <Eye className="w-5 h-5" />
                        </a>
                        <button onClick={handleLogout} className="text-white/50 hover:text-white transition-colors p-2" title="Logout">
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row mt-8 px-6 gap-8 pb-32">
                {/* Sidebar */}
                <div className="w-full md:w-56 shrink-0 space-y-1">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/40 font-medium mb-3 px-3">Management</div>
                    {tabs.map(tab => (
                        <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeTab === tab.id ? 'bg-[#1a1a1a] text-white shadow-md' : 'text-[#1a1a1a]/60 hover:bg-[#1a1a1a]/5 hover:text-[#1a1a1a]'}`}>
                            {tab.icon}
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 min-w-0">
                    {/* ───── OVERVIEW TAB ───── */}
                    {activeTab === 'overview' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                            <h2 className="text-2xl font-serif">Dashboard Overview</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="bg-white p-6 rounded-xl border border-[#1a1a1a]/5 shadow-sm">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/40 font-medium mb-2">Gallery Photos</p>
                                    <p className="text-3xl font-serif text-[#5A5A40]">{formData.galleryImages.length}</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-[#1a1a1a]/5 shadow-sm">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/40 font-medium mb-2">Services</p>
                                    <p className="text-3xl font-serif text-[#5A5A40]">{formData.services.length}</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-[#1a1a1a]/5 shadow-sm">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/40 font-medium mb-2">Hero Slides</p>
                                    <p className="text-3xl font-serif text-[#5A5A40]">{formData.hero.images.length}</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-[#1a1a1a]/5 shadow-sm">
                                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#1a1a1a]/40 font-medium mb-2">Social Links</p>
                                    <p className="text-3xl font-serif text-[#5A5A40]">{Object.keys(formData.socialLinks).length}</p>
                                </div>
                            </div>

                            {/* Quick preview */}
                            <div className="bg-white rounded-xl border border-[#1a1a1a]/5 p-6 shadow-sm">
                                <h3 className="text-lg font-serif mb-4">Gallery Preview</h3>
                                <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                                    {formData.galleryImages.slice(0, 12).map(img => (
                                        <div key={img.id} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                                            <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-xl border border-[#1a1a1a]/5 p-6 shadow-sm">
                                <h3 className="text-lg font-serif mb-4">Quick Actions</h3>
                                <div className="flex flex-wrap gap-3">
                                    <button onClick={() => setActiveTab('gallery')} className="px-4 py-2 text-sm rounded-lg bg-[#f5f2ed] hover:bg-[#1a1a1a] hover:text-white transition-colors border border-[#1a1a1a]/10">Upload Photos</button>
                                    <button onClick={() => setActiveTab('services')} className="px-4 py-2 text-sm rounded-lg bg-[#f5f2ed] hover:bg-[#1a1a1a] hover:text-white transition-colors border border-[#1a1a1a]/10">Edit Services</button>
                                    <button onClick={() => setActiveTab('contact')} className="px-4 py-2 text-sm rounded-lg bg-[#f5f2ed] hover:bg-[#1a1a1a] hover:text-white transition-colors border border-[#1a1a1a]/10">Update Contact</button>
                                    <button onClick={() => setActiveTab('hero')} className="px-4 py-2 text-sm rounded-lg bg-[#f5f2ed] hover:bg-[#1a1a1a] hover:text-white transition-colors border border-[#1a1a1a]/10">Manage Hero</button>
                                    <a href="/" target="_blank" className="px-4 py-2 text-sm rounded-lg bg-[#5A5A40] text-white hover:bg-[#6b6b4d] transition-colors inline-flex items-center space-x-2">
                                        <Eye className="w-3.5 h-3.5" />
                                        <span>View Live Site</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* ───── HERO TAB ───── */}
                    {activeTab === 'hero' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                            <div className="bg-white rounded-xl border border-[#1a1a1a]/5 p-8 shadow-sm">
                                <h3 className="text-xl font-serif mb-6">Hero Content</h3>
                                <div className="grid gap-5">
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-[#1a1a1a]/70 mb-2 font-medium">Main Heading</label>
                                        <input type="text" value={formData.hero.heading} onChange={(e) => handleChange('hero', 'heading', e.target.value)} className="w-full bg-[#f5f2ed] border-transparent focus:border-[#5A5A40] focus:ring-0 rounded-lg px-4 py-3 text-sm outline-none border" />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-[#1a1a1a]/70 mb-2 font-medium">Sub-heading</label>
                                        <input type="text" value={formData.hero.subheading} onChange={(e) => handleChange('hero', 'subheading', e.target.value)} className="w-full bg-[#f5f2ed] border-transparent focus:border-[#5A5A40] focus:ring-0 rounded-lg px-4 py-3 text-sm outline-none border" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl border border-[#1a1a1a]/5 p-8 shadow-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-serif">Hero Slideshow Images</h3>
                                    <label className="bg-[#1a1a1a] text-white px-4 py-2 rounded-lg text-xs font-medium flex items-center space-x-2 cursor-pointer hover:bg-[#333] transition-colors">
                                        <Upload className="w-3.5 h-3.5" />
                                        <span>Upload</span>
                                        <input ref={heroUploadRef} type="file" accept="image/*" multiple onChange={handleHeroUpload} className="hidden" />
                                    </label>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {formData.hero.images.map((src, index) => (
                                        <div key={index} className="relative group aspect-video rounded-lg overflow-hidden border border-[#1a1a1a]/10 bg-gray-100">
                                            <img src={src} alt={`Hero ${index + 1}`} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <button onClick={() => {
                                                    const newImages = formData.hero.images.filter((_, i) => i !== index);
                                                    setFormData({ ...formData, hero: { ...formData.hero, images: newImages } });
                                                }} className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] font-bold px-2 py-0.5 rounded">{index + 1}</div>
                                        </div>
                                    ))}
                                </div>
                                {formData.hero.images.length === 0 && (
                                    <div className="text-center py-12 text-[#1a1a1a]/40">
                                        <ImageIcon className="w-12 h-12 mx-auto mb-3 opacity-30" />
                                        <p className="text-sm">No hero images. Click Upload to add slideshow images.</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* ───── ABOUT TAB ───── */}
                    {activeTab === 'about' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                            <div className="bg-white rounded-xl border border-[#1a1a1a]/5 p-8 shadow-sm space-y-6">
                                <h3 className="text-xl font-serif">About Section Content</h3>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-[#1a1a1a]/70 mb-2 font-medium">Heading</label>
                                    <textarea rows={3} value={formData.about.heading} onChange={(e) => handleChange('about', 'heading', e.target.value)} className="w-full bg-[#f5f2ed] border-transparent focus:border-[#5A5A40] focus:ring-0 rounded-lg px-4 py-3 text-sm outline-none border" />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase tracking-widest text-[#1a1a1a]/70 mb-2 font-medium">Description</label>
                                    <textarea rows={6} value={formData.about.description} onChange={(e) => handleChange('about', 'description', e.target.value)} className="w-full bg-[#f5f2ed] border-transparent focus:border-[#5A5A40] focus:ring-0 rounded-lg px-4 py-3 text-sm outline-none border" />
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* ───── GALLERY TAB ───── */}
                    {activeTab === 'gallery' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                            {/* Category Management */}
                            <div className="bg-white rounded-xl border border-[#1a1a1a]/5 p-6 shadow-sm mb-6">
                                <h3 className="text-xl font-serif mb-4">Manage Categories</h3>
                                <div className="flex gap-2 mb-4">
                                    <input 
                                        type="text" 
                                        id="new-category-input"
                                        placeholder="New Category Name" 
                                        className="flex-1 bg-[#f5f2ed] border-transparent focus:border-[#5A5A40] focus:ring-0 rounded-lg px-4 py-2 text-sm outline-none border"
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                const val = e.currentTarget.value.trim();
                                                const currentCategories = formData.galleryCategories || ['Events', 'Dining', 'Venues'];
                                                if (val && !currentCategories.includes(val)) {
                                                    setFormData({ ...formData, galleryCategories: [...currentCategories, val] });
                                                    e.currentTarget.value = '';
                                                }
                                            }
                                        }}
                                    />
                                    <button 
                                        onClick={() => {
                                            const input = document.getElementById('new-category-input') as HTMLInputElement;
                                            const val = input.value.trim();
                                            const currentCategories = formData.galleryCategories || ['Events', 'Dining', 'Venues'];
                                            if (val && !currentCategories.includes(val)) {
                                                setFormData({ ...formData, galleryCategories: [...currentCategories, val] });
                                                input.value = '';
                                            }
                                        }}
                                        className="bg-[#1a1a1a] text-white px-4 py-2 rounded-lg text-xs font-medium"
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {(formData.galleryCategories || ['Events', 'Dining', 'Venues']).map((cat) => (
                                        <div key={cat} className="flex items-center space-x-2 bg-[#f5f2ed] px-3 py-1.5 rounded-full text-sm">
                                            <span>{cat}</span>
                                            <button 
                                                onClick={() => {
                                                    const isUsed = formData.galleryImages?.some(img => img.category === cat);
                                                    if (isUsed) {
                                                        alert(`Cannot delete category "${cat}" because it is currently assigned to one or more photos.`);
                                                    } else {
                                                        setFormData({ ...formData, galleryCategories: (formData.galleryCategories || []).filter(c => c !== cat) });
                                                    }
                                                }}
                                                className="text-[#1a1a1a]/40 hover:text-red-500 transition-colors"
                                                title="Delete Category"
                                            >
                                                <X className="w-3 h-3" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Upload Area */}
                            <div className="bg-white rounded-xl border-2 border-dashed border-[#5A5A40]/30 hover:border-[#5A5A40] transition-colors p-8 shadow-sm text-center cursor-pointer" onClick={() => galleryUploadRef.current?.click()}>
                                <input ref={galleryUploadRef} type="file" accept="image/*" multiple onChange={handleGalleryUpload} className="hidden" />
                                <Upload className="w-10 h-10 mx-auto mb-3 text-[#5A5A40]/50" />
                                <p className="text-sm font-medium text-[#1a1a1a]">Click to upload gallery photos</p>
                                <p className="text-xs text-[#1a1a1a]/50 mt-1">Supports JPG, PNG, WebP — multiple files at once</p>
                            </div>

                            {/* Gallery Items */}
                            <div className="bg-white rounded-xl border border-[#1a1a1a]/5 p-6 shadow-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-serif">Gallery Photos <span className="text-sm font-light text-[#1a1a1a]/50">({formData.galleryImages.length})</span></h3>
                                    <button onClick={() => galleryUploadRef.current?.click()} className="bg-[#1a1a1a] text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-2">
                                        <Plus className="w-3 h-3" />
                                        <span>Add Photo</span>
                                    </button>
                                </div>

                                <div className="space-y-3">
                                    {formData.galleryImages.map((img, index) => (
                                        <div key={img.id} className="flex items-center gap-4 p-3 bg-[#f5f2ed]/60 rounded-xl border border-[#1a1a1a]/5 group hover:border-[#5A5A40]/30 transition-colors">
                                            {/* Thumbnail */}
                                            <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-200 border border-black/5">
                                                {img.src ? (
                                                    <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-400"><ImageIcon className="w-6 h-6" /></div>
                                                )}
                                            </div>

                                            {/* Fields */}
                                            <div className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                                <div>
                                                    <label className="block text-[10px] uppercase tracking-widest text-[#1a1a1a]/50 mb-1">Title</label>
                                                    <input type="text" value={img.title} onChange={(e) => {
                                                        const newImgs = [...formData.galleryImages];
                                                        newImgs[index].title = e.target.value;
                                                        setFormData({ ...formData, galleryImages: newImgs });
                                                    }} className="w-full bg-white rounded px-3 py-1.5 text-xs outline-none border border-transparent focus:border-[#5A5A40]" />
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] uppercase tracking-widest text-[#1a1a1a]/50 mb-1">Category</label>
                                                    <select value={img.category} onChange={(e) => {
                                                        const newImgs = [...formData.galleryImages];
                                                        newImgs[index].category = e.target.value;
                                                        setFormData({ ...formData, galleryImages: newImgs });
                                                    }} className="w-full bg-white rounded px-3 py-1.5 text-xs outline-none border border-transparent focus:border-[#5A5A40]">
                                                        {(formData.galleryCategories || ['Events', 'Dining', 'Venues']).map(cat => (
                                                            <option key={cat} value={cat}>{cat}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-[10px] uppercase tracking-widest text-[#1a1a1a]/50 mb-1">Image URL</label>
                                                    <input type="text" value={img.src.startsWith('data:') ? '(uploaded file)' : img.src} readOnly={img.src.startsWith('data:')} onChange={(e) => {
                                                        if (!img.src.startsWith('data:')) {
                                                            const newImgs = [...formData.galleryImages];
                                                            newImgs[index].src = e.target.value;
                                                            setFormData({ ...formData, galleryImages: newImgs });
                                                        }
                                                    }} className={`w-full bg-white rounded px-3 py-1.5 text-xs outline-none border border-transparent focus:border-[#5A5A40] ${img.src.startsWith('data:') ? 'text-[#1a1a1a]/40 italic' : ''}`} />
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="flex flex-col gap-1 shrink-0">
                                                <button onClick={() => moveGalleryItem(index, 'up')} disabled={index === 0} className="p-1 rounded hover:bg-white disabled:opacity-20 transition-colors"><ChevronUp className="w-3.5 h-3.5" /></button>
                                                <button onClick={() => moveGalleryItem(index, 'down')} disabled={index === formData.galleryImages.length - 1} className="p-1 rounded hover:bg-white disabled:opacity-20 transition-colors"><ChevronDown className="w-3.5 h-3.5" /></button>
                                            </div>
                                            <button onClick={() => {
                                                setFormData({ ...formData, galleryImages: formData.galleryImages.filter((_, i) => i !== index) });
                                            }} className="p-2 rounded-lg text-red-400 hover:bg-red-50 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {formData.galleryImages.length === 0 && (
                                    <div className="text-center py-16 text-[#1a1a1a]/40">
                                        <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-20" />
                                        <p className="text-sm">No gallery photos yet</p>
                                        <p className="text-xs mt-1">Upload some photos or add them manually</p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* ───── SERVICES TAB ───── */}
                    {activeTab === 'services' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-serif">Manage Services</h3>
                                <button onClick={() => {
                                    setFormData({
                                        ...formData,
                                        services: [...formData.services, { id: `svc-${Date.now()}`, title: 'New Service', description: '', items: [] }]
                                    });
                                }} className="bg-[#1a1a1a] text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center space-x-2">
                                    <Plus className="w-3 h-3" />
                                    <span>Add Service</span>
                                </button>
                            </div>

                            {formData.services.map((service, index) => (
                                <div key={service.id} className="bg-white rounded-xl border border-[#1a1a1a]/5 p-6 shadow-sm group relative">
                                    <div className="absolute top-4 right-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => moveServiceItem(index, 'up')} disabled={index === 0} className="p-1.5 rounded hover:bg-[#f5f2ed] disabled:opacity-20"><ChevronUp className="w-4 h-4" /></button>
                                        <button onClick={() => moveServiceItem(index, 'down')} disabled={index === formData.services.length - 1} className="p-1.5 rounded hover:bg-[#f5f2ed] disabled:opacity-20"><ChevronDown className="w-4 h-4" /></button>
                                        <button onClick={() => setFormData({ ...formData, services: formData.services.filter((_, i) => i !== index) })} className="p-1.5 rounded text-red-400 hover:bg-red-50 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-[#1a1a1a]/70 mb-2 font-medium">Service Title</label>
                                            <input type="text" value={service.title} onChange={(e) => {
                                                const newServices = [...formData.services];
                                                newServices[index] = { ...newServices[index], title: e.target.value };
                                                setFormData({ ...formData, services: newServices });
                                            }} className="w-full bg-[#f5f2ed] border-transparent focus:border-[#5A5A40] focus:ring-0 rounded-lg px-4 py-3 text-sm outline-none border" />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-[#1a1a1a]/70 mb-2 font-medium">Description</label>
                                            <textarea rows={2} value={service.description} onChange={(e) => {
                                                const newServices = [...formData.services];
                                                newServices[index] = { ...newServices[index], description: e.target.value };
                                                setFormData({ ...formData, services: newServices });
                                            }} className="w-full bg-[#f5f2ed] border-transparent focus:border-[#5A5A40] focus:ring-0 rounded-lg px-4 py-3 text-sm outline-none border" />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest text-[#1a1a1a]/70 mb-2 font-medium">Key Points <span className="normal-case text-[#1a1a1a]/40">(comma separated)</span></label>
                                            <textarea rows={2} value={service.items.join(', ')} onChange={(e) => {
                                                const newServices = [...formData.services];
                                                newServices[index] = { ...newServices[index], items: e.target.value.split(',').map(s => s.trim()).filter(Boolean) };
                                                setFormData({ ...formData, services: newServices });
                                            }} className="w-full bg-[#f5f2ed] border-transparent focus:border-[#5A5A40] focus:ring-0 rounded-lg px-4 py-3 text-sm outline-none border" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* ───── CONTACT TAB ───── */}
                    {activeTab === 'contact' && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                            <div className="bg-white rounded-xl border border-[#1a1a1a]/5 p-8 shadow-sm space-y-6">
                                <h3 className="text-xl font-serif">Contact Information</h3>
                                <div className="grid gap-5">
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-[#1a1a1a]/70 mb-2 font-medium">Email Address</label>
                                        <input type="email" value={formData.contactDetails.email} onChange={(e) => handleChange('contactDetails', 'email', e.target.value)} className="w-full bg-[#f5f2ed] border-transparent focus:border-[#5A5A40] focus:ring-0 rounded-lg px-4 py-3 text-sm outline-none border" />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-[#1a1a1a]/70 mb-2 font-medium">Phone Number</label>
                                        <input type="text" value={formData.contactDetails.phone} onChange={(e) => handleChange('contactDetails', 'phone', e.target.value)} className="w-full bg-[#f5f2ed] border-transparent focus:border-[#5A5A40] focus:ring-0 rounded-lg px-4 py-3 text-sm outline-none border" />
                                    </div>
                                    <div>
                                        <label className="block text-xs uppercase tracking-widest text-[#1a1a1a]/70 mb-2 font-medium">Physical Address</label>
                                        <textarea rows={3} value={formData.contactDetails.address} onChange={(e) => handleChange('contactDetails', 'address', e.target.value)} className="w-full bg-[#f5f2ed] border-transparent focus:border-[#5A5A40] focus:ring-0 rounded-lg px-4 py-3 text-sm outline-none border" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl border border-[#1a1a1a]/5 p-8 shadow-sm space-y-6">
                                <h3 className="text-xl font-serif">Social Media Links</h3>
                                <div className="grid gap-5">
                                    {Object.entries(formData.socialLinks).map(([key, value]) => (
                                        <div key={key}>
                                            <label className="block text-xs uppercase tracking-widest text-[#1a1a1a]/70 mb-2 font-medium capitalize">{key} URL</label>
                                            <input type="url" value={value} onChange={(e) => handleChange('socialLinks', key, e.target.value)} className="w-full bg-[#f5f2ed] border-transparent focus:border-[#5A5A40] focus:ring-0 rounded-lg px-4 py-3 text-sm outline-none border" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}
