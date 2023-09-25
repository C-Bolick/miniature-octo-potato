module.exports = {
  format_time: (date) => {
    return date.toString();
  },
  format_date: (date) => {
    return date.toLocaleDateString('en-US');
  }
};