import styled from 'styled-components';

const StyledNoteCard = styled.div`
  height: 265px;
  width: 90%;
  position: relative;
  background: #fff;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-radius: 5px;
  box-shadow: 0 3px 6px -3px rgba(0, 0, 0, 0.7);
  transition: all 200ms;
  transform-origin: bottom;
  cursor: pointer;

  &:hover {
    transform: scaleY(1.05);
    background: #24b8bd;
    color: #fff;
  }
  h3 {
    font-weight: 700;
    font-size: 1.8rem;
  }
  span {
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default StyledNoteCard;
