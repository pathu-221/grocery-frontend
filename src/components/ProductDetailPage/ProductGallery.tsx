import type { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getImgeUrl } from "../../helpers/getImageUrl";
interface ProductGalleryProps {
	images?: string[];
}

const ProductGallery: FC<ProductGalleryProps> = ({ images }) => {
	return (
		<div className="">
			<div className="">
				{images && (
					<Carousel infiniteLoop showThumbs showArrows>
						{images.map((image) => (
							<figure className="">
								<img
									src={getImgeUrl(image)}
									alt="2"
									style={{ objectFit: "cover" }}
									width="400"
									height="400"
								/>
							</figure>
						))}
					</Carousel>
				)}
				{/* <figure className="product-image">
					<img
						src={
							images ? images[2] : "images/products/product-single/800x1000.jpg"
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
							images ? images[3] : "images/products/product-single/800x1000.jpg"
						}
						data-zoom-image="images/products/product-single/800x1000.jpg"
						alt="4"
						width="800"
						height="1000"
					/>
				</figure> */}
			</div>
		</div>
	);
};

export default ProductGallery;
