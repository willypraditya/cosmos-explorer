export interface Validator {
  address: string;
  pub_key: { type: string; value: string };
  proposer_priority: string;
  voting_power: string;
}

export interface ValidatorResponse {
  height: string;
  result: {
    block_height: string;
    validators: Validator[];
    total: string;
  };
}
