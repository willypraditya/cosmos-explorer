import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card, Typography } from 'antd';

interface SummaryCardProps {
  icon: ReactElement;
  label: string;
  href: string;
}

const SummaryCard = ({ icon, label, href }: SummaryCardProps) => {
  const navigate = useNavigate();

  const onClickCard = () => {
    navigate(href);
  };

  return (
    <Card style={{ width: 200, maxWidth: 200, textAlign: 'center' }} hoverable onClick={onClickCard}>
      {icon}
      <div style={{ marginTop: 10 }}>
        <Typography>{label}</Typography>
      </div>
    </Card>
  );
};

export default SummaryCard;
