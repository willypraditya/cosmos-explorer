import { useEffect, useState } from 'react';
import Countdown from 'react-countdown';

import { Card, Flex, Spin, Typography } from 'antd';

import { fetchProposals } from '@apis/index';
import { Proposal, ProposalStatusEnum } from '@apis/types/proposals';

const Proposals = () => {
  const [proposalLoading, setProposalLoading] = useState<boolean>(true);
  const [proposals, setProposals] = useState<Proposal[] | undefined>(undefined);

  const getData = async () => {
    await fetchProposals().then(async (proposalData) => {
      setProposals(proposalData.proposals);
      setProposalLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {proposalLoading ? (
        <Flex justify="center">
          <Spin />
        </Flex>
      ) : (
        <>
          <Typography.Paragraph>Showing the latest 50 proposals</Typography.Paragraph>
          <Flex wrap="wrap" gap="middle" justify="space-evenly">
            {proposals?.map((item) => (
              <Card style={{ width: 300 }} key={item.proposal_id}>
                <Typography.Paragraph strong style={{ margin: 0 }}>
                  {item.proposal_id} - {item.content.title}
                </Typography.Paragraph>
                <br />
                <Typography.Text type="success">{item.content['@type']}</Typography.Text>
                <br />
                <br />
                <Typography>Status: {ProposalStatusEnum[item.status]}</Typography>
                {item.status === 'PROPOSAL_STATUS_VOTING_PERIOD' && (
                  <Typography>
                    Ends in <Countdown date={item.voting_end_time} />
                  </Typography>
                )}
              </Card>
            ))}
          </Flex>
        </>
      )}
    </div>
  );
};

export default Proposals;
