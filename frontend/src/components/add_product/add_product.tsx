import React, { useState } from 'react';
import './add_product.css';

interface AddProductProps {
  onSuccess?: () => void;
}

export const AddProduct: React.FC<AddProductProps> = ({ onSuccess }) => {
  const [title, setTitle] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting Product Data:', { title, price: Number(price), category });
    if (onSuccess) onSuccess();
  };

  return (
    <div className="add-product-card">
      <h3 className="add-product-title">Add New Product</h3>
      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label className="form-label">Product Title</label>
          <input
            type="text"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Astra Cloud Analytics Suite"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Price ($)</label>
          <input
            type="number"
            className="form-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="99.00"
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Software / Cloud Service"
          />
        </div>

        <button type="submit" className="submit-btn">
          Create Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
