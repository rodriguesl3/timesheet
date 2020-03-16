import styled from 'styled-components';

export const WalletCompanyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const DetailConainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SpikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
  padding-left: 15px;
  padding-right: 15px;
  border-bottom: 1px solid lightgray;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  background-color: white;

  .symbol-description {
    padding-left: 12px;
  }
  .spike-arrow {
    /* margin-left: 5px; */
  }
`;

export const WalletCompaniesLogos = styled.img`
  border: 2px solid;
  border-radius: 125px;
  width: 50px;
`;

export const WalletCompanyName = styled.p`
  font-weight: bolder;
  text-decoration: underline;
  margin: 5px;
`;

export const WalletTitle = styled.h1`
  margin: 20px;
  text-align: center;
  /* justify-content: center; */
`;
