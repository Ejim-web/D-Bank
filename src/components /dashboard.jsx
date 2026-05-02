export default function Dashboard() {
  const transactions = [
    { name: 'Electricity Bill', amount: '-₦12,500', date: 'Today' },
    { name: 'Salary Credit', amount: '+₦250,000', date: 'Yesterday' },
    { name: 'Airtime Top-up', amount: '-₦2,000', date: '2 days ago' }
  ];

  const actions = [
    'Transfer',
    'Airtime',
    'Bills',
    'Savings',
    'Cards',
    'Loans'
  ];

  return (
    <div className="app-container">
      <div className="bank-card">
        <header className="header">
          <h1>D-Bank</h1>
          <p>Modern Digital Banking</p>
        </header>

        <section className="balance-card">
          <p>Available Balance</p>
          <h2>₦458,250</h2>
          <span>Acct No: 8123 4567 890</span>
        </section>

        <section>
          <h3>Quick Actions</h3>
          <div className="actions-grid">
            {actions.map((action, index) => (
              <button key={index}>{action}</button>
            ))}
          </div>
        </section>

        <section>
          <h3>Recent Transactions</h3>
          <div className="transactions">
            {transactions.map((tx, index) => (
              <div key={index} className="transaction-item">
                <div>
                  <p>{tx.name}</p>
                  <span>{tx.date}</span>
                </div>
                <strong>{tx.amount}</strong>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
