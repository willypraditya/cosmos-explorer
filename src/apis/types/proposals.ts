export enum ProposalStatusEnum {
  PROPOSAL_STATUS_PASSED = 'Passed',
  PROPOSAL_STATUS_REJECTED = 'Rejected',
  PROPOSAL_STATUS_VOTING_PERIOD = 'In Voting',
}

export interface Proposal {
  proposal_id: string;
  content: {
    '@type': string;
    title: string;
    description: string;
  };
  status: 'PROPOSAL_STATUS_PASSED' | 'PROPOSAL_STATUS_REJECTED' | 'PROPOSAL_STATUS_VOTING_PERIOD';
  final_tally_result: {
    yes: string;
    abstain: string;
    no: string;
    no_with_veto: string;
  };
  submit_time: string;
  deposit_end_time: string;
  total_deposit: {
    denom: string;
    amount: string;
  }[];
  voting_start_time: string;
  voting_end_time: string;
}

export interface ProposalResponse {
  proposals: Proposal[];
}
