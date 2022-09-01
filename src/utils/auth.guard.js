import store from '@/store'

export default async (to, from, next) => {
  const requiredAuth = to.matched.some((record) => record.meta.requiredAuth)

  if (requiredAuth) {
    store.dispatch("User/validateAccess", { next, to });
  }
  next();
}
