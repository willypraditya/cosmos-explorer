export interface Valset {
  operator_address: string;
  consensus_pubkey: { key: string };
  jailed: boolean;
  status: string;
  tokens: string;
  delegator_shares: string;
  description: {
    moniker: string;
    identity: string;
    website: string;
    security_contact: string;
    details: string;
  };
  unbonding_height: string;
  unbonding_time: string;
  commission: {
    commission_rates: {
      rate: string;
      max_rate: string;
      max_change_rate: string;
    };
    update_time: string;
  };
  min_self_delegation: string;
  unbonding_on_hold_ref_count: string;
  unbonding_ids: any[];
  validator_bond_shares: string;
  liquid_shares: string;
}

export interface BlockHistoryResponse {
  hist: {
    valset: Valset[];
  };
}
