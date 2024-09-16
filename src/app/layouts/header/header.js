'use client'

import styles from "./header.module.scss";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';

export default function Header() {
  const pathname = usePathname();

  const getTitle = () => {
    switch(pathname) {
      case '/sales':
        return 'Sales Dashboard';
      case '/ads-roi':
        return 'Ads ROI';
      case '/ads-roi-clients':
        return 'Ads ROI for Clients';
      case '/customer-data':
        return 'Customer Data';
      case '/profitability':
        return 'Profitability';
      case '/employee':
        return 'Employee';
      case '/setters-closers':
        return 'Setters & Closers';
      default:
        return 'Dashboard';
    }
  };

  return (
    <header className={styles.header}>
      <div className="site-container">
        <div className={styles.header__wrapper}>
          <div className={styles.header__logo}>
            <Image src="logo.svg" width="140" height="36" alt="Logo" />
            <Image src="close-aside-icon.svg" width="24" height="24" alt="Close" />
          </div>
          <div className={styles.header__content}>
            <h1 className={styles.header__title}>{getTitle()}</h1>
            <div className={styles.header__date}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                  <p className={styles["header__date-label"]}>Start Date</p>
                <DatePicker />
                </div>
                <div>
                  <p className={styles["header__date-label"]}>End Date</p>
                <DatePicker />
                </div>
              </LocalizationProvider>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
