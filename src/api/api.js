import mock from "./mock.json";
const { courses, questions } = mock;

function filterByKeyword(items, keyword) {
  const lowered = keyword.toLowerCase();
  return items.filter(({ title }) => title.toLowerCase().includes(lowered));
}

export function getCourses(keyword) {
  if (!keyword) return courses;
  return filterByKeyword(courses, keyword);
}

export function getCourseBySlug(courseSlug) {
  return courses.find((course) => course.slug === courseSlug);
}
