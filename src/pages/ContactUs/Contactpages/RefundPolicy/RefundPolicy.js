import classNames from 'classnames/bind';

import ContactNav from '../../ContactNav';
import styles from './RefundPolicy.module.scss';

const cx = classNames.bind(styles);

function RefundPolicy() {
    const returnsPolicy = [
        {
            title: 'This policy sets out the returns policy for goods or services purchased through the online storeoperated by XXX.',
        },
        {
            title: 'To be eligible for a return, your item must be unused and in the same condition that you received it, and it must be in the original packaging.',
        },
        {
            title: 'Some types of goods are exempt from being returned for a refund where they are perishable (e.g. food, flowers, newspapers, magazines) or where they are intimate or sanitary goods (like underwear), or where they are hazardous materials or flammable liquids or gases.',
        },
        {
            title: 'Other types of services cannot be returned for a refund, for example where the service begins as soon as you make the payment (e.g. a downloadable software product) or a gift card or gift wrapping service',
        },
        {
            title: 'Under the Consumer Contracts Regulations, if you change your mind about a purchase you have made within 14 working days after the date of delivery, you are entitled to a full refund of the original purchase price for the goods or services you wish to return, and the original postage and packaging charges made. You will not be entitled to a refund of the cost you incur in returning the item to us.',
        },
        {
            title: 'Our standard returns policy entitles you to a full refund of the purchase price and postage and packaging charges if you change your mind (i.e. the goods or services provided are not faulty or were not described properly) within 14 working days.',
        },
        {
            title: 'If the item you purchased was faulty or did not work properly, or you think the item was not as described in the item description, please contact us first before requesting a refund as we may be able to resolve your problem to your satisfaction.',
        },
        {
            title: 'Where you would like to return a physical product you have purchased, please contact us to let us know that you will be returning the item. To obtain a refund for a non-physical product (like a service) please contact us for further information about how this can be done.',
        },
        {
            title: "Once your return is received and inspected we'll contact you to let you know whether your refund will be processed or not, and credit your original method of payment, within a certain amount of days.",
        },
        {
            title: "If you haven't received a refund yet where we have told you we have issued one, please check your bank account or card statement to make sure it hasn't been received and then contact your bank as some banks or card companies take a number of days to credit your account.",
        },
        {
            title: 'If an item you purchased was purchased with a discount voucher, then we will only refund the amount that you paid (and not the amount the item was listed for).',
        },
        {
            title: 'If an item you purchased was in a sale then it may not be eligible for a refund if you have changed your mind. If you are in any doubt please contact us before making the purchase.',
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <ContactNav />

            <div className={cx('inner')}>
                <h2 className={cx('title')}>REFUND POLICY</h2>
                <ul className={cx('content')}>
                    {returnsPolicy.map((item, index) => (
                        <li className={cx('policy-item')} key={index}>
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default RefundPolicy;
