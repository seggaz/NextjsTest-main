import Image from 'next/image'
import { useRouter } from 'next/router'
import {
	StyledTextContainer,
	StyledContainer,
	StyledGetStartedBtn,
	StyledTitle,
	StyledDescription,
	StyledCTAContainer,
	StyledImageContainer,
} from './elements'

export const Hero = ({ image, title, description, ctaText, ...props }) => {
	const router = useRouter()

	const handleCTAClick = () => {
		router.push('/agency-selection')
	}

	return (
		<StyledContainer {...props}>
			<StyledTextContainer>
				<StyledTitle>{title}</StyledTitle>
				<StyledDescription>{description}</StyledDescription>
				<StyledCTAContainer>
					<StyledGetStartedBtn onClick={handleCTAClick}>
						{ctaText}
					</StyledGetStartedBtn>
				</StyledCTAContainer>
			</StyledTextContainer>
			<StyledImageContainer>
				<Image
					layout='responsive'
					src={image.src}
					alt={image.alt}
					width={image.width}
					height={image.height}
				/>
			</StyledImageContainer>
		</StyledContainer>
	)
}
