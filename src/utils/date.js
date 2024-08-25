export const formatDateIndo = (dateString) => {
  const date = new Date(dateString);
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Intl.DateTimeFormat("id-ID", options).format(date);
};

export const formatDateInput = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-CA"); // Format as YYYY-MM-DD for input[type="date"]
};
