/* eslint-disable import/prefer-default-export */
import getClient from './client';
import { BlockHistoryResponse } from './types/blockHistoryInfo';
import { BlockResponse } from './types/blocks';
import { ProposalResponse } from './types/proposals';
import { ValidatorResponse } from './types/validators';

const client = getClient();

// Sample Fetching

export const fetchLatestBlocks = async (): Promise<BlockResponse> => {
  const response = await client.get('/blocks/latest');
  return response.data.block;
};

export const fetchBlockHistoryInfo = async (height: number): Promise<BlockHistoryResponse> => {
  const response = await client.get(`/cosmos/staking/v1beta1/historical_info/${height}`);
  return response.data;
};

export const fetchLatestValidators = async (): Promise<ValidatorResponse> => {
  const response = await client.get('/validatorsets/latest');
  return response.data;
};

export const fetchProposals = async (): Promise<ProposalResponse> => {
  const response = await client.get('/cosmos/gov/v1beta1/proposals', {
    params: {
      limit: 50,
      'pagination.reverse': true,
    },
  });
  return response.data;
};
