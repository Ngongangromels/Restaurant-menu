import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	// add a state variable here
     const [accordion, setAccordion] = useState(false)

	 const handelOpenAccordion = () => {
		setAccordion(!accordion)
	 }
	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}
				<button className="btn" onClick={handelOpenAccordion}>{accordion ? "-" :"+"}</button>
			</header>
			{accordion && <p>{info}</p>}
			
		</article>
	)
}

export default Question