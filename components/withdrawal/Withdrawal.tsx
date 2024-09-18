import React from 'react';

const Withdrawal = () => {
  const articles = [
    { title: "Users cannot stack rewards for this promotion with Invite Friends or Fortune Wheel promotion, or CandyBomb promotion with referral pools, or any task involving referrals. If you have joined other promotions, the data from those promotions won't be counted toward this one." },
    { title: "Trading task 1: When an invitee reaches 500 USDT in spot and futures trading volume within 15 days of signing up and also reaches 200 USDT in net deposits during the same period (maintain for 3 days), both the invitee and inviter will receive a Mystery Box and 15 USDT in futures trading bonuses." },
    { title: "Trading task 2: When the invitee completes the trading task during the trading task period and reaches a total spot and futures trading volume of over 25,000 USDT, the invitee and inviter will each receive another Mystery Box and 15 USDT in futures trading bonuses." },
    { title: "Participants can earn rewards for both Trading task 1 and Trading task 2. When your friend completes the trading task with a volume of 500 USDT, you both will be rewarded. If your friend's trading volume reaches 25,000 USDT, you both still qualify for the rewards." },
    { title: "Supported deposit methods include on-chain deposit, fiat deposit, card deposit, P2P trading, and third-party payments. Internal transfers and Pop Grabs won't be accepted." },
    { title: "The total futures and spot trading volume generated after signing up will both be counted towards the invitee's trading volume. The trading volume of stablecoin trading pairs will not be included." },
    { title: "Note: The Mystery Box includes USDT cash rewards, futures trading bonuses, and spot transaction fee coupons. Spot transaction fee coupons provide a 50% discount, and both futures trading bonuses and the Mystery Box must be claimed and used within 7 days. Make sure you claim and use your rewards before they expire." },
    { title: "Rewards will be reviewed and distributed within three working days after you receive them, and you can track the progress in your invitation history. If the reward is labeled as Ineligible, it means that the invitee does not meet the requirements after the review. Contact customer service if you have any questions." },
    { title: "During reward distribution, the system will automatically verify whether both parties (inviter and invitee) use special accounts (affiliate, market maker, and broker). If a special account is detected, the reward will not be distributed to prevent overlap with affiliate program rebates. Additionally, please note that sub-accounts cannot be used as independent accounts for participation in promotions, and their data will not be consolidated with the main account." },
    { title: "The invitee must be a newly registered Grimace user to qualify as an eligible invitation." },
    { title: "Grimace will conduct a thorough review of all users and promptly disqualify those who employ any technical means, including but not limited to electronic, robotic, repetitive, or automated methods for the purpose of automated or repeated registration. Such disqualification will be enforced even if users employ malicious means for only part of their registration or participation. The use of any misleading statements, including but not limited to making any search engine optimization efforts using keywords like 'Grimace Buy,' 'Grimace Login,' 'Grimace Official,' and 'Grimace P2P,' will result in disqualification from this promotion." },
    { title: "The aforementioned rules are effective from 2024-05-08 19:00 (UTC+8). Grimace reserves the right of final interpretation of this promotion and the right to take action against user accounts and their assets in the event of any malicious acts or abuse of platform vulnerabilities. Note that Apple is not a sponsor of this promotion." },
  ];

  return (
    <div className=' hidden  text-white mt-10 px-[10%] md:flex md:flex-col md:gap-6'>
      <h2 className=' text-3xl'>Withdrawal</h2>
      <ul className=' list-disc px-[4%] text-[#A1A1A1]	'>
        {articles.map((article, index) => (
          <li key={index} className="mb-4">
            {article.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Withdrawal;
