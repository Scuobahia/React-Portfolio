import styled from "styled-components"
 export const Form = styled.section`
 
 `

export const FooterWrapper = styled.section`
	width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;
  font-family: 'Special Elite', cursive;
`

//Creativity... Styles
export const CompanyContainer = styled.div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
    font-family: 'Special Elite', cursive;
`


export const Slogan = styled.p`
	color:var(--secondary-color);
	min-width: 280px;
	letter-spacing: 1em;
	font-size: 20px;
	line-height: 30px;
	padding: 1rem;
`

// Links phone and email
export const LinkItem = styled.a`
	font-size: 25px;
	line-height: 30px;
	color:var(--third-color);
	margin-bottom: 16px;
	transition: .4s ease;
	position: relative;
	left: 0;
	&:hover {
		color:var(--secondary-color);
		left: 10px;
	}
`
// Links Icons

export const SocialIconsContainer = styled.div`
max-width: 1040px;
display: flex;
justify-content: space-between;
`
export const SocialContainer = styled.div`
	display: flex;
  align-items: center;
`
export const LinkList = styled.ul`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  padding: 40px 0 28px;
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`
// Call-Email
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
    font-family: 'Special Elite', cursive;
	font-size: 15px;
    letter-spacing: 0.3em;
	line-height: 30px;
	text-transform: uppercase;
	color:var(--secondary-color);
	margin-bottom: 16px;
`