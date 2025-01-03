import React, { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

import useFetch from "../hooks/useFetch";
import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/shortenAddress";

// Component to display individual transaction cards
const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, keyword, amount, url }) => {
  // Custom hook to fetch GIF based on keyword
  const gifUrl = useFetch({ keyword });

  return (
    <div className="bg-[#181918] m-4 flex flex-1 flex-col p-3 rounded-md hover:shadow-2xl">
      <div className="flex flex-col items-center w-full mt-3">
        {/* Transaction Details Section */}
        <div className="w-full mb-6 p-2">
          <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">From: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">To: {shortenAddress(addressTo)}</p>
          </a>
          <p className="text-white text-base">Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p className="text-white text-base">Message: {message}</p>
            </>
          )}
        </div>
        
        {/* Transaction GIF */}
        <img src={gifUrl || url} alt="transaction gif" className="w-full h-64 rounded-md" />
        
        {/* Timestamp Display */}
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

// Main Transactions component
const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div className="flex w-full justify-center gradient-bg-transactions">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {/* Conditional Header */}
        <h3 className="text-white text-3xl text-center my-2">
          {currentAccount ? "Latest Transactions" : "Connect your account to see the latest transactions"}
        </h3>

        {/* Transaction Cards Grid */}
        <div className="flex flex-wrap justify-center items-center mt-10">
          {[...dummyData, ...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
