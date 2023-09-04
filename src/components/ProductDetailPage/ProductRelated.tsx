import type { FC } from "react";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../apis/product.api";
import { Product } from "../../interfaces/product.interface";
import ProductDetails from "../ProductDetails";

interface ProductRelatedProps {
	categoryName: string;
}

const ProductRelated: FC<ProductRelatedProps> = ({ categoryName }) => {
	const [relatedProducts, setRelatedProducts] = useState<Product[]>();

	// const returnProductImage = (images: string) => {
	// 	const image = JSON.parse(images) as string[];

	// 	return image[0];
	// };

	useEffect(() => {
		loadRelatedProducts();
	}, []);

	const loadRelatedProducts = async () => {
		const data = await fetchAllProducts(categoryName);
		if (!data.status) return alert(data.msg);

		setRelatedProducts(data.data);
	};
	return (
		<div className="container">
			<section className="mt-3">
				<h2 className="text-center mb-7">Related Products</h2>
				<div
					className="owl-carousel owl-theme owl-nav-outer slider-brand row cols-lg-4 cols-md-3 cols-2"
					data-owl-options="{
                            'nav': true,
                            'dots': false,
                            'margin': 20,
                            'loop': false,
                            'responsive': {
                                '0': {
                                    'items': 2,
                                    'autoplay': true,
                                    'nav': false
                                },
                                '768': {
                                    'items': 3,
                                    'nav': false
                                },
                                '992': {
                                    'items': 4
                                }
                            }
                        }"
				>
					{relatedProducts &&
						relatedProducts.map((product) => (
							<ProductDetails product={product} />
						))}
				</div>
			</section>
		</div>
	);
};

export default ProductRelated;
