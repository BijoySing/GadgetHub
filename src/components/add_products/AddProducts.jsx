import React from 'react';
import Swal from 'sweetalert2';

const AddProducts = () => {
    const handleAddProducts = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const productType = form.productType.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const newProduct = { name, brandName, productType, price, shortDescription, rating, image };

        console.log(newProduct);

        // Send data to the server
        // Replace the URL with your actual server endpoint
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedID) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                } else {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
                // Handle the response from the server (e.g., show alerts)
            })
            .catch(error => {
                console.error('Error:', error);
                // Handle errors, show error messages, or use Swal for alerts
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            });
    };

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add a Product</h2>
            <form onSubmit={handleAddProducts}>
                {/* Image */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="image"
                                placeholder="Image URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                {/* Product Name */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Product Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                {/* Brand Name (combobox) */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <select
                                name="brandName"
                                className="select select-bordered w-full"
                            >
                                <option value="">Select Brand</option>
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="LG">LG</option>
                                <option value="Google">Google</option>
                                <option value="Intel">Intel</option>
                                {/* Add your brand options here */}
                            </select>
                        </label>
                    </div>
                </div>

                {/* Type (combobox) */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <select
                                name="productType"
                                className="select select-bordered w-full"
                            >
                                <option value="">Select Type</option>
                                <option value="phone">Mobile</option>
                                <option value="computer">laptop</option>
                                <option value="headphone">Television</option>
                                <option value="headphone">Headphone</option>
                                <option value="headphone">Tablet</option>
                                {/* Add more type options here */}
                            </select>
                        </label>
                    </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="price"
                                placeholder="Price"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                {/* Short Description */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="shortDescription"
                                placeholder="Short Description"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                {/* Rating */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="rating"
                                placeholder="Rating"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Product" className="btn btn-block bg-blue-500" />
            </form>
        </div>
    );
};

export default AddProducts;
