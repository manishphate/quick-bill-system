import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import styles from './Item.module.css';

function Item() {
  const [type, setType] = useState('');
  const [salesChecked, setSalesChecked] = useState(true);
  const [purchaseChecked, setPurchaseChecked] = useState(true);

  return (
    <div className={styles.appContainer}>
      <div className={styles.formContainer}>
        <form className={styles.productForm}>
          {/* Type Selection */}
          <div className={styles.formRow}>
            <span className={styles.formLabel}>Type</span>
            <HelpCircle size={16} className={styles.helpIcon} />
            
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="type"
                  checked={type === 'goods'}
                  onChange={() => setType('goods')}
                  className={styles.radioInput}
                />
                <span>Goods</span>
              </label>
              
              <label className={styles.radioLabel}>
                <input
                  type="radio"
                  name="type"
                  checked={type === 'service'}
                  onChange={() => setType('service')}
                  className={styles.radioInput}
                />
                <span>Service</span>
              </label>
            </div>
          </div>
          
          {/* Name Field */}
          <div className={styles.formGroup}>
            <label htmlFor="name" className={`${styles.formLabel} ${styles.formLabelRequired}`}>
              Name*
            </label>
            <input
              type="text"
              id="name"
              className={styles.formInput}
              required
            />
          </div>
          
          {/* Unit Field */}
          <div className={styles.formRow}>
            <span className={styles.formLabel}>Unit</span>
            <HelpCircle size={16} className={styles.helpIcon} />
            
            <div className={styles.selectWrapper}>
              <select className={styles.formSelect}>
                <option>Select or type to add</option>
              </select>
              <ChevronDown size={16} className={styles.selectIcon} />
            </div>
          </div>
          
          {/* Two Column Layout for Sales and Purchase */}
          <div className={styles.formColumns}>
            {/* Sales Information */}
            <div className={styles.formColumn}>
              <div className={styles.sectionHeader}>
                <input
                  type="checkbox"
                  id="salesInfo"
                  checked={salesChecked}
                  onChange={() => setSalesChecked(!salesChecked)}
                  className={styles.checkboxInput}
                />
                <label htmlFor="salesInfo" className={styles.sectionTitle}>
                  Sales Information
                </label>
              </div>
              
              <div className={`${styles.sectionContent} ${!salesChecked ? styles.disabledSection : ''}`}>
                <div className={styles.formGroup}>
                  <label htmlFor="sellingPrice" className={`${styles.formLabel} ${styles.formLabelRequired}`}>
                    Selling Price*
                  </label>
                  <div className={styles.currencyInput}>
                    <div className={styles.currencyPrefix}>
                      INR
                    </div>
                    <input
                      type="text"
                      id="sellingPrice"
                      className={`${styles.formInput} ${styles.formInputCurrency}`}
                      required
                      disabled={!salesChecked}
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="salesAccount" className={`${styles.formLabel} ${styles.formLabelRequired}`}>
                    Account*
                  </label>
                  <div className={styles.selectWrapper}>
                    <select 
                      id="salesAccount"
                      className={styles.formSelect}
                      disabled={!salesChecked}
                    >
                      <option>Sales</option>
                    </select>
                    <ChevronDown size={16} className={styles.selectIcon} />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="salesDescription" className={styles.formLabel}>
                    Description
                  </label>
                  <textarea
                    id="salesDescription"
                    rows={3}
                    className={styles.formTextarea}
                    disabled={!salesChecked}
                  ></textarea>
                </div>
              </div>
            </div>
            
            {/* Purchase Information */}
            <div className={styles.formColumn}>
              <div className={styles.sectionHeader}>
                <input
                  type="checkbox"
                  id="purchaseInfo"
                  checked={purchaseChecked}
                  onChange={() => setPurchaseChecked(!purchaseChecked)}
                  className={styles.checkboxInput}
                />
                <label htmlFor="purchaseInfo" className={styles.sectionTitle}>
                  Purchase Information
                </label>
              </div>
              
              <div className={`${styles.sectionContent} ${!purchaseChecked ? styles.disabledSection : ''}`}>
                <div className={styles.formGroup}>
                  <label htmlFor="costPrice" className={`${styles.formLabel} ${styles.formLabelRequired}`}>
                    Cost Price*
                  </label>
                  <div className={styles.currencyInput}>
                    <div className={styles.currencyPrefix}>
                      INR
                    </div>
                    <input
                      type="text"
                      id="costPrice"
                      className={`${styles.formInput} ${styles.formInputCurrency}`}
                      required
                      disabled={!purchaseChecked}
                    />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="costAccount" className={`${styles.formLabel} ${styles.formLabelRequired}`}>
                    Account*
                  </label>
                  <div className={styles.selectWrapper}>
                    <select 
                      id="costAccount"
                      className={styles.formSelect}
                      disabled={!purchaseChecked}
                    >
                      <option>Cost of Goods Sold</option>
                    </select>
                    <ChevronDown size={16} className={styles.selectIcon} />
                  </div>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="purchaseDescription" className={styles.formLabel}>
                    Description
                  </label>
                  <textarea
                    id="purchaseDescription"
                    rows={3}
                    className={styles.formTextarea}
                    disabled={!purchaseChecked}
                  ></textarea>
                </div>
                
                <div className={styles.formGroup}>
                  <label htmlFor="preferredVendor" className={styles.formLabel}>
                    Preferred Vendor
                  </label>
                  <div className={styles.selectWrapper}>
                    <select 
                      id="preferredVendor"
                      className={styles.formSelect}
                      disabled={!purchaseChecked}
                    >
                      <option></option>
                    </select>
                    <ChevronDown size={16} className={styles.selectIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Submit Button */}
          <div className={styles.formActions}>
            <button
              type="submit"
              className={styles.saveButton}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Item;