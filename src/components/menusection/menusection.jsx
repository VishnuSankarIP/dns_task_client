import React, { useEffect, useState } from 'react';
import './menusection.css';
import axiosInstance from '../../../config/axiosconfig';
import { Toaster, toast } from 'sonner';


function Menusection({ selectedMenuData }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [menuItem, setMenuItem] = useState({
        name: '',
        description: '',
        price: '',
        menuId: ''
    });


    const handleChange = (e) => {
        setMenuItem({ ...menuItem, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedMenuData?._id) {
            toast.error('Please select a menu first');
            return;
        }
        const nameRegex = /^[A-Za-z0-9\s]+$/;
        if (!nameRegex.test(menuItem.name.trim())) {
            toast.error('Menu item name should only contain letters, numbers, and spaces.');
            return;
        }


        if (menuItem.description.trim() === '') {
            toast.error('Description cannot be empty.');
            return;
        }

        const price = Number(menuItem.price);
        if (isNaN(price) || price <= 0) {
            toast.error('Price must be a valid number greater than zero.');
            return;
        }

        try {
            const response = await axiosInstance.post('/item', {
                name: menuItem.name,
                description: menuItem.description,
                price: Number(menuItem.price),
                menuId: selectedMenuData._id,
            });

            if (response.data.success) {
                toast.success('Menu Item added successfully!');
                setIsModalOpen(false);
                setMenuItem({ name: '', description: '', price: '' });
                // You might want to implement a refresh function here
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error('Error adding menu item:', error);
            toast.error('Failed to add menu item.');
        }
    };

    return (
        <div className='menu-section'>
            <div className="left-frame"></div>
            <div className="cocktail-decoration1"></div>
            <div className="cocktail-decoration2"></div>

            <div className="main-div container mx-auto px-8 py-12">
                <h2 className="text-center text-white text-4xl md:text-5xl font-bold mb-12 tracking-wider"
                    style={{
                        textShadow: "2px 2px 0px #000, 4px 4px 0px #ff0000, 6px 6px 0px #000",
                    }}>
                    {selectedMenuData?.name || 'Select a Menu'}
                    <button onClick={() => setIsModalOpen(true)}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {selectedMenuData?.items && selectedMenuData.items.length > 0 ? (
                        selectedMenuData.items.map((item) => (
                            <div key={item._id} className="space-y-8">
                                <div>
                                    <div className="flex justify-between items-baseline mb-2">
                                        {/* <h3 className="text-white text-xl font-bold">
                                            {item.name}
                                        </h3> */}
                                        <h3 className="menu-item">
                                            <span className="menu-name">{item.name}</span>
                                            <span className="dots"></span>
                                            <span className="menu-price">${item.price}</span>
                                        </h3>
                                        {/* <span className="text-white text-xl font-bold">${item.price}</span> */}
                                    </div>
                                    <p className="text-gray-400 text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-white">No items available for this menu.</p>
                    )}
                </div>
            </div>

            <div className="right-frame"></div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-semibold mb-4">Add Menu Item</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={menuItem.name}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-500"
                                    placeholder="Enter item name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                    Description
                                </label>
                                <textarea
                                    name="description"
                                    value={menuItem.description}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-500"
                                    placeholder="Enter item description"
                                    rows="3"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    value={menuItem.price}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-500"
                                    placeholder="Enter item price"
                                    required
                                />
                            </div>


                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Menusection;


