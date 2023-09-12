import type { FC } from "react";
import ProductReviews from "./ProductReviews";

interface ProductContentProps {
	productId?: string;
}

const ProductContent: FC<ProductContentProps> = ({ productId }) => {
	return (
		<div className="product-content">
			<div className="content-specification mt-10 pt-3">
				<h2 className="title title-line title-underline">
					<span>Specifications</span>
				</h2>
				<ul className="list-none">
					<li>
						<label>WEIGHT</label>
						<p>5 kg</p>
					</li>
					<li>
						<label>DIMENSIONS</label>
						<p>10 × 10 × 10 cm</p>
					</li>
					<li>
						<label>WEIGHT UNIT</label>
						<p>1KG, 1LB, 500G, Bound, Each</p>
					</li>
				</ul>
			</div>
			<ProductReviews productId={productId} />
		</div>
	);
};

export default ProductContent;
