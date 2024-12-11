import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardTitle from '../Card/CardTitle';
import CardContent from '../Card/CardContent';
import Button from '../Button/Button';
import qrCodeImage from '../../data/test qr code.png';


const CouponActions = ({ onRefresh }) => {
  const navigate = useNavigate();

  const handleGenerateCoupons = () => {
    navigate('/generate-coupons');
  };

  const [showQr, setShowQr] = useState(false);
  const onShowQr = () => {
    setShowQr((prevShowQr) => !prevShowQr);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Coupon Actions</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4">
        <Button variant="outline" onClick={onShowQr}>
          <span>🔍</span> {showQr ? 'Hide QR Code' : 'Show QR Code'}
        </Button>
        <Button variant="secondary" onClick={onRefresh}>
          <span>🔄</span> Refresh Coupons
        </Button>
        <Button variant="secondary" onClick={handleGenerateCoupons}>
          <span>🧾</span> Generate Coupons
        </Button>
      </CardContent>
      {showQr && (
        <div className="mt-4 text-center">
          <img src={qrCodeImage} alt="QR Code" className="w-40 mx-auto" />
        </div>
      )}
    </Card>
  );
};

export default CouponActions;