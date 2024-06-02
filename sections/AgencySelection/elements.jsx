import styled from 'styled-components'
import { SectionHeading, SectionSubheading } from '~/components'

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: black1B;
	font-family: 'Roboto', sans-serif;
	padding: 3rem 0;
	background-image: url('/img/background.png');
	background-size: 75%;
	background-repeat: no-repeat;
	background-position: left center;
	min-height: 100vh;

	@media (max-width: 768px) {
		background-size: 130%;
		background-position: left 25% top 20%;
	}
`

export const StyledHeaderContainer = styled.div`
	text-align: center;
	margin-bottom: 2rem;
`

export const StyledHeader = styled.h1`
	margin: 0;
	font-size: 2.5rem;

	@media (max-width: 768px) {
		font-size: 1.8rem;
	}
`

export const StyledSubheader = styled.p`
	margin: 0.5rem 0 1rem 0;
	font-size: 1.5rem;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`

export const StyledContentContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 70%;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`

export const StyledVideoContainer = styled.div`
	flex: 1;

	@media (max-width: 768px) {
		margin-right: 0;
		margin-bottom: 2rem;
		width: 100%;
		height: auto;
	}
`

export const StyledCardsContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	line-height: 1.5;
	width: 100%;
`

export const StyledCard = styled.div`
	display: flex;
	align-items: center;
	margin-top: 2rem;
	padding: 1.5rem;
	border: 1px solid #ccc;
	border-radius: 5px;
	background: ${props => props.theme.grayE2};
	cursor: pointer;
	box-shadow: ${props => (props.active ? `0 0 10px #006EFD` : 'none')};
	transition: all 0.3s ease-in-out;
	width: 80%;

	@media (max-width: 1024px) {
		max-height: 2.5rem;
		margin-top: 1.2rem;
		padding: 2rem;
	}

	@media (max-width: 768px) {
		max-height: 5rem;
		width: 90%;
	}
`

export const StyledCardContent = styled.div`
	display: flex;
	flex-direction: column;
	line-height: 1.2;
`

export const StyledCardTitle = styled.h3`
	margin: 0;
	font-size: 1.3rem;

	@media (max-width: 1024px) {
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		font-size: 1.1rem;
	}
`

export const StyledCardDescription = styled.p`
	margin: 0.5rem 0 0;
	font-size: 1.1rem;

	@media (max-width: 1024px) {
		font-size: 0.8rem;
	}

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`

export const StyledCardIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 1.5rem;

	img {
		width: 100%;
		height: auto;
	}
`
