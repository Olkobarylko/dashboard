"use client"

import { useState } from "react";
import styles from "./employee.module.scss";
import Image from "next/image";

export default function Employee() {
  const [isCardsView, setIsCardsView] = useState(true);

  const toggleView = () => {
    setIsCardsView(!isCardsView);
  };

  return (
    <div className={styles["employee"]}>
      <div className={styles["employee__heading"]}>
        <h2 className={styles["employee__title"]}>
          All Employee <span>(70)</span>
        </h2>
        <div className={styles["employee__actions"]}>
          <div className={styles["employee__select"]}>
            <p><span>Sort By:</span> Most Productive</p>
            <Image src="/select-icon.svg" width="20" height="20" />
          </div>
          <div className={styles["employee__filter"]}>
            <Image src="/filter-icon.svg" width="20" height="20" />
            Filter
          </div>
          <div className={styles["employee__search"]}>
            <input type="text" />
            <Image src="/search-icon.svg" width="20" height="20" />
          </div>
          <div className={styles["employee__export"]}>
            <Image src="/export-icon.svg" width="20" height="20" />
            Export
          </div>
          <div className={styles["employee__layout"]} onClick={toggleView}>
            {isCardsView ? "Cards" : "List"}
          </div>
        </div>
      </div>
      
      <div className={styles["employee__labels"]} style={{ display: isCardsView ? "flex" : "none" }}>
        <label className={styles["employee__labels-id"]}>ID</label>
        <label className={styles["employee__labels-employee-name"]}>
          Employee name
          <Image src="/sort-icon.svg" width="14" height="24" />
        </label>
        <label className={styles["employee__labels-role"]}>
          Role
          <Image src="/sort-icon.svg" width="14" height="24" />
        </label>
        <label className={styles["employee__labels-monthly-pay"]}>
            Monthly Pay
          <Image src="/sort-icon.svg" width="14" height="24" />
        </label>
        <label className={styles["employee__labels-attendance"]}>
            Status
          <Image src="/sort-icon.svg" width="14" height="24" />
        </label>
        <label className={styles["employee__labels-days"]}>
            Days with Team
          <Image src="/sort-icon.svg" width="14" height="24" />
        </label>
        <label className={styles["employee__labels-birthday"]}>
            Birthday
          <Image src="/sort-icon.svg" width="14" height="24" />
        </label>
        <label className={styles["employee__labels-satisfaction"]}>
            Satisfaction
          <Image src="/sort-icon.svg" width="14" height="24" />
        </label>
      </div>
        <ul className={styles["employee__list"]} style={{ display: isCardsView ? "block" : "none" }}>
            <li className={styles["employee__item"]}>
                <div className={styles["employee__item-id"]}>
                    01
                </div>
                <div className={styles["employee__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-role"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-monthly-pay"]}>
                    5500$
                </div>
                <div className={styles["employee__item-attendance"]}>
                    100%
                </div>
                <div className={styles["employee__item-days"]}>
                0 days leave
                </div>
                <div className={styles["employee__item-birthday"]}>
                21.07.1994
                </div>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>
            <li className={styles["employee__item"]}>
                <div className={styles["employee__item-id"]}>
                    02
                </div>
                <div className={styles["employee__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-role"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-monthly-pay"]}>
                    3500$
                </div>
                <div className={styles["employee__item-attendance"]}>
                    100%
                </div>
                <div className={styles["employee__item-days"]}>
                0 days leave
                </div>
                <div className={styles["employee__item-birthday"]}>
                21.07.1994
                </div>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>
            <li className={styles["employee__item"]}>
                <div className={styles["employee__item-id"]}>
                    03
                </div>
                <div className={styles["employee__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-role"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-monthly-pay"]}>
                2200$
                </div>
                <div className={styles["employee__item-attendance"]}>
                    100%
                </div>
                <div className={styles["employee__item-days"]}>
                0 days leave
                </div>
                <div className={styles["employee__item-birthday"]}>
                21.07.1994
                </div>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>
            <li className={styles["employee__item"]}>
                <div className={styles["employee__item-id"]}>
                    04
                </div>
                <div className={styles["employee__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-role"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-monthly-pay"]}>
                2200$
                </div>
                <div className={styles["employee__item-attendance"]}>
                    100%
                </div>
                <div className={styles["employee__item-days"]}>
                0 days leave
                </div>
                <div className={styles["employee__item-birthday"]}>
                21.07.1994
                </div>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>
            <li className={styles["employee__item"]}>
                <div className={styles["employee__item-id"]}>
                    05
                </div>
                <div className={styles["employee__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-role"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-monthly-pay"]}>
                    2200$
                </div>
                <div className={styles["employee__item-attendance"]}>
                    100%
                </div>
                <div className={styles["employee__item-days"]}>
                0 days leave
                </div>
                <div className={styles["employee__item-birthday"]}>
                21.07.1994
                </div>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>
            <li className={styles["employee__item"]}>
                <div className={styles["employee__item-id"]}>
                    06
                </div>
                <div className={styles["employee__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-role"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-monthly-pay"]}>
                2700$
                </div>
                <div className={styles["employee__item-attendance"]}>
                    100%
                </div>
                <div className={styles["employee__item-days"]}>
                0 days leave
                </div>
                <div className={styles["employee__item-birthday"]}>
                21.07.1994
                </div>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>
            <li className={styles["employee__item"]}>
                <div className={styles["employee__item-id"]}>
                    07
                </div>
                <div className={styles["employee__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-role"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-monthly-pay"]}>
                10010$
                </div>
                <div className={styles["employee__item-attendance"]}>
                    100%
                </div>
                <div className={styles["employee__item-days"]}>
                0 days leave
                </div>
                <div className={styles["employee__item-birthday"]}>
                21.07.1994
                </div>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>
            <li className={styles["employee__item"]}>
                <div className={styles["employee__item-id"]}>
                    08
                </div>
                <div className={styles["employee__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-role"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-monthly-pay"]}>
                7200$
                </div>
                <div className={styles["employee__item-attendance"]}>
                    100%
                </div>
                <div className={styles["employee__item-days"]}>
                0 days leave
                </div>
                <div className={styles["employee__item-birthday"]}>
                21.07.1994
                </div>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>

            </li>
            <li className={styles["employee__item"]}>
                <div className={styles["employee__item-id"]}>
                    09
                </div>
                <div className={styles["employee__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-role"]}>
                    Mike Miller
                </div>
                <div className={styles["employee__item-monthly-pay"]}>
                6600$
                </div>
                <div className={styles["employee__item-attendance"]}>
                    100%
                </div>
                <div className={styles["employee__item-days"]}>
                0 days leave
                </div>
                <div className={styles["employee__item-birthday"]}>
                21.07.1994
                </div>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
            </li>  
        </ul>
        <ul className={styles["employee__cards"]} style={{ display: isCardsView ? "none" : "grid" }}>
            <li className={styles["employee__cards-item"]}>
                <div className={styles["employee__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["employee__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["employee__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Monthly Pay:</span>5350$</p>
                        <p><span>Status:</span>Active</p>
                        <p><span>Days with Team:</span>3 days</p>
                        <p><span>Birthday:</span>21.03.1994</p>
                    </div>
                <div  className={styles["employee__cards-info-bottom"]}>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
                <div className={styles["employee__cards-id"]}>ID:1</div>
                </div>
            </li>
            <li className={styles["employee__cards-item"]}>
                <div className={styles["employee__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["employee__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["employee__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Monthly Pay:</span>5350$</p>
                        <p><span>Status:</span>Active</p>
                        <p><span>Days with Team:</span>3 days</p>
                        <p><span>Birthday:</span>21.03.1994</p>
                    </div>
                <div  className={styles["employee__cards-info-bottom"]}>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
                <div className={styles["employee__cards-id"]}>ID:1</div>
                </div>
            </li>
            <li className={styles["employee__cards-item"]}>
                <div className={styles["employee__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["employee__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["employee__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Monthly Pay:</span>5350$</p>
                        <p><span>Status:</span>Active</p>
                        <p><span>Days with Team:</span>3 days</p>
                        <p><span>Birthday:</span>21.03.1994</p>
                    </div>
                <div  className={styles["employee__cards-info-bottom"]}>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
                <div className={styles["employee__cards-id"]}>ID:1</div>
                </div>
            </li>
            <li className={styles["employee__cards-item"]}>
                <div className={styles["employee__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["employee__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["employee__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Monthly Pay:</span>5350$</p>
                        <p><span>Status:</span>Active</p>
                        <p><span>Days with Team:</span>3 days</p>
                        <p><span>Birthday:</span>21.03.1994</p>
                    </div>
                <div  className={styles["employee__cards-info-bottom"]}>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
                <div className={styles["employee__cards-id"]}>ID:1</div>
                </div>
            </li>
            <li className={styles["employee__cards-item"]}>
                <div className={styles["employee__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["employee__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["employee__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Monthly Pay:</span>5350$</p>
                        <p><span>Status:</span>Active</p>
                        <p><span>Days with Team:</span>3 days</p>
                        <p><span>Birthday:</span>21.03.1994</p>
                    </div>
                <div  className={styles["employee__cards-info-bottom"]}>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
                <div className={styles["employee__cards-id"]}>ID:1</div>
                </div>
            </li>
            <li className={styles["employee__cards-item"]}>
                <div className={styles["employee__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["employee__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["employee__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Monthly Pay:</span>5350$</p>
                        <p><span>Status:</span>Active</p>
                        <p><span>Days with Team:</span>3 days</p>
                        <p><span>Birthday:</span>21.03.1994</p>
                    </div>
                <div  className={styles["employee__cards-info-bottom"]}>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
                <div className={styles["employee__cards-id"]}>ID:1</div>
                </div>
            </li>
            <li className={styles["employee__cards-item"]}>
                <div className={styles["employee__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["employee__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["employee__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Monthly Pay:</span>5350$</p>
                        <p><span>Status:</span>Active</p>
                        <p><span>Days with Team:</span>3 days</p>
                        <p><span>Birthday:</span>21.03.1994</p>
                    </div>
                <div  className={styles["employee__cards-info-bottom"]}>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
                <div className={styles["employee__cards-id"]}>ID:1</div>
                </div>
            </li>
            <li className={styles["employee__cards-item"]}>
                <div className={styles["employee__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["employee__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["employee__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Monthly Pay:</span>5350$</p>
                        <p><span>Status:</span>Active</p>
                        <p><span>Days with Team:</span>3 days</p>
                        <p><span>Birthday:</span>21.03.1994</p>
                    </div>
                <div  className={styles["employee__cards-info-bottom"]}>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
                <div className={styles["employee__cards-id"]}>ID:1</div>
                </div>
            </li>
            <li className={styles["employee__cards-item"]}>
                <div className={styles["employee__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["employee__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["employee__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Monthly Pay:</span>5350$</p>
                        <p><span>Status:</span>Active</p>
                        <p><span>Days with Team:</span>3 days</p>
                        <p><span>Birthday:</span>21.03.1994</p>
                    </div>
                <div  className={styles["employee__cards-info-bottom"]}>
                <div className={styles["employee__item-satisfaction"]}>
                <Image src="/star-icon.svg" width="20" height="20" />
                5.0
                </div>
                <div className={styles["employee__cards-id"]}>ID:1</div>
                </div>
            </li>
        </ul>
    </div>
  );
}
