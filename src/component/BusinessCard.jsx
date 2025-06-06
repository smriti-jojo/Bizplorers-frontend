import React from "react";

const BusinessCard = ({ business }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold">{business.name}</h2>
          <p className="text-gray-600 mt-1">{business.description}</p>
          <div className="flex gap-4 mt-2 text-sm text-gray-500">
            <p>👥 Team Size: {business.teamSize}</p>
            <p>📅 Since: {business.startDate}</p>
          </div>
        </div>
        {business.tag && (
          <span className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded">
            {business.tag}
          </span>
        )}
      </div>
      <div className="flex justify-between mt-4 text-sm text-gray-700">
        <p>💰 Revenue: ₹{business.monthlyRevenue}</p>
        <p>📈 Profit: ₹{business.monthlyProfit}</p>
      </div>
    </div>
  );
};

export default BusinessCard;
