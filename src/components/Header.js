import {
	ReactCompareSlider,
	ReactCompareSliderImage,
} from 'react-compare-slider'
// import { ComparisonSlider } from 'react-comparison-slider'

import Background1 from '../images/Greg_JT_01-2.jpg'
import Background2 from '../images/Greg_JT_01-1-1.jpg'

export const Header = (props) => {
	return (
		<header id='header'>
			<div className='intro'>
				<div className='overlay'>
					<div className='container'>
						<div className='row'>
							<div className=' intro-text'>
								<div className='slider'>
									<ReactCompareSlider
										// boundsPadding={0}
										itemOne={
											<ReactCompareSliderImage
												alt='Greg image one'
												src={Background1}
											/>
										}
										itemTwo={
											<ReactCompareSliderImage
												alt='Greg image two'
												src={Background2}
												style={{ transform: 'scale(1.125)' }}
											/>
										}
										position={50}
										// style={{
										//   height: '100vh',
										//   width: '100vw',
										// }}
									/>
									{/* <ComparisonSlider className='intro'
      defaultValue={50}
      itemOne={<div className="bg-red-200"></div>}
      itemTwo={<div className="bg-blue-200"></div>}
      aspectRatio={16 / 9}
      orientation="horizontal"
    /> */}
								</div>
								{/* <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p> */}
								<a
									target='_blank'
									rel='noopener noreferrer'
									href='https://drive.google.com/file/d/17L0Ke5xMivBK2J63wt0R6qveh7uPCJ-f/view?usp=sharing'
									className='resume-button btn btn-custom btn-lg page-scroll'>
									Resume
								</a>{' '}
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
