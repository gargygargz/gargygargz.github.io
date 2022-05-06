import Typewriter from 'typewriter-effect'

export const Navigation = (props) => {
	return (
		<nav id='menu' className='navbar navbar-default navbar-fixed-top'>
			<div className='container'>
				<div className='navbar-header'>
					<button
						type='button'
						className='navbar-toggle collapsed'
						data-toggle='collapse'
						data-target='#bs-example-navbar-collapse-1'>
						{' '}
						<span className='sr-only'>Toggle navigation</span>{' '}
						<span className='icon-bar'></span>{' '}
						<span className='icon-bar'></span>{' '}
						<span className='icon-bar'></span>{' '}
					</button>
					<a className='navbar-brand page-scroll' href='#page-top'>
						<div className='typewriter'>
							<Typewriter
								onInit={(typewriter) => {
									typewriter
										.start()
										.typeString('Greg Schaefer')
										.pauseFor(1000)
										.deleteAll()
										.typeString('Frontend developer')
										.pauseFor(1000)
										.deleteAll()
										.typeString('Backend developer')
										.pauseFor(1000)
										.deleteAll()
										.typeString('Fullstack developer')
										.pauseFor(1000)
										.deleteAll()
										.typeString('Adventurer')
										.pauseFor(1000)
										.deleteAll()
										.typeString('Photographer')
										.pauseFor(1000)
										.deleteAll()
										.typeString('Pretty cool person')
										.pauseFor(1000)
										.deleteAll()
										.typeString('Greg Schaefer')
										.pauseFor(1000)
										.deleteAll()
										.typeString('Frontend developer')
										.pauseFor(1000)
										.deleteAll()
										.typeString('Backend developer')
										.pauseFor(1000)
										.deleteAll()
										.typeString('Fullstack developer')
										.pauseFor(1000)
										.deleteAll()
										.typeString('Adventurer')
										.pauseFor(1000)
										.deleteAll()
										.typeString('Photographer')
										.pauseFor(1000)
										.deleteAll()
										.typeString('Pretty cool person')
										.pauseFor(1000)
										.deleteAll()
										.typeString('Greg Schaefer')
								}}
							/>
						</div>
					</a>{' '}
				</div>

				<div
					className='collapse navbar-collapse'
					id='bs-example-navbar-collapse-1'>
					<ul className='nav navbar-nav navbar-right'>
						<li>
							<a href='#about' className='page-scroll'>
								About
							</a>
						</li>
						<li>
							<a href='#portfolio' className='page-scroll'>
								Projects
							</a>
						</li>
						{/* <li>
							<a href='#services' className='page-scroll'>
								Skillz
							</a>
						</li> */}
						<li>
							<a href='#contact' className='page-scroll'>
								Contact
							</a>
						</li>
						<li>
							<a
								target='_blank'
								rel='noopener noreferrer'
								href='https://drive.google.com/file/d/17L0Ke5xMivBK2J63wt0R6qveh7uPCJ-f/view?usp=sharing'
								className='page-scroll'>
								Resume
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}
