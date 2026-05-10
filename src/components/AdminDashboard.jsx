import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { db, auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';
import { Edit2, Trash2, Plus, LogOut } from 'lucide-react';

const AdminDashboard = () => {
    const [user, setUser] = useState(null);
    const [menuData, setMenuData] = useState({});
    const [categories, setCategories] = useState([]);
    const [activeTab, setActiveTab] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    
    // Editing State
    const [editingItem, setEditingItem] = useState(null);
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [formData, setFormData] = useState({ name: '', price: '', desc: '' });

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                fetchMenu();
            } else {
                navigate('/admin'); // Redirect to login if not authenticated
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const fetchMenu = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'menu'));
            let newMenuData = {};
            let newCategories = [];
            
            querySnapshot.forEach((document) => {
                const data = document.data();
                newMenuData[document.id] = data.items || [];
                if (data.details) {
                    newCategories.push(data.details);
                }
            });
            
            setMenuData(newMenuData);
            setCategories(newCategories);
            if (newCategories.length > 0 && !activeTab) {
                setActiveTab(newCategories[0].id);
            }
        } catch (error) {
            console.error("Error fetching menu:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        navigate('/admin');
    };

    const handleEdit = (item, index) => {
        setEditingItem(index);
        setIsAddingNew(false);
        setFormData({
            name: item.name || '',
            price: item.price || '',
            desc: item.desc || ''
        });
    };

    const handleDelete = async (index) => {
        if (!window.confirm("Are you sure you want to delete this item?")) return;
        
        const updatedItems = [...menuData[activeTab]];
        updatedItems.splice(index, 1);
        await saveCategoryItems(updatedItems);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        let updatedItems = [...menuData[activeTab]];

        if (isAddingNew) {
            updatedItems.push(formData);
        } else {
            updatedItems[editingItem] = { ...updatedItems[editingItem], ...formData };
        }

        await saveCategoryItems(updatedItems);
        setEditingItem(null);
        setIsAddingNew(false);
    };

    const saveCategoryItems = async (items) => {
        setSaving(true);
        try {
            const categoryRef = doc(collection(db, 'menu'), activeTab);
            // We update just the items array, leaving details intact
            await setDoc(categoryRef, { items: items }, { merge: true });
            
            // Update local state
            setMenuData(prev => ({ ...prev, [activeTab]: items }));
        } catch (error) {
            console.error("Error saving data:", error);
            alert("Failed to save. Check your permissions.");
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center bg-zain-beige dark:bg-[#0b0b0b] text-zain-brown dark:text-zain-beige">Loading Dashboard...</div>;
    }

    return (
        <div className="min-h-screen bg-zain-beige dark:bg-[#0b0b0b] text-zain-brown dark:text-zain-beige p-6 md:p-12">
            
            {/* Header */}
            <div className="flex justify-between items-center mb-10 border-b border-zain-brown/10 dark:border-white/10 pb-6">
                <div>
                    <h1 className="text-4xl font-display font-bold">Admin Dashboard</h1>
                    <p className="text-zain-brown/60 dark:text-zain-beige/60">Manage your Zaintea Menu</p>
                </div>
                <button 
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 bg-zain-brown/10 dark:bg-white/10 rounded-lg hover:bg-zain-red hover:text-white transition-colors"
                >
                    <LogOut size={16} /> Logout
                </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar Categories */}
                <div className="lg:w-1/4">
                    <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Categories</h3>
                    <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setActiveTab(cat.id);
                                    setEditingItem(null);
                                    setIsAddingNew(false);
                                }}
                                className={`px-4 py-3 text-left rounded-lg whitespace-nowrap transition-colors ${
                                    activeTab === cat.id 
                                    ? 'bg-zain-red text-white font-bold' 
                                    : 'bg-white/5 hover:bg-white/10'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="lg:w-3/4">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold capitalize">{categories.find(c => c.id === activeTab)?.label} Menu</h2>
                        <button 
                            onClick={() => {
                                setIsAddingNew(true);
                                setEditingItem(null);
                                setFormData({ name: '', price: '', desc: '' });
                            }}
                            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                        >
                            <Plus size={16} /> Add Item
                        </button>
                    </div>

                    {/* Add / Edit Form */}
                    {(editingItem !== null || isAddingNew) && (
                        <form onSubmit={handleSave} className="bg-white dark:bg-white/5 p-6 rounded-xl border border-zain-brown/10 dark:border-white/10 mb-8 shadow-lg">
                            <h3 className="text-xl font-bold mb-4">{isAddingNew ? 'Add New Item' : 'Edit Item'}</h3>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-xs uppercase mb-1 opacity-70">Item Name</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-3 py-2 bg-transparent border border-zain-brown/20 dark:border-white/20 rounded focus:border-zain-red outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs uppercase mb-1 opacity-70">Price (e.g. AED 15)</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formData.price}
                                        onChange={(e) => setFormData({...formData, price: e.target.value})}
                                        className="w-full px-3 py-2 bg-transparent border border-zain-brown/20 dark:border-white/20 rounded focus:border-zain-red outline-none"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="block text-xs uppercase mb-1 opacity-70">Description</label>
                                    <input 
                                        type="text" 
                                        value={formData.desc}
                                        onChange={(e) => setFormData({...formData, desc: e.target.value})}
                                        className="w-full px-3 py-2 bg-transparent border border-zain-brown/20 dark:border-white/20 rounded focus:border-zain-red outline-none"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button type="submit" disabled={saving} className="px-6 py-2 bg-zain-red text-white rounded hover:opacity-90 disabled:opacity-50">
                                    {saving ? 'Saving...' : 'Save Changes'}
                                </button>
                                <button type="button" onClick={() => {setEditingItem(null); setIsAddingNew(false);}} className="px-6 py-2 bg-gray-500 text-white rounded hover:opacity-90">
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Items List */}
                    <div className="bg-white dark:bg-white/5 rounded-xl border border-zain-brown/10 dark:border-white/10 overflow-hidden">
                        {menuData[activeTab]?.length === 0 ? (
                            <div className="p-8 text-center opacity-50">No items in this category.</div>
                        ) : (
                            <table className="w-full text-left">
                                <thead className="bg-zain-brown/5 dark:bg-white/5 border-b border-zain-brown/10 dark:border-white/10">
                                    <tr>
                                        <th className="p-4 font-bold">Item</th>
                                        <th className="p-4 font-bold">Price</th>
                                        <th className="p-4 font-bold text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {menuData[activeTab]?.map((item, index) => (
                                        <tr key={index} className="border-b border-zain-brown/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                                            <td className="p-4">
                                                <div className="font-bold">{item.name}</div>
                                                <div className="text-xs opacity-60 truncate max-w-xs">{item.desc}</div>
                                            </td>
                                            <td className="p-4">{item.price}</td>
                                            <td className="p-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button onClick={() => handleEdit(item, index)} className="p-2 bg-blue-500/10 text-blue-500 rounded hover:bg-blue-500/20 transition">
                                                        <Edit2 size={16} />
                                                    </button>
                                                    <button onClick={() => handleDelete(index)} className="p-2 bg-red-500/10 text-red-500 rounded hover:bg-red-500/20 transition">
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
