const calculateAge = (date) => {
  const today = new Date();
  const checkIn = new Date(date);
  const difference = Math.abs(today - checkIn);
  const years = Math.ceil(difference / (1000 * 60 * 60 * 24 * 365));
  const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
  const hours = Math.ceil(difference / (1000 * 60 * 60));
  const minutes = Math.ceil(difference / (1000 * 60));

  if (years > 1) {
    return `${years} years`;
  } else if (days > 1) {
    return `${days} days`;
  } else if (hours > 1) {
    return `${hours} hours`;
  } else {
    return `${minutes} minutes`;
  }
};

export default calculateAge;
