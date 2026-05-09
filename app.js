// Calculates number of whole days between two dates (UTC-safe, avoids DST/time issues)
// Usage:
//   daysBetween('2024-01-01', '2024-01-10') -> 9
//   daysBetween(new Date('2024-01-01'), new Date('2024-01-10')) -> 9

function daysBetween(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  // Normalize to UTC midnight
  const utc1 = Date.UTC(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate());
  const utc2 = Date.UTC(d2.getUTCFullYear(), d2.getUTCMonth(), d2.getUTCDate());

  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((utc2 - utc1) / msPerDay);
}

// Demo (runs in Node). Safe to remove if this is browser code.
if (typeof window === 'undefined') {
  const start = '2024-01-01';
  const end = '2024-01-10';
  console.log(`Days between ${start} and ${end}:`, daysBetween(start, end));
}

