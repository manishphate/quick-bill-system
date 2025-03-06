import React, { useState } from 'react';
import { Search, Info, Edit2, Plus, X, Upload } from 'lucide-react';
import styles from './Invoice.module.css';

function Invoice() {
  const [items, setItems] = useState([
    { id: 1, details: '', quantity: 1.00, rate: 0.00, discount: 0, amount: 0.00 }
  ]);

  const handleAddRow = () => {
    const newItem = {
      id: items.length + 1,
      details: '',
      quantity: 1.00,
      rate: 0.00,
      discount: 0,
      amount: 0.00
    };
    setItems([...items, newItem]);
  };

  const handleRemoveItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div className={styles.invoiceContainer}>
      <div className={styles.invoiceForm}>
        {/* Customer Information */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Customer Name<span className={styles.required}>*</span>
            </label>
            <div className={styles.selectWrapper}>
              <select className={styles.formSelect}>
                <option>Select or add a customer</option>
              </select>
              <Search size={16} className={styles.searchIcon} />
            </div>
          </div>
        </div>

        {/* Invoice Details */}
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Invoice#<span className={styles.required}>*</span>
            </label>
            <div className={styles.inputWithIcon}>
              <input
                type="text"
                className={styles.formInput}
                // value=""   // There you need to pass the value for invoice
                // Caluculate subtotal
              />
              <button className={styles.iconButton}>
                <Edit2 size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Order Number</label>
            <input
              type="text"
              className={styles.formInput}
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Invoice Date<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              className={styles.formInput}
              // value="" // there is the value for invoice date
              // Caluculate subtotal
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Terms</label>
            <div className={styles.selectWrapper}>
              <select className={styles.formSelect}>
                <option>Due On Receipt</option>
              </select>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Due Date</label>
            <input
              type="text"
              className={styles.formInput}
              // value=""  // there is the value for due date
              // Caluculate subtotal
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Salesperson</label>
            <div className={styles.selectWrapper}>
              <select className={styles.formSelect}>
                <option>Select or Add Salesperson</option>
              </select>
            </div>
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>
              Subject <Info size={14} className={styles.infoIcon} />
            </label>
            <div className={styles.inputWithIcon}>
              <input
                type="text"
                className={styles.formInput}
                placeholder="Let your customer know what this Invoice is for"
              />
              <button className={styles.iconButton}>
                <Edit2 size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Line Items Section */}
        <div className={styles.lineItemsSection}>
          <div className={styles.lineItemHeader}>
            <span className={styles.lineItemToggle}>
              <span className={styles.lineItemDot}></span>
              At Line Item Level
            </span>
          </div>

          <div className={styles.itemTable}>
            <div className={styles.tableHeader}>
              <h3>Item Table</h3>
              <div className={styles.tableActions}>
                <button className={styles.tableAction}>
                  <span className={styles.scanIcon}></span> Scan Item
                </button>
                <button className={styles.tableAction}>
                  <span className={styles.bulkIcon}></span> Bulk Actions
                </button>
              </div>
            </div>

            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.itemDetailsColumn}>ITEM DETAILS</th>
                  <th>QUANTITY</th>
                  <th>RATE <span className={styles.sortIcon}></span></th>
                  <th>DISCOUNT</th>
                  <th>AMOUNT</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <input
                        type="text"
                        className={styles.tableInput}
                        placeholder="Type or click to select an item."
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className={styles.tableInput}
                        // value={item.quantity}
                        Caluculate subtotal={(e) => {
                          const updatedItems = [...items];
                          const index = updatedItems.findIndex(i => i.id === item.id);
                          updatedItems[index].quantity = parseFloat(e.target.value);
                          setItems(updatedItems);
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className={styles.tableInput}
                        // value={item.rate}
                        Caluculate subtotal={(e) => {
                          const updatedItems = [...items];
                          const index = updatedItems.findIndex(i => i.id === item.id);
                          updatedItems[index].rate = parseFloat(e.target.value);
                          setItems(updatedItems);
                        }}
                      />
                    </td>
                    <td className={styles.discountCell}>
                      <input
                        type="number"
                        className={styles.tableInput}
                        // value={item.discount}
                        Caluculate subtotal={(e) => {
                          const updatedItems = [...items];
                          const index = updatedItems.findIndex(i => i.id === item.id);
                          updatedItems[index].discount = parseInt(e.target.value);
                          setItems(updatedItems);
                        }}
                      />
                      <select className={styles.discountType}>
                        <option>%</option>
                        <option>$</option>
                      </select>
                    </td>
                    <td className={styles.amountCell}>
                      {item.amount.toFixed(2)}
                    </td>
                    <td>
                      <button
                        className={styles.deleteButton}
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <X size={14} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={styles.tableActions}>
              <button className={styles.addButton} onClick={handleAddRow}>
                <Plus size={14} /> Add New Row
              </button>
              <button className={styles.addBulkButton}>
                <Plus size={14} /> Add Items in Bulk
              </button>
            </div>

            {/* Totals Section */}
            <div className={styles.totalsSection}>
              <div className={styles.totalsLeft}>
                <div className={styles.taxOptions}>
                  <label className={styles.taxOption}>
                    <input type="radio" name="taxType" /> TDS
                  </label>
                  <label className={styles.taxOption}>
                    <input type="radio" name="taxType" /> TCS
                  </label>
                </div>
                <div className={styles.taxSelectWrapper}>
                  <select className={styles.taxSelect}>
                    <option>Select a Tax</option>
                  </select>
                </div>
                <div className={styles.adjustmentRow}>
                  <span className={styles.adjustmentLabel}>Adjustment</span>
                  <input type="text" className={styles.adjustmentInput} />
                  <span className={styles.adjustmentInfo}>(+/-)</span>
                </div>
              </div>
              <div className={styles.totalsRight}>
                <div className={styles.totalRow}>
                  <span>Sub Total</span>
                  <span className={styles.totalAmount}>CaluculateSubtotal</span>
                </div>
                <div className={styles.totalRow}>
                  <span>- 0.00</span>
                  <span className={styles.totalAmount}>0.00</span>
                </div>
                <div className={styles.totalRow}>
                  <span className={styles.totalLabel}>Total ( ₹ )</span>
                  <span className={styles.grandTotal}>0.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Notes */}
        <div className={styles.notesSection}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Customer Notes</label>
            <div className={styles.textareaWithIcon}>
              <textarea
                placeholder='Thanks for your business.'
                className={styles.formTextarea}
                // Caluculate subtotal
              ></textarea>
              <button className={styles.iconButton}>
                <Edit2 size={14} />
              </button>
            </div>
            <div className={styles.noteHint}>Will be displayed on the invoice</div>
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className={styles.termsSection}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Terms & Conditions</label>
            <div className={styles.textareaWithIcon}>
              <textarea
                placeholder='Enter the terms and conditions of your business to be displayed in your transaction'
                className={styles.formTextarea}
                // Caluculate subtotal
              ></textarea>
              <button className={styles.iconButton}>
                <Edit2 size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Attachments */}
        <div className={styles.attachmentsSection}>
          <div className={styles.attachmentHeader}>
            Attach File(s) to Invoice
          </div>
          <div className={styles.uploadArea}>
            <button className={styles.uploadButton}>
              <Upload size={14} /> Upload File
            </button>
            <div className={styles.uploadHint}>
              You can upload a maximum of 10 files, 10MB each
            </div>
          </div>
        </div>

        {/* Payment Gateway */}
        <div className={styles.paymentSection}>
          <div className={styles.paymentInfo}>
            <span className={styles.paymentQuestion}>Want to get paid faster? 💳</span>
            <div className={styles.paymentHint}>
              Configure payment gateways and receive payments online. Set up Payment Gateway
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;