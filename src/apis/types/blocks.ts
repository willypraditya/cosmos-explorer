export interface BlockData {
  version: string;
  chain_id: string;
  height: string;
  time: string;
  last_block_id: {
    hash: string;
    parts: {
      total: number;
      hash: string;
    };
  };
  last_commit_hash: string;
  data_hash: string;
  validators_hash: string;
  next_validators_hash: string;
  consensus_hash: string;
  app_hash: string;
  last_results_hash: string;
  evidence_hash: string;
  proposer_address: string;
}

export interface BlockResponse {
  header: BlockData;
  data: {
    txs: string[];
  };
}
