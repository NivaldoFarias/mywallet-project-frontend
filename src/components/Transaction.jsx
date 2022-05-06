import { CgArrowsExchangeAlt } from "react-icons/cg";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { AiOutlineInfoCircle } from "react-icons/ai";

import Timeline from "./Timeline";

function Transaction({ transaction, index }) {
  const date = new Date(transaction.date);
  const time = date.toLocaleTimeString("pt-BR").slice(0, 5);
  const day = date.toLocaleDateString("pt-BR").slice(0, 5);

  function buildTransaction() {
    const typeIcon = transactionType();

    return (
      <>
        <div className="transaction__header">
          {typeIcon}
          <div className="transaction__header-date">
            <div className="transaction__header-date__day">{day}</div>
            <div className="transaction__header-date__time">{time}</div>
          </div>
        </div>
        <Timeline index={index} />
        <div className="transaction__info">
          <div className="transaction__info__amount">
            <span>{transaction.amount}</span>
          </div>
          <div className="transaction__info__description">
            <span>{transaction.description}</span>
          </div>
        </div>
      </>
    );

    function transactionType() {
      switch (transaction.type) {
        case "income":
          return (
            <GiReceiveMoney className="transaction__header-icon income-icon" />
          );
        case "expense":
          return (
            <GiPayMoney className="transaction__header-icon expense-icon" />
          );
        case "transfer":
          return (
            <CgArrowsExchangeAlt className="transaction__header-icon transfer-icon" />
          );
        default:
          return (
            <AiOutlineInfoCircle className="transaction__header-icon info-icon" />
          );
      }
    }
  }

  const transactionBody = buildTransaction();

  return <article className="transaction">{transactionBody}</article>;
}

export default Transaction;
