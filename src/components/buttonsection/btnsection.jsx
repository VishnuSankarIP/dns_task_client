import React, { useEffect, useState } from 'react';
import './btnsection.css';
import axiosInstance from '../../../config/axiosconfig';
import { Toaster, toast } from 'sonner';


function BtnSection({ onMenuSelect, activeMenuId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menu, setMenu] = useState({ name: '', description: '' });
  const [menusData, setMenusData] = useState([]);

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await axiosInstance.get('/get-menu');
      if (response.data.success) {
        setMenusData(response.data.menu);
        // Set the first menu as default if no menu is selected
        if (response.data.menu.length > 0 && !activeMenuId) {
          onMenuSelect(response.data.menu[0]);
        }
      } else {
        toast.error('Failed to fetch menus');
      }
    } catch (error) {
      console.error('Error fetching menus:', error);
      toast.error('Error fetching menus');
    }
  };

  const handleChange = (e) => {
    setMenu({ ...menu, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Za-z\s]+$/;
  if (!nameRegex.test(menu.name)) {
    toast.error('Menu name should only contain letters.');
    return;
  }

    try {
      const response = await axiosInstance.post('/menu', {
        name: menu.name,
        description: menu.description,
      });

      if (response.data.success) {
        toast.success('Menu added successfully!');
        setIsModalOpen(false);
        setMenu({ name: '', description: '' });
        // Refresh menus after adding new one
        fetchMenus();
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to add menu.');
    }
  };

  return (
    <div className="btn-section">
      {/* {menusData && menusData.length > 0 ? (
        menusData.map((menuItem) => (
          <button
            key={menuItem._id}
            onClick={() => onMenuSelect(menuItem)}
            className={`menu-button ${menuItem._id === activeMenuId ? 'active' : ''}`}
          >
            {menuItem.name}
          </button>
        ))
      ) : (
        <p>No menus available</p>
      )}
      <button onClick={() => setIsModalOpen(true)}>
        <i className="fa-solid fa-plus"></i>
      </button> */}
      <div className="flex flex-wrap gap-2 overflow-x-auto md:justify-center p-2">
  {menusData && menusData.length > 0 ? (
    menusData.map((menuItem) => (
      <button
        key={menuItem._id}
        onClick={() => onMenuSelect(menuItem)}
        className={`px-4 py-2 text-sm md:text-base bg-gray-200 transition duration-300 ${
          menuItem._id === activeMenuId ? 'bg-indigo-500 text-white' : 'hover:bg-gray-300'
        }`}
      >
        {menuItem.name}
      </button>
    ))
  ) : (
    <p className="text-gray-500">No menus available</p>
  )}
  <button
    onClick={() => setIsModalOpen(true)}
    className="px-3 py-2 bg-green-500 text-white  hover:bg-green-600 transition duration-300"
  >
    <i className="fa-solid fa-plus"></i>
  </button>
</div>


      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">Add Menu</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={menu.name}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-500"
                  placeholder="Enter menu name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={menu.description}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-500"
                  placeholder="Enter menu description"
                  rows="3"
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
        <Toaster position="top-right" richColors />
    </div>
  );
}

export default BtnSection;






