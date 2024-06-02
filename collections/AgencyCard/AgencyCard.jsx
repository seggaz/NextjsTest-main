// The Card to be exported goes here
import {
	StyledCard,
	StyledCardIcon,
	StyledCardTitle,
	StyledCardDescription,
} from './elements'
import Image from 'next/image'

export const AgencyCard = ({ title, description, icon, highlighted }) => {
	return (
		<StyledCard highlighted={highlighted}>
			<StyledCardIcon>
				<Image src={icon} alt={`${title} icon`} width={50} height={50} />
			</StyledCardIcon>
			<StyledCardTitle>{title}</StyledCardTitle>
			<StyledCardDescription>{description}</StyledCardDescription>
		</StyledCard>
	)
}
