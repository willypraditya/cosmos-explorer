import { useEffect, useState } from 'react';

import { Card, Flex, Spin, Typography } from 'antd';

import { fetchLatestValidators } from '@apis/index';
import { Validator } from '@apis/types/validators';

const Validators = () => {
  const [validatorsLoading, setValidatorsLoading] = useState<boolean>(true);
  const [validatorCount, setValidatorCount] = useState<string | undefined>(undefined);
  const [latestValidators, setLatestValidators] = useState<Validator[] | undefined>(undefined);

  const getData = async () => {
    await fetchLatestValidators().then(async (validatorsData) => {
      setValidatorCount(validatorsData.result.total);
      setLatestValidators(validatorsData.result.validators);
      setValidatorsLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {validatorsLoading ? (
        <Flex justify="center">
          <Spin />
        </Flex>
      ) : (
        <>
          <Flex justify="center" style={{ marginBottom: 32 }}>
            <Typography.Title style={{ margin: 0 }}>Count: {validatorCount}</Typography.Title>
          </Flex>

          <Flex wrap="wrap" gap="middle" justify="space-evenly">
            {latestValidators?.map((item) => (
              <Card style={{ width: 300 }}>
                <Typography>
                  Validator Address:
                  <br /> {item.address}
                </Typography>
                <br />
                <Typography>
                  Voting Power:
                  <br /> {item.voting_power}
                </Typography>
              </Card>
            ))}
          </Flex>
        </>
      )}
    </div>
  );
};

export default Validators;
