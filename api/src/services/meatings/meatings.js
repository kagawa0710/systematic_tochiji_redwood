import { db } from 'src/lib/db'

export const meatings = () => {
  return db.meating.findMany()
}

export const meating = ({ id }) => {
  return db.meating.findUnique({
    where: { id },
  })
}

export const createMeating = ({ input }) => {
  return db.meating.create({
    data: input,
  })
}

export const updateMeating = ({ id, input }) => {
  return db.meating.update({
    data: input,
    where: { id },
  })
}

export const deleteMeating = ({ id }) => {
  return db.meating.delete({
    where: { id },
  })
}

export const Meating = {
  comment: (_obj, { root }) => {
    return db.meating.findUnique({ where: { id: root?.id } }).comment()
  },
}
