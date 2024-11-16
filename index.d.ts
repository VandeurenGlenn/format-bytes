
/**
 * @param bytes - The number of bytes to format
 * @param decimals - The number of decimal places to include in the formatted string
 * @returns A string representing the number of bytes in a human-readable format
 * @example
 * formatBytes(1024); // '1 KB'
 * formatBytes(1024, 2); // '1.00 KB'
 * formatBytes(1024 * 1024); // '1 MB'
 * formatBytes(1024 * 1024 * 1024); // '1 GB'
 * formatBytes(1024 * 1024 * 1024 * 1024); // '1 TB'
 * formatBytes(1024 * 1024 * 1024 * 1024 * 1024); // '1 PB'
 * formatBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024); // '1 EB'
 * formatBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024); // '1 ZB'
 * formatBytes(1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024); // '1 YB'
 */
export declare const formatBytes: (bytes: number, decimals?: number) => string;
