"use client";

import { useState } from "react";
import styles from "./customers.module.scss";
import Image from "next/image";

export default function Customers() {
  const [isCardsView, setIsCardsView] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const toggleView = () => {
    setIsCardsView(!isCardsView);
  };

  const openModal = (customer) => {
    setSelectedCustomer(customer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCustomer(null);
  };

  return (
    <div className={styles["customers"]}>
      <div className={styles["customers__heading"]}>
        <h2 className={styles["customers__title"]}>
            Customer Data <span>(70)</span>
        </h2>
        <div className={styles["customers__actions"]}>
          <div className={styles["customers__select"]}>
            <p><span>Sort By:</span> Most Productive</p>
            <Image src="/select-icon.svg" width="20" height="20" />
          </div>
          <div className={styles["customers__filter"]}>
            <Image src="/filter-icon.svg" width="20" height="20" />
            Filter
          </div>
          <div className={styles["customers__search"]}>
            <input type="text" />
            <Image src="/search-icon.svg" width="20" height="20" />
          </div>
          <div className={styles["customers__export"]}>
            <Image src="/export-icon.svg" width="20" height="20" />
            Export
          </div>
          <div className={styles["customers__layout"]} onClick={toggleView}>
            {isCardsView ? "List" : "Cards"}
          </div>
        </div>
      </div>
      
      <div className={styles["customers__labels"]} style={{ display: isCardsView ? "none" : "flex" }}>
        <label className={styles["customers__labels-id"]}>ID</label>
        <label className={styles["customers__labels-employee-name"]}>
          Name
        </label>
        <label className={styles["customers__labels-target"]}>
            MTD submitted target premium
        </label>
        <label className={styles["customers__labels-rate"]}>
            Avg coversion rate
          <Image src="/sort-icon.svg" width="14" height="24" />
        </label>
        <label className={styles["customers__labels-policies"]}>
            submitted policies
          <Image src="/sort-icon.svg" width="14" height="24" />
        </label>
        <label className={styles["customers__labels-satisfaction"]}>
          Satisfaction
          <Image src="/sort-icon.svg" width="14" height="24" />
        </label>
      </div>

        <ul className={styles["customers__list"]} style={{ display: isCardsView ? "none" : "block" }}>
            <li className={styles["customers__item"]} onClick={() => openModal()}>
                <div className={styles["customers__item-id"]}>
                    01
                </div>
                <div className={styles["customers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-target"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-rate"]}>
                    550
                </div>
                <div className={styles["customers__item-policies"]}>
                    100%
                </div>
                <div className={styles["customers__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>
            <li className={styles["customers__item"]} onClick={() => openModal()}>
                <div className={styles["customers__item-id"]}>
                    02
                </div>
                <div className={styles["customers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-target"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-rate"]}>
                    550
                </div>
                <div className={styles["customers__item-policies"]}>
                    100%
                </div>
                <div className={styles["customers__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>
            <li className={styles["customers__item"]} onClick={() => openModal()}>
                <div className={styles["customers__item-id"]}>
                    03
                </div>
                <div className={styles["customers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-target"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-rate"]}>
                    550
                </div>
                <div className={styles["customers__item-policies"]}>
                    100%
                </div>
                <div className={styles["customers__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>
            <li className={styles["customers__item"]} onClick={() => openModal()}>
                <div className={styles["customers__item-id"]}>
                    04
                </div>
                <div className={styles["customers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-target"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-rate"]}>
                    550
                </div>
                <div className={styles["customers__item-policies"]}>
                    100%
                </div>
                <div className={styles["customers__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>
            <li className={styles["customers__item"]} onClick={() => openModal()}>
                <div className={styles["customers__item-id"]}>
                    05
                </div>
                <div className={styles["customers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-target"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-rate"]}>
                    550
                </div>
                <div className={styles["customers__item-policies"]}>
                    100%
                </div>
                <div className={styles["customers__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>
            <li className={styles["customers__item"]} onClick={() => openModal()}>
                <div className={styles["customers__item-id"]}>
                    06
                </div>
                <div className={styles["customers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-target"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-rate"]}>
                    550
                </div>
                <div className={styles["customers__item-policies"]}>
                    100%
                </div>
                <div className={styles["customers__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>
            <li className={styles["customers__item"]} onClick={() => openModal()}>
                <div className={styles["customers__item-id"]}>
                    07
                </div>
                <div className={styles["customers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-target"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-rate"]}>
                    550
                </div>
                <div className={styles["customers__item-policies"]}>
                    100%
                </div>
                <div className={styles["customers__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>
            <li className={styles["customers__item"]} onClick={() => openModal()}>
                <div className={styles["customers__item-id"]}>
                    08
                </div>
                <div className={styles["customers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-target"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-rate"]}>
                    550
                </div>
                <div className={styles["customers__item-policies"]}>
                    100%
                </div>
                <div className={styles["customers__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>
            <li className={styles["customers__item"]} onClick={() => openModal()}>
                <div className={styles["customers__item-id"]}>
                    09
                </div>
                <div className={styles["customers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-target"]}>
                    Mike Miller
                </div>
                <div className={styles["customers__item-rate"]}>
                    550
                </div>
                <div className={styles["customers__item-policies"]}>
                    100%
                </div>
                <div className={styles["customers__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>
        </ul>
        <ul className={styles["customers__cards"]} style={{ display: isCardsView ? "grid" : "none" }}>
            <li className={styles["customers__cards-item"]} onClick={() => openModal()}>
                <div className={styles["customers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <p className={styles["customers__cards-name"]}>Emily Davis</p>
                <div className={styles["customers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["customers__cards-info"]}>
                        <p><span>AAC Plan</span>FM | $3,000.00</p>
                        <p><span>Start Date</span>2024-08-13</p>
                        <p><span>MTD Commision</span>0</p>
                        <p><span>Referals</span>0</p>
                    </div>
            </li>
            <li className={styles["customers__cards-item"]} onClick={() => openModal()}>
                <div className={styles["customers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <p className={styles["customers__cards-name"]}>Emily Davis</p>
                <div className={styles["customers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["customers__cards-info"]}>
                        <p><span>AAC Plan</span>FM | $3,000.00</p>
                        <p><span>Start Date</span>2024-08-13</p>
                        <p><span>MTD Commision</span>0</p>
                        <p><span>Referals</span>0</p>
                    </div>
            </li>
            <li className={styles["customers__cards-item"]} onClick={() => openModal()}>
                <div className={styles["customers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <p className={styles["customers__cards-name"]}>Emily Davis</p>
                <div className={styles["customers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["customers__cards-info"]}>
                        <p><span>AAC Plan</span>FM | $3,000.00</p>
                        <p><span>Start Date</span>2024-08-13</p>
                        <p><span>MTD Commision</span>0</p>
                        <p><span>Referals</span>0</p>
                    </div>
            </li>
            <li className={styles["customers__cards-item"]} onClick={() => openModal()}>
                <div className={styles["customers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <p className={styles["customers__cards-name"]}>Emily Davis</p>
                <div className={styles["customers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["customers__cards-info"]}>
                        <p><span>AAC Plan</span>FM | $3,000.00</p>
                        <p><span>Start Date</span>2024-08-13</p>
                        <p><span>MTD Commision</span>0</p>
                        <p><span>Referals</span>0</p>
                    </div>
            </li>
            <li className={styles["customers__cards-item"]} onClick={() => openModal()}>
                <div className={styles["customers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <p className={styles["customers__cards-name"]}>Emily Davis</p>
                <div className={styles["customers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["customers__cards-info"]}>
                        <p><span>AAC Plan</span>FM | $3,000.00</p>
                        <p><span>Start Date</span>2024-08-13</p>
                        <p><span>MTD Commision</span>0</p>
                        <p><span>Referals</span>0</p>
                    </div>
            </li>
            <li className={styles["customers__cards-item"]} onClick={() => openModal()}>
                <div className={styles["customers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <p className={styles["customers__cards-name"]}>Emily Davis</p>
                <div className={styles["customers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["customers__cards-info"]}>
                        <p><span>AAC Plan</span>FM | $3,000.00</p>
                        <p><span>Start Date</span>2024-08-13</p>
                        <p><span>MTD Commision</span>0</p>
                        <p><span>Referals</span>0</p>
                    </div>
            </li>
            <li className={styles["customers__cards-item"]} onClick={() => openModal()}>
                <div className={styles["customers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <p className={styles["customers__cards-name"]}>Emily Davis</p>
                <div className={styles["customers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["customers__cards-info"]}>
                        <p><span>AAC Plan</span>FM | $3,000.00</p>
                        <p><span>Start Date</span>2024-08-13</p>
                        <p><span>MTD Commision</span>0</p>
                        <p><span>Referals</span>0</p>
                    </div>
            </li>
            <li className={styles["customers__cards-item"]} onClick={() => openModal()}>
                <div className={styles["customers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <p className={styles["customers__cards-name"]}>Emily Davis</p>
                <div className={styles["customers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["customers__cards-info"]}>
                        <p><span>AAC Plan</span>FM | $3,000.00</p>
                        <p><span>Start Date</span>2024-08-13</p>
                        <p><span>MTD Commision</span>0</p>
                        <p><span>Referals</span>0</p>
                    </div>
            </li>
            <li className={styles["customers__cards-item"]} onClick={() => openModal()}>
                <div className={styles["customers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <p className={styles["customers__cards-name"]}>Emily Davis</p>
                <div className={styles["customers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["customers__cards-info"]}>
                        <p><span>AAC Plan</span>FM | $3,000.00</p>
                        <p><span>Start Date</span>2024-08-13</p>
                        <p><span>MTD Commision</span>0</p>
                        <p><span>Referals</span>0</p>
                    </div>
            </li>
        </ul>
        
      {isModalOpen && (
        <div className={styles["customers__modal"]}>
          <div className={styles["customers__modal-heading"]}>
            <div>
              <p className={styles["customers__modal-title"]}>Purchase history</p>
              <p className={styles["customers__modal-name"]}>Customer: {selectedCustomer}</p>
            </div>
            <Image
              src="/modal-cross-icon.svg"
              width="24"
              height="24"
              onClick={closeModal}
              style={{ cursor: "pointer" }}
            />
          </div>
            <ul className={styles["customers__modal-list"]}>
                <li className={styles["customers__modal-item"]}>
                    <Image src="/product-image-1.png" width="80" height="80" />
                    <div>
                        <p className={styles["customers__modal-item-name"]}>Product Name </p>
                        <p className={styles["customers__modal-item-id"]}>#1B3R4A5T </p>
                    </div>
                    <p className={styles["customers__modal-item-data"]}>18/02/2024</p>
                    <p className={styles["customers__modal-item-price"]}>$1 258.00</p>
                </li>
                <li className={styles["customers__modal-item"]}>
                    <Image src="/product-image-2.png" width="80" height="80" />
                    <div>
                        <p className={styles["customers__modal-item-name"]}>Product Name </p>
                        <p className={styles["customers__modal-item-id"]}>#1B3R4A5T </p>
                    </div>
                    <p className={styles["customers__modal-item-data"]}>18/02/2024</p>
                    <p className={styles["customers__modal-item-price"]}>$1 258.00</p>
                </li>
                <li className={styles["customers__modal-item"]}>
                    <Image src="/product-image-3.png" width="80" height="80" />
                    <div>
                        <p className={styles["customers__modal-item-name"]}>Product Name </p>
                        <p className={styles["customers__modal-item-id"]}>#1B3R4A5T </p>
                    </div>
                    <p className={styles["customers__modal-item-data"]}>18/02/2024</p>
                    <p className={styles["customers__modal-item-price"]}>$1 258.00</p>
                </li>
                <li className={styles["customers__modal-item"]}>
                    <Image src="/product-image-4.png" width="80" height="80" />
                    <div>
                        <p className={styles["customers__modal-item-name"]}>Product Name </p>
                        <p className={styles["customers__modal-item-id"]}>#1B3R4A5T </p>
                    </div>
                    <p className={styles["customers__modal-item-data"]}>18/02/2024</p>
                    <p className={styles["customers__modal-item-price"]}>$1 258.00</p>
                </li>
                <li className={styles["customers__modal-item"]}>
                    <Image src="/product-image-5.png" width="80" height="80" />
                    <div>
                        <p className={styles["customers__modal-item-name"]}>Product Name </p>
                        <p className={styles["customers__modal-item-id"]}>#1B3R4A5T </p>
                    </div>
                    <p className={styles["customers__modal-item-data"]}>18/02/2024</p>
                    <p className={styles["customers__modal-item-price"]}>$1 258.00</p>
                </li>
                <li className={styles["customers__modal-item"]}>
                    <Image src="/product-image-6.png" width="80" height="80" />
                    <div>
                        <p className={styles["customers__modal-item-name"]}>Product Name </p>
                        <p className={styles["customers__modal-item-id"]}>#1B3R4A5T </p>
                    </div>
                    <p className={styles["customers__modal-item-data"]}>18/02/2024</p>
                    <p className={styles["customers__modal-item-price"]}>$1 258.00</p>
                </li>
                <li className={styles["customers__modal-item"]}>
                    <Image src="/product-image-7.png" width="80" height="80" />
                    <div>
                        <p className={styles["customers__modal-item-name"]}>Product Name </p>
                        <p className={styles["customers__modal-item-id"]}>#1B3R4A5T </p>
                    </div>
                    <p className={styles["customers__modal-item-data"]}>18/02/2024</p>
                    <p className={styles["customers__modal-item-price"]}>$1 258.00</p>
                </li>
            </ul>
        </div>
      )}
    </div>
  );
}