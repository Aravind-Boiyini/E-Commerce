import { useState } from "react";
import Expenses from "./Expenses";
import Income from "./Income";
import BalanceSheet from "./BalanceSheet";

const Finance = () => {
  const [activeTab, setActiveTab] = useState("expenses");

  const renderComponent = () => {
    switch (activeTab) {
      case "expenses":
        return <Expenses />;
      case "income":
        return <Income />;
      case "balance":
        return <BalanceSheet />;
      default:
        return <Expenses />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav Bar */}
      <div className="bg-white shadow-md">
        <div className="flex space-x-8 px-8 py-4 border-b">
          <button
            className={`text-gray-700 font-medium ${
              activeTab === "expenses"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("expenses")}
          >
            Expenses
          </button>
          <button
            className={`text-gray-700 font-medium ${
              activeTab === "income"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("income")}
          >
            Income
          </button>
          <button
            className={`text-gray-700 font-medium ${
              activeTab === "balance"
                ? "border-b-2 border-blue-500 text-blue-600"
                : "hover:text-blue-500"
            }`}
            onClick={() => setActiveTab("balance")}
          >
            Balance Sheet
          </button>
        </div>
      </div>

      {/* Component display */}
      <div className="p-8">{renderComponent()}</div>
    </div>
  );
};

export default Finance;
