import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useLoaderData, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const products = useLoaderData();
    const { id } = useParams();
console.log(id);

    // if (!products) {
    //     return <div>Loading...</div>;
    // }

    // Find the product with the specified ID in the products array
    const foundProduct = products.find((product) => product._id === id);

    const {_id,name, brandName, productType, price, shortDescription, rating, image } = foundProduct;
    // console.log(_id);

    const handleUpdateProduct = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const productType = form.productType.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const image = form.image.value;

        const updatedProduct = {
            name,
            brandName,
            productType,
            price,
            shortDescription,
            rating,
            image,
        };
        console.log(updatedProduct);
        fetch(`https://gadgetshub-e5tzljj10-bijoys-projects.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data);

            // })

    //  fetch('http://localhost:5000/products')
	// .then(response => response.json())
	// .then(data => console.log(data))

        // Send data to the server for updating the product
        // Replace the URL with your actual server endpoint
        // fetch(`http://localhost:5000/products/${id}`, {
        //     // fetch(`http://localhost:5000/`)
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify({updatedProduct}),
        // })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.updated) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                }
            });
        
    };
    const sweet=()=>{
        Swal.fire({
            title: 'Success!',
            text: 'Product Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
        });
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Update Product: {name}</h2>
            <form onSubmit={handleUpdateProduct}>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="image"
                                defaultValue={image}
                                placeholder="Image URL"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="name"
                                defaultValue={name}
                                placeholder="Product Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="brandName"
                                defaultValue={brandName}
                                placeholder="Brand Name"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="productType"
                                defaultValue={productType}
                                placeholder="Category"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="price"
                                defaultValue={price}
                                placeholder="Price"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="shortDescription"
                                defaultValue={shortDescription}
                                placeholder="Short Description"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="rating"
                                defaultValue={rating}
                                placeholder="Rating"
                                className="input input-bordered w-full"
                            />
                        </label>
                    </div>
                </div>
               <button onClick={sweet}> <input type="submit" value="Update Product" className="btn btn-block bg-blue-500" />
               </button>
            </form>
        </div>
    );
};

export default UpdateProduct;
