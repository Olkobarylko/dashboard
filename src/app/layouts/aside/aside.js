'use client'

import styles from "./aside.module.scss";
import Image from "next/image";
import SalesIcon from "../../../../public/sales-icon";
import AdsRoiClients from "../../../../public/ads-roi-clients-icon";
import AdsRoi from "../../../../public/ads-roi-icon";
import CustomerData from "../../../../public/customer-data-icon";
import Employee from "../../../../public/employee-icon";
import Profitability from "../../../../public/profitability-icon";
import SettersClosers from "../../../../public/setters-closers-icon";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Aside() {
  const pathname = usePathname()

  return (
    <aside className={styles.aside}>
      <h2 className={styles.aside__title}>Menu</h2>
      <ul className={styles.aside__navigation}>
      <li className={`${styles.aside__item} ${pathname === '/sales' ? styles.active : ''}`}>
          <Link href="/sales">
            <div className={styles['aside__item-icon']}>
              <SalesIcon />
            </div>
            <p className={styles['aside__item-text']}> 
              Sales
            </p>
          </Link>
        </li>
        <li className={`${styles.aside__item} ${pathname === '/ads-roi' ? styles.active : ''}`}>
          <Link href="/ads-roi">
            <div className={styles['aside__item-icon']}>
              <AdsRoi />
            </div>
            <p className={styles['aside__item-text']}> 
              Ads ROI
            </p>
          </Link>
        </li>
        <li className={`${styles.aside__item} ${pathname === '/ads-roi-clients' ? styles.active : ''}`}>
          <Link href="/ads-roi-clients">
            <div className={styles['aside__item-icon']}>
              <AdsRoiClients />
            </div>
            <p className={styles['aside__item-text']}> 
              Ads ROI for clients
            </p>
          </Link>
        </li>
        <li className={`${styles.aside__item} ${pathname === '/customer-data' ? styles.active : ''}`}>
          <Link href="/customer-data">
            <div className={styles['aside__item-icon']}>
              <CustomerData />
            </div>
            <p className={styles['aside__item-text']}> 
              Customer Data
            </p>
          </Link>
        </li>
        <li className={`${styles.aside__item} ${pathname === '/profitability' ? styles.active : ''}`}>
          <Link href="/profitability">
            <div className={styles['aside__item-icon']}>
              <Profitability />
            </div>
            <p className={styles['aside__item-text']}> 
              Profitability
            </p>
          </Link>
        </li>
        <li className={`${styles.aside__item} ${pathname === '/employee' ? styles.active : ''}`}>
          <Link href="/employee">
            <div className={styles['aside__item-icon']}>
              <Employee />
            </div>
            <p className={styles['aside__item-text']}> 
              Employee
            </p>
          </Link>
        </li>
        <li className={`${styles.aside__item} ${pathname === '/setters-closers' ? styles.active : ''}`}>
          <Link href="/setters-closers">
            <div className={styles['aside__item-icon']}>
              <SettersClosers />
            </div>
            <p className={styles['aside__item-text']}> 
              Setters & Closers
            </p>
          </Link>
        </li>
      </ul>
      <div className={styles.aside__user}>
        <div className={styles['aside__user-image']}>
          <Image src="/user-icon.png" width="40" height="40" />
        </div>
        <div className={styles['aside__user-info']}>
          <p className={styles['aside__user-name']}>James Anderson</p>
          <p className={styles['aside__user-profile']}>View profile
            <Image src="/btn-arrow.svg" width="20" height="20" />
          </p>
        </div>
      </div>
    </aside>
  );
}
