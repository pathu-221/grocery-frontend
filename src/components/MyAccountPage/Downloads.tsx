

import type { FC } from 'react';

interface DownloadsProps {}

const Downloads: FC<DownloadsProps> = () => {
    return (
			<div className="tab-pane" id="downloads">
				<p className="mb-4 text-body">No downloads available yet.</p>
				<a href="shop.html" className="btn btn-dark">
					Go to Shop<i className="p-icon-arrow-long-right"></i>
				</a>
			</div>
		);
}

export default Downloads;
