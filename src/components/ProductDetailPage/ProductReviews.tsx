import { useFormik } from "formik";
import { useState, useEffect, type FC } from "react";
import Modal from "react-responsive-modal";
import { object, string } from "yup";
import { addReview, fetchAllreviews } from "../../apis/review.api";
import showToast from "../../helpers/showToast";
import { Review } from "../../interfaces/review.interface";
import { getFormattedDate } from "../../helpers/getFormattedDate";
import { useLocation } from "react-router";

interface ProductReviewsProps {
	productId?: string;
}

const ProductReviews: FC<ProductReviewsProps> = ({}) => {
	const location = useLocation();
	const [showReviewModal, setShowReviewModal] = useState(false);
	const [reviews, setReviews] = useState<Review[]>([]);
	const urlParams = new URLSearchParams(location.search);
	const productId = urlParams.get("productId");

	const reviewFormik = useFormik({
		initialValues: {
			productId: productId || "",
			title: "",
			comment: "",
			rating: 5,
		},
		validationSchema: object({
			title: string().required("Review title is required"),
			comment: string().required("Review content is required"),
		}),
		onSubmit: async (values) => {
			const requestBody = {
				product_id: values.productId,
				title: values.title,
				comment: values.comment,
				rating: values.rating,
			};
			const response = await addReview(requestBody);
			if (!response.status) return showToast("danger", response.msg);

			showToast("success", response.msg);
			setShowReviewModal(false);
		},
	});

	useEffect(() => {
		loadReviews();
	}, []);

	const loadReviews = async () => {
		console.log({ productId });
		const response = await fetchAllreviews(productId || "");
		if (!response.status) return showToast("danger", response.msg);

		setReviews(response.data);
	};
	return (
		<div className="content-reviews pt-9" id="content-reviews">
			<div className="with-toolbox">
				<h2 className="title title-line title-underline mb-8">
					<span>Customer Reviews</span>
				</h2>
			</div>
			<div className="row pb-10">
				<div className="col-lg-4 mb-4 sticky-sidebar-wrapper">
					<div
						className="sticky-sidebar pb-3"
						data-sticky-options="{'paddingOffsetTop': 90}"
					>
						<div className="avg-rating-container">
							<mark>4.5</mark>
							<div className="avg-rating">
								<span className="avg-rating-title">Average Rating</span>
								<div className="ratings-container mb-0">
									<div className="ratings-full">
										<span className="ratings" style={{ width: "100%" }}></span>
										<span className="tooltiptext tooltip-top"></span>
									</div>
								</div>
							</div>
						</div>
						<a className="btn btn-dim" onClick={() => setShowReviewModal(true)}>
							Submit Review
						</a>
					</div>
				</div>
				<div className="col-lg-8 comments border-no">
					<ul className="comments-list">
						{reviews &&
							reviews.map((review) => (
								<li>
									<div className="comment">
										<figure className="comment-media">
											<a href="#">
												<img
													src={`https://api.dicebear.com/7.x/initials/svg?seed=$d{review.user.first_name}`}
													width="100"
													height="100"
													alt="avatar"
												/>
											</a>
										</figure>
										<div className="comment-body mt-2 mt-sm-0">
											<div className="comment-rating ratings-container">
												<div className="ratings-full">
													<span
														className="ratings"
														style={{ width: `${review.rating * 20}%` }}
													></span>
													<span className="tooltiptext tooltip-top"></span>
												</div>
											</div>
											<div className="comment-user">
												<span className="comment-date">
													by{" "}
													<span className="font-weight-semi-bold text-uppercase text-dim">
														{`${review.user.first_name} ${review.user.last_name} `}
													</span>
													on {getFormattedDate(review.created_at)}
												</span>
											</div>
											<div className="comment-description">{review.title}</div>
											<div className="comment-content">
												<p>{review.comment}</p>
											</div>
										</div>
									</div>
								</li>
							))}
					</ul>
				</div>
			</div>
			<Modal
				classNames={{
					modal: "review-container",
				}}
				center
				open={showReviewModal}
				onClose={() => {
					setShowReviewModal(false);
				}}
			>
				<div className="review-container">
					<form onSubmit={reviewFormik.handleSubmit}>
						<h4 className="review-title mb-3">Submit Your Review</h4>
						<div className="ratings-container">
							<h6 className="rating-title mb-0">Your Rating Of This Product</h6>
							<div className="rating-form">
								<span className="rating-stars selected">
									<a
										className="star-1"
										onClick={() =>
											reviewFormik.setValues({
												...reviewFormik.values,
												rating: 1,
											})
										}
										href="#"
									/>
									<a
										className="star-2"
										onClick={() =>
											reviewFormik.setValues({
												...reviewFormik.values,
												rating: 2,
											})
										}
										href="#"
									/>
									<a
										className="star-3"
										onClick={() =>
											reviewFormik.setValues({
												...reviewFormik.values,
												rating: 3,
											})
										}
										href="#"
									/>
									<a
										className="star-4"
										onClick={() =>
											reviewFormik.setValues({
												...reviewFormik.values,
												rating: 4,
											})
										}
										href="#"
									/>
									<a
										className="star-5 active"
										onClick={() =>
											reviewFormik.setValues({
												...reviewFormik.values,
												rating: 5,
											})
										}
										href="#"
									/>
								</span>
							</div>
						</div>
						<div className="row">
							<div className="col-12 mb-4">
								<input
									type="text"
									name="title"
									onChange={reviewFormik.handleChange}
									placeholder="Your TItle Here..."
									required
								/>
							</div>
							<div className="col-12 mb-4">
								<textarea
									required
									name="comment"
									onChange={reviewFormik.handleChange}
									placeholder="Write Your Review Here..."
									defaultValue={""}
								/>
							</div>
						</div>

						<button type="submit" className="btn btn-dim text-uppercase">
							Submit Review
						</button>
					</form>
				</div>
			</Modal>
		</div>
	);
};

export default ProductReviews;
