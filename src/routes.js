const routes = {
  lesson11Table: '/lesson-11-table',
}

for (let i = 0; i < 30; i += 1) {
  routes[`lesson${i}`] = `/lesson-${i}`
}

export default routes
