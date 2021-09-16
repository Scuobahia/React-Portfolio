import styled from 'styled-components';
// Image Styles
export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`
// Card Container
export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 3rem;
row-gap: 5rem;
`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

// Card Title
export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 3px;
  color:var(--secondary-color);
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;
// Line divider between card title and description
export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background:var(--fourth-color);
`;

export const CardInfo = styled.p`
  width: 100%;
  color:white;
  line-height: 30px;
  text-align: center;
`;

// Container for the Link buttons
export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;
// Link buttons for the projects
export const ExternalLinks = styled.a`
color:var(--primary-color);
text-decoration:none;
font-size: 1.5rem;
padding:1rem 1.5rem;
background:var(--third-color);
border-radius: 15px;
transition: 0.5s;
&:hover{
  background:var(--secondary-color);
}
`;
// Technologies use tags
export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color:black;
font-size: 1rem;
list-style:none;
`