import { useEffect, useState } from 'react';

import { Card, Descriptions, Flex, Skeleton, Spin, Typography } from 'antd';

import { fetchBlockHistoryInfo, fetchLatestBlocks } from '@apis/index';
import { Valset } from '@apis/types/blockHistoryInfo';
import { BlockData } from '@apis/types/blocks';

import formatDate from '@utils/formatDate';

const Blocks = () => {
  const [latestBlocksLoading, setLatestBlocksLoading] = useState<boolean>(true);
  const [latestBlocks, setLatestBlocks] = useState<BlockData | undefined>(undefined);

  const [blockHistoryLoading, setBlockHistoryLoading] = useState<boolean>(true);
  const [blockHistory, setBlockHistory] = useState<Valset[] | undefined>(undefined);

  const getData = async () => {
    await fetchLatestBlocks().then(async (latestBlockData) => {
      setLatestBlocks(latestBlockData.header);
      setLatestBlocksLoading(false);

      await fetchBlockHistoryInfo(parseInt(latestBlockData.header.height, 10)).then((historyData) => {
        setBlockHistory(historyData.hist.valset);
        setBlockHistoryLoading(false);
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Card>
        {latestBlocksLoading ? (
          <Skeleton />
        ) : (
          <div>
            <Descriptions
              title="Current Block"
              items={[
                {
                  key: '1',
                  label: 'Height',
                  children: `#${latestBlocks?.height}`,
                },
                {
                  key: '2',
                  label: 'Time',
                  children: formatDate(latestBlocks?.time),
                },
                {
                  key: '3',
                  label: 'Chain ID',
                  children: latestBlocks?.chain_id,
                },
              ]}
            />
          </div>
        )}
      </Card>

      <div style={{ marginTop: 24 }}>
        <Typography.Title level={4}>Block Historical Info</Typography.Title>
        <Flex wrap="wrap" gap="middle" justify="space-evenly">
          {blockHistoryLoading ? (
            <Spin />
          ) : (
            blockHistory?.map((item) => (
              <Card style={{ width: 300 }}>
                <Typography.Paragraph strong>{item.description.moniker}</Typography.Paragraph>

                <Typography>
                  Operator Address:
                  <br /> {item.operator_address}
                </Typography>
                <br />
                <Typography>
                  Token:
                  <br /> {item.tokens}
                </Typography>
                <br />
                <Typography>
                  Status:
                  <br /> {item.status}
                </Typography>
                <br />
                <Typography>
                  Delegator Shares:
                  <br /> {parseInt(item.delegator_shares, 10)}
                </Typography>

                <Typography>
                  Commission Rates:
                  <br /> {parseFloat(item.commission.commission_rates.rate)}
                </Typography>
              </Card>
            ))
          )}
        </Flex>
      </div>
    </div>
  );
};

export default Blocks;
