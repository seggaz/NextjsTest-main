// Styled elements for the Card go here
import styled from 'styled-components'

export const StyledCard = styled.div`
	width: 300px;
	padding: 1rem;
	background-color: ${({ highlighted }) => (highlighted ? '#e0f7fa' : '#fff')};
	border: ${({ highlighted }) =>
		highlighted ? '2px solid #00acc1' : '1px solid #ddd'};
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	text-align: left;
	margin: 1rem;
`

export const StyledCardIcon = styled.div`
	margin-bottom: 1rem;
`

export const StyledCardTitle = styled.h3`
	margin: 0 0 0.5rem;
	font-size: 1.5rem;
	color: #333;
`

export const StyledCardDescription = styled.p`
	font-size: 1rem;
	color: #666;
`
