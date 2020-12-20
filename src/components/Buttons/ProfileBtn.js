import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const ProfileButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background: none;
  align-self: center;
  margin-left: 32px;
  transition: all ease-in-out .3s;
  &:hover {
    opacity: .7;
    transform: scale(1.2);
  }
`;

const ProfileBtn = ({ onClick }) => (
  <ProfileButton onClick={onClick}>
    <svg width="100%" height="100%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25C50 31.6304 47.3661 37.9892 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9892 0 31.6304 0 25ZM25 3.72666C20.8968 3.72712 16.8813 4.9142 13.4375 7.14483C9.99358 9.37546 7.26827 12.5544 5.58998 16.2987C3.91168 20.0429 3.35202 24.1926 3.97843 28.2477C4.60485 32.3028 6.39061 36.0902 9.12051 39.1534C10.9247 36.6247 13.3072 34.5637 16.0694 33.1423C18.8316 31.721 21.8935 30.9804 25 30.9823C31.5511 30.9823 37.3411 34.2068 40.8834 39.1534C43.6123 36.0898 45.397 32.3024 46.0226 28.2476C46.6482 24.1928 46.0879 20.0437 44.4093 16.3C42.7307 12.5564 40.0053 9.378 36.5616 7.14786C33.1179 4.91772 29.1028 3.73096 25 3.73058V3.72666ZM38.1375 41.7307C36.6954 39.5691 34.7414 37.7974 32.4495 36.573C30.1575 35.3487 27.5985 34.7097 25 34.7128C22.4018 34.7108 19.8434 35.3507 17.5521 36.5757C15.2608 37.8007 13.3077 39.5729 11.8665 41.7346C15.6089 44.6826 20.2359 46.283 25 46.2772C29.7654 46.2839 34.3939 44.6835 38.1375 41.7346V41.7307ZM15.7814 21.0968C15.7814 18.6519 16.7527 16.3071 18.4815 14.5783C20.2103 12.8495 22.5551 11.8782 25 11.8782C27.4449 11.8782 29.7897 12.8495 31.5185 14.5783C33.2473 16.3071 34.2186 18.6519 34.2186 21.0968C34.2186 23.5417 33.2473 25.8865 31.5185 27.6153C29.7897 29.3441 27.4449 30.3154 25 30.3154C22.5551 30.3154 20.2103 29.3441 18.4815 27.6153C16.7527 25.8865 15.7814 23.5417 15.7814 21.0968ZM25 15.6049C24.2788 15.6049 23.5646 15.7469 22.8983 16.0229C22.232 16.2989 21.6266 16.7035 21.1166 17.2134C20.6067 17.7234 20.2021 18.3288 19.9261 18.9951C19.6501 19.6615 19.5081 20.3756 19.5081 21.0968C19.5081 21.818 19.6501 22.5322 19.9261 23.1985C20.2021 23.8648 20.6067 24.4702 21.1166 24.9802C21.6266 25.4901 22.232 25.8947 22.8983 26.1707C23.5646 26.4467 24.2788 26.5887 25 26.5887C26.4565 26.5887 27.8534 26.0101 28.8834 24.9802C29.9133 23.9502 30.4919 22.5534 30.4919 21.0968C30.4919 19.6403 29.9133 18.2434 28.8834 17.2134C27.8534 16.1835 26.4565 15.6049 25 15.6049Z" fill="#000"/>
    </svg>
  </ProfileButton>
);

ProfileBtn.ProfileBtn = {
  onClick: PropTypes.func,
};

export default ProfileBtn;
