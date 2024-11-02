import React from 'react';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardTitle from '../Card/CardTitle';
import CardContent from '../Card/CardContent';
import Button from '../Button/Button';

const CouponActions = ({ onRefresh, onShowQr }) => (
  <Card>
    <CardHeader>
      <CardTitle>Coupon Actions</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-wrap gap-4">
      <Button variant="outline" onClick={onShowQr}>
        <span>🔍</span> Show QR Code
      </Button>
      <Button variant="secondary" onClick={onRefresh}>
        <span>🔄</span> Refresh Coupons
      </Button>
    </CardContent>
  </Card>
);

export default CouponActions;
