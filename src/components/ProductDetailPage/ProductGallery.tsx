

import type { FC } from 'react';

interface ProductGalleryProps {
	images?: string[]
}

const ProductGallery: FC<ProductGalleryProps> = ({ images }) => {
    return (
			<div className="product-gallery">
				<div className="product-single-carousel owl-carousel owl-theme owl-nav-inner row cols-1 gutter-no">
					<figure className="product-image">
						<img
							src={
								images
									? images[0]
									: "images/products/product-single/800x1000.jpg"
							}
							data-zoom-image={
								images
									? images[0]
									: "images/products/product-single/800x1000.jpg"
							}
							alt="1"
							width="800"
							height="1000"
						/>
					</figure>
					<figure className="product-image">
						<img
							src={
								images
									? images[1]
									: "images/products/product-single/800x1000.jpg"
							}
							data-zoom-image="images/products/product-single/800x1000.jpg"
							alt="2"
							width="800"
							height="1000"
						/>
					</figure>
					<figure className="product-image">
						<img
							src={
								images
									? images[2]
									: "images/products/product-single/800x1000.jpg"
							}
							data-zoom-image="images/products/product-single/800x1000.jpg"
							alt="3"
							width="800"
							height="1000"
						/>
					</figure>
					<figure className="product-image">
						<img
							src={
								images
									? images[3]
									: "images/products/product-single/800x1000.jpg"
							}
							data-zoom-image="images/products/product-single/800x1000.jpg"
							alt="4"
							width="800"
							height="1000"
						/>
					</figure>
				</div>
				<div className="product-thumbs-wrap">
					<div className="product-thumbs">
						<div className="product-thumb active">
							<img
								src={
									images
										? images[0]
										: "images/products/product-single/800x1000.jpg"
								}
								alt="product thumbnail"
								width="240"
								height="300"
							/>
						</div>
						<div className="product-thumb">
							<img
								src={
									images
										? images[1]
										: "images/products/product-single/800x1000.jpg"
								}
								alt="product thumbnail"
								width="240"
								height="300"
							/>
						</div>
						<div className="product-thumb">
							<img
								src={
									images
										? images[2]
										: "images/products/product-single/800x1000.jpg"
								}
								alt="product thumbnail"
								width="240"
								height="300"
							/>
						</div>
						<div className="product-thumb">
							<img
								src={
									images
										? images[3]
										: "images/products/product-single/800x1000.jpg"
								}
								alt="product thumbnail"
								width="240"
								height="300"
							/>
						</div>
					</div>
					<button className="thumb-up disabled">
						<i className="fas fa-chevron-left"></i>
					</button>
					<button className="thumb-down disabled">
						<i className="fas fa-chevron-right"></i>
					</button>
				</div>
			</div>
		);
}

export default ProductGallery;
