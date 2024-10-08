'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Avatar.module.scss';

export type AvatarProps = {
  src?: string | null;
  alt?: string;
  bnSize?: 'small' | 'medium' | 'large';
  children?: React.ReactNode;
};

export const defaultAvatar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={styles.defaultAvatar}
  >
    <circle cx="12" cy="12" r="10" fill="#e2e8f0" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 12a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm0 2c-4.418 0-8 1.791-8 4v2h16v-2c0-2.209-3.582-4-8-4z"
      fill="#2d3748"
    />
  </svg>
);

const Avatar = ({ src, alt, bnSize = 'medium', children }: AvatarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container} ref={dropdownRef} onClick={handleToggle}>
      {src ? (
        <img
          className={`${styles.avatar} ${styles[bnSize]}`}
          src={src}
          alt={alt || 'Avatar'}
        />
      ) : (
        <div className={`${styles.avatar} ${styles[bnSize]}`}>
          {defaultAvatar}
        </div>
      )}
      {isOpen && <div className={styles.dropdown}>{children}</div>}
    </div>
  );
};

export default Avatar;