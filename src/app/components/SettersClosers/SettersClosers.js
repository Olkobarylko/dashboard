"use client"

import { useState } from "react";
import styles from "./setters-closers.module.scss";
import Image from "next/image";

export default function SettersClosers() {
  const [isCardsView, setIsCardsView] = useState(true);

  const toggleView = () => {
    setIsCardsView(!isCardsView);
  };

  return (
    <div className={styles["setters-closers"]}>
      <div className={styles["setters-closers__heading"]}>
        <h2 className={styles["setters-closers__title"]}>
            Setters & Closers <span>(20)</span>
        </h2>
        <div className={styles["setters-closers__actions"]}>
          <div className={styles["setters-closers__select"]}>
            <p><span>Sort By:</span> Most Productive</p>
            <Image src="/select-icon.svg" width="20" height="20" />
          </div>
          <div className={styles["setters-closers__filter"]}>
            <Image src="/filter-icon.svg" width="20" height="20" />
            Filter
          </div>
          <div className={styles["setters-closers__search"]}>
            <input type="text" />
            <Image src="/search-icon.svg" width="20" height="20" />
          </div>
          <div className={styles["setters-closers__export"]}>
            <Image src="/export-icon.svg" width="20" height="20" />
            Export
          </div>
          <div className={styles["setters-closers__layout"]} onClick={toggleView}>
            {isCardsView ? "Cards" : "List"}
          </div>
        </div>
      </div>
      
      <div className={styles["setters-closers__labels"]} style={{ display: isCardsView ? "flex" : "none" }}>
        <label className={styles["setters-closers__labels-id"]}>ID</label>
        <label className={styles["setters-closers__labels-setters-closers-name"]}>
        Employee name
          <Image src="/sort-icon.svg" width="14" height="24" />
        </label>
        <label className={styles["setters-closers__labels-role"]}>
          Role
          <Image src="/sort-icon.svg" width="14" height="24" />
        </label>
        <label className={styles["setters-closers__labels-team"]}>
            Team
          <Image src="/sort-icon.svg" width="14" height="24" />
        </label>
        <label className={styles["setters-closers__labels-sales-closed"]}>
        Sales Closed
          <Image src="/sort-icon.svg" width="14" height="24" />
        </label>
        <label className={styles["setters-closers__labels-rate"]}>
            Rate
          <Image src="/sort-icon.svg" width="14" height="24" />
        </label>
      </div>
        <ul className={styles["setters-closers__list"]} style={{ display: isCardsView ? "block" : "none" }}>
            <li className={styles["setters-closers__item"]}>
                <div className={styles["setters-closers__item-id"]}>
                    01
                </div>
                <div className={styles["setters-closers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["setters-closers__item-role"]}>
                    Manager
                </div>
                <div className={styles["setters-closers__item-team"]}>
                    Managers Team
                </div>
                <div className={styles["setters-closers__item-sales-closed"]}>
                    10100
                </div>
                <div className={styles["setters-closers__item-rate"]}>
                    30$/h
                </div>
            </li>
            <li className={styles["setters-closers__item"]}>
                <div className={styles["setters-closers__item-id"]}>
                    02
                </div>
                <div className={styles["setters-closers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["setters-closers__item-role"]}>
                    Manager
                </div>
                <div className={styles["setters-closers__item-team"]}>
                    Managers Team
                </div>
                <div className={styles["setters-closers__item-sales-closed"]}>
                    10100
                </div>
                <div className={styles["setters-closers__item-rate"]}>
                    30$/h
                </div>
            </li>
            <li className={styles["setters-closers__item"]}>
                <div className={styles["setters-closers__item-id"]}>
                    03
                </div>
                <div className={styles["setters-closers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["setters-closers__item-role"]}>
                    Manager
                </div>
                <div className={styles["setters-closers__item-team"]}>
                    Managers Team
                </div>
                <div className={styles["setters-closers__item-sales-closed"]}>
                    10100
                </div>
                <div className={styles["setters-closers__item-rate"]}>
                    30$/h
                </div>
            </li>
            <li className={styles["setters-closers__item"]}>
                <div className={styles["setters-closers__item-id"]}>
                    04
                </div>
                <div className={styles["setters-closers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["setters-closers__item-role"]}>
                    Manager
                </div>
                <div className={styles["setters-closers__item-team"]}>
                    Managers Team
                </div>
                <div className={styles["setters-closers__item-sales-closed"]}>
                    10100
                </div>
                <div className={styles["setters-closers__item-rate"]}>
                    30$/h
                </div>
            </li>
            <li className={styles["setters-closers__item"]}>
                <div className={styles["setters-closers__item-id"]}>
                    05
                </div>
                <div className={styles["setters-closers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["setters-closers__item-role"]}>
                    Manager
                </div>
                <div className={styles["setters-closers__item-team"]}>
                    Managers Team
                </div>
                <div className={styles["setters-closers__item-sales-closed"]}>
                    10100
                </div>
                <div className={styles["setters-closers__item-rate"]}>
                    30$/h
                </div>
            </li>
            <li className={styles["setters-closers__item"]}>
                <div className={styles["setters-closers__item-id"]}>
                    06
                </div>
                <div className={styles["setters-closers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["setters-closers__item-role"]}>
                    Manager
                </div>
                <div className={styles["setters-closers__item-team"]}>
                    Managers Team
                </div>
                <div className={styles["setters-closers__item-sales-closed"]}>
                    10100
                </div>
                <div className={styles["setters-closers__item-rate"]}>
                    30$/h
                </div>
            </li>
            <li className={styles["setters-closers__item"]}>
                <div className={styles["setters-closers__item-id"]}>
                    07
                </div>
                <div className={styles["setters-closers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["setters-closers__item-role"]}>
                    Manager
                </div>
                <div className={styles["setters-closers__item-team"]}>
                    Managers Team
                </div>
                <div className={styles["setters-closers__item-sales-closed"]}>
                    10100
                </div>
                <div className={styles["setters-closers__item-rate"]}>
                    30$/h
                </div>
            </li>

            <li className={styles["setters-closers__item"]}>
                <div className={styles["setters-closers__item-id"]}>
                    08
                </div>
                <div className={styles["setters-closers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["setters-closers__item-role"]}>
                    Manager
                </div>
                <div className={styles["setters-closers__item-team"]}>
                    Managers Team
                </div>
                <div className={styles["setters-closers__item-sales-closed"]}>
                    10100
                </div>
                <div className={styles["setters-closers__item-rate"]}>
                    30$/h
                </div>
            </li>
            <li className={styles["setters-closers__item"]}>
                <div className={styles["setters-closers__item-id"]}>
                    09
                </div>
                <div className={styles["setters-closers__item-name"]}>
                    Mike Miller
                </div>
                <div className={styles["setters-closers__item-role"]}>
                    Manager
                </div>
                <div className={styles["setters-closers__item-team"]}>
                    Managers Team
                </div>
                <div className={styles["setters-closers__item-sales-closed"]}>
                    10100
                </div>
                <div className={styles["setters-closers__item-rate"]}>
                    30$/h
                </div>
            </li>
        </ul>
        <ul className={styles["setters-closers__cards"]} style={{ display: isCardsView ? "none" : "grid" }}>
            <li className={styles["setters-closers__cards-item"]}>
                <div className={styles["setters-closers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["setters-closers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["setters-closers__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Team:</span>Managers Team</p>
                        <p><span>Sales Closed:</span>10100</p>
                        <p><span>Rate:</span>3 rate</p>
                    </div>
                <div  className={styles["setters-closers__cards-info-bottom"]}>
                <div className={styles["setters-closers__cards-id"]}>ID:1</div>
                </div>
            </li>
            <li className={styles["setters-closers__cards-item"]}>
                <div className={styles["setters-closers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["setters-closers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["setters-closers__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Team:</span>Managers Team</p>
                        <p><span>Sales Closed:</span>10100</p>
                        <p><span>Rate:</span>3 rate</p>
                    </div>
                <div  className={styles["setters-closers__cards-info-bottom"]}>
                <div className={styles["setters-closers__cards-id"]}>ID:1</div>
                </div>
            </li>
            <li className={styles["setters-closers__cards-item"]}>
                <div className={styles["setters-closers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["setters-closers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["setters-closers__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Team:</span>Managers Team</p>
                        <p><span>Sales Closed:</span>10100</p>
                        <p><span>Rate:</span>3 rate</p>
                    </div>
                <div  className={styles["setters-closers__cards-info-bottom"]}>
                <div className={styles["setters-closers__cards-id"]}>ID:1</div>
                </div>
            </li>
            <li className={styles["setters-closers__cards-item"]}>
                <div className={styles["setters-closers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["setters-closers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["setters-closers__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Team:</span>Managers Team</p>
                        <p><span>Sales Closed:</span>10100</p>
                        <p><span>Rate:</span>3 rate</p>
                    </div>
                <div  className={styles["setters-closers__cards-info-bottom"]}>
                <div className={styles["setters-closers__cards-id"]}>ID:1</div>
                </div>
            </li>
            <li className={styles["setters-closers__cards-item"]}>
                <div className={styles["setters-closers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["setters-closers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["setters-closers__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Team:</span>Managers Team</p>
                        <p><span>Sales Closed:</span>10100</p>
                        <p><span>Rate:</span>3 rate</p>
                    </div>
                <div  className={styles["setters-closers__cards-info-bottom"]}>
                <div className={styles["setters-closers__cards-id"]}>ID:1</div>
                </div>
            </li>
            <li className={styles["setters-closers__cards-item"]}>
                <div className={styles["setters-closers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["setters-closers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["setters-closers__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Team:</span>Managers Team</p>
                        <p><span>Sales Closed:</span>10100</p>
                        <p><span>Rate:</span>3 rate</p>
                    </div>
                <div  className={styles["setters-closers__cards-info-bottom"]}>
                <div className={styles["setters-closers__cards-id"]}>ID:1</div>
                </div>
            </li>
            <li className={styles["setters-closers__cards-item"]}>
                <div className={styles["setters-closers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["setters-closers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["setters-closers__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Team:</span>Managers Team</p>
                        <p><span>Sales Closed:</span>10100</p>
                        <p><span>Rate:</span>3 rate</p>
                    </div>
                <div  className={styles["setters-closers__cards-info-bottom"]}>
                <div className={styles["setters-closers__cards-id"]}>ID:1</div>
                </div>
            </li>
            <li className={styles["setters-closers__cards-item"]}>
                <div className={styles["setters-closers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["setters-closers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["setters-closers__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Team:</span>Managers Team</p>
                        <p><span>Sales Closed:</span>10100</p>
                        <p><span>Rate:</span>3 rate</p>
                    </div>
                <div  className={styles["setters-closers__cards-info-bottom"]}>
                <div className={styles["setters-closers__cards-id"]}>ID:1</div>
                </div>
            </li>
            <li className={styles["setters-closers__cards-item"]}>
                <div className={styles["setters-closers__cards-heading"]}>
                    <Image src="/avatar.jpg" height="80" width="80" />
                </div>
                <div className={styles["setters-closers__item-contacts"]}>
                    <div>
                        <Image src="/email-icon.svg" width="14" height="24" />
                        Email
                    </div>
                    <div>
                        <Image src="/phone-icon.svg" width="14" height="24" />
                        Number
                    </div>
                </div>
                <div className={styles["setters-closers__cards-info"]}>
                        <p><span>Employee name:</span>Emily Davis</p>
                        <p><span>Role:</span>Setter</p>
                        <p><span>Team:</span>Managers Team</p>
                        <p><span>Sales Closed:</span>10100</p>
                        <p><span>Rate:</span>3 rate</p>
                    </div>
                <div  className={styles["setters-closers__cards-info-bottom"]}>
                <div className={styles["setters-closers__cards-id"]}>ID:1</div>
                </div>
            </li>
        </ul>
    </div>
  );
}
