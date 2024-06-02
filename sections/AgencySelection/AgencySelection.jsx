import React, { useState } from 'react'
import {
	StyledContainer,
	StyledHeaderContainer,
	StyledHeader,
	StyledSubheader,
	StyledContentContainer,
	StyledVideoContainer,
	StyledCardsContainer,
	StyledCard,
	StyledCardIcon,
	StyledCardContent,
	StyledCardTitle,
	StyledCardDescription,
} from './elements'
import Image from 'next/image'

export const AgencySelection = () => {
	const [activeCard, setActiveCard] = useState('Brief')

	const handleCardClick = card => {
		setActiveCard(card)
	}

	const cardData = {
		Brief: {
			title: 'Brief',
			description:
				"Complete <b>brief writing or simple guidance</b> on what to include, we've got you covered.",
			icon: '/img/brief.png',
		},
		Search: {
			title: 'Search',
			description:
				'In-depth agency search covering; <b>criteria matching</b>, door knocking and due-diligence vetting.',
			icon: '/img/search.png',
		},
		Pitch: {
			title: 'Pitch',
			description:
				'Comprehensive <b>pitch management</b>, including comms, diary management and pitch hosting.',
			icon: '/img/pitch.png',
		},
	}

	return (
		<StyledContainer>
			<StyledHeaderContainer>
				<StyledHeader>Managed agency selection</StyledHeader>
				<StyledSubheader>Strengthen your onboarding process</StyledSubheader>
			</StyledHeaderContainer>
			<StyledContentContainer>
				<StyledVideoContainer>
					<Image
						src='/img/video.png'
						alt='Video'
						layout='responsive'
						width={600}
						height={700}
						objectFit='contain'
					/>
				</StyledVideoContainer>
				<StyledCardsContainer>
					{Object.keys(cardData).map(key => (
						<StyledCard
							key={key}
							active={activeCard === key}
							onClick={() => handleCardClick(key)}
						>
							<StyledCardIcon>
								<Image
									src={cardData[key].icon}
									alt={cardData[key].title}
									width={120}
									height={120}
								/>
							</StyledCardIcon>
							<StyledCardContent>
								<a
									href={`#${key}`}
									style={{
										textDecoration:
											activeCard === key ? 'underline #006EFD' : 'none',
									}}
								>
									<StyledCardTitle
										style={{
											color: activeCard === key ? '#006EFD' : '#333',
										}}
									>
										{cardData[key].title}
									</StyledCardTitle>
								</a>
								<StyledCardDescription
									dangerouslySetInnerHTML={{
										__html: cardData[key].description,
									}}
								/>
							</StyledCardContent>
						</StyledCard>
					))}
				</StyledCardsContainer>
			</StyledContentContainer>
		</StyledContainer>
	)
}
