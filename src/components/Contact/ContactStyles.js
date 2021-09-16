import styled from 'styled-components';

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 5rem;
  padding: 1rem;
  padding-top: 2rem;
  color:var(--secondary-color);
  font-size: 1rem;
	line-height: 30px;

`;
export const Form = styled.div`

`
export const Label = styled.div`

`
export const Input = styled.div`

`
export const Button = styled.button`
background-color:var(--third-color);
border: none;
border-radius:10px;
color: white;
margin-left:20px;
padding: 10px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
color:var(--main-color);
transition: 0.5s;
&:hover{
  background:var(--secondary-color);
}
`
