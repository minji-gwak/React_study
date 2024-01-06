import styled from 'styled-components';

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const ModalBackground = styled.div`
  width: 100%;
  height: 100vh;
  inset: 0px;
  position: fixed;
  opacity: 0.8;
  background-color: rgb(221, 221, 221);
`;

export const LargeButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  color: ${(props) => (props.$primary ? 'rgb(0, 0, 0)' : 'rgb(214, 48, 49)')};
  height: 50px;
  width: 200px;
  border: 3px solid ${(props) => (props.$primary ? 'rgb(85, 239, 196)' : 'rgb(250, 177, 160)')};
  background-color: ${(props) => (props.$primary ? 'rgb(255, 255, 255)' : 'rgb(255, 255, 255)')};
  font-weight: 600;
`;

export const MediumButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => (props.$primary ? 'rgb(85, 239, 196)' : 'rgb(250, 177, 160)')};
  color: ${(props) => (props.$primary ? 'rgb(0, 0, 0);' : 'rgb(214, 48, 49)')};
  height: 45px;
  width: 130px;
`;

export const SmallButton = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${(props) => (props.$primary ? 'rgb(85, 239, 196)' : 'rgb(250, 177, 160)')};
  color: ${(props) => (props.$primary ? 'rgb(0, 0, 0);' : 'rgb(214, 48, 49)')};
  height: 40px;
  width: 100px;
`;
