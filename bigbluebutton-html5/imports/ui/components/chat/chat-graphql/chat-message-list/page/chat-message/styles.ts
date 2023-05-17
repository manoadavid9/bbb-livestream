import styled, { css } from 'styled-components';

import {
  borderSize,
  userIndicatorsOffset,
} from '/imports/ui/stylesheets/styled-components/general';
import {
  colorWhite,
  userListBg,
  colorSuccess,
  colorHeading,
  palettePlaceholderText,
  colorGrayLight,
  colorText
} from '/imports/ui/stylesheets/styled-components/palette';
import {
  lineHeightComputed,
  fontSizeBase,
  btnFontWeight,
} from '/imports/ui/stylesheets/styled-components/typography';

export const ChatWrapper = styled.div`
  
  pointer-events: auto;
  [dir="rtl"] & {
    direction: rtl;
  }
  display: flex;
  flex-flow: row;
  position: relative;
  ${({ sameSender }) => sameSender && `
    flex: 1;
    margin: ${borderSize} 0 0 ${borderSize};
    margin-top: calc(${lineHeightComputed} / 3);
  `}
  ${({ sameSender }) => !sameSender && `
    padding-top:${lineHeightComputed};
  `}
  [dir="rtl"] & {
    margin: ${borderSize} ${borderSize} 0 0;
  }
  font-size: ${fontSizeBase};
`;



export const ChatUserContent = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
`;

export const ChatUserName = styled.div`
  display: flex;
  min-width: 0;
  font-weight: 600;
  position: relative;

  min-width: 0;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;

  ${({ isOnline }) => isOnline && `
    color: ${colorHeading};
  `}

  ${({ isOnline }) => !isOnline && `
    text-transform: capitalize;
    font-style: italic;

    & > span {
      text-align: right;
      padding: 0 .1rem 0 0;

      [dir="rtl"] & {
        text-align: left;
        padding: 0 0 0 .1rem;
      }
    }
  `}
`;

export const ChatUserOffline = styled.span`
  color: ${colorGrayLight};
  font-weight: 100;
  text-transform: lowercase;
  font-style: italic;
  font-size: 90%;
  line-height: 1;
  align-self: flex-end;
  user-select: none;
`;

export const ChatTime = styled.time`
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 3.5rem;
  color: ${palettePlaceholderText};
  text-transform: uppercase;
  font-size: 75%;
  margin: 0 0 0 calc(${lineHeightComputed} / 2);
  align-self: flex-end;
  [dir="rtl"] & {
    margin: 0 calc(${lineHeightComputed} / 2) 0 0;
  }

  & > span {
    vertical-align: sub;
  }
`;

export const ChatContent = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`

export const ChatMessage = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row;
  color: ${colorText};
  word-break: break-word;
  ${({ sameSender }) => sameSender && `
    margin-left: calc(2.75rem - 2px);
  `}
  ${({ emphasizedMessage }) => emphasizedMessage && `
    font-weight: bold;
  `}
`;


export const ChatAvatar = styled.div`
  flex: 0 0 2.25rem;
  margin: 0px calc(0.5rem) 0px 0px;
  box-flex: 0;
  position: relative;
  height: 2.25rem;
  width: 2.25rem;
  border-radius: 50%;
  text-align: center;
  font-size: .85rem;
  border: 2px solid transparent;
  user-select: none;
  ${
  ({ color }) => css`
    background-color: ${color};
  `}
  }

  &:after,
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    padding-top: .5rem;
    padding-right: 0;
    padding-left: 0;
    padding-bottom: 0;
    color: inherit;
    top: auto;
    left: auto;
    bottom: ${userIndicatorsOffset};
    right: ${userIndicatorsOffset};
    border: 1.5px solid ${userListBg};
    border-radius: 50%;
    background-color: ${colorSuccess};
    color: ${colorWhite};
    opacity: 0;
    font-family: 'bbb-icons';
    font-size: .65rem;
    line-height: 0;
    text-align: center;
    vertical-align: middle;
    letter-spacing: -.65rem;
    z-index: 1;

    [dir="rtl"] & {
      left: ${userIndicatorsOffset};
      right: auto;
      padding-right: .65rem;
      padding-left: 0;
    }
  }

  ${({ moderator }) => moderator && `
    border-radius: 5px;
  `}

  // ================ image ================
  ${({ avatar, emoji }) => avatar?.length !== 0 && !emoji && css`
    background-image: url(${avatar});
    background-repeat: no-repeat;
    background-size: contain;
  `}
  // ================ image ================

  // ================ content ================
  color: ${colorWhite};
  font-size: 110%;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items:center;  
  // ================ content ================

  & .react-loading-skeleton {    
    height: 2.25rem;
    width: 2.25rem;
  }
`;