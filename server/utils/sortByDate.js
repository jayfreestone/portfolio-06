function sortByDate(posts) {
  return posts.sort(
    (a, b) => new Date(b.meta.date) - new Date(a.meta.date)
  );
}

module.exports = sortByDate;
