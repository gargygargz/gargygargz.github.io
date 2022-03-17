import { Image } from './Image'

export const Projects = (props) => {
	return (
		<div id='portfolio' className='text-center'>
			<div className='container'>
				<div className='section-title'>
					<h2>Projects</h2>
					<p>
						Hover over image to display project information and links to deployed
						application and GitHub repository.
					</p>
				</div>
				<div className='row'>
					<div className='portfolio-items'>
						{props.data
							? props.data.map((d, i) => (
									<div
										key={`${d.title}-${i}`}
										className='col-sm-6 col-md-4 col-lg-4'>
										<Image
											title={d.title}
											description={d.description}
											tech={d.tech}
											deployed={d.deployed}
											github={d.github}
											largeImage={d.largeImage}
											smallImage={d.smallImage}
										/>
									</div>
							  ))
							: 'Loading...'}
					</div>
				</div>
				{/* <div>
					<a
						href='https://docs.google.com/document/d/1MsepzkG-IQzSLiXow2lTgjcb8xLpPNtDTAWdAPqe74w/edit#'
						className='btn btn-custom btn-lg page-scroll'>
						Resume
					</a>{' '}
				</div> */}
        <div><p></p></div>
			</div>
		</div>
	)
}