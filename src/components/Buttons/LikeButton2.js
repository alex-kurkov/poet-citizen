import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const LikeBtn = styled.button`
 border: 0;
 pointer-events: cursor;
 &:hover {
  opacity: .65;
}
`;

const LikeButton2 = ({ onClick, liked }) => (
  <LikeBtn onClick={onClick}>
    <svg
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.15625 13.0688C0.0625 13.8188 0 14.5813 0 15.3563C0 22.1688 3.73125 28.1 9.25625 31.2438L10.2875 29.0688V14.2125L9.14375 13.0688H0.15625ZM32 14.2125C32 13.0688 30.8562 11.925 29.7125 11.925H20.5688C21.1375 9.6375 21.7125 7.35625 21.7125 6.2125C21.7125 3.925 20.5688 1.64375 20 1.06875C19.9875 1.05625 19.4312 0.5 18.2875 0.5C16.575 0.5 16.575 2.2125 16.575 2.2125C16.575 2.24375 16.0063 5.06875 16.0063 6.2125C16.0063 7.35625 13.7188 11.925 12.575 13.0688L11.4312 13.6375V29.6375L12.575 30.2063H25.1437C27.4312 30.2063 28.575 29.0625 28.575 27.9188C28.575 26.775 27.4312 25.6313 26.2875 25.6313C28.575 25.6313 29.7188 24.4875 29.7188 23.3438C29.7188 22.2 28.575 21.0563 27.4312 21.0563C29.7188 21.0563 30.8625 19.9125 30.8625 18.7688C30.8625 17.625 29.7188 16.4813 28.575 16.4813C30.8563 16.5 32 15.3563 32 14.2125Z'
        fill={liked ? 'orange' : 'black'}
      />
    </svg>
  </LikeBtn>
);

LikeButton2.propTypes = {
  onClick: PropTypes.func,
};

export default LikeButton2;
